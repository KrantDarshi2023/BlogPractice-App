"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const blogControllers_1 = require("../controller/blogControllers");
const tokenMiddleware_1 = require("../middlewares/tokenMiddleware");
var blogRouter = express_1.default.Router();
blogRouter.post("/add", tokenMiddleware_1.authorization, blogControllers_1.addBlogController);
blogRouter.get("/allBlogs", blogControllers_1.getAllBlogsController);
blogRouter.get("/blogById/:id", blogControllers_1.getBlogByIdController);
blogRouter.get("/blogByUserId/:user_id", blogControllers_1.getBlogByUserIdController);
exports.default = blogRouter;
