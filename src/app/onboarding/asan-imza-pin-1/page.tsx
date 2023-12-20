"use client";
import {
  Box,
  Container,
  Heading,
  Progress,
  Text,
  Button,
  Image,
  Stack,
  CloseButton,
  VStack,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const AsanImzaPinOne = () => {
  const useCountDown = (mins: number) => {
    const [secs, decrement] = useState(mins * 60);
    const [progress, increment] = useState(0);

    useEffect(() => {
      if (secs > 0) {
        const progressLevel = setInterval(() => {
          increment(progress + 100 / (mins * 60));
          decrement(secs - 1);
        }, 1000);

        return () => clearInterval(progressLevel);
      }
    }, [progress, secs, mins]);
    return [progress];
  };
  const [progress] = useCountDown(1.28);
  // const pin1VerificationCode = localStorage.getItem('verificationCode');
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/");
      // localStorage.removeItem('sessionId');
      // localStorage.removeItem('verificationCode');
    }, 80000);
    return () => clearTimeout(timer);
  }, [router]);

  // const { mutate } = usePin1Check();

  // React.useMemo(() => {
  //   mutate();
  // }, [mutate]);
  const clickHandler = () => {
    router.push("/onboarding");
  };

  return (
    <Stack position="relative">
      <CloseButton
        onClick={clickHandler}
        position="absolute"
        right="24px"
        top="24px"
        background="#EDF2F7"
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
          <Image src="/images/logo-customer.svg" alt="logo" />
        </VStack>
        <Heading
          textAlign="center"
          color="#000"
          fontSize="24px"
          fontWeight="600"
          lineHeight="30px"
        >
          ASAN İmza təsdiqi
        </Heading>
        <Text
          textAlign="center"
          fontSize="16px"
          fontWeight="400"
          lineHeight="24px"
          color="rgba(0, 0, 0, 0.50)"
        >
          Telefonunuza daxil olan kodu aşağıdakı kodu ilə eyni olmasını müqayisə
          edin və ASAN PIN1 ilə təsdiqləyin.
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
              Yoxlama kodu
            </Text>
            <Text
              color="#000"
              fontSize="24px"
              fontWeight="600"
              lineHeight="32px"
            >
              2123
            </Text>
          </Box>
          <Progress
            color="#2058BB"
            size="xs"
            position="absolute"
            left="0"
            right="0"
            bottom="0"
            height="7px"
            value={progress}
          />
        </Box>
        <Button
          colorScheme="white"
          color="black"
          w="100%"
          onClick={clickHandler}
          _hover={{ backgroundColor: "gray.100" }}
        >
          İmtina et
        </Button>
      </Container>
    </Stack>
  );
};

export default AsanImzaPinOne;