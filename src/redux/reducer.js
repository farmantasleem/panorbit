import { addUserData } from "./actionType";

const initialState={userInfo:[]}
const reducer=(oldState=initialState,action)=>{
    const {type,payload} = action;
    switch (type) {
        case addUserData:
            console.log(payload)
            return {...oldState,userInfo:payload}
        default:
           return  oldState
            break;
    }
}


export default reducer;