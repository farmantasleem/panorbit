import { Container, Image, Stack, Text } from "@chakra-ui/react"

export const Profile = ({data}) => {
    const {name,email,profilepicture,phone,username,company,website} = data
    return(
        <Container  width="350px" borderRight={"2px"} borderColor={"silver"}  height={"500px"} display={"flex"} gap={"10px"} flexDirection={"column"} justifyContent={"center"} alignContent={"center"} alignItems={"center"}>
            <Image width={"180px"} borderRadius={"100px"} height={"180px"} src={profilepicture}/>
            <Text>{name}</Text>
            <Stack width={"280px"}  display={"flex"} justifyContent={"left"} flexDirection={"row"}>
                <Text color={"rgb(154,154,154)"} fontSize={"17px"}>Username : </Text>
                <Text fontWeight={"bold"}  color={"rgb(84,84,84)"}>{username}</Text>
            </Stack>
            <Stack width={"280px"} justifyContent={"left"} display={"flex"} flexDirection={"row"}>
                <Text color={"rgb(154,154,154)"} fontSize={"17px"}>Email : </Text>
                <Text  fontWeight={"bold"}  color={"rgb(84,84,84)"}>{email}</Text>
            </Stack>
            <Stack width={"280px"} justifyContent={"left"} display={"flex"} flexDirection={"row"}>
                <Text color={"rgb(154,154,154)"} fontSize={"17px"}>Phone: </Text>
                <Text  fontWeight={"bold"}  color={"rgb(84,84,84)"}>{phone}</Text>
            </Stack>
            <Stack width={"280px"} justifyContent={"left"} display={"flex"} flexDirection={"row"}>
                <Text color={"rgb(154,154,154)"} fontSize={"17px"}>Website : </Text>
                <Text  fontWeight={"bold"}  color={"rgb(84,84,84)"}>{website}</Text>
            </Stack>
            <Stack width={"280px"} justifyContent={"left"} display={"flex"} flexDirection={"row"}>
                <Text color={"rgb(154,154,154)"} fontSize={"17px"}>Company Name : </Text>
                <Text  fontWeight={"bold"}  color={"rgb(84,84,84)"}>{company?.name}</Text>
            </Stack>
            <Stack width={"280px"} justifyContent={"left"} display={"flex"} flexDirection={"row"}>
                <Text color={"rgb(154,154,154)"} fontSize={"17px"}>Catch Phrase: </Text>
                <Text  fontWeight={"bold"} color={"rgb(84,84,84)"}>{company?.catchPhrase}</Text>
            </Stack>
            <Stack width={"280px"} justifyContent={"left"} display={"flex"} flexDirection={"row"}>
                <Text color={"rgb(154,154,154)"} fontSize={"17px"}>BS: </Text>
                <Text  fontWeight={"bold"}  color={"rgb(84,84,84)"}>{company?.bs}</Text>
            </Stack>
        </Container>
    )
}