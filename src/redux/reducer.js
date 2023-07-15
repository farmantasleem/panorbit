import { addUserData, getProfileData } from "./actionType";

const initialState={userInfo:[],profileData:{}}
const reducer=(oldState=initialState,action)=>{
    const {type,payload} = action;
    switch (type) {
        case addUserData:
            console.log(payload)
            return {...oldState,userInfo:payload}
        case getProfileData:
            const singleProfile = oldState.userInfo.filter(el=>el.id==payload)   
          
        return {...oldState,profileData:{...singleProfile[0]}}
        default:
           return  oldState
            break;
    }
}


export default reducer;