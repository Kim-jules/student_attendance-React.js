"use client";

import React from "react";

const Profile = () => {
  return (
    <div className="flex gap-5 items-center justify-center">
      <div className="register">
        <button className=" p-4  rounded-xl hover:text-green-500 hover:underline hover:underline-offset-2 transition-all ease-in-out duration-200">Register</button>
      </div>
      <div className="login">
        <button className="p-4  rounded-xl hover:text-green-500 hover:underline hover:underline-offset-2 transition-all ease-in-out duration-200">Login</button>
      </div>
    </div>
  );
};

export default Profile;
