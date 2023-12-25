'use client'
import { Box,  Container, Heading, Text, Image, CloseButton, Stack, Alert, AlertIcon, VStack } from '@chakra-ui/react'
import { useRouter } from 'next/navigation';

const AsanImzaPinThree = () => {
  const router = useRouter();
  const clickHandler = () => {
    router.push("/");
  }
  return (
    <Stack height='100%' width='100%' padding="24px">
      <VStack mt='40px' w='100%' position='absolute'>
      <Alert borderRadius='6px' maxWidth='504px' status='error'>
        <AlertIcon />
        Hörmətli müştəri, müştəri məlumatlarınız üzrə düzəliş gərəklidir. Məsələ ilə bağlı ABB-yə məxsus filial və ya şöbəyə müraciət etməyiniz xahiş olunur.
      </Alert>
      </VStack>
      <CloseButton alignSelf='flex-end' onClick={clickHandler}    _hover={{ backgroundColor: 'gray.200'}} />
      <Container as='div' display='flex' justifyContent='center' flexDirection='column'  gap='16px' maxW='500px' px='24px'>
          <VStack ><Image src='../images/logo-customer.svg' alt='logo'/></VStack>
          <Heading textAlign='center' color="#000" fontSize='24px' fontWeight='600' lineHeight='30px'>Sorğunuz icradadır</Heading>
          <Text textAlign='center' fontSize='18px' fontWeight='400' lineHeight='28px' color='#4A5568'>Hörmətli müştəri, qısa müddət ərzində prosesinin nəticəsi ilə bağlı mail vasitəsi ilə Sizə məlumat veriləcəkdir.</Text>
      </Container>
    </Stack>
  )
}

export default AsanImzaPinThree;