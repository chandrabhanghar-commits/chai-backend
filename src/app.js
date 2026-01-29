import express from "express";

const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// test route
app.get("/", (req, res) => {
  res.send("🚀 Backend is running successfully");
});

export default app;
