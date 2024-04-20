import React, { useEffect } from "react";
import { fetchAccounts } from "../utility/api-communicator";
import { useAuth } from "../context/authContext";

const Home = () => {
  const auth = useAuth();

  const fetchUserAccounts = async (uuid) => {
    const accounts = await fetchAccounts(uuid);
    console.log(accounts);
  };

  useEffect(() => {
    fetchUserAccounts(auth.user.uuid);
  }, [auth]);

  return <div>Home</div>;
};

export default Home;
