import { Request, Response } from "express";
import {
  addUser,
  getUserById,
  loginUser,
  updateUserById,
} from "../services/userServices";
export interface IUsers {
  id: number;
  first_name: string;
  last_name: string;
  gender: string;
  email: string;
  password: string;
}

const addUserController = async (req: Request, res: Response) => {
  const user: IUsers = req.body;
  const data = await addUser(user);
  res.send(data);
};
const loginUserController = async (req: Request, res: Response) => {
  const user: IUsers = req.body;
  const data = await loginUser(user);
  res.send(data);
};
const getUserByIdController = async (req: Request, res: Response) => {
  const user_id: number = Number(req.params.user_id);
  const data = await getUserById(user_id);
  res.send(data);
};
const updateUserByIdController = async (req: Request, res: Response) => {
  const user: IUsers = req.body;
  const data = await updateUserById(user);
  res.send(data);
};

export {
  addUserController,
  loginUserController,
  getUserByIdController,
  updateUserByIdController,
};
