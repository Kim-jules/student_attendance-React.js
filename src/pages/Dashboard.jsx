import React from "react";
import NavBar from "../components/NavBar";
import Left from "../components/Left";
import Right from "../components/Right";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Footter from "../components/Footer";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    // Handling Refresh Token functionality
    const handleRefresh = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/api/auth/refresh-token",
          {
            method: "POST",
            credentials: "include",
          }
        );

        if (response.ok) {
          const { token } = await response.json();
          localStorage.setItem("token", token);
        } else {
          navigate("/login");
        }
      } catch (error) {
        console.error("Failed to refresh the token", error);
      }
    };

    // Fetch User for Authorization purposes
    const fetchUser = async (e) => {
      try {
        const response = await fetch("http://localhost:5000/api/auth/user", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.status === 401) {
          await handleRefresh();
          return fetchUser();
        }

        const result = await response.json();
        setUser(result);
      } catch (error) {
        console.error(error.message);
        navigate("/login");
      }
    };
    if (token) {
      fetchUser();
    } else {
      navigate("/login");
    }


  }, [navigate, token]);
  return (
    <div className="w-[79.5%] ml-[276px] flex flex-col justify-end align-bottom">
      <div className="body">
      <NavBar />
      <div className="pt-24 grid gap-6">
        <div className="div grid  gap-96">
          <div className="left">
            <Left />
          </div>
          {/* <div className="right">
            <Right />
          </div> */}
        </div>
      </div>
      </div>
      <Footter />
    </div>
  );
};

export default Dashboard;
