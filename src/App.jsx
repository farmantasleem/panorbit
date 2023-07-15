import { Button } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ProfilePage } from "./pages/Profile Page/ProfilePage";
import "./app.css"
import { Home } from "./pages/Home Page/Home";
import { getData } from "./redux/action";
import { AllRoutes } from "./Routes/Routes";


export const App = () => {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getData())
  },[])
  return (
    <AllRoutes/>
  );
}

export default App;
