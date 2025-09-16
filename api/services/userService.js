import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { formatError } from "../utils/errorFormatter.js";
import config from "../config/keys.js";

const register = async ({ username, email, password }) => {

  const existingUser = await User.findOne({ email });
  if (existingUser) throw { statusCode: 400, error: formatError("Email already registered", "email") };
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = await User.create({ username, email, password: hashedPassword });
  return {
    msg: "User registered successfully",
    user: { id: newUser._id, username: newUser.username, email: newUser.email },
  };
};

const login = async ({ email, password }) => {

    const user = await User.findOne({ email });
    if (!user) throw { statusCode: 404, error: formatError("User not found", "email") };
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw { statusCode: 401, error: formatError("Invalid credentials", "password") };
    const token = jwt.sign(
        { id: user._id },
        config.jwt.secret,
        { expiresIn: config.jwt.expiresIn }
    );
    return {
        msg: "Login successful",
        token,
        user: { id: user._id, username: user.username, email: user.email },
    };
};

export default { register, login };
