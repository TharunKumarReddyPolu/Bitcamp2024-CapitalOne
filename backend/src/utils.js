import jwt from "jsonwebtoken";
export const createToken = (id, email, expiresIn) => {
    const payload = { id, email };
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn,
    });
    return token;
  };
  
  export const verifyToken = async (
    req,
    res,
    next
  ) => {
    const token = req.signedCookies[`${COOKIE_NAME}`];
    if(!token || token.trim()==="") return res.status(201).json({message: "Token not received."})
    //verifying token
    return new Promise((resolve, reject) => {
      return jwt.verify(token, process.env.JWT_SECRET, (err, success) => {
        if (err) {
          reject(err.message);
          res.status(401).json({ message: "Token expired!" });
        } else {
          console.log("Token Verification successful");
          resolve();
          res.locals.jwtData = success;
          return next();
        }
      });
    });
  };