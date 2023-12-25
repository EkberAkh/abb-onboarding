/* eslint-disable react/no-children-prop */
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  InputGroup,
  InputLeftAddon,
} from "@chakra-ui/react";
import IMask from "imask";
import { useTranslations } from "next-intl";
import { useEffect } from "react";
import { Controller, UseFormReturn, useForm } from "react-hook-form";
interface IProps {
  methods: UseFormReturn;
  setPhone: (phone: string) => void;
}

export function CustomerPhone({methods, setPhone  }: IProps) {
  const t = useTranslations();
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
    formState: { errors },
  } = methods;
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
  };


  return (
    <>
      <Box width="100%">
        <FormControl isInvalid={!!errors.activityAddress}>
          <FormLabel>{t("onboarding.phone")} </FormLabel>
          <InputGroup>
          <InputLeftAddon children="+994" />
          <Controller
             name="phoneNumber"
             control={control}
             rules={{
               required: t("login.errorMessages.phoneNumber.required"),
               validate: (value: string) => {
                 if (value.length < 12) {
                   return t("login.errorMessages.phoneNumber.matches");
                 }
               },
             }} 
            render={({ field }) => (
                <Input
                {...field}
                id={phoneNumberId}
                borderLeft="0"
                borderTopLeftRadius="0"
                borderBottomLeftRadius="0"
                type="tel"
                borderColor="gray.300"
                w="100%"
                maxLength={12}
                autoComplete="off"
                onChange={(e) => {
                  field.onChange(e);
                  handlePhoneChange(e);
                }}
                onPaste={(e) => {
                  e.preventDefault();
                  const pastedData = e.clipboardData.getData('text').replace(/\D/g, '');
                }}
                  placeholder={t('onboarding.company.company_number_placeholder')}
                />
            )}
          />
          </InputGroup>
          <FormErrorMessage>
            {String(errors?.activityAddress?.message)}
          </FormErrorMessage>
        </FormControl>
      </Box>
    </>
  );
}
