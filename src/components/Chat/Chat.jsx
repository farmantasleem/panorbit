import { Button, HStack, Image, Stack, Text } from "@chakra-ui/react"
import { BsFillChatLeftFill, BsDot } from "react-icons/bs"
import { IoIosArrowUp } from "react-icons/io"

import "./style.css"
import { ChatbotUser } from "../ChatbotUser/ChatbotUser"
import { useState } from "react"
import { useSelector } from "react-redux"

export const Chat = () => {
    const [visible, setVisible] = useState(false)
    const userData = useSelector((state) => state.state.userInfo);
    return (
        <Stack id="chat" direction={"column"} style={{ backgroundColor: visible ? "white" : "transparent" }}>
            <Stack direction={"row"} id="chatBox" onClick={() => setVisible(!visible)}>
                <Button _hover={{ color: "white" }} backgroundColor={"transparent"} color={"white"} leftIcon={<BsFillChatLeftFill />}>Chats</Button>
                <IoIosArrowUp />
            </Stack>
            <Stack hidden={!visible} id="activeUser" direction={"column"} gap={"5px"}>
                {
                    userData.map((e) => {
                        return <ChatbotUser key={e.id} data={e} />
                    })
                }

            </Stack>
        </Stack>
    )
}