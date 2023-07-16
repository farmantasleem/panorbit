import { Image, Stack, Text } from "@chakra-ui/react"
import { BsDot } from "react-icons/bs"

import "./style.css"
export const ChatbotUser =() =>{
    return(
        <Stack id="chatbotuser" borderBottom={"1px"} borderColor={"rgb(213,213,213)"} direction={"row"} padding={"5px"} paddingBottom={"10px"} width={"100%"}>
        <Image cursor={"pointer"} borderRadius={"100px"} width={"25px"} height={"25px"} src={"https://panorbit.in/wp-content/uploads/2019/hotlink-ok/1001.jpeg"} />

        <Text cursor={"pointer"}>Franklin</Text>
        <BsDot color="green"/>
    </Stack>
    )
}