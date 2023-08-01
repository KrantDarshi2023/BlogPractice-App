import express from "express";
import {
  addUserController,
  getUserByIdController,
  loginUserController,
  updateUserByIdController,
} from "../controller/userController";

var userRouter = express.Router();

userRouter.post("/add", addUserController);
userRouter.post("/login", loginUserController);
userRouter.get("/userDetails/:user_id", getUserByIdController);
userRouter.get("/updateUser/:user_id", updateUserByIdController);

export default userRouter;
