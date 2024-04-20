import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Home from "./components/Home";
import { useAuth } from "./context/authContext";
import CreateAccount from "./components/CreateAccount";
import axios from "axios";
axios.defaults.baseURL="http://localhost:5001/api/v1"

function App() {
  const auth = useAuth();
  return (
    <div>
      <Header />
      <Routes>  
        <Route path="/signup" element={<Signup />} />
        
        <Route path="/login" element={<Login />} />
        <Route path="/create-account" element={<CreateAccount />} />
        {auth?.isLoggedIn && auth?.user && <Route path="/home" element={<Home />} />}
      </Routes>
    </div>
  );
}

export default App;
