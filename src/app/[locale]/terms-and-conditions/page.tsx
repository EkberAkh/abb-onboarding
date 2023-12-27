"use client";

import {
  Text,
  Flex,
  Spacer,
  CloseButton,
  Image,
  Button,
  VStack,
} from "@chakra-ui/react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

const TermsAndConditions = () => {
  const router = useRouter();
  const handleClose = () => {
    router.push(`/${pathNameFirst}`);
  };
  
const pathName = usePathname();
let pathNameFirst = pathName.split("/")[1];
const getUrl = () => {
    if (pathName === "/az") {
      return "https://asanimza.az/";
    } else if (pathName === "/en") {
      return "https://asanimza.az/en/";
    } else {
      return "https://asanimza.az/";
    }
  };
  return (
    <>
        <CloseButton
          position="absolute"
          right={0}
          top={0}
          m="20px"
          onClick={handleClose}
          _hover={{ backgroundColor: "gray.200" }}
        />
      <VStack p='50px 165px' w='100%' m='0' alignItems='center'>
        <VStack alignItems="center">
          <Image  src="../images/Loading.png" alt="logo" />
          <Text fontWeight="bold" fontSize="30px" m="30px">
            Qaydalar və Şərtlər
          </Text>
          </VStack>
        <Flex flexDirection="column" gap="15px" overflowY="scroll" w='95%' maxH='53vh'>
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
            lazımdır. Bu barədə ətraflı məlumatı <Link  href={getUrl()} target="_blank"  style={{ color: "rgb(32, 88, 187)", textDecoration:"underline"}}> Asan İmza-nı necə əldə etmək
            olar?</Link> linkinə daxil olaraq əldə edə bilərsiniz.
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
            customer <Link href={`/${pathNameFirst}`} style={{ color: "rgb(32, 88, 187)" }}>service@ibar.az</Link> e-mail ünvanı və ya <Link style={{ color: "rgb(32, 88, 187)" }} href={`/${pathNameFirst}`}>+994 12 493 00 91 (1711)</Link>
            , <Link style={{ color: "rgb(32, 88, 187)" }} href={`/${pathNameFirst}`}>+994 51 226 44 47</Link> telefon nömrələri vasitəsilə əlaqə saxlaya
            bilərsiniz.
          </Text>
        </Flex>
        <Flex mt="30px" gap="20px" position='fixed' bottom='15px' right='220px' backgroundColor="white" width="100%">
          <Spacer />
          <Button colorScheme='gray' variant='ghost' onClick={handleClose}>İmtina et</Button>
          <Button
            onClick={() => {
              router.push(`/${pathNameFirst}`);
            }}
            colorScheme='gray'
          >
            Təsdiq et
          </Button>
        </Flex>
      </VStack>
    </>
  );
};
export default TermsAndConditions;