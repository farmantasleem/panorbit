
import { Stack, StackDivider } from "@chakra-ui/react"
import { Address } from "../../components/Address/Address"
import { Profile } from "../../components/Profile/Profile"
import { Sidebar } from "../../components/Sidebar/Sidebar"
import "./style.css"
import { Navbar } from "../../components/Navbar/Navbar"
import { useParams } from "react-router-dom"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getProfile } from "../../redux/action"
import { Chat } from "../../components/Chat/Chat"
export const ProfilePage = () => {
    const {userId} =useParams();
    const dispatch=useDispatch()
    const dataProfile= useSelector(state => state.state.profileData)

    useEffect(()=>{
        localStorage.setItem("userId",userId)
       dispatch(getProfile(userId));
    },[])
    return (
        <Stack direction={"row"} border={'2px'}  borderColor={"red"} paddingBottom={"40px"} paddingTop={"40px"} alignItems={"center"} justifyItems={"left"} justifyContent={"left"}>
            <Sidebar />
            <Stack margin={"auto"} padding={"10px"}>
                <Navbar title={"Profile"}  data={dataProfile}/>
                <Stack direction={"row"} gap={"40px"} padding={"10px"}>
                    <Profile data={dataProfile}/>
                    <Address  address={dataProfile?.address} company={dataProfile?.company}/>
                </Stack>
                <Chat/>
            </Stack>
        </Stack>
    )
}