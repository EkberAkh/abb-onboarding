"use client";
import {
  Box,
  Container,
  Heading,
  Progress,
  Text,
  Button,
  Image,
  CloseButton,
  Stack,
  VStack,
} from "@chakra-ui/react";
import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import useSWR from "swr";

const AsanImzaPinTwo = () => {
  const t = useTranslations();
  const [progressValue, setProgressValue] = useState(0);
  const router = useRouter();
  const [verificationCode, setVerificationCode] = useState("");

  const fetcher = (url: string): Promise<any> =>
    fetch(url).then((res) => res.json());

  const { data, error } = useSWR(
    "https://mock-api-login-abb.vercel.app/onboarding-ms/v1/auth/status/2a5a628a-d72b-4ba4-8157-8dc11c130093",
    fetcher,

    { header: { "Content-Type": "applicaton/json" }, refreshInterval: 3000 }
  );

  const pathName = usePathname();
  let pathNameFirst = pathName.split("/")[1];

  const getVerificationCode = async () => {
    const response = await fetch(
      "https://mock-api-login-abb.vercel.app/user/v1/users/verification"
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  };
  useEffect(() => {
    getVerificationCode().then((data) => {
      setVerificationCode(data.code);
    });
    if (data) {
      router.push(`/${pathNameFirst}/step1`);
    } else {
      setProgressValue((oldValue) => Math.min(oldValue + 10, 100));
    }
    const timer = setInterval(() => {
      setProgressValue((prevValue) => Math.min(prevValue + 100 / 1000, 100));
    }, 10);

    return () => {
      clearInterval(timer);
    };
  }, [data]);

  const backToLogin = () => {
    router.push(`/${pathNameFirst}/login`);
  };
  const rejectHandler = () => {
    router.push(`/${pathNameFirst}`);
  };
  return (
    <Stack position="relative" width="100%">
      <CloseButton
        alignSelf="flex-end"
        onClick={backToLogin}
        position="absolute"
        right="24px"
        top="24px"
        _hover={{ backgroundColor: "gray.200" }}
      />
      <Container
        as="div"
        display="flex"
        justifyContent="center"
        flexDirection="column"
        height="100vh"
        gap="16px"
        maxW="500px"
        px="24px"
      >
        <VStack>
          <Image src="../images/logo-customer.svg" alt="logo" />
        </VStack>
        <Heading
          textAlign="center"
          color="#000"
          fontSize="24px"
          fontWeight="600"
          lineHeight="30px"
        >
          {t("onboarding.asanConfirmation")}
        </Heading>
        <Text
          textAlign="center"
          fontSize="16px"
          fontWeight="400"
          lineHeight="24px"
          color="rgba(0, 0, 0, 0.50)"
        >
          {t("onboarding.pin2Check")}
        </Text>
        <Box border="1px solid #E4E4E4" borderRadius="12px">
          <Box as="div" p="24px" textAlign="center">
            <Text
              color="rgba(0, 0, 0, 0.50)"
              fontSize="14px"
              fontWeight="500"
              lineHeight="20px"
              mb="4px"
            >
              {t("onboarding.verificationCode")}
            </Text>
            <Text
              color="#000"
              fontSize="24px"
              fontWeight="600"
              lineHeight="32px"
            >
              {verificationCode}
            </Text>
          </Box>
          <Progress value={progressValue} borderRadius="full" />
        </Box>
        <Button
          colorScheme="white"
          color="black"
          w="100%"
          onClick={rejectHandler}
          _hover={{ backgroundColor: "gray.100" }}
        >
          {t("common.actions.cancel")}
        </Button>
      </Container>
    </Stack>
  );
};

export default AsanImzaPinTwo;
