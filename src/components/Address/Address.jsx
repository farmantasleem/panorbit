import { Container, HStack, Image, Stack, Text } from "@chakra-ui/react"

export const Address = ({ address, company }) => {
    return (
        <Container width="500px" height={"550px"} display={"flex"} gap={"10px"} flexDirection={"column"} justifyContent={"center"} alignContent={"center"} alignItems={"center"}>
            <Text textAlign={"left"} width={"full"}>Address</Text>
            <Stack width={"380px"} display={"flex"} justifyContent={"left"} flexDirection={"row"}>
                <Text color={"rgb(154,154,154)"} fontSize={"17px"}>Street : </Text>
                <Text fontWeight={"bold"} color={"rgb(84,84,84)"}>{address?.street}</Text>
            </Stack>
            <Stack width={"380px"} justifyContent={"left"} display={"flex"} flexDirection={"row"}>
                <Text color={"rgb(154,154,154)"} fontSize={"17px"}>Suit : </Text>
                <Text fontWeight={"bold"} color={"rgb(84,84,84)"}>{address?.suite}</Text>
            </Stack>
            <Stack width={"380px"} justifyContent={"left"} display={"flex"} flexDirection={"row"}>
                <Text color={"rgb(154,154,154)"} fontSize={"17px"}>City : </Text>
                <Text fontWeight={"bold"} color={"rgb(84,84,84)"}>{address?.city}</Text>
            </Stack>
            <Stack width={"380px"} justifyContent={"left"} display={"flex"} flexDirection={"row"}>
                <Text color={"rgb(154,154,154)"} fontSize={"17px"}>Zip Code : </Text>
                <Text fontWeight={"bold"} color={"rgb(84,84,84)"}>{address?.zipcode}</Text>
            </Stack>
            <Stack width={"380px"} justifyContent={"left"} display={"flex"} flexDirection={"row"}>
                <Text color={"rgb(154,154,154)"} fontSize={"17px"}>Company Name : </Text>
                <Text fontWeight={"bold"} color={"rgb(84,84,84)"}>{company?.name}</Text>
            </Stack>
            <iframe height={"550px"} style={{ borderRadius: "10px",paddingRight:"20px" }} width={"500px"} src={`https://maps.google.com/maps?q=${address?.geo?.lat},${address?.geo?.lng}&hl=es;&output=embed`}></iframe>
            <HStack>
                <Text>
                    Lat {address?.geo?.lat}
                </Text>
                <Text>
                    Lng {address?.geo?.lng}
                </Text>
            </HStack>
        </Container>
    )
}