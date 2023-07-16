
import { Center, Stack, StackDivider, Text } from "@chakra-ui/react"
import { Sidebar } from "../../components/Sidebar/Sidebar"
import { Navbar } from "../../components/Navbar/Navbar"
import { useSelector } from "react-redux"
import { Chat } from "../../components/Chat/Chat"
export const TodoPage = () => {
    const dataProfile = useSelector(state => state.state.profileData)    // getting all the data from redux store

    return (
        <Stack direction={"row"} border={'2px'} borderColor={"red"} height={"600px"} paddingBottom={"40px"} paddingTop={"40px"} alignItems={"center"} justifyItems={"left"} justifyContent={"left"}>
            <Sidebar />
            <Stack margin={"auto"} padding={"10px"}>
                <Navbar data={dataProfile} title="ToDo" />
                <Stack direction={"row"} height={"600px"} gap={"40px"} width={"800px"} padding={"10px"}>
                    <Center width={"100%"} height={"400px"}>
                        <Text fontSize={"80px"} color={"rgb(238,238,238)"} fontWeight={"bold"}>Coming Soon</Text>
                    </Center>
                </Stack>
                <Chat />
            </Stack>
        </Stack>
    )
}