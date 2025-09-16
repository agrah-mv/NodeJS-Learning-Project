import express from "express";
import { body } from "express-validator";
import { registerUser, loginUser } from "../controllers/userController.js";

const router = express.Router();

// Register
router.post(
  "/register",
  [
    body("username").isLength({ min: 3 }).withMessage("Username must be at least 3 chars"),
    body("email").isEmail().withMessage("Invalid email"),
    body("password").isLength({ min: 6 }).withMessage("Password must be at least 6 chars"),
  ],
  registerUser
);

// Login
router.post(
  "/login",
  [
    body("email").isEmail().withMessage("Invalid email"),
    body("password").exists().withMessage("Password required"),
  ],
  loginUser
);

export default router;
