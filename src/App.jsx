import { Button } from "@chakra-ui/react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { ProfilePage } from "./pages/Profile Page/ProfilePage";



export const App = () => {

  return (
      <ProfilePage/>
  );
}

export default App;
