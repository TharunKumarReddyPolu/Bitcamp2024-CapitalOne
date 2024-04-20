import { createContext, useContext, useEffect, useState } from "react";
import { createCustomer, fetchCustomer } from "../utility/api-communicator";
const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  
    // async function checkStatus(){
    //   const data = await checkAuthStatus();
    //   if(data.message) return;
    //   if(data) {
    //     setUser({email: data.email, name: data.name})
    //     setIsLoggedIn(true)
    //   }
    // }
    useEffect(() => {
      //fetch if the user's cookies are valid then skip login
      //checkStatus()
      if(sessionStorage.getItem('uuid') && sessionStorage.getItem('name')) {
        setUser({name: sessionStorage.getItem('name'), uuid: sessionStorage.getItem('uuid')})
        setIsLoggedIn(true)
      }
    }, []);
    const login = async (loginData) => {
      const data = await fetchCustomer(loginData)
      if(data) {
        setUser({name: data.first_name, uuid: data._id})
        sessionStorage.setItem('uuid', data._id)
        sessionStorage.setItem('name', data.first_name)
        setIsLoggedIn(true)
      }
    };
    const signup = async (userData) => {
      const data = await createCustomer(userData)
      if(data) {
        setUser({name: data.objectCreated.first_name, uuid: data.objectCreated._id})
        sessionStorage.setItem('uuid', data.objectCreated._id)
        sessionStorage.setItem('name', data.objectCreated.first_name)
        setIsLoggedIn(true)
      }

      console.log(user)
    };
    // const logout = async () => {
    //   await logoutUser()
    //   setIsLoggedIn(false)
    //   setUser(null)
    //   // window.location.reload();
    // };
  
    const value = {
      user,
      isLoggedIn,
      signup,
      login,
    //   signup,
    //   logout,
    };
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
  };


export const useAuth = () => useContext(AuthContext);