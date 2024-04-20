import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/authContext';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
    const auth = useAuth();
    const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    username: '',
    uuid: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setLoginData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  useEffect(()=>{
    
    if(auth?.isLoggedIn) navigate('/home')
  },[auth])

  const handleSubmit = async(event) => {
    event.preventDefault();
    const data =  await auth.login(loginData);
    if(data) navigate("/home");
    // Here, you would typically handle the login logic, e.g., validating the user
  };

  return (
    <div className="max-w-xl mx-auto my-10 p-5 border border-gray-300">
      <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="first_name"
          value={loginData.first_name}
          onChange={handleChange}
          placeholder="First Name"
          className="block w-full px-4 py-2 border rounded-md"
          required
        />
        <input
          type="text"
          name="uuid"
          value={loginData.uuid}
          onChange={handleChange}
          placeholder="Enter your UUID"
          className="block w-full px-4 py-2 border rounded-md"
          required
        />
      
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default LoginPage;