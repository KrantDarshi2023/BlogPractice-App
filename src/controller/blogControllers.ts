import { Response, Request } from "express";
import {
  addBlog,
  getAllBlogs,
  getBlogByID,
  getBlogByUserID,
} from "../services/blogServices";

export interface Iblog {
  bid: number;
  user_id: number;
  heading: string;
  content: number;
  published_date: Date;
}
const addBlogController = async (req: Request, res: Response) => {
  const blog: Iblog = req.body;
  const data = await addBlog(blog);
  res.send(data);
};
const getAllBlogsController = async (req: Request, res: Response) => {
  const data = await getAllBlogs();
  res.send(data);
};
const getBlogByIdController = async (req: Request, res: Response) => {
  const bid: number = Number(req.params.id);
  const data = await getBlogByID(bid);
  res.json(data);
};
const getBlogByUserIdController = async (req: Request, res: Response) => {
  const user_id: number = Number(req.params.user_id);
  const data = await getBlogByUserID(user_id);
  res.json(data);
};
export {
  addBlogController,
  getAllBlogsController,
  getBlogByIdController,
  getBlogByUserIdController,
};
