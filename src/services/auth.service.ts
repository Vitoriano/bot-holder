import axios from "axios";

const API_URL = "http://localhost:3001";
class AuthService {

  async login(username, password) {
    try {
      const response = await axios.post(`${API_URL}/auth/login`, {
        username,
        password,
      });

      localStorage.setItem("user", JSON.stringify(response.data));
      
      return response.data;
    } catch (error) {
      throw error.response ? error.response.data : new Error("Login failed");
    }
  }

  logout() {
    localStorage.removeItem("user");
  }

  getCurrentUser() {
    const user = localStorage.getItem("user");
    return user ? JSON.parse(user) : null;
  }
}


export default AuthService;
