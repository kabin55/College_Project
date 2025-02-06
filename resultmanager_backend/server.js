import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import express from "express";

import { connectDB } from "./config/db.js";
import studentRouter from "./routes/students.js";
import subjectRouter from "./routes/subjects.js";
import examRouter from "./routes/exams.js";
import resultRouter from "./routes/results.js";
import authRouter from "./routes/auth.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use("/students", studentRouter);
app.use("/subjects", subjectRouter);
app.use("/exams", examRouter);
app.use("/results", resultRouter);
app.use("/auth", authRouter);
connectDB();

const Port = process.env.Port || 3000;
const host = process.env.Host || "127.0.0.1";

app.listen(Port, host, () => {
  console.log(`server is running at ${host}:${Port}`);
});
