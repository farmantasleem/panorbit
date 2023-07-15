import { Button } from "@chakra-ui/react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { ProfilePage } from "./pages/Profile Page/ProfilePage";
import "./app.css"
import { Home } from "./pages/Home Page/Home";


export const App = () => {

  return (
    <Home/>
  );
}

export default App;
