import { HStack, Image , Link} from "@chakra-ui/react"

const SignFooter = () => {
    return (
        <HStack p='24px 32px' gap='35px' alignItems='center'>
            <Image src="./images/Frame 7508.png"></Image>
            <Link href="/">ASAN İmza necə alınmalı?</Link>
      </HStack>
    )
}

export default SignFooter