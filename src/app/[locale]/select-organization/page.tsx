"use client";
import { useState, useEffect } from "react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Button,
  Select,
  Stack,
  Alert,
  AlertIcon,
  CloseButton,
  HStack,
  VStack,
  Text,
  Image,
  Box,
} from "@chakra-ui/react";
import pageCss from "./pageCss.module.css";
import { usePathname, useRouter } from "next/navigation";
interface Organization {
  organizationName: string;
  organizationCode: string;
}
function Page() {
  const [selectedOrganization, setSelectedOrganization] =
    useState<Organization | null>(null);
  const [organizations, setOrganizations] = useState<Organization[]>([]);
  const [alert, setAlert] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const pathName = usePathname();
  let pathNameFirst = pathName.split("/")[1]
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    fetch("https://mock-api-login-abb.vercel.app/onboarding-ms/v1/certificates")
      .then((response) => response.json())
      .then((data) => {
        setOrganizations(data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setAlert(true); // Show alert on error
      });
  }, []);
  const router = useRouter();
  const rejectHandler = () => {
    router.push(`/${pathNameFirst}`);
  };
  const acceptHandler = () => {
    router.push(`/${pathNameFirst}/application`)
  }
  return (
    <div className={pageCss.containerWrapper}>
      <CloseButton
        position="absolute"
        right={0}
        top={0}
        size="lg"
        m="30px"
        onClick={rejectHandler}
        _hover={{ backgroundColor: "gray.200" }}
      />
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
          Daxil olmaq istədiyiniz şirkəti seçməyiniz xahiş olunur
        </p>

        <div className={pageCss.selectContainer}>
          <Stack spacing={3} position="relative">
            {/*<Select
              size="md"
              value={selectedOrganization}
              onChange={(e) => setSelectedOrganization(e.target.value)} 
            >         
              {organizations.map(org => (
                <option key={org.organizationCode} value={org.organizationCode}>
                  {org.organizationName} ({org.organizationCode})
                </option>
              ))}
              </Select>*/}

            <HStack
              onClick={handleToggle}
              justifyContent="space-between"
              borderColor="gray.300"
              borderWidth="1px"
              padding="15px"
              borderRadius="md"
              fontSize="16px"
              lineHeight="16px"
              position="relative"
              zIndex="2"
            >
              <VStack alignItems="flex-start" color={selectedOrganization ? "black" : "gray.400"}>
                <Text fontWeight={700}>
                  {selectedOrganization
                    ? selectedOrganization.organizationName
                    : "Təşkilatın adı"}
                </Text>
                <Text>
                  {selectedOrganization
                    ? selectedOrganization.organizationCode
                    : "Təşkilatın VÖEN-i"}
                </Text>
              </VStack>
              <ChevronDownIcon />
            </HStack>
            {isOpen && (
              <Box
                position="absolute"
                left="0"
                top="100%"
                zIndex="1"
                width="100%"
                borderWidth="1px"
                borderRadius="md"
                padding="15px"
                marginTop="2"
                marginBottom="2"
                backgroundColor="white"
              >
                {organizations.map((org) => (
                  <VStack
                    key={org.organizationCode}
                    alignItems="flex-start"
                    onClick={() => {
                      setSelectedOrganization(org);
                      setIsOpen(false);
                    }}
                    cursor="pointer"
                  >
                    <Text fontWeight={700}>{org.organizationName}</Text>
                    <Text>{org.organizationCode}</Text>
                  </VStack>
                ))}
              </Box>
            )}
          </Stack>
        </div>

        <div className={pageCss.buttonContainer}>
          <Button
            backgroundColor="#2058BB"
            opacity={selectedOrganization ? "1" : ".3"}
            disabled={!selectedOrganization}
            onClick={acceptHandler}
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
            color="black"
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
