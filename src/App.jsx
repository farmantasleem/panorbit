import { useEffect } from "react";
import { useSelector } from "react-redux";



export const App = () => {
  const state= useSelector((state)=>state)
  useEffect(()=>{
    console.log(state)
  },[])
  return (
      <div>
        react app
      </div>
  );
}

export default App;
