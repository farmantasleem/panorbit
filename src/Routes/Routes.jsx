import { Route, Routes, } from "react-router-dom"
import { Home } from "../pages/Home Page/Home"
import { ProfilePage } from "../pages/Profile Page/ProfilePage"

export const AllRoutes = () =>{
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/profile/:userId" element={<ProfilePage/>}/>
        </Routes>
    )
}