import { Image, Stack, Text } from "@chakra-ui/react"

export const UserHome = () =>{
    return(
        <Stack borderBottom={"1px"} borderColor={"rgb(213,213,213)"} direction={"row"} padding={"5px"} paddingBottom={"10px"} width={"100%"}>
        <Image cursor={"pointer"}  borderRadius={"100px"}  width={"25px"} height={"25px"} src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"/>
        <Text cursor={"pointer"}>Farman Tasleem</Text>
    </Stack>
    )
}