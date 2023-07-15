import { Image, Stack, Text } from "@chakra-ui/react"
import { NavLink } from "react-router-dom"

export const UserHome = ({data:{name,profilepicture,id}}) =>{
    return(
        <Stack borderBottom={"1px"} borderColor={"rgb(213,213,213)"} direction={"row"} padding={"5px"} paddingBottom={"10px"} width={"100%"}>
       <NavLink to={`/profile/${id}`}> <Image cursor={"pointer"}  borderRadius={"100px"}  width={"25px"} height={"25px"} src={profilepicture}/>
        </NavLink>
       <NavLink to={`/profile/${id}`}><Text cursor={"pointer"}>{name}</Text></NavLink>
         </Stack>
    )
}