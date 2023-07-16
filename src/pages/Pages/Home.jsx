import { Center, Container, Heading, Image, Stack, Text, VStack } from "@chakra-ui/react"
import "./style.home.css"
import { UserHome } from "../../components/UserHome/UserHome"
import { useSelector } from "react-redux"
import { useEffect } from "react"


export const Home = () => {
    const userData= useSelector((state) =>state.state.userInfo)

    return(
        <Container id="home" minH={"100vh"} minWidth={"100%"}>
            <Center minH={"100vh"} bgColor={"transparent"}>
            <Stack boxShadow={"lg"} width={"450px"} borderRadius={"10px"} height={"460px"} >
                <Heading fontSize={"17px"} borderTopRadius={"10px"} color={"rgb(84,84,84)"} padding={"20px"} backgroundColor={"rgb(246,246,246)"} textAlign={"center"}>
                    Select an Account
                </Heading>

             <VStack padding={"10px"} height={"360px"} overflowY={"scroll"}  gap={"10px"}>
              {
                userData.map((e,i)=>{
                    return   <UserHome key={i} data={e}/>
                })
              }
              
             </VStack>
            </Stack>
            </Center>
        </Container>
    )
}