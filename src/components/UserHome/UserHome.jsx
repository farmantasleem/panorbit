import { Image, Stack, Text } from "@chakra-ui/react"

export const UserHome = ({data:{name,profilepicture}}) =>{
    return(
        <Stack borderBottom={"1px"} borderColor={"rgb(213,213,213)"} direction={"row"} padding={"5px"} paddingBottom={"10px"} width={"100%"}>
        <Image cursor={"pointer"}  borderRadius={"100px"}  width={"25px"} height={"25px"} src={profilepicture}/>
        <Text cursor={"pointer"}>{name}</Text>
    </Stack>
    )
}