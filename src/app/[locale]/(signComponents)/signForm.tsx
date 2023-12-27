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
  Alert,
  AlertIcon,
  AlertDescription,
  CloseButton,
  Spinner,
} from "@chakra-ui/react";
import { Controller, Form, useForm } from "react-hook-form";
import { useCallback, useEffect, useRef, useState } from "react";
import IMask from "imask";
import { usePathname, useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

const SignForm = () => {
  const t = useTranslations();
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

  const onClose = () => {
    setIsErr(false);
  };
  const [isLoading, setIsLoading] = useState(false);
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
const pathName = usePathname();
let pathNameFirst = pathName.split("/")[1]
  const router = useRouter();
  const [isErr, setIsErr] = useState(false);
  const buttonClick = async () => {
    setIsLoading(true);
    let phoneNumber = getValues("phoneNumber").split(" ").join("");
    let asanId = getValues("password");
    console.log(phoneNumber);

    const requestData = {
      phoneNumber: `+994${phoneNumber}`,
      asanId: asanId,
    };
    try {
      const response = await fetch(
        "https://mock-api-login-abb.vercel.app/onboarding-ms/v1/auth",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestData),
        }
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const responseData = await response.json();
      console.log(responseData);
      const verificationCode = responseData.verificationCode
      const url = `/${pathNameFirst}/asan-imza-pin-1?verificationCode=${encodeURIComponent(verificationCode)}`;
      router.push(url);
    } catch (error) {
      console.error("Error making the request:", error);
      setIsErr(true);
    } finally{
      setIsLoading(false); 
    }
  };


  return (
    <VStack gap="24px" w="100%">
      {isErr && (
        <Alert status="error" borderRadius="5px">
          <AlertIcon />
          <AlertDescription>{t("onboarding.errors.2004")}</AlertDescription>
          <CloseButton
            alignSelf="flex-start"
            position="relative"
            right={-1}
            top={-1}
            onClick={onClose}
          />
        </Alert>
      )}
      <form style={{ width: "100%" }} onSubmit={handleSubmit(submitFunc)}>
        <FormControl gap="8px" mb="24px" isInvalid={!!errors?.phoneNumber}>
          <FormLabel>{t("onboarding.phoneNumber")}</FormLabel>
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
                    const pastedData = e.clipboardData
                      .getData("text")
                      .replace(/\D/g, "");
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
          <FormLabel>{t("onboarding.asanID")}</FormLabel>
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
          <Link href={`${pathNameFirst}/terms-and-conditions`} color="rgb(32, 88, 187)" textDecoration="underline">qaydalar və şərtlərlə </Link>
          razıyam
          </Checkbox>
       {/* <Checkbox
          mb="20px"
          isChecked={isChecked}
          onChange={handleCheckboxChange}
        >
          {t("onboarding.terms.agree_checkbox")}
        </Checkbox>*/}
        <Box w="100%">
          <Button
            onClick={buttonClick}
            type="submit"
            w="100%"
            p="8px 16px"
            bg="blue.300"
            color="white"
            isDisabled={!isChecked || !isInputValid}
            fontSize="16px"
          >
            {isLoading ? <Spinner/> : t("common.actions.login")}
          </Button>
        </Box>
      </form>
    </VStack>
  );
};

export default SignForm;
