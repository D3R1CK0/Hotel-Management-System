import React, { useState } from "react";
import Lottie from "lottie-react";
import animation from "../assets/authPage/animation.json";
import signupAnimation from "../assets/authPage/signupAnimation.json";
const Auth = () => {
  const [isLogin, setisLogin] = useState(true);
  const [passwordConfirm,setPasswordConfirm]=useState(false);
  return (
    <>
      <div className="container max-w-5xl mx-auto flex justify-center p-6 rounded-4xl shadow-2xl mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 items-center ">
          <div className="flex justify-center">
            {isLogin ? (
              <Lottie
                className="mt-20 authAnimation"
                style={{ width: "25rem", height: "25rem" }}
                animationData={animation}
                loop={true}
              />
            ) : (
              <Lottie
                className="mt-20 authAnimation"
                style={{ width: "25rem", height: "25rem" }}
                animationData={signupAnimation}
                loop={true}
              />
            )}
          </div>
          <div>
            <div className="mt-12 flex flex-col items-center">
              {isLogin? <h1 className="text-2xl xl:text-3xl font-extrabold">Sign In</h1>: <h1 className="text-2xl xl:text-3xl font-extrabold">Sign Up</h1>}
             
              <div className="w-full flex-1 mt-8">
                <div className="flex flex-col items-center">
                  {isLogin?<button className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline">
                    <span className="ml-4">Or Sign Up with Google</span>
                  </button>:<button className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline">
                    <span className="ml-4">Or Sign In with Google</span>
                  </button>}
                </div>

                <div className="my-12 border-b text-center">
                  {isLogin?<div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                    Prefer email? Click here to<span onClick={()=>setisLogin(false)} className="text-blue-600 cursor-pointer hover:underline"> register</span> 
                  </div>:<div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                    Already have an account? <span onClick={()=>setisLogin(true)} className="text-blue-600 cursor-pointer hover:underline">Sign In</span> 
                  </div>}
                </div>

                <div className="mx-auto max-w-xs">
                  {isLogin?<input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="email"
                    placeholder="Username"
                  />:<input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="email"
                    placeholder="Enter Your Email"
                  />}
                  {isLogin?<input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                    type="password"
                    placeholder="Password"
                  />:<input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                    type="password"
                    placeholder="Create Password"
                     onChange={(e) => {
                      if (e.target.value===""){
                        setPasswordConfirm(false)
                      }else{
                        setPasswordConfirm(true)
                      }
                     }
                    }
                  />}
                  
                  {!isLogin && passwordConfirm &&(
                    <input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                    type="password"
                    placeholder="Confirm Password"
                  />
                  )}
                  <button className="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                    <span className="ml-3">{isLogin?"Sign In":"Sign Up"}</span>
                  </button>
                  <p className="mt-6 text-xs text-gray-600 text-center">
                    I agree to abide by templatana's
                    <a
                      href="#"
                      className="border-b border-gray-500 border-dotted"
                    >
                      Terms of Service
                    </a>
                    and its
                    <a
                      href="#"
                      className="border-b border-gray-500 border-dotted"
                    >
                      Privacy Policy
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Auth;
