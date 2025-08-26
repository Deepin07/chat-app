import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

//file imports
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js"
import { connectDB } from "./lib/db.js";

const app = express();

dotenv.config();

//PORT
const PORT = process.env.PORT || 5001;

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())


app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);

app.listen(PORT, () => {
    connectDB();
    console.log("Server is running on http://localhost:5001");
});
