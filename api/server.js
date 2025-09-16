import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import config from "./config/keys.js";
import userRoutes from "./routes/userRoutes.js";

const app = express();

// Middleware
app.use(cors({
  origin: "http://localhost:4200", 
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use(express.json());

// DB connection
connectDB();

// Routes
app.use("/api/users", userRoutes);

app.listen(config.port, () =>
  console.log(`Server running on port ${config.port}`)
);