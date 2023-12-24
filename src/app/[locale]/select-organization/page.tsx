'use client'
import { useState, useEffect } from "react";
import { Button, Select, Stack, Alert, AlertIcon } from "@chakra-ui/react";
import pageCss from "./pageCss.module.css";
import { useRouter } from "next/navigation";
interface Organization {
  organizationName: string;
  organizationCode: string;
}
function Page() {
  const [selectedOrganization, setSelectedOrganization] = useState("");
  const [organizations, setOrganizations] = useState<Organization[]>([]);
  const [alert, setAlert] = useState(false);

  useEffect(() => {
    fetch("https://mock-api-login-abb.vercel.app/onboarding-ms/v1/certificates")
      .then(response => response.json())
      .then(data => {
        setOrganizations(data);
      })
      .catch(error => {
        console.error("Error fetching data: ", error);
        setAlert(true); // Show alert on error
      });
  }, []);
  const router = useRouter()
const rejectHandler = ()=>{
router.push('/')
}
  return (
    <div className={pageCss.containerWrapper}>
      {alert && (
        <Stack spacing={3}>
          <Alert maxWidth="504px" status="error">
            <AlertIcon />
            There was a problem fetching organization data.
          </Alert>
        </Stack>
      )}
      <div className={pageCss.container}>
        <h1 className={pageCss.title}>Təşkilatı seçin</h1>
        <p className={pageCss.subTitle}>
          Qeydiyyatdan keçirmək istədiyiniz şirkəti seçməniz xahiş olunur
        </p>

        <div className={pageCss.selectContainer}>
          <Stack spacing={3}>
            <Select
              size="md"
              value={selectedOrganization}
              onChange={(e) => setSelectedOrganization(e.target.value)}
            >
              {organizations.map(org => (
                <option key={org.organizationCode} value={org.organizationCode}>
                  {org.organizationName} ({org.organizationCode})
                </option>
              ))}
            </Select>
          </Stack>
        </div>

        <div className={pageCss.buttonContainer}>
          <Button
            backgroundColor="#2058BB"
            opacity={selectedOrganization ? "1" : ".3"}
            disabled={!selectedOrganization}
          >
            Davam et
          </Button>

          <Button
            size="md"
            height="42px"
            width="500px"
            border="2px"
            borderColor="transparent"
            backgroundColor="#EDF2F7"
            color="#1A202C"
            opacity=".8"
            _hover={{ opacity: 1 }}
            onClick={rejectHandler}
          >
            İmtina et
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Page;
