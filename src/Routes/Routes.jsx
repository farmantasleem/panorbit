import { Route, Routes, } from "react-router-dom"
import { Home } from "../pages/Pages/Home"
import { ProfilePage } from "../pages/Pages/ProfilePage"
import { PostPage } from "../pages/Pages/PostPage"
import { GalleryPage } from "../pages/Pages/GalleryPage"
import { TodoPage } from "../pages/Pages/TodoPage"

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