import { addUserData, getProfileData } from "./actionType";


export const getData = () => async(dispatch) =>{
       
    try {
        const resp = await fetch("https://panorbit.in/api/users.json");
        const {users}= await resp.json();
        dispatch({type:addUserData,payload:users})
    } catch (error) {
        console.log("Error",error.message)
    }
        
}

export const getProfile = (payload) =>{
    
    return {type:getProfileData,payload}
}