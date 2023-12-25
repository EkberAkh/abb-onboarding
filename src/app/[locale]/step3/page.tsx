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
} from "@chakra-ui/react";
import { FormProvider, useForm, useFormContext } from "react-hook-form";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { StepHeader } from "@/components/ReusableComponents/StepHeader";
import { CustomStepper } from "@/components/ReusableComponents/CustomStepper";
import { useTranslations } from "next-intl";
import { CustomerPhone } from "@/components/ReusableComponents/CustomerPhone";

const Step3 = () => {
  const t = useTranslations();
  const [phone, setPhone] = useState("");
  const router = useRouter();
  const methods = useForm({
    mode: "all",
    defaultValues: {
    },
  });

  const { activeStep } = useSteps({
    index: 2,
    count: 3,
  });
  const { formState } = methods; 
  const { errors, isValid } = formState;
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
            >3
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
                  <FormLabel>{t('onboarding.name_surname')}</FormLabel>
                  <Input placeholder="Kamran İmanov İlqar" color="gray.500" />
                </Box>
                <Box width="100%">
                  <FormLabel>{t('onboarding.birthday')}</FormLabel>
                  <Input type="date" placeholder="14.03.1976" />
                </Box>
                <CustomerPhone methods={methods} setPhone={setPhone} />
              </VStack>
              <VStack width="48%" gap="24px">
                <Box width="100%">
                  <FormLabel>{t('onboarding.pin')}</FormLabel>
                  <Input placeholder="51TFE2Q" color="gray.500" />
                </Box>
                <Box width="100%">
                  <FormLabel>{t('onboarding.address')}</FormLabel>
                  <Input placeholder="Azərbaycan, Bakı" color="gray.500" />
                </Box>
                <Box width="100%">
                  <FormLabel>{t('onboarding.email')}</FormLabel>
                  <Input
                    placeholder={t('onboarding.company.company_email_placeholder')}
                    color="gray.500"
                  />
                </Box>
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
              {t('common.actions.back')}
            </Button>
            <Button
              bg="#2058BB"
              color="#fff"
              onClick={() => {
                router.push("asan-imza-pin-3");
              }}
              isDisabled={!isValid}
            >
              {t('common.actions.complete')}
            </Button>
          </Flex>
        </Flex>
      </VStack>
    </Stack>
    </FormProvider>
  );
};

export default Step3;
