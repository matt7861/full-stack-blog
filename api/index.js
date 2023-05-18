import express from "express";
// import cors from "cors";

const app = express();

// Allow to send data to our DB
app.use(express.json());

// Test
app.listen(8800, () => {
  console.log("connected to backend!");
});
