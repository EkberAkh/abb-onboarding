"use client";
import {
  Alert,
  AlertIcon,
  Box,
  Button,
  Container,
  Divider,
  Flex,
  FormControl,
  HStack,
  Image,
  Skeleton,
  Stack,
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  Text,
  VStack,
  useSteps,
  Select,
  FormLabel,
  Input,
  InputGroup,
  InputLeftAddon,
  FormErrorMessage,
  Spinner,
} from "@chakra-ui/react";
import { Controller, FormProvider, useForm, useFormContext } from "react-hook-form";
import React, { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { StepHeader } from "@/components/ReusableComponents/StepHeader";
import { CustomStepper } from "@/components/ReusableComponents/CustomStepper";
import { useTranslations } from "next-intl";
import { CustomerPhone } from "@/components/ReusableComponents/CustomerPhone";
import { error } from "console";



interface PersonalInfo {
  name: string;
surname:string;
phoneNumber:string;
fin: string;
birthDate:string;
registrationAddress:{
  city:string,
  country:string,
};


}

const Step3 = () => {
  const [isLoading, setIsLoading] = useState(false);


  const step3datas =JSON.parse(localStorage.getItem("formData") || "");

  const t = useTranslations();
  const router = useRouter();
  const pathName = usePathname();
  let pathNameFirst = pathName.split("/")[1];
  const methods = useForm({
    mode: "all",
    defaultValues: {
      email: "",
    },
  });

  const { activeStep } = useSteps({
    index: 2,
    count: 3,
  });
  const { formState } = methods;
  const { errors, isValid } = formState;

  const [personalInfo, setPersonalInfo] = useState<PersonalInfo|null>(null);

  const fetchPersonalInfo = async () => {
    try {
      const asanId = localStorage.getItem("asanId");
      if (!asanId) {
        console.error("No asanId found in localStorage");
        return;
      }

      const response = await fetch(`https://mock-api-login-abb.vercel.app/user/v1/users/personal-info/${asanId}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setPersonalInfo(data);
    } catch (error) {
      console.error("Failed to fetch personal info:", error);
    }
  };

  useEffect(() => {
    fetchPersonalInfo();
  }, []);
  const { register, handleSubmit, watch } = useForm();
  const email = methods.watch("email");
  const clickHandler = async () => {
    try {
      setIsLoading(true)
      const storedData = step3datas;

      const payload = {
        ...storedData, 
        name: personalInfo?.name,
        surname: personalInfo?.surname,
        phoneNumber: personalInfo?.phoneNumber,
        birthDate: personalInfo?.birthDate,
        registrationAddress: personalInfo?.registrationAddress,
        email: email, 
        fin: personalInfo?.fin,
      };

      // Send POST request
      const response = await fetch('https://mock-api-login-abb.vercel.app/user/v1/users/customer-info', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      // const data = await response.json();
      router.push("/az/asan-imza-pin-3");

    } catch (error) {
      console.error("Failed to send data:", error);
    }finally {
      setIsLoading(false);
    }
  };
  return (
    <FormProvider {...methods}>
      <Stack width="100%" minH="100vh" bg="#F3F3F3">
        <StepHeader />
        <VStack px="6%" gap="16px" mt="24px">
          <CustomStepper number={activeStep} />

          <Flex
            width="100%"
            flexWrap="wrap"
            direction="column"
            bg="#FFFFFF"
            borderRadius="6px"
            p="24px 32px"
            mb="24px"
          >
            <Flex
              bg="blackAlpha.50"
              p="16px 24px"
              alignItems="center"
              mb="24px"
              borderRadius="6px"
            >
              <Text
                width="36px"
                height="36px"
                textAlign="center"
                borderRadius="48%"
                p="6px"
                bg="#E2F0FD"
                color="#2389EF"
                border="1px solid #2389EF"
                fontWeight="600"
                fontSize={{ base: "sm", md: "md" }}
              >
                3
              </Text>
              <Box ml="24px">
                <Text fontSize={{ base: "md", md: "xl" }} fontWeight="600">
                  {t("onboarding.personal_info")}
                </Text>
                <Text fontSize={{ base: "sm", md: "md" }} color="#4A5568">
                  {t("onboarding.add_info")}
                </Text>
              </Box>
            </Flex>
            <Flex
              border="1px solid #CBD5E0"
              borderRadius="6px"
              justifyContent="space-between"
              alignItems="center"
              p={{ base: "12px", md: "24px" }}
              flexWrap="wrap"
              width="100%"
            >
              <Flex width="100%" gap="24px">
                <VStack width="48%" gap="24px">
                  <Box width="100%">
                    <FormLabel>{t("onboarding.name_surname")}</FormLabel>
                    <Input
                      placeholder="Kamran İmanov İlqar"
                      color="black"
                      value={`${personalInfo?.name} ${personalInfo?.surname}`}
                    />
                  </Box>
                  <Box width="100%">
                    <FormLabel>{t("onboarding.birthday")}</FormLabel>
                    <Input value={personalInfo?.birthDate} type="text" placeholder="14.03.1976" />
                  </Box>
                  <Box width="100%">
                    <FormLabel>{t("onboarding.phone")}</FormLabel>
                    <Input type="tel" placeholder="+994505055050" value={personalInfo?.phoneNumber} />
                  </Box>
                </VStack>
                <VStack width="48%" gap="24px">
                  <Box width="100%">
                    <FormLabel>{t("onboarding.pin")}</FormLabel>
                    <Input disabled color="black" value={personalInfo?.fin} />
                  </Box>
                  <Box width="100%">
                    <FormLabel>{t("onboarding.address")}</FormLabel>
                    <Input value={`${personalInfo?.registrationAddress.country}, ${personalInfo?.registrationAddress.city}`} placeholder="Azərbaycan, Bakı" color="black" />
                  </Box>
                  <FormControl width="100%" 
                       isInvalid = {!!errors?.email}>
                    <FormLabel>{t("onboarding.email")}</FormLabel>
                    <Controller
                    name ='email'
                    control={methods.control}
                    rules={{
                      required: t("onboarding.errorMessages.email.required"),
                      
                    }}
                    render={({field})=>(
                      <Input
                      {...field}
                       placeholder={t(
                         "onboarding.company.company_email_placeholder"
                       )}
                       color="black"
                       onChange={(e) => {
                        field.onChange(e);
                      }}
                     />
                    )}
                    />
                    <FormErrorMessage>{errors?.email?.message}</FormErrorMessage>
                   
                  </FormControl>
                </VStack>
              </Flex>
            </Flex>
            <Flex
              flexWrap="wrap"
              justifyContent="flex-end"
              alignItems="center"
              mt="24px"
              gap="16px"
            >
              <Button
                bg="gray.100"
                color="#000"
                _hover={{ bg: "gray.200" }}
                onClick={() => {
                  router.push(`/${pathNameFirst}/step2`);
                }}
              >
                {t("common.actions.back")}
              </Button>
              <Button
                bg="#2058BB"
                color="#fff"
                onClick={clickHandler}
                isDisabled={!isValid || isLoading}
              >
                {isLoading ? <Spinner/> : t("common.actions.complete")}
              </Button>
            </Flex>
          </Flex>
        </VStack>
      </Stack>
    </FormProvider>
  );
};

export default Step3;
