
import { Stack, StackDivider } from "@chakra-ui/react"
import { Address } from "../../components/Address/Address"
import { Profile } from "../../components/Profile/Profile"
import { Sidebar } from "../../components/Sidebar/Sidebar"
import "./style.css"
import { Navbar } from "../../components/Navbar/Navbar"
export const ProfilePage = () => {
    return (
        <Stack direction={"row"} border={'2px'}  borderColor={"red"} paddingBottom={"40px"} paddingTop={"40px"} alignItems={"center"} justifyItems={"left"} justifyContent={"left"}>
            <Sidebar />
            <Stack margin={"auto"} padding={"10px"}>
                <Navbar />
                <Stack direction={"row"} gap={"40px"} padding={"10px"}>
                    <Profile />
                    <Address />
                </Stack>
            </Stack>
        </Stack>
    )
}