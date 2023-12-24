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
        <HStack p='24px 32px' gap='35px' alignItems='center'>
            <Image src="./images/Frame 7508.png"></Image>
            <Link href={getUrl()} target="_blank" _hover={{ color: 'blue' }}>ASAN İmza necə alınmalı?</Link>
      </HStack>
    )
}

export default SignFooter