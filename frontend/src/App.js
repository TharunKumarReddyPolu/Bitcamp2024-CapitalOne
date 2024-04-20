import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Signup from "./components/Signup";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
