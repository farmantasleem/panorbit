import { Container, Image, Stack, Text } from "@chakra-ui/react"

export const Profile = () => {
    return(
        <Container  width="350px" borderRight={"2px"} borderColor={"silver"}  height={"500px"} display={"flex"} gap={"10px"} flexDirection={"column"} justifyContent={"center"} alignContent={"center"} alignItems={"center"}>
            <Image width={"180px"} borderRadius={"100px"} height={"180px"} src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"/>
            <Text>Clementine Bauch</Text>
            <Stack width={"280px"}  display={"flex"} justifyContent={"left"} flexDirection={"row"}>
                <Text>Username : </Text>
                <Text fontWeight={"bold"}>Farman</Text>
            </Stack>
            <Stack width={"280px"} justifyContent={"left"} display={"flex"} flexDirection={"row"}>
                <Text>Email : </Text>
                <Text  fontWeight={"bold"}>iamfarman@gmail.com</Text>
            </Stack>
            <Stack width={"280px"} justifyContent={"left"} display={"flex"} flexDirection={"row"}>
                <Text>Phone : </Text>
                <Text  fontWeight={"bold"}>8882551145</Text>
            </Stack>
            <Stack width={"280px"} justifyContent={"left"} display={"flex"} flexDirection={"row"}>
                <Text>Website : </Text>
                <Text  fontWeight={"bold"}>google.com</Text>
            </Stack>
            <Stack width={"280px"} justifyContent={"left"} display={"flex"} flexDirection={"row"}>
                <Text>Company Name : </Text>
                <Text  fontWeight={"bold"}>XYZ Company</Text>
            </Stack>
            <Stack width={"280px"} justifyContent={"left"} display={"flex"} flexDirection={"row"}>
                <Text>Catch Phrase: </Text>
                <Text  fontWeight={"bold"}>Multi Layered,Client</Text>
            </Stack>
            <Stack width={"280px"} justifyContent={"left"} display={"flex"} flexDirection={"row"}>
                <Text>BS: </Text>
                <Text  fontWeight={"bold"}>Real time marketing</Text>
            </Stack>
        </Container>
    )
}