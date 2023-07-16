import { addUserData, getProfileData } from "./actionType";


// to fetch all the data and store in the redux

export const getData = () => async(dispatch) =>{
       
    try {
        const resp = await fetch("https://panorbit.in/api/users.json");
        const {users}= await resp.json();
        dispatch({type:addUserData,payload:users})
    } catch (error) {
        console.log("Error",error.message)
    }
        
}
// to get single object data of specif user through id

export const getProfile = (payload) =>{
    
    return {type:getProfileData,payload}
}