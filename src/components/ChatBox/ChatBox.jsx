import { Button, HStack, Image, Input, Stack, Text } from "@chakra-ui/react"
import { IoIosArrowUp } from "react-icons/io"
import "./style.css"
import {MdArrowForwardIos} from "react-icons/md"
import {RxCross2} from "react-icons/rx"
import { useState } from "react"
export const ChatBox = ({visible,setVisible,data}) =>{
   
    return(
        <Stack hidden={!visible} id="chatBoxPage" direction={"column"} boxShadow={"2xl"}>
            <Stack direction={"row"} id="chatBoxNav" width={"150px"}>
                <Stack alignItems={"center"} backgroundColor={"transparent"} direction={"row"}>
                <Image borderRadius={"100px"} width={"20px"} height={"20px"} src={data.profilepicture}/>
                <Text fontSize={"14px"}>{data.name}</Text>
                </Stack>
               <HStack backgroundColor={"transparent"}>
               <IoIosArrowUp cursor={"pointer"} onClick={()=>{setVisible(!visible)}}/>
                <RxCross2 cursor={"pointer"} onClick={()=>{setVisible(!visible)}}/>
               </HStack>
            </Stack>
            <Stack className="messageContainer">
                <Text className="recieve message">lorem ipsum lorem</Text>
                <Text className="send message">lorem ipsum lorem is</Text>
            </Stack>
            <Stack direction={"row"} alignContent={"center"} alignItems={"center"} padding={"5px"}>
                <Input placeholder="Type your message" id="input" />
                <MdArrowForwardIos cursor={"pointer"} color="rgb(44,101,200)" height={"20px"}/>
            </Stack>
        </Stack>
    )
}