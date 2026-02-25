import 'dotenv/config';
import connectDB from "./db/index.js";
import app from "./app.js";

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server running on port: ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log("MONGODB db connection failed !!!", error);
  }); // ← Yeh closing braces aur semicolon missing tha