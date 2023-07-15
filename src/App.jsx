import { Button } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ProfilePage } from "./pages/Profile Page/ProfilePage";
import "./app.css"
import { Home } from "./pages/Home Page/Home";
import { getData } from "./redux/action";


export const App = () => {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getData())
  },[])
  return (
    <Home/>
  );
}

export default App;
