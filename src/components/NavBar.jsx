import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import Profile from "./Profile";
import Notification from "./Notification";

const NavBar = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);
  return (
    <div className="absolute flex justify-between mt-5">
      {user ? (
        <div className="welcome font-jetBrains text-3xl font-extrabold">
          Welcome back {user.username}! 🖐
        </div>
      ) : (
        <div className="welcome font-jetBrains text-4xl font-extrabold">
          Welcome back User! 🖐
        </div>
      )}
      <div className="right ml-[450px] flex gap-6">
        <div className="search">
          <SearchBar />
        </div>
        <div className="notifications">
          <Notification />
        </div>
        <div className="profile">
          <Profile />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
