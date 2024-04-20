import React, { useEffect, useState } from "react";

import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";

function Signup() {
  const auth = useAuth();
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    first_name: "",
    last_name: "",
    address: {
      street_number: "",
      street_name: "",
      city: "",
      state: "",
      zip: "",
    },
  });
  
  useEffect(() => {
    if(auth?.user) navigate('/home')
  }, [auth]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name in userData) {
      setUserData({ ...userData, [name]: value });
    } else {
      setUserData({
        ...userData,
        address: {
          ...userData.address,
          [name]: value,
        },
      });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    await auth.signup(userData);
    navigate("/home");
    // Here, you would typically handle the form submission, e.g., sending data to a backend server
  };

  return (
    <div className="max-w-xl mx-auto my-10 p-5 border border-gray-300">
      <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="first_name"
          value={userData.first_name}
          onChange={handleChange}
          placeholder="First Name"
          className="block w-full px-4 py-2 border rounded-md"
          required
        />
        <input
          type="text"
          name="last_name"
          value={userData.last_name}
          onChange={handleChange}
          placeholder="Last Name"
          className="block w-full px-4 py-2 border rounded-md"
          required
        />
        <input
          type="text"
          name="street_number"
          value={userData.address.street_number}
          onChange={handleChange}
          placeholder="Street Number"
          className="block w-full px-4 py-2 border rounded-md"
        />
        <input
          type="text"
          name="street_name"
          value={userData.address.street_name}
          onChange={handleChange}
          placeholder="Street Name"
          className="block w-full px-4 py-2 border rounded-md"
        />
        <input
          type="text"
          name="city"
          value={userData.address.city}
          onChange={handleChange}
          placeholder="City"
          className="block w-full px-4 py-2 border rounded-md"
          required
        />
        <input
          type="text"
          name="state"
          value={userData.address.state}
          onChange={handleChange}
          placeholder="State"
          className="block w-full px-4 py-2 border rounded-md"
          required
        />
        <input
          type="text"
          name="zip"
          value={userData.address.zip}
          onChange={handleChange}
          placeholder="ZIP Code"
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

export default Signup;
