import { Center, Container, Heading, Image, Stack, Text, VStack } from "@chakra-ui/react"
import "./style.css"
import { UserHome } from "../../components/UserHome/UserHome"


export const Home = () => {
    return(
        <Container id="home" minH={"100vh"} minWidth={"100%"}>
            <Center minH={"100vh"} bgColor={"transparent"}>
            <Stack boxShadow={"lg"} width={"450px"} borderRadius={"10px"} height={"460px"} >
                <Heading fontSize={"17px"} borderTopRadius={"10px"} color={"rgb(84,84,84)"} padding={"20px"} backgroundColor={"rgb(246,246,246)"} textAlign={"center"}>
                    Select an Account
                </Heading>

             <VStack padding={"10px"} height={"360px"} overflowY={"scroll"}  gap={"10px"}>
                <UserHome/>
                <UserHome/>
                <UserHome/>
                <UserHome/>
                <UserHome/>
                <UserHome/>
                <UserHome/>
                <UserHome/>
             </VStack>
            </Stack>
            </Center>
        </Container>
    )
}