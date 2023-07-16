import { Route, Routes, } from "react-router-dom"
import { Home } from "../pages/Home Page/Home"
import { ProfilePage } from "../pages/Profile Page/ProfilePage"
import { PostPage } from "../pages/Profile Page/PostPage"
import { GalleryPage } from "../pages/Profile Page/GalleryPage"
import { TodoPage } from "../pages/Profile Page/TodoPage"

export const AllRoutes = () =>{
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/profile/:userId" element={<ProfilePage/>}/>
            <Route path="/post" element={<PostPage/>}/>
            <Route path="/gallery" element={<GalleryPage/>}/>
            <Route path="/todo" element={<TodoPage/>}/>
        </Routes>
    )
}