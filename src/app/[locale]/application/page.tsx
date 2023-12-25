"use client";
import {
  Flex,
  CloseButton,
  Spacer,
  Image,
  Text,
  Container,
  Button,
  HStack,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";

export default function Erize() {
  const router = useRouter();
  const rejectHandler = () => {
    router.back();
  };
  
  return (
    <>
      <Flex flexDirection="column" justifyContent="center" alignItems="center">
        <CloseButton position="absolute" right={0} top={0} size="lg" m="30px" />

        <Image
          textAlign="center"
          src="../images/Loading.png"
          alt="logo"
          mb="30px"
        />
        <Text fontWeight="bold" fontSize="30px">
          {" "}
          “ASAN Finans” sistemi vasitəsi ilə məlumatların
        </Text>
        <Text fontWeight="bold" fontSize="30px">
          {" "}
          alınmasına dair Razılıq ərizəsi
        </Text>
        <Container maxWidth="1110px" p="30px">
          <Flex flexDirection="column" gap="16px">
            <Text fontWeight="bold">Adı, soyadı, ata adı: </Text>
            <Text fontWeight="bold">
              Fərdi sahibkarın FİN nömrəsi / VÖEN nömrəsi:{" "}
            </Text>
            <Text>
              Bununla razılıq verirəm ki, ASAN Finans sistemi vasitəsilə
              şəxsiyyət vəsiqəm və VÖEN üzrə müəyyən olunan məlumatlar
              qeydiyyatdan keçmək üçün ABB ASC yə təqdim olunsun.
            </Text>
            <Text>
              Bu razılıq 10 gün müddətinə qüvvədədir. Razılıq yazılı müraciətimə
              əsasən vaxtından əvvəl ləğv edilə bilməsi mənə izah olundu.
            </Text>
            <Text fontWeight="bold">
              Razılıq verən şəxsin adı: Əhməd Əhmədov Elnur oğlu
            </Text>
            <Text>
              Bu razılıq əsasında əldə edilmiş məlumatların saxlanma müddəti
              müvafiq xidmətdən istifadə müddəti ilə eynidir və həmin xidmətə
              xitam verildikdən sonra məlumatlar qanunvericilikdə nəzərdə
              tutulmuş qaydada arxivləşdirilsin (ləğv edilsin).
            </Text>
            <Text fontWeight="bold">İmza:</Text>
          </Flex>

          <Flex m="30px" gap="20px">
            <Spacer />
            <Button colorScheme="gray" onClick={rejectHandler}>
              İmtina et
            </Button>
            <Button colorScheme="blue">İmzala </Button>
          </Flex>
        </Container>
      </Flex>
    </>
  );
}
