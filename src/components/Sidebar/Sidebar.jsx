import { Button, Container } from "@chakra-ui/react"
import "./style.css"
import {AiOutlineArrowRight} from "react-icons/ai"
export const Sidebar = () => {
    return (
        <Container className="sidebar" bgColor={"rgb(61,88,200)"} textAlign={"left"} width={"260px"}  justifyContent={"center"} height={"500px"} gap={"20px"} textColor={"white"} display={"flex"} flexDirection={"column"} color={"white"} >
            <Button color={"rgb(132,132,217)"}  _focus={{color:"white",backgroundColor:"transparent",_after:{display:"flex"}}} borderBottom={"2px"} _hover={{backgroundColor:"none"}}  justifyContent={"left"} borderRadius={"0px"} paddingBottom={"10px"}   backgroundColor={"transparent"} >Profile</Button>
            <Button color={"rgb(132,132,217)"}  _focus={{color:"white",backgroundColor:"transparent",_after:{display:"flex"}}} borderBottom={"2px"} _hover={{backgroundColor:"none"}} justifyContent={"left"} borderRadius={"0px"} paddingBottom={"10px"} backgroundColor={"transparent"}>Posts </Button>
            <Button color={"rgb(132,132,217)"}  _focus={{color:"white",backgroundColor:"transparent",_after:{display:"flex"}}} borderBottom={"2px"} _hover={{backgroundColor:"none"}} justifyContent={"left"} borderRadius={"0px"} paddingBottom={"10px"} backgroundColor={"transparent"}>Gallery</Button>
            <Button color={"rgb(132,132,217)"}  _focus={{color:"white",backgroundColor:"transparent",_after:{display:"flex"}}} borderBottom={"2px"} _hover={{backgroundColor:"none"}} justifyContent={"left"} borderRadius={"0px"} paddingBottom={"10px"} backgroundColor={"transparent"}>ToDo</Button>
        </Container>
    )
}