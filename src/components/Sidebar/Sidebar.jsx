import { Button, Container } from "@chakra-ui/react"
import "./style.css"
import {AiOutlineArrowRight} from "react-icons/ai"
import { NavLink } from "react-router-dom"
export const Sidebar = () => {
    return (
        <Container className="sidebar"  bgColor={"rgb(61,88,200)"} textAlign={"left"} width={"230px"}  justifyContent={"center"} height={"550px"} gap={"20px"} textColor={"white"} display={"flex"} flexDirection={"column"} color={"white"} >
           <NavLink to={`/profile/${localStorage.getItem("userId")}`}><Button color={"rgb(132,132,217)"}  _focus={{color:"white",backgroundColor:"transparent",_after:{display:"flex"}}} borderBottom={"2px"} _hover={{backgroundColor:"none"}}  justifyContent={"left"} borderRadius={"0px"} paddingBottom={"10px"}   backgroundColor={"transparent"} >Profile</Button>  </NavLink>
            <NavLink to={"/post"}><Button color={"rgb(132,132,217)"}  _focus={{color:"white",backgroundColor:"transparent",_after:{display:"flex"}}} borderBottom={"2px"} _hover={{backgroundColor:"none"}} justifyContent={"left"} borderRadius={"0px"} paddingBottom={"10px"} backgroundColor={"transparent"}>Posts </Button>  </NavLink>
           <NavLink to={"/gallery"}><Button color={"rgb(132,132,217)"}  _focus={{color:"white",backgroundColor:"transparent",_after:{display:"flex"}}} borderBottom={"2px"} _hover={{backgroundColor:"none"}} justifyContent={"left"} borderRadius={"0px"} paddingBottom={"10px"} backgroundColor={"transparent"}>Gallery</Button>  </NavLink>
           <NavLink to={"/todo"}> <Button color={"rgb(132,132,217)"}  _focus={{color:"white",backgroundColor:"transparent",_after:{display:"flex"}}} borderBottom={"2px"} _hover={{backgroundColor:"none"}} justifyContent={"left"} borderRadius={"0px"} paddingBottom={"10px"} backgroundColor={"transparent"}>ToDo</Button>  </NavLink>
        </Container>
    )
}