"use client";

import {
  VStack,
  Image,
  Button,
  Box,
  FormControl,
  Text,
  FormLabel,
  Input,
  Checkbox,
  HStack,
  CloseButton,
} from "@chakra-ui/react";
import Link from "next/link";
import SignForm from "./(signComponents)/signForm";
import SignFooter from "./(signComponents)/signFooter";

export default function Home() {
  return (
    <VStack padding="10px" width="100%" justifyContent="space-between">
       <CloseButton
        alignSelf="flex-end"
        position="absolute"
        right="24px"
        top="24px"
        background="#EDF2F7"
        _hover={{ backgroundColor: "gray.200" }}
      />
      <VStack
        minWidth="465px"
        gap="14px"
        padding="12px"
        alignItems="flex-start"
        justifyContent="center"
      >
        <Box>
          <Image src="./images/abb-business.png" />
        </Box>

        <VStack alignItems="flex-start" gap="8px">
          <Text fontSize="30px" color="gray.800" fontWeight="600">
            Asan Imza
          </Text>
          <Text color="gray.600" fontSize="14px">
            Qeydiyyatdan keçmək üçün Asan İmza ilə daxil olun.
          </Text>
        </VStack>
        <SignForm />
      </VStack>
      <SignFooter />
    </VStack>
  );
}
