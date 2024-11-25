import { defaults } from "autoprefixer";

const AUTH_URL = "http://localhost:5000/api/auth/";

const login = async (username, password) => {
  const response = await fetch(AUTH_URL + "login", {
    method: "POST",
    headers: {
      Content_Type: "application/json",
    },
    body: JSON.stringify({ username, password }),
  });

  if (!response.ok) {
    throw new Error("Login failed");
  }

  const data = await response.json();
  localStorage.setItem("user", JSON.stringify(data.user));
  localStorage.setItem("token", JSON.stringify(data.token));

  return data.user;
};

const logout = async () => {
  localStorage.removeItem("user");
  localStorage.removeItem("token");
};

const fetchUserData = async (token) => {
    try {
        const response = await fetch(AUTH_URL + 'user', {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        if (!response.ok) {
            if (response.status === 401) {
                throw new Error("Unauthorized");
            }
            throw new Error('Failed to fetch User Data')
        }

        return await response.json();
    } catch (error) {
        console.error(error);
        throw error;
    }
}

const refreshToken = async () => {
    try {
        const response = await fetch(AUTH_URL + 'refresh-token', {
            method: "POST",
            credentials: 'include'
        })

        if (!response.ok) {
            throw new Error("Failed to refresh token");
        }

        const { token } = await response.json();
        localStorage.setItem('token', token);

    } catch (error) {
        console.error(error);
        throw error;
    }
}

const getUser = () => {
    const user = localStorage.getItem("user");
    return user ? JSON.parse(user) : null; // Return user object or null
};

export default {
    login,
    logout,
    fetchUserData,
    refreshToken,
    getUser
}