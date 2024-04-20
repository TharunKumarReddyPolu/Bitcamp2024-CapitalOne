import React, { useEffect, useState } from "react";
import { fetchAccounts } from "../utility/api-communicator";
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const [accounts, setAccounts] = useState([]);
  const fetchUserAccounts = async (uuid) => {
    const acc = await fetchAccounts(uuid);
    setAccounts(acc);
  };

  useEffect(() => {
    if(auth?.user.name=="undefined" || !auth.user.name) navigate('/login')
    fetchUserAccounts(auth.user.uuid);
  }, [auth]);

  return (
    <div className="p-4">
      <h1 className="text-3xl p-4 font-serif">
        Hello {" "}
        {auth.user.name
          .split(" ")
          .map(
            (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
          )
          .join(" ")}
      </h1>
      <div className="flex p-4">
        {accounts &&  accounts.map((account) => {
          return (
            <div className="max-w-sm rounded overflow-hidden shadow-xl w-96 m-4">
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{account.type}</div>
              </div>
              <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  $ {account.balance}
                </span>
              </div>
            </div>
          );
        })}
      </div>
      <div className="m-4 p-4">
        <button className="px-4 bg-gray-800 text-white rounded-lg h-10" onClick={()=>{
            navigate('/create-account')
        }} >Create Account</button>
      </div>






      
    </div>
  );
};

export default Home;
