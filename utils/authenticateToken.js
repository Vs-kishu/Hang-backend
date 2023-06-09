import jwt from "jsonwebtoken";
import UserModel from "../Models/userModel.js";

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(" ")[1];
  if (token === null) {
    return res.sendStatus(401);
  }
  jwt.verify(token, "kishan", async (err, user) => {
    if (err) return res.sendStatus(403);
    try {
      const foundUser = await UserModel.findOne({ username: user.username });
      if (foundUser) {
        req.user = foundUser;
      } else {
        return res.sendStatus(403);
      }
      next();
    } catch (err) {
      return res.sendStatus(500);
    }
  });
};
export default authenticateToken;
