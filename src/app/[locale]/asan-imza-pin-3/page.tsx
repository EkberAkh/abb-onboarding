'use client'
import { Box,  Container, Heading, Text, Image, CloseButton, Stack, Alert, AlertIcon, VStack } from '@chakra-ui/react'
import { useTranslations } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';

const AsanImzaPinThree = () => {
  const t = useTranslations();
  const router = useRouter();
  
const pathName = usePathname();
let pathNameFirst = pathName.split("/")[1]
  const clickHandler = () => {
    router.push(`/${pathNameFirst}/login`);
  }
  return (
    <Stack height='100%' width='100%' padding="24px">
      <VStack mt='40px' w='100%' position='absolute'>
      <Alert borderRadius='6px' maxWidth='504px' status='error'>
        <AlertIcon />
        {t("onboarding.errors.IRRELEVANT_CUSTOMER")}
      </Alert>
      </VStack>
      <CloseButton alignSelf='flex-end' onClick={clickHandler}    _hover={{ backgroundColor: 'gray.200'}} />
      <Container as='div' display='flex' justifyContent='center' flexDirection='column'  gap='16px' maxW='500px' pt="120px">
          <VStack ><Image src='../images/logo-customer.svg' alt='logo'/></VStack>
          <Heading textAlign='center' color="#000" fontSize='24px' fontWeight='600' lineHeight='30px'>{t("onboarding.loading.check")}</Heading>
          <Text textAlign='center' fontSize='18px' fontWeight='400' lineHeight='28px' color='#4A5568'>{t("onboarding.customerNoSuccess")}</Text>
      </Container>
    </Stack>
  )
}

export default AsanImzaPinThree;