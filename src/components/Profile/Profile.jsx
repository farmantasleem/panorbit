import { Container, Image, Stack, Text } from "@chakra-ui/react"

export const Profile = ({data}) => {
    const {name,email,profilepicture,phone,username,company,website} = data
    return(
        <Container  width="350px" borderRight={"2px"} borderColor={"silver"}  height={"500px"} display={"flex"} gap={"10px"} flexDirection={"column"} justifyContent={"center"} alignContent={"center"} alignItems={"center"}>
            <Image width={"180px"} borderRadius={"100px"} height={"180px"} src={profilepicture}/>
            <Text>{name}</Text>
            <Stack width={"280px"}  display={"flex"} justifyContent={"left"} flexDirection={"row"}>
                <Text>Username : </Text>
                <Text fontWeight={"bold"}>{username}</Text>
            </Stack>
            <Stack width={"280px"} justifyContent={"left"} display={"flex"} flexDirection={"row"}>
                <Text>Email : </Text>
                <Text  fontWeight={"bold"}>{email}</Text>
            </Stack>
            <Stack width={"280px"} justifyContent={"left"} display={"flex"} flexDirection={"row"}>
                <Text>Phone : </Text>
                <Text  fontWeight={"bold"}>{phone}</Text>
            </Stack>
            <Stack width={"280px"} justifyContent={"left"} display={"flex"} flexDirection={"row"}>
                <Text>Website : </Text>
                <Text  fontWeight={"bold"}>{website}</Text>
            </Stack>
            <Stack width={"280px"} justifyContent={"left"} display={"flex"} flexDirection={"row"}>
                <Text>Company Name : </Text>
                <Text  fontWeight={"bold"}>{company?.name}</Text>
            </Stack>
            <Stack width={"280px"} justifyContent={"left"} display={"flex"} flexDirection={"row"}>
                <Text>Catch Phrase: </Text>
                <Text  fontWeight={"bold"}>{company?.catchPhrase}</Text>
            </Stack>
            <Stack width={"280px"} justifyContent={"left"} display={"flex"} flexDirection={"row"}>
                <Text>BS: </Text>
                <Text  fontWeight={"bold"}>{company?.bs}</Text>
            </Stack>
        </Container>
    )
}