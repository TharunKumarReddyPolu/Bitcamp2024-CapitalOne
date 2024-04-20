import axios from "axios";

const headers = {
  "access-control-allow-origin": "*",
  "access-control-allow-headers":
    "Content-Type, Authorization, Content-Length, X-Requested-With",
  "access-control-allow-methods": "GET,PUT,POST,DELETE,OPTIONS",

  connection: "keep-alive",
  "content-length": "254",
  "content-type": "application/json; charset=utf-8",
  date: new Date(),
  server: "nginx",
};

export const createCustomer = async (user) => {
  const url =
    process.env.REACT_APP_API_URL +
    "/customers?key=" +
    process.env.REACT_APP_API_KEY;

  const res = await axios.post(url, {
    first_name: user.first_name,
    last_name: user.last_name,
    address: {
      street_number: user.address.street_number,
      street_name: user.address.street_name,
      city: user.address.city,
      state: user.address.state,
      zip: user.address.zip,
    },
  });

  const data = await res.data;
  return data;
};

export const fetchCustomer = async (user) => {
  const url =
    process.env.REACT_APP_API_URL +
    "/customers/" +
    user.uuid +
    "?key=" +
    process.env.REACT_APP_API_KEY;

  const res = await axios.get(url);
return res.data;


};

export const fetchAccounts = async (uuid) => {
    const url =
      process.env.REACT_APP_API_URL +
      "/customers/" +
      uuid +
      "/accounts?key=" +
      process.env.REACT_APP_API_KEY;
  
    const res = await axios.get(url);
    console.log(res)
    return res.data;
  
  
  };

