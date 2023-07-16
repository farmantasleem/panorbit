import { Image, Stack, Text } from "@chakra-ui/react"
import { BsDot } from "react-icons/bs"

import "./style.css"
import { ChatBox } from "../ChatBox/ChatBox"
import { useState } from "react"
export const ChatbotUser =({data}) =>{
    const[visible,setVisible] =useState(false)
    return(
        <Stack id="chatbotuser" borderBottom={"1px"} borderColor={"rgb(213,213,213)"} direction={"row"} padding={"5px"} justifyContent={"left"} alignContent={"left"} paddingBottom={"10px"} width={"200px"}>
        <Image cursor={"pointer"} borderRadius={"100px"} width={"25px"} height={"25px"} src={data.profilepicture} />

        <Text cursor={"pointer"} onClick={()=>{setVisible(!visible)}} fontSize={"14px"}>{data.name}</Text>
        <BsDot color="green"/>
        <ChatBox data={data} visible={visible} setVisible={setVisible}/>
    </Stack>
    )
}