"use client";
import { useState } from "react";
import { Button, Select, Stack, Alert, AlertIcon } from "@chakra-ui/react";
import pageCss from "./pageCss.module.css";
import data from "./mockData.json";

function page() {
  const [selectedOrganization, setSelectedOrganization] = useState("");
  const [alert, setAlert] = useState(false);

  const handleContinue = () => {
    const organizationExists = data.organizations.some(
      (org) => org.tin === selectedOrganization
    );

    if (organizationExists) {
      setAlert(true);
    }
    return;
  };

  return (
    <div className={pageCss.containerWrapper}>
      {alert && (
        <Stack spacing={3}>
          <Alert maxWidth='504px' status="error">
            <AlertIcon />
            Qeyd olunan VÖEN artıq İnternet Bankçılıqda mövcuddur. Yeni ASAN
            nömrənin əlavə olunması üçün qeydiyyatdan keçdiyiniz ASAN nömrə ilə
            daxil olmağınız xahiş olunur.
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
              <option>Teşkilatın adı</option>
              {data.organizations.map((org, index) => (
                <option key={index}>{org.tin}</option>
              ))}
            </Select>
          </Stack>
        </div>

        <div className={pageCss.buttonContainer}>
          <Button backgroundColor="
#2058BB" opacity='.3' onClick={handleContinue}>
            Davam et
          </Button>

          <Button
            size="md"
            height="42px"
            width="500px"
            border="2px"
            borderColor="transparent"
            backgroundColor='
            #EDF2F7'
            color='
            #1A202C'
            opacity='.8'
            _hover={{opacity:1}}
          >
            İmtina et
          </Button>
        </div>
      </div>
    </div>
  );
}

export default page;