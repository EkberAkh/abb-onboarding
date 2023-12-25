"use client";

import {
  Container,
  Text,
  Flex,
  Spacer,
  CloseButton,
  Center,
  Image,
  Button,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";

const TermsAndConditions = () => {
  const router = useRouter();
  const handleClose = () => {
    router.back();
  };
  return (
    <>
      <Container pt="5%" pb="5%" w='100%' maxW='100vh'>
        <CloseButton
          position="absolute"
          right={0}
          top={0}
          m="30px"
          onClick={handleClose}
          _hover={{ backgroundColor: "gray.200" }}
        />

        <Center>
          <Image textAlign="center" src="../images/Loading.png" alt="logo" />
        </Center>
        <Center>
          <Text fontWeight="bold" fontSize="30px" m="30px">
            Qaydalar və Şərtlər
          </Text>
        </Center>
        <Flex flexDirection="column" gap="15px" overflowY="scroll" w='100%' maxH='50vh'>
          <Text>
            Siz, “ABB” ASC internet bank xidməti vasitəsilə təqdim edilən onlayn
            qeydiyyatdan keçmə və bank hesabının açılması xidmətindən (Xidmət)
            istifadə etmək niyyətindəsiniz.
          </Text>
          <Text fontWeight="bold" fontSize="16px">
            “MƏN “QAYDALAR VƏ ŞƏRTLƏR”LƏ TANIŞ OLDUM” XANASINI İŞARƏLƏMƏZDƏN
            ƏVVƏL QAYDALAR VƏ ŞƏRTLƏRİ DİQQƏTLƏ OXUMAĞINIZ XAHİŞ OLUNUR.
          </Text>
          <Text fontWeight="bold">1. Xidmətdən istifadə qaydası</Text>
          <Text>
            Xidmətdən istifadə etmək üçün ilk növbədə ASAN imzaya sahib olmaq
            lazımdır. Bu barədə ətraflı məlumatı Asan İmza-nı necə əldə etmək
            olar? linkinə daxil olaraq əldə edə bilərsiniz.
          </Text>
          <Text fontWeight="bold">1.1 Müştəri məlumatları</Text>
          <Text>
            1.1.1 Bank hesablarının açılması üçün vergi orqanı tərəfindən Banka
            göndərilmiş elektron şəhadətnamə-dublikatı seçirsiniz.
            Şəhadətnamə-dublikat adətən göndərildiyi tarixdən 1-2 gün sonra
            Banka daxil olur. Şəhadətnamə-dublikat alındığı tarixdən 10 gün
            müddətində hesabın açılması üçün istifadə olunmadıqda, qüvvədən
            düşmüş hesab edilir.
          </Text>
          <Text>
            1.1.2 “ASAN finans” sistemi vasitəsilə VÖEN-ə dair məlumatların əldə
            olunması üçün razılıq verirsiniz.
          </Text>
          <Text>
            1.1.3 Bank tənzimləyicisinin qüvvədə olan “Bank hesablarının
            açılması, aparılması və bağlanması Qaydaları”na uyğun olaraq bank
            hesabının açılması üçün tələb olunan sənəd və məlumatları təqdim
            edirsiniz. Elektron informasiya sistemi vasitəsilə əldə edildiyi
            hallar istisna olmaqla, notarial qaydada təsdiq olunmuş bəzi
            sənədlərin birbaşa Banka təqdim olunmasını təmin edirsiniz.
          </Text>
          <Text>
            1.1.4 Vergi rezidentliyinin və hüquqi şəxslərin benefisiar
            mülkiyyətçilərinin müəyyən edilməsi üçün özünüqiymətləndirmə
            anketini müvafiq qaydada doldurursunuz.
          </Text>
          <Text fontWeight="bold">1.2 Sənədləşmə</Text>
          <Text>
            1.2.1 Şəxsi iş üzrə təqdim olunmuş məlumatlar və sənədlər Bank
            tərəfindən yoxlanıldıqdan sonra Bank hesablarının açılması və
            rəsmiləşdirilməsi üçün aşağıdakı ardıcıllıqla sənədləri
            imzalayırsınız:
          </Text>
          <Text>
            Daha öncə doldurulmuş özünüqiymətləndirmə anketi – imzalanmış sənəd
            Bank tərəfindən yoxlanıldıqdan sonra növbəti sənədin imzalanması
            mərhələsinə keçid olunur.
          </Text>
          <Text>
            Bank hesabı müqaviləsi – sənəd imzalandıqdan sonra Bank hesabının
            açılması prosesi başlayır.
          </Text>
          <Text>
            Sənədlərin imzalanması üçün “ASAN imza” mobil nömrənizə göndərilmiş
            “ASAN İmza yoxlama koduna” aid sorğunu telefonunuzun ekranında
            eyniləşdirərək ASAN İmza PIN2 kodunu yığmaqla qəbul edirsiniz.
          </Text>
          <Text>1.3. Hesabın açılması</Text>
          <Text>
            1.3.1 Bank hesabının açılmasına dair rəsmiləşdirmə prosesi
            tamamlandıqdan sonra Bank tərəfindən hesablar avtomatik açılır və
            hesab rekvizitləri barədə məlumat təqdim olunur. Eyni zamanda, hesab
            rekvizitlərini elektron qaydada yükləyə və ya çap edərək özünüzdə
            saxlaya bilərsiniz.
          </Text>
          <Text fontWeight="bold">2. Xidmətdən istifadəyə dəyişiklik</Text>
          <Text>
            Bank tərəfindən Qayda və Şərtlərə əlavə və dəyişikliklər edilə
            bilər.
          </Text>
          <Text fontWeight="bold">3. Təhlükəsizlik</Text>
          <Text>
            Sizə məxsus “ASAN imza”nın digər şəxs tərəfindən istifadəsinə görə
            Bank məsuliyyət daşımır.
          </Text>
          <Text fontWeight="bold">4. Əlaqə məlumatları</Text>
          <Text>
            Xidmətə dair hər hansı bir sualınız yaranarsa, bizimlə
            customer.service@ibar.az e-mail ünvanı və ya +994 12 493 00 91
            (1711), +994 51 226 44 47 telefon nömrələri vasitəsilə əlaqə saxlaya
            bilərsiniz.
          </Text>
        </Flex>
        <Flex mt="70px" gap="20px">
          <Spacer />
          <Button colorScheme="gray" onClick={handleClose}>İmtina et</Button>
          <Button
            onClick={() => {
              router.push("/");
            }}
            colorScheme="blue"
          >
            Təsdiq edirəm
          </Button>
        </Flex>
      </Container>
    </>
  );
};
export default TermsAndConditions;