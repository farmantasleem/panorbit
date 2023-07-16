import { Button, HStack, Image, Stack, Text } from "@chakra-ui/react"
import { BsFillChatLeftFill,BsDot } from "react-icons/bs"
import { IoIosArrowUp } from "react-icons/io"

import "./style.css"
import { ChatbotUser } from "../ChatbotUser/ChatbotUser"
import { useState } from "react"

export const Chat = () => {
    const[visible,setVisible] =useState(false)
    return (
        <Stack id="chat" direction={"column"} style={{backgroundColor:visible?"white":"transparent"}}>
            <Stack direction={"row"} id="chatBox" onClick={()=>setVisible(!visible)}>
                <Button _hover={{ color: "white" }} backgroundColor={"transparent"} color={"white"} leftIcon={<BsFillChatLeftFill />}>Chats</Button>
                <IoIosArrowUp />
            </Stack>
            <Stack hidden={!visible} id="activeUser" direction={"column"} gap={"5px"}>
                <ChatbotUser/> 
                <ChatbotUser/> 
                <ChatbotUser/> 
                <ChatbotUser/> 
                <ChatbotUser/> 
            </Stack>
        </Stack>
    )
}