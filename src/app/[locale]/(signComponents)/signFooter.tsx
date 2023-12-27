import { HStack, Image, Link } from "@chakra-ui/react";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

const SignFooter = () => {
  const t = useTranslations();
  const pathName = usePathname();
  let pathNameFirst = pathName.split("/")[1];
  const getUrl = () => {
    if (pathNameFirst === "az") {
      return "https://asanimza.az/";
    } else if (pathNameFirst === "en") {
      return "https://asanimza.az/en/";
    } else {
      return "https://asanimza.az/";
    }
  };
  return (
    <HStack p="24px 0" alignItems="center" justifyContent="center" gap="150px">
      <Image src="./images/Frame 7508.png"></Image>
      <Link
        fontSize="sm"
        href={getUrl()}
        target="_blank"
        color="gray.500"
        cursor="pointer"
        _hover={{ color: "blue" }}
      >
        {t("onboarding.howToGetAsanImza")}
      </Link>
    </HStack>
  );
};

export default SignFooter;
