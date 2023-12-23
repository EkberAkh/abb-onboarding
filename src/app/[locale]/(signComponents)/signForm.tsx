"use client";
import {
  VStack,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Text,
  useToast,
  InputGroup,
  InputLeftAddon,
  Box,
  Button,
  Checkbox,
  Link,
} from "@chakra-ui/react";
import { Controller, Form, useForm } from "react-hook-form";
import { useCallback, useEffect, useRef, useState } from "react";
import IMask from "imask";

const SignForm = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [isInputValid, setIsInputValid] = useState(false);
  const phoneNumberId = "phone-number-input";

  useEffect(() => {
    const phoneNumberInput = document.getElementById(phoneNumberId);
    if (phoneNumberInput) {
      IMask(phoneNumberInput, {
        mask: "00 000 00 00",
      });
    }
  }, []);

  const {
    control,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm({
    mode: "all",
    defaultValues: {
      phoneNumber: "",
      password: "",
    },
  });

  const handleCheckboxChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setIsChecked(event.target.checked);
    checkFormValidity();
  };

  const handleInputChange = () => {
    checkFormValidity();
  };

  const checkFormValidity = () => {
    const values = getValues();
    const isPhoneValid =
      !!values.phoneNumber && values.phoneNumber.length === 12;
    const isPasswordValid = !!values.password && values.password.length === 6;
    setIsInputValid(isPhoneValid && isPasswordValid);
  };

  const submitFunc = () => {
    console.log(getValues("phoneNumber"));
    console.log(getValues("password"));
  };

  return (
    <VStack gap="24px" w="100%">
      <form style={{ width: "100%" }} onSubmit={handleSubmit(submitFunc)}>
        <FormControl gap="8px" mb="24px" isInvalid={!!errors?.phoneNumber}>
          <FormLabel>ASAN İmza Mobil nömrə</FormLabel>
          <InputGroup w="100%">
            <InputLeftAddon color="gray.700" bg="gray.100">
              +994
            </InputLeftAddon>
            <Controller
              name="phoneNumber"
              control={control}
              rules={{
                required: "Asan ID qeyd olunmayıb",
                validate: (value: string) => {
                  if (value.length !== 12) {
                    return "Asan ID düzgün deyil";
                  }
                  return undefined;
                },
              }}
              render={({ field }) => (
                <Input
                  {...field}
                  id={phoneNumberId}
                  borderLeft="0"
                  borderTopLeftRadius={0}
                  borderBottomLeftRadius={0}
                  type="tel"
                  placeholder="00 000 00 00"
                  borderColor="gray.300"
                  w="100%"
                  maxLength={12}
                  autoComplete="off"
                  onChange={(e) => {
                    field.onChange(e);
                    handleInputChange();
                  }}
                  onPaste={(e) => {
                    e.preventDefault();
                    const pastedData = e.clipboardData.getData('text').replace(/\D/g, ''); // Remove non-digits
                    // Format and set pasted data according to your mask logic
                  }}

                />
              )}
            />
          </InputGroup>
          <FormErrorMessage mt="0.5rem">
            {errors?.phoneNumber?.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl mb="24px" gap="8px">
          <FormLabel>ASAN İmza İstifadəçi ID-si</FormLabel>
          <Controller
            name="password"
            control={control}
            rules={{
              required: "Asan ID qeyd olunmayıb",
              validate: (value: string) => {
                if (value.length !== 6) {
                  return "Asan ID düzgün deyil";
                }
              },
            }}
            render={({ field }) => (
              <Input
                {...field}
                value={field.value}
                borderColor="gray.300"
                _invalid={{ borderColor: "red.500" }}
                placeholder="000000"
                isInvalid={!!errors.password}
                type="number"
                w="100%"
                onChange={(e) => {
                  if (e.target.value.length <= 6) {
                    field.onChange(e);
                    handleInputChange();
                  }
                }}
              />
            )}
          />
          {errors?.password && (
            <Text color="red" fontSize="sm" mt="0.5rem">
              {errors?.password?.message}
            </Text>
          )}
        </FormControl>
        <Checkbox
          mb="20px"
          isChecked={isChecked}
          onChange={handleCheckboxChange}
        >
          {" "}
          Mən{" "}
          <Link href={"az/terms-and-conditions"}>qaydalar və şərtlərlə </Link>
          razıyam
        </Checkbox>
        <Box w="100%">
          <Button
            type="submit"
            w="100%"
            p="8px 16px"
            bg="blue.300"
            color="white"
            isDisabled={!isChecked || !isInputValid}
            fontSize="16px"
          >
            Daxil ol
          </Button>
        </Box>
      </form>
    </VStack>
  );
};

export default SignForm;
