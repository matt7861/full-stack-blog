import express from "express";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import postRoutes from "./routes/posts.js";
// import cors from "cors";

const app = express();

// Allow to send data to our DB
app.use(express.json());
// defining our api routes
app.use("/api/posts", postRoutes);
app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);

// Test
app.listen(8800, () => {
  console.log("connected to backend!");
});
