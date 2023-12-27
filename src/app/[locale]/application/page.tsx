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
  Spinner,
} from "@chakra-ui/react";
import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

export default function Erize() {
  const t = useTranslations();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const pathName = usePathname();
  let pathNameFirst = pathName.split("/")[1];
  const rejectHandler = () => {
    router.push(`/${pathNameFirst}/select-organization`);
  };
  const signHandler = () => {
    router.push(`/${pathNameFirst}/asan-imza-pin-2`);
  };

  return (
    <>
      <Flex flexDirection="column" justifyContent="center" alignItems="center">
        <CloseButton
          position="fixed"
          right={0}
          top={0}
          m="20px"
          onClick={rejectHandler}
          _hover={{ backgroundColor: "gray.200" }}
        />

        <Image
          textAlign="center"
          src="../images/Loading.png"
          alt="logo"
          mb="30px"
          mt="20px"
        />
        <Text fontWeight="bold" fontSize="30px" width="50%" textAlign="center">
         {t("onboarding.agreement")}
        </Text>
        
        <Container maxWidth="80%" p="30px">
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

          <Flex m="30px" gap="20px" position="fixed" bottom={0} right="10%">
            <Spacer />
            <Button colorScheme="gray" variant="ghost" onClick={rejectHandler}>
              {t("common.actions.cancel")}
            </Button>
            <Button colorScheme="gray" onClick={signHandler}>
              {loading ? <Spinner size="sm" color="gray.500" /> : t("onboarding.sign")}
            </Button>
          </Flex>
        </Container>
      </Flex>
    </>
  );
}
