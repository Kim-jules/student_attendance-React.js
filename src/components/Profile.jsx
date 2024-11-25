"use client";

import { Avatar, Dropdown } from "flowbite-react";
import image1 from "../assets/images/1.jpg";
import { useEffect, useState } from "react";

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <Dropdown
      label={
        <Avatar
          alt="User settings"
          img={image1}
          className="object-cover"
          rounded
        />
      }
      arrowIcon={false}
      inline
    >
      <Dropdown.Header>
        {user ? (
          <>
            <span className="block font-jetBrains text-lg text-lime-400 font-bold">{user.username}</span>
            <span className="block truncate text-sm font-medium italic">
              {user.email || "name@flowbite.com"} {/* Use user.email if available */}
            </span>
          </>
        ) : (
          <span className="block font-jetBrains text-lg text-lime-400 font-bold">Loading...</span>
        )}
      </Dropdown.Header>
      <Dropdown.Item>Settings</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item>Sign out</Dropdown.Item>
    </Dropdown>
  );
};

export default Profile;