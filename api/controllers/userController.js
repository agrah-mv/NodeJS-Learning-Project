import { validationResult } from "express-validator";
import userService from "../services/userService.js";

// @desc Register user
export const registerUser = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

    const result = await userService.register(req.body);
    res.status(201).json(result);
  } catch (err) {
    res.status(err.statusCode || 500).json(err.error || { errors: [{ msg: "Server error" }] });
  }
};

// @desc Login user
export const loginUser = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

    const result = await userService.login(req.body);
    res.json(result);
  } catch (err) {
     res.status(err.statusCode || 500).json(err.error || { errors: [{ msg: "Server error" }] });
  }
};
