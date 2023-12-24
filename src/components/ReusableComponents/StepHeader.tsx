import { Button, Flex, HStack, Image, Text, Select} from "@chakra-ui/react";
import { useTranslations } from "next-intl";
export function StepHeader() {
  const  t = useTranslations();
  
    return(
        <HStack bg="#fff" px="32px" height="64px" alignItems="center">
        <Image alt="logo" src="../images/logo-business.svg" height="33px" />
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
              
            >
              <Select gap="8px"
              alignItems="center"
              bg="#F7FAFC"
              p="8px"
              borderRadius="100px">
                <option value='option1'>AZ</option>
                <option value='option2'>EN</option>
                <option value='option3'>RU</option>
              </Select>
              {/* <Text fontSize="14px" fontWeight="500" color="gray.700">
                AZ
              </Text>
              <Image
                w="24px"
                h="24px"
                borderRadius="50%"
                src="../images/flags/az.png"
                alt=""
              /> */}
            </Flex>
          </Flex>
          <Button
            bg="#2058BB"
            textColor="#fff"
            borderRadius="6px"
            _hover={{ bg: "blue" }}
          >
            {t('common.actions.logout')}
          </Button>
        </Flex>
      </HStack>
    )
}