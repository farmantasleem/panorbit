import { Container, Image, Stack, Text } from "@chakra-ui/react"

export const Address = () => {
    return(
        <Container  width="350px" height={"500px"} display={"flex"} gap={"10px"} flexDirection={"column"} justifyContent={"center"} alignContent={"center"} alignItems={"center"}border={"2px"} borderColor={"red"}>
            <Text>Address</Text>
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
            <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHtd6jUqok23bZ6zWoDOt0mLpwcQkMQYztPQ&usqp=CAU"/>
        </Container>
    )
}