"use client";
import {
  Alert,
  AlertIcon,
  Box,
  Button,
  Container,
  Flex,
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
} from "@chakra-ui/react";
import React from "react";

const Step1 = () => {
  const steps = [
    { title: "Asan İmza" },
    { title: "Müştəri məlumatları" },
    { title: "Şəxsi məlumatlar" },
  ];

  const { activeStep } = useSteps({
    index: 0,
    count: steps.length,
  });

  return (
    <Stack height="100vh" bg="#F3F3F3">
      <HStack bg="#fff" px="32px" height="64px" alignItems="center">
        <Image alt="logo" src="/images/logo-business.svg" height="33px" />
        <Flex w="100%" alignItems="center" justifyContent="flex-end">
          <Flex
            w="120px"
            h="40px"
            borderRadius="50px"
            marginRight="24px"
            flexDirection="row"
            justifyContent="flex-end"
            alignItems="center"
            position="relative"
            backgroundColor="white"
          >
            <Flex
              gap="8px"
              alignItems="center"
              bg="#F7FAFC"
              p="8px"
              borderRadius="100px"
            >
              <Text fontSize="14px" fontWeight="500" color="gray.700">
                AZ
              </Text>
              <Image
                w="24px"
                h="24px"
                borderRadius="50%"
                src="/images/flags/az.png"
                alt=""
              />
            </Flex>
          </Flex>
          <Button
            bg="#2058BB"
            textColor="#fff"
            borderRadius="6px"
            _hover={{ bg: "blue" }}
          >
            Çıxış
          </Button>
        </Flex>
      </HStack>
      {/* {asanImza ? ( */}
      {/* <Alert px="32px" mb="16px" borderRadius="6px"  status='info' */}
      {/* // status={asanImza?.companyResident ? 'info' : 'error'} */}
      {/* > */}
      {/* <AlertIcon /> */}
      {/* {asanImza?.companyResident ? t('company.is_resident') : t('company.isNot_resident')} */}
      {/* </Alert> */}
      {/* ) : ( */}
      {/* <Flex px="30px" alignItems="center" bg="white" width="100%" height="48px" mb="16px">
        <Skeleton width="100%" height="20px" bg="white" />
      </Flex> */}
      {/* )} */}
      <VStack px="6%" gap="16px" mt="24px">
        <Stepper bg="#fff" px="32px" py="12px" width="100%" index={activeStep}>
          {steps.map((step, index) => (
            <Step key={index}>
              <StepIndicator bg="#E2F0FD" color="#2389EF">
                <StepStatus
                  complete={<StepIcon />}
                  incomplete={<StepNumber />}
                  active={<StepNumber />}
                />
              </StepIndicator>

              <Box flexShrink="0">
                <StepTitle>{step.title}</StepTitle>
              </Box>

              <StepSeparator />
            </Step>
          ))}
        </Stepper>
        <Alert>
          <AlertIcon />
          Növbəti mərhələyə keçmək üçün seçdiyiniz müştərinin məlumatlarını
          təsdiqləyin
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
            <Image alt="check" src="/images/check.svg" />
            <Text
              ml="16px"
              fontSize={{ base: "md", md: "lg" }}
              fontWeight="600"
            >
              {/* {t('asanImza')} */}Asan Imza
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
                {/* {asanImza?.chief?.split(' ')[0].charAt(0).toUpperCase()} */}
                {/* {asanImza?.chief?.split(' ')[1].charAt(0).toUpperCase()} */}
              </Flex>
              <Box>
                <Text
                  fontSize={{ base: "xs", md: "md" }}
                  wordBreak="break-word"
                  fontWeight="600"
                  mb="8px"
                >
                  Ad Soyad Ata adı
                  {/* {asanImza?.payerTypeResponse === 'PERSONAL' ? asanImza?.chief : asanImza?.fullName} */}
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
                    <Image alt="check" src="/images/phone.svg" />
                    <Text
                      fontSize={{ base: "xs", md: "14px" }}
                      fontWeight="500"
                    >
                      {/* +{asanImza?.phoneNumber} */}
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
                    <Image alt="check" src="/images/document.svg" />
                    <Text color="#4A5568" fontSize={{ base: "xs", md: "14px" }}>
                      {/* {asanImza?.voen} */}
                      12345678902
                    </Text>
                  </HStack>
                </HStack>
              </Box>
            </Flex>
            <Image src="/images/asan.svg" alt="Asan Logo" />
          </Flex>
          <Flex mt="24px" justifyContent="flex-end">
            <Button
              data-test-id="nextStep"
              // isDisabled={!asanImza?.companyResident}
              // onClick={() => setStep(1)}
              colorScheme="brand"
            >
              {/* {t('common:actions.submit')} */}
            </Button>
          </Flex>
        </Flex>
      </VStack>
    </Stack>
  );
};

export default Step1;
