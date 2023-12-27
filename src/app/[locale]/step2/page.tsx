"use client";
import { CustomStepper } from "@/components/ReusableComponents/CustomStepper";
import { CustomerInput } from "@/components/ReusableComponents/CustomerInput";
import { CustomerSelect } from "@/components/ReusableComponents/CustomerSelect";
import { StepHeader } from "@/components/ReusableComponents/StepHeader";
import {
  Box,
  Button,
  Divider,
  Flex,
  Stack,
  Text,
  VStack,
  useSteps,
} from "@chakra-ui/react";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { FormProvider, useForm, useFormContext } from "react-hook-form";

const Step2 = () => {
  type FormValues = {
    branchCode?: string;
    activitySector?: string;
    annualTurnover?: string;
    loanCommitmentAmount?: string;
    activityAddress?: string;
    countEmployees?: string;
    // Add other form fields as needed
  };
  
  const t = useTranslations();
  const router = useRouter();
  const methods = useForm({
    mode: "all",
    defaultValues: {
      // branchCode: "", 
      // activitySector: "",
      // annualTurnover: "",
      // loanCommitmentAmount: "",
      // activityAddress: "",
      // countEmployees: "",
    },
  });


  const { activeStep } = useSteps({
    index: 1,
    count: 3,
  });

  const { formState,watch  } = methods; 
  const { errors, isValid } = formState;
  const watchedFields = watch() as FormValues;
  useEffect(() => {
    // Function to check if all fields are filled
    const areAllFieldsFilled = () => {
      const fields = [
        'branchCode', 'activitySector', 'annualTurnover',
        'loanCommitmentAmount', 'activityAddress', 'countEmployees'
      ];
      return fields.every(field => {
        const fieldValue = watchedFields[field as keyof FormValues];
        return fieldValue && fieldValue.length > 0;
      });
    };
    

    if (areAllFieldsFilled()) {
      // Saving to localStorage
      localStorage.setItem('formData', JSON.stringify(watchedFields));
    }
  }, [watchedFields]);
  return (
    <FormProvider {...methods}>
    <Stack width="100%" minH="100vh" bg="#F3F3F3">
      <StepHeader />
      <VStack px="6%" gap="16px" mt="24px">
        <CustomStepper number={activeStep} />
        
          <Flex
            as="form"
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
                2
              </Text>
              <Box ml="24px">
                <Text fontSize={{ base: "md", md: "xl" }} fontWeight="600">
                  {t("onboarding.company.user_info")}
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
              <CustomerSelect
                labelName={t("onboarding.company.branch_choose")}
                messageText="branchCode"
                methods={methods}
              />
              <Divider my="24px" />
              <Flex width="100%" gap="24px">
                <VStack width="48%" gap="24px">
                  <CustomerSelect
                    labelName={t("onboarding.company.activity_sector")}
                    messageText="activitySector"
                    methods={methods}
                  />
                  <CustomerSelect
                    labelName={t("onboarding.company.turnover")}
                    messageText="annualTurnover"
                    methods={methods}
                  />
                  <CustomerSelect
                    labelName={t("onboarding.company.loan_commitment")}
                    messageText="loanCommitmentAmount"
                    methods={methods}
                  />
                </VStack>
                <VStack width="48%" gap="24px">
                  <CustomerInput
                    labelName={t("onboarding.company.activity_address")}
                    methods={methods}
                  />
                  <CustomerSelect
                    labelName={t("onboarding.company.employee_qty")}
                    messageText="countEmployees"
                    methods={methods}
                  />
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
                  router.back();
                }}
              >
                {t("common.actions.back")}
              </Button>
              <Button
                isDisabled={!isValid}
                onClick={() => {
                  router.push("step3");
                }}
                bg="#2058BB"
                color="#fff"
              >
                {t("common.actions.submit")}
              </Button>
            </Flex>
          </Flex>
        
      </VStack>
    </Stack>
    </FormProvider>
  );
};

export default Step2;
