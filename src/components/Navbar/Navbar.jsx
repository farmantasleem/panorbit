import { HStack, Image, Stack, Text } from "@chakra-ui/react";
import "./style.css";
import { UserModal } from "./UserModal";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../../redux/action";
import { useParams } from "react-router-dom";

export const Navbar = ({data,title}) => {
    const[visible,setvisible] =useState(false)
    const {userId} =useParams()
    const dispatch=useDispatch()
    const dataProfile= useSelector(state => state.state.profileData)

    useEffect(()=>{
       dispatch(getProfile(userId));
       console.log(dataProfile)
    },[userId])
    return(
        <Stack direction={"row"} width={"100%"} paddingBottom={"20px"} borderBottom={"2px"} borderColor={"silver"} justifyContent={"space-between"}>
                <Text>{title}</Text>
               <HStack position={"relative"}>
                    <Image cursor={"pointer"} onClick={()=>setvisible(!visible)} borderRadius={"100px"} width={"30px"} height={"30px"} src={data.profilepicture}/>
                    <Text cursor={"pointer"} onClick={()=>setvisible(!visible)}>{data.name}</Text>
                   {visible && <UserModal data={data}/>}
               </HStack>
        </Stack>
    )
}