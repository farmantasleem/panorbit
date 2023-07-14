import { Container, Image, Stack, Text } from "@chakra-ui/react"

export const Profile = () => {
    return(
        <Container  width="350px" height={"500px"} display={"flex"} gap={"10px"} flexDirection={"column"} justifyContent={"center"} alignContent={"center"} alignItems={"center"}border={"2px"} borderColor={"red"}>
            <Image width={"180px"} borderRadius={"100px"} height={"180px"} src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"/>
            <Text>Clementine Bauch</Text>
            <Stack width={"250px"}  display={"flex"} justifyContent={"left"} flexDirection={"row"}>
                <Text>Username : </Text>
                <Text>Farman</Text>
            </Stack>
            <Stack width={"250px"} justifyContent={"left"} display={"flex"} flexDirection={"row"}>
                <Text>Email : </Text>
                <Text>iamfarman@gmail.com</Text>
            </Stack>
            <Stack width={"250px"} justifyContent={"left"} display={"flex"} flexDirection={"row"}>
                <Text>Phone : </Text>
                <Text>8882551145</Text>
            </Stack>
            <Stack width={"250px"} justifyContent={"left"} display={"flex"} flexDirection={"row"}>
                <Text>Website : </Text>
                <Text>google.com</Text>
            </Stack>
            <Stack width={"250px"} justifyContent={"left"} display={"flex"} flexDirection={"row"}>
                <Text>Company Name : </Text>
                <Text>XYZ Company</Text>
            </Stack>
        </Container>
    )
}