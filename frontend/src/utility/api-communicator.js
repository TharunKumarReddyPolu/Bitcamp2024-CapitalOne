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

    const res = await axios.post("/user/signup",{user})
    if(res.status!==201) throw new Error("Unable to Signup")
    const data = res.data
    console.log(data)
    return data
    // const url =
    //     process.env.REACT_APP_API_URL +
    //     "/customers?key=" +
    //     process.env.REACT_APP_API_KEY;

    // const res = await axios.post(url, {
    //     first_name: user.first_name,
    //     last_name: user.last_name,
    //     address: {
    //     street_number: user.address.street_number,
    //     street_name: user.address.street_name,
    //     city: user.address.city,
    //     state: user.address.state,
    //     zip: user.address.zip,
    //     },
    // });

    // const data = await res.data;
    // return data;
};

export const fetchCustomer = async (user) => {
  const res = await axios.get("/user/signin?uuid="+user.uuid) ;
  return res.data;
};

export const fetchAccounts = async (uuid) => {
  const url =
    process.env.REACT_APP_API_URL +
    "/customers/" +
    uuid +
    "/accounts?key=" +
    process.env.REACT_APP_API_KEY;

  const res = await axios.get("/user/fetchAccounts?uuid="+uuid);
  console.log(res);
  return res.data;
};

export const createAccount = async (accountData, uuid) => {
  const url =
    process.env.REACT_APP_API_URL +
    "/customers/" +
    uuid +
    "/accounts?key=" +
    process.env.REACT_APP_API_KEY;

  const res = await axios.post(url, {
    type: accountData.type,
    nickname: accountData.nickname,
    rewards: 0,
    balance: 0,
    account_number: accountData.account_number,
  });

  const data = await res.data;
  return data;
};
