import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Home from "./components/Home";
import { useAuth } from "./context/authContext";

function App() {
  const auth = useAuth();
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/signup" element={<Signup />} />
        
        <Route path="/login" element={<Login />} />
        {auth?.isLoggedIn && auth?.user && <Route path="/home" element={<Home />} />}
      </Routes>
    </div>
  );
}

export default App;
