import React from 'react'
import Lottie from "lottie-react";
import loading from "../assets/authPage/loadinganimation.json";
const Loadingjson = () => {
  return (
    <div className='w-full  h-full fixed top-0 left-0 bg-white flex items-center justify-center z-50'>
       <Lottie
                
                style={{ width: "25rem", height: "25rem" }}
                animationData={loading}
                loop={false}
              /> 
    </div>
  )
}

export default Loadingjson