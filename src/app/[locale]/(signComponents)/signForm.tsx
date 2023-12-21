"use client"
import { VStack,FormControl, FormLabel, Input, FormErrorMessage, Text, useToast,InputGroup,InputLeftAddon} from "@chakra-ui/react"
import { Controller, Form, useForm } from "react-hook-form";
import { useState } from "react";

const SignForm = () => {

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "all",
    defaultValues: {
      phoneNumber: "",
      password: "",
    },
  });

  const [inputTextValue, setinputTextValue] = useState("");

  const [inputNumberValue, setInputNumberValue] = useState("");

  const submitFunc = (value: any) => {
    console.log(value);
  };

  // const toast = useToast()

    return (
        <VStack  gap='24px' w='100%'>
          <form 
            style={{ width: "100%" }} 
            onSubmit={handleSubmit(submitFunc)} 
            // onClick={() =>
            //   toast({
            //     title: 'alert',
            //     description: "Verilən telefon nömrəsi və ya istifadəçi ID-si düzgün deyil.",
            //     status: 'error',
            //     duration: 5000,
            //     isClosable: true,
            //   })
            // }
          >
          <FormControl gap='8px' mb='24px' isInvalid={!!errors?.phoneNumber}>
            <FormLabel >ASAN İmza Mobil nömrə</FormLabel>
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
                      if (value.length !== 9) {
                        return "Asan ID düzgün deyil";
                      }
                      return undefined;
                    },
                  }}
                  render={({ field }) => (
                    <Input
                      {...field}
                      borderLeft="0"
                      borderTopLeftRadius={0}
                      borderBottomLeftRadius={0}
                      type="tel"
                      placeholder="00 000 00 00"
                      borderColor="gray.300"
                      w="100%"
                      maxLength={9}
                      onChange={(e) => {
                        field.onChange(e);
                        setinputTextValue(field.value);
                      }}
                    />
                  )}
                />
              </InputGroup>
            <FormErrorMessage mt="0.5rem">
                {errors?.phoneNumber?.message}
              </FormErrorMessage>
          </FormControl>
          <FormControl gap='8px'>
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
                setInputNumberValue(field.value);
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
          </form>
            
        </VStack>
    )
}

export default SignForm