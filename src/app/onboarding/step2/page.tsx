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
} from "@chakra-ui/react";
import { useFormContext } from "react-hook-form";
import React from "react";

const Step2 = () => {
  const steps = [
    { title: "Asan İmza" },
    { title: "Müştəri məlumatları" },
    { title: "Şəxsi məlumatlar" },
  ];

  const { activeStep } = useSteps({
    index: 1,
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
              {/* {step} */} 2
            </Text>
            <Box ml="24px">
              <Text fontSize={{ base: "md", md: "xl" }} fontWeight="600">
                {/* {description}   */} Müştəri məlumatları
              </Text>
              <Text fontSize={{ base: "sm", md: "md" }} color="#4A5568">
                {/* {t('add_info')} */} Aşağıdakı məlumatları daxil edin
              </Text>
            </Box>
          </Flex>

          {/* <HeaderStep
        step="2"
        description={asanImza?.payerTypeResponse === 'PERSONAL' ? t('company.user_info') : t('company.customer_info')}
      /> */}
          <Flex
            border="1px solid #CBD5E0"
            borderRadius="6px"
            justifyContent="space-between"
            alignItems="center"
            p={{ base: "12px", md: "24px" }}
            flexWrap="wrap"
            width="100%"
          >
            <FormLabel>Filialı seçin</FormLabel>
            <Select placeholder="Seç" color="gray.500">
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
            {/* <CustomerSelect
          name={t('company.branch_choose')}
          data={formattedValue}
          controllerName="branchCode"
          size="100%"
        /> */}
            <Divider my="24px" />
            <Flex width="100%" gap="24px">
              <VStack width="48%" gap="24px">
                <Box width="100%" >
                <FormLabel>Əsas fəaliyyət sahəsi</FormLabel>
                <Select placeholder="Seç" color="gray.500">
                  <option value="option1">Option 2</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </Select>
                </Box>
                <Box width="100%" >
                <FormLabel>İllik dövriyyə, AZN</FormLabel>
                <Select placeholder="Seç" color="gray.500">
                  <option value="option1">Option 2</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </Select>
                </Box>
                <Box width="100%" >
                <FormLabel>Kredit öhdəlik məbləği, AZN</FormLabel>
                <Select placeholder="Seç" color="gray.500">
                  <option value="option1">Option 2</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </Select>
                </Box>
                
              </VStack>
              <VStack width="48%" gap="24px">
                <Box width="100%">
                  <FormLabel>Fəaliyyət ünvanı</FormLabel>
                  <Input placeholder="Daxil edin" color="gray.500" />
                </Box>
                <Box width="100%">
                  <FormLabel>İşçilərin sayı</FormLabel>
                  <Select placeholder="Seç" color="gray.500">
                    <option value="option1">Option 2</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                  </Select>
                </Box>
              </VStack>
            </Flex>
          </Flex>
          <Flex flexWrap="wrap" justifyContent="flex-end" alignItems='center' mt='24px' gap='16px'>
            <Button
              // mt="32px"

              // onClick={() => setStep(0)} variant="gray"
            >
              Geriyə
              {/* {t('common:actions.back')} */}
            </Button>
            <Button
            bg='#2058BB' color='#fff'
              //  isDisabled={!isValid} mt="32px" onClick={() => setStep(2)}
              // ml="16px"
            >
              Davam et
              {/* {t('common:actions.submit')} */}
            </Button>
          </Flex>
        </Flex>
      </VStack>
    </Stack>
  );
};

export default Step2;
