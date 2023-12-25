import {
  Box,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Select,
} from "@chakra-ui/react";
import { useTranslations } from "next-intl";
import { Controller, UseFormReturn } from "react-hook-form";
import { useState } from "react";

interface IProps {
  labelName: string;
  messageText: string;
  methods: UseFormReturn; // Pass useForm return type as a prop
}

export function CustomerSelect({ labelName, messageText, methods }: IProps) {
  const t = useTranslations();
  const [selectedValue, setSelectedValue] = useState("");
  const {
    control,
    formState: { errors },
  } = methods;

  const handleSelectChange = (value: string) => {
    setSelectedValue(value);
  };

  return (
    <Box width="100%">
      <FormControl isInvalid={!!errors[messageText]}>
        <FormLabel>{labelName}</FormLabel>
        <Controller
          name={messageText}
          control={control}
          rules={{
            required: {
              value: true,
              message: t(`onboarding.errorMessages.${messageText}.required`),
            },
          }}
          render={({ field }) => (
            <Select
              {...field}
              color={selectedValue ? "black" : "gray.500"}
              onChange={(e) => {
                field.onChange(e);
                handleSelectChange(e.target.value);
              }}
              _placeholder={{ color: "gray.500" }}
              placeholder={t("common.actions.select")}
            >
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
          )}
        />
        <FormErrorMessage>{String(errors?.[messageText]?.message)}</FormErrorMessage>
      </FormControl>
    </Box>
  );
}
