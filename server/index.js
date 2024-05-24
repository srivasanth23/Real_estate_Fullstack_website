import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import { userRoutes } from "./routes/userRoutes.js";
import { residencyRoutes } from "./routes/residencyRoutes.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

//one time setup
app.use(express.json());
app.use(cookieParser());
app.use(cors());


app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});

app.use("/api/user", userRoutes);
app.use("/api/residency", residencyRoutes);
