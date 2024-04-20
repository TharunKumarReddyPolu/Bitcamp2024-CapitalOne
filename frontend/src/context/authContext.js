import { createContext, useContext, useEffect, useState } from "react";
import {
  createAccount,
  createCustomer,
  fetchCustomer,
} from "../utility/api-communicator";
const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    
    //fetch if the user's cookies are valid then skip login
    //checkStatus()
    
    
  }, []);
  const login = async (loginData) => {
    const data = await fetchCustomer(loginData);
    if (data.name && data.uuid) {
      setUser({ name: data.name, uuid: data.uuid });
      setIsLoggedIn(true);
    }

    if(data.name) return true
  };
  const signup = async (userData) => {
    const data = await createCustomer(userData);
    if (data) {
      setUser({
        name: data.objectCreated.first_name,
        uuid: data.objectCreated._id,
      });
      sessionStorage.setItem("uuid", data.objectCreated._id);
      sessionStorage.setItem("name", data.objectCreated.first_name);
      setIsLoggedIn(true);
    }
    if(data.objectCreated.first_name) return true
  };

  

  const logout = async () => {
    // await logoutUser()
    setIsLoggedIn(false)
    setUser(null)
    // window.location.reload();
  };

  const value = {
    user,
    isLoggedIn,
    signup,
    login,
    
    //   signup,
    logout,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
