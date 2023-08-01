"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBlogByUserIdController = exports.getBlogByIdController = exports.getAllBlogsController = exports.addBlogController = void 0;
const blogServices_1 = require("../services/blogServices");
const addBlogController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const blog = req.body;
    const data = yield (0, blogServices_1.addBlog)(blog);
    res.send(data);
});
exports.addBlogController = addBlogController;
const getAllBlogsController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield (0, blogServices_1.getAllBlogs)();
    res.send(data);
});
exports.getAllBlogsController = getAllBlogsController;
const getBlogByIdController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const bid = Number(req.params.id);
    const data = yield (0, blogServices_1.getBlogByID)(bid);
    res.json(data);
});
exports.getBlogByIdController = getBlogByIdController;
const getBlogByUserIdController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user_id = Number(req.params.user_id);
    const data = yield (0, blogServices_1.getBlogByUserID)(user_id);
    res.json(data);
});
exports.getBlogByUserIdController = getBlogByUserIdController;
