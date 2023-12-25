import {
  Box,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
} from "@chakra-ui/react";
import { useTranslations } from "next-intl";
import { Controller, UseFormReturn, useForm } from "react-hook-form";
interface IProps {
  labelName: string;
  methods: UseFormReturn; // Pass useForm return type as a prop
}

export function CustomerInput({ labelName, methods }: IProps) {
  const t = useTranslations();
  const {
    control,
    formState: { errors },
  } = methods;
  return (
    <>
      <Box width="100%">
        <FormControl isInvalid={!!errors.activityAddress}>
          <FormLabel>{labelName}</FormLabel>
          <Controller
            name="activityAddress"
            control={control}
            rules={{
                required: {
                  value: true,
                  message: t("onboarding.errorMessages.activityAddress.required"),
                }
              }}
            render={({ field }) => (
              <Input
                {...field}
                type="text"
                placeholder={t("common.actions.enter_text")}
                _placeholder={{ color: "gray.500" }}
                color="black"
              />
            )}
          />
          <FormErrorMessage>{String(errors?.activityAddress?.message)}</FormErrorMessage>
        </FormControl>
      </Box>
    </>
  );
}
