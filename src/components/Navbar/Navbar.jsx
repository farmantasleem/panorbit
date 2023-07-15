import { HStack, Image, Stack, Text } from "@chakra-ui/react";
import "./style.css";

export const Navbar = () => {
    return(
        <Stack direction={"row"} width={"100%"} paddingBottom={"20px"} borderBottom={"2px"} borderColor={"silver"} justifyContent={"space-between"}>
                <Text>Profile</Text>
               <HStack>
                    <Image borderRadius={"100px"} width={"30px"} height={"30px"} src="https://avatars.githubusercontent.com/u/107990962?v=4"/>
                    <Text>Farman</Text>
               </HStack>
        </Stack>
    )
}