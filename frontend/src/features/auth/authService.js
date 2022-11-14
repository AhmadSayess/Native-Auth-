import axios from "axios";

const API_URL = "http://localhost:4000/api/users/";

//Register
const register = async (userData) => {
  const response = await axios.post(API_URL + "register", userData);

  if (response.data) {
    //localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};
const login = async (userData) => {
  const response = await axios.post(API_URL + "login", userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  console.log(response)

  return response.data;
};

const logout = async () => {
  localStorage.removeItem("user");
};

const authService = {
  register,
  logout,
  login,
};

export default authService;
