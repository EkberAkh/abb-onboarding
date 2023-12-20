import { VStack, Image, Button, Box, FormControl, Text, FormLabel, Input, Checkbox, HStack } from "@chakra-ui/react";
import Link from "next/link";
import SignForm from "./(signcomponents)/signForm";
import SignFooter from "./(signcomponents)/signFooter";



export default function Home() {
  
  return (
    <VStack>
      <Button alignSelf='flex-end' border='none' bg='gray.100' color='gray.700' p='13px' m='24px'>x</Button>
      <VStack alignItems='flex-start' justifyContent='center'>
        <Box p='16px 32px'>
          <Image src="./login/Abb Business logo.svg"/>
        </Box>
          
            <HStack p='16px 32px' flexDirection='column' alignItems='flex-start' gap='8px'>
              <Text
              fontSize='30px'
              color='gray.800'
              fontWeight='600'
              >Asan Imza</Text>
              <Text
              color='gray.600'
              fontSize='14px'
              >Qeydiyyatdan keçmək üçün Asan İmza ilə daxil olun.</Text>
            </HStack>
            <SignForm/>
          <Checkbox m='8px 32px' p='10px 12px'> Mən <Link href={"/"}>qaydalar və şərtlərlə </Link>razıyam</Checkbox>
          <Box p='0 32px' w='100%'>
            <Button 
            w='100%'
            p='8px 16px' 
            bg='gray.300' 
            color='white' 
            fontSize='16px'>Daxil ol</Button>
          </Box>
      </VStack>
      <SignFooter/>
    </VStack>
    
  
  )
}
