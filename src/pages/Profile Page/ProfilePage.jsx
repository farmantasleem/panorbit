
import { Stack } from "@chakra-ui/react"
import { Address } from "../../components/Address/Address"
import { Profile } from "../../components/Profile/Profile"
import { Sidebar } from "../../components/Sidebar/Sidebar"
import "./style.css"
export const ProfilePage = () => {
    return(
       <Stack direction={"row"} padding={"40px"}>
                <Sidebar/>
                <Profile/>
               <Address/>
       </Stack>
    )
}