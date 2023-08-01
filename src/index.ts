import express from "express";
import userRouter from "./routes/userRoutes";
import { json } from "stream/consumers";
import blogRouter from "./routes/blogRoutes";
import cors from "cors";

export const app = express();

app.use(cors());
app.use(express.json());

app.use("/users", userRouter);
app.use("/blog", blogRouter);

app.listen(3000, () => {
  console.log(`Running.....`);
});
