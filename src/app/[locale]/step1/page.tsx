"use client";
import { StepHeader } from "@/components/ReusableComponents/StepHeader";
import { Alert, AlertIcon, Box, Button, Flex, HStack, Image, Stack, Step, StepIcon, StepIndicator, StepNumber, StepSeparator, StepStatus, StepTitle, Stepper, Text, VStack, useSteps,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import React from "react";
import { CustomStepper } from "@/components/ReusableComponents/CustomStepper";

const Step1 = () => {
  const  t = useTranslations();
  const { activeStep } = useSteps({
    index: 0,
    count: 3,
  });
  
const router = useRouter()
  return (
    <Stack width='100%' minH="100vh" bg="#F3F3F3">
      <StepHeader />
      <VStack px="6%" gap="16px" mt="24px">
      <CustomStepper number={activeStep} />
        <Alert>
          <AlertIcon />
          {t('onboarding.company.is_resident')}
        </Alert>
        <Flex
          direction="column"
          bg="#ffffff"
          p="24px 32px"
          mb="24px"
          borderRadius="6px"
          width="100%"
        >
          <Flex
            alignItems="center"
            bg="blackAlpha.50"
            p="16px 24px"
            borderRadius="6px"
            mb="24px"
          >
            <Image alt="check" src="../images/check.svg" />
            <Text
              ml="16px"
              fontSize={{ base: "md", md: "lg" }}
              fontWeight="600"
            >
              {t('onboarding.asanImza')}
            </Text>
          </Flex>
          <Flex
            border="1px solid #cbd5e0"
            borderRadius="6px"
            justifyContent="space-between"
            alignItems="center"
            padding="16px 24px"
            flexWrap="wrap"
            gap="8px"
          >
            <Flex alignItems="center">
              <Flex
                background="#2389EF"
                borderRadius="50%"
                width="64px"
                height="64px"
                color="#fff"
                fontSize="19px"
                padding="12px"
                fontWeight="500"
                mr="24px"
                alignItems="center"
                justifyContent="center"
              >
                CN
              </Flex>
              <Box>
                <Text
                  fontSize={{ base: "xs", md: "md" }}
                  wordBreak="break-word"
                  fontWeight="600"
                  mb="8px"
                >
                  Ad Soyad Ata adı
                </Text>
                <HStack>
                  <HStack
                    background="blackAlpha.50"
                    p="6px 12px"
                    borderRadius="62px"
                    justifyContent="center"
                    alignItems="center"
                    mr="8px"
                    border="1px solid #E2E8F0"
                  >
                    <Image alt="check" src="../images/phone.svg" />
                    <Text
                      fontSize={{ base: "xs", md: "14px" }}
                      fontWeight="500"
                    >
                      +994 51 999 99 99
                    </Text>
                  </HStack>
                  <HStack
                    background="blackAlpha.50"
                    p="6px 12px"
                    borderRadius="62px"
                    justifyContent="center"
                    alignItems="center"
                    border="1px solid #E2E8F0"
                  >
                    <Image alt="check" src="../images/document.svg" />
                    <Text color="#4A5568" fontSize={{ base: "xs", md: "14px" }}>
                      12345678902
                    </Text>
                  </HStack>
                </HStack>
              </Box>
            </Flex>
            <Image src="../images/asan.svg" alt="Asan Logo" />
          </Flex>
          <Flex mt="24px" justifyContent="flex-end">
            <Button
              data-test-id="nextStep"
              colorScheme="brand"
              onClick={()=>{
                router.push('step2')
              }}
            >
              {t('common.actions.submit')}
            </Button>
          </Flex>
        </Flex>
      </VStack>
    </Stack>
  );
};

export default Step1;
