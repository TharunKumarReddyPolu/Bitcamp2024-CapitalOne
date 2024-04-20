import axios from "axios";
import { createToken } from "../utils.js";
import { COOKIE_NAME } from "../constants.js";
export const userSignUp = async (req, res, next) => {
  //get user details for signup
  try {
    const user = req.body;
    console.log(user.user);
    const url = process.env.API_URL + "/customers?key=" + process.env.API_KEY;

    console.log(url);
    const data = await axios.post(url, {
      first_name: user.user.first_name,
      last_name: user.user.last_name,
      address: {
        street_number: user.user.address.street_number,
        street_name: user.user.address.street_name,
        city: user.user.address.city,
        state: user.user.address.state,
        zip: user.user.address.zip,
      },
    });

    //creating a token when user sign up
    const token = createToken(data._id.toString(), user.email, "7d");

    // //setting expiry date for cookie
    const expires = new Date();
    expires.setDate(expires.getDate() + 7);
    res.cookie(COOKIE_NAME, token, {
      path: "/",
      domain: "localhost",
      expires: expires,
      httpOnly: true,
      signed: true,
    });

    return res.status(201).json({
      message: "User signed up",
      name: data.objectCreated.first_name,
      uuid: data.objectCreated._id,
    });
  } catch (err) {
    // console.log(err);
    return res.status(201).json({
      message: "Error",
      cause: err.message,
    });
  }
};

export const userSignIn = async (req, res, next) => {
    //get user details for signup
    try {
      const user = req.body;
      
      const url = process.env.API_URL + "/customers/" + req.query.uuid + "?key=" + process.env.API_KEY;
  
      console.log('url', url)
      const data = await axios.get(url);
      console.log(data.data);
      //creating a token when user sign up
      const token = createToken(data.data._id.toString(), data.data.first_name, "7d");
  
      // //setting expiry date for cookie
      const expires = new Date();
      expires.setDate(expires.getDate() + 7);
      res.cookie(COOKIE_NAME, token, {
        path: "/",
        domain: "localhost",
        expires: expires,
        httpOnly: true,
        signed: true,
      });
     
      return res.status(200).json({
        message: "User signed in",
        name: data.data.first_name,
        uuid: data.data._id,
      });
    } catch (err) {
      // console.log(err);
      return res.status(200).json({
        message: "Error",
        cause: err.message,
      });
    }
  };
  



export const fetchAccounts = async (req, res, next) => {
    try {
        const url =
        process.env.API_URL +
        "/customers/" +
        req.query.uuid +
        "/accounts?key=" +
        process.env.API_KEY;
    
        const data = await axios.get(url);
        console.log(data.data);
        return res.status(200).json(data.data);
    } catch (err) {
        return res.status(200).json({
        message: "Error",
        cause: err.message,
        });
    }
}  
