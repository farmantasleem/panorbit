import { Container, HStack, Image, Stack, Text } from "@chakra-ui/react"

export const Address = ({address}) => {
    return(
        <Container  width="390px"  height={"500px"} display={"flex"} gap={"10px"} flexDirection={"column"} justifyContent={"center"} alignContent={"center"} alignItems={"center"}>
            <Text textAlign={"left"}>Address</Text>
            <Stack width={"250px"}  display={"flex"} justifyContent={"left"} flexDirection={"row"}>
                <Text>Street : </Text>
                <Text>No. 672</Text>
            </Stack>
            <Stack width={"250px"} justifyContent={"left"} display={"flex"} flexDirection={"row"}>
                <Text>Suit : </Text>
                <Text>Apt 2015</Text>
            </Stack>
            <Stack width={"250px"} justifyContent={"left"} display={"flex"} flexDirection={"row"}>
                <Text>City : </Text>
                <Text>Berlin</Text>
            </Stack>
            <Stack width={"250px"} justifyContent={"left"} display={"flex"} flexDirection={"row"}>
                <Text>Zip Code : </Text>
                <Text>9631- 13</Text>
            </Stack>
            <Stack width={"250px"} justifyContent={"left"} display={"flex"} flexDirection={"row"}>
                <Text>Company Name : </Text>
                <Text>XYZ Company</Text>
            </Stack>
            <iframe height={"400px"} style={{borderRadius:"10px"}} width={"400px"} src={`https://maps.google.com/maps?q=${address?.geo?.lat},${address?.geo?.lng}&hl=es;&output=embed`}></iframe>
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