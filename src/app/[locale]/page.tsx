import { VStack, Image, Button, Box, FormControl, Text, FormLabel, Input, Checkbox, HStack } from "@chakra-ui/react";
import Link from "next/link";
import SignForm from "./(signComponents)/signForm";
import SignFooter from "./(signComponents)/signFooter";



export default function Home() {
  
  return (
    <VStack  height='100vh' padding='10px' width='100%' justifyContent='space-between'>
      <Button  alignSelf='flex-end' border='none' bg='gray.100' color='gray.700' p='8px'>x</Button>
      <VStack gap='14px' padding='12px' alignItems='flex-start' justifyContent='center'>
        <Box >
          <Image src="./images/abb-business.png"/>
        </Box>
          
            <VStack  alignItems='flex-start' gap='8px'>
              <Text
              fontSize='30px'
              color='gray.800'
              fontWeight='600'
              >Asan Imza</Text>
              <Text
              color='gray.600'
              fontSize='14px'
              >Qeydiyyatdan keçmək üçün Asan İmza ilə daxil olun.</Text>
            </VStack>
            <SignForm/>
          <Checkbox> Mən <Link  href={"az/terms-and-conditions"}>qaydalar və şərtlərlə </Link>razıyam</Checkbox>
          <Box w='100%'>
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