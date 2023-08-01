import express from "express";
import {
  addBlogController,
  getAllBlogsController,
  getBlogByIdController,
  getBlogByUserIdController,
} from "../controller/blogControllers";
import { authorization } from "../middlewares/tokenMiddleware";

var blogRouter = express.Router();

blogRouter.post("/add", authorization, addBlogController);
blogRouter.get("/allBlogs", getAllBlogsController);
blogRouter.get("/blogById/:id", getBlogByIdController);
blogRouter.get("/blogByUserId/:user_id", getBlogByUserIdController);

export default blogRouter;
