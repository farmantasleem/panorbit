import { Button, HStack, Image, Stack, Text } from "@chakra-ui/react"

import "./userModal.css"
import { NavLink } from "react-router-dom"
import { useSelector } from "react-redux"
export const UserModal = ({data:{name,profilepicture,username}}) =>{
    const dataProfile= useSelector(state => state.state.userInfo)
        return(
            <Stack id="userModal" direction={"column"} justifyContent={"center"} alignContent={"center"} boxShadow={"dark-lg"}>
                    <Image width={"100px"} height={"100px"} borderRadius={"100px"} src={profilepicture}/>
                    <Text>{name}</Text>
                    <Text>{username}</Text>
                   {
                   dataProfile?.map((e,i)=>{
                      if(i<2){return (
                        <HStack id="content" justifyContent={"center"} width={"250px"}>
                    <NavLink  width={"30px"} to={`/profile/${e.id}`}>  <Image width={"30px"} height={"30px"} borderRadius={"100px"} src={e.profilepicture}/>  </NavLink>
                    <NavLink width={"30px"} to={`/profile/${e.id}`}>  <Text width={"120px"}>{e.name}</Text>  </NavLink>
                        </HStack>)
                    }
                   })
                   }
                
                    <NavLink to={"/"}><Button borderRadius={"40px"} height={"30px"} backgroundColor={"rgb(213,81,81)"} color={"white"}>Log Out</Button></NavLink>
            </Stack>
        )
}