import Lottie from "lottie-react";
import React from "react";
import registerAnimation from "../assets/authPage/registerPageAnimation.json";
const Register = () => {
  return (
    <>
      <>
        <div className="min-h-screen bg-gray-50 flex justify-center items-center px-4">
          <div className="max-w-5xl w-full bg-white rounded-3xl shadow-xl p-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <h1 className="text-3xl font-bold text-gray-800">
                Let’s Customize Your Experience
              </h1>

              <p className="text-gray-500 mt-2 mb-8">
                Provide additional details about your hotel to tailor the system
                to your needs.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-gray-700 text-sm font-medium">
                    Hotel Name
                  </label>
                  <input
                    type="text"
                    className="w-full mt-1 px-4 py-3 bg-gray-100 border rounded-xl"
                    placeholder="Hotel Name"
                  />
                </div>

                <div>
                  <label className="text-gray-700 text-sm font-medium">
                    Number of Rooms
                  </label>
                  <input
                    type="number"
                    className="w-full mt-1 px-4 py-3 bg-gray-100 border rounded-xl"
                    placeholder="No. of Rooms"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="text-gray-700 text-sm font-medium">
                    Hotel Address
                  </label>
                  <input
                    type="text"
                    className="w-full mt-1 px-4 py-3 bg-gray-100 border rounded-xl"
                    placeholder="Hotel Address"
                  />
                </div>

                <div>
                  <label className="text-gray-700 text-sm font-medium">
                    User Type
                  </label>
                  <select className="w-full mt-1 px-4 py-3 bg-gray-100 border rounded-xl">
                    <option>Admin</option>
                    <option>Manager</option>
                    <option>Receptionist</option>
                    <option>House Keeper</option>
                  </select>
                </div>
              </div>

              <button className="mt-10 w-full py-4 bg-indigo-500 text-white rounded-xl font-semibold hover:bg-indigo-600 transition">
                Continue
              </button>
            </div>

            <div className="authAnimation justify-center items-center">
              <Lottie
                className="mt-10 hidden lg:flex rounded-4xl"
                style={{ width: "25rem", height: "25rem" }}
                animationData={registerAnimation}
                loop={true}
              />
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default Register;
