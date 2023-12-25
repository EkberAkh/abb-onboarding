import { HStack, Image , Link} from "@chakra-ui/react"
import { usePathname } from "next/navigation";

const SignFooter = () => {
    const pathName = usePathname();
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
        <HStack p='24px 0' alignItems='center' justifyContent="center" gap="150px">
            <Image src="./images/Frame 7508.png"></Image>
            <Link fontSize="sm" href={getUrl()} target="_blank" color="gray.500" cursor="pointer" _hover={{ color: 'blue' }}>ASAN İmza necə alınmalı?</Link>
      </HStack>
    )
}

export default SignFooter