import express from "express";
import cors from "cors"
import cookieParser  from "cookie-parser"

const app = express();

app.use(cors({
  origin:process.env.CORS_ORIGIN,
  Credentials:true
}))

// middlewares
app.use(express.json({limit:"16kb"}));
app.use(express.urlencoded({ extended: true, limit:"16kb" }));

// test route
app.get("/", (req, res) => {
  res.send("🚀 Backend is running successfully");
});

export default app;
