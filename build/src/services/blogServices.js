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
exports.getBlogByUserID = exports.getBlogByID = exports.getAllBlogs = exports.addBlog = void 0;
const sqlConnection_1 = require("../database/sqlConnection");
const addBlog = (blog) => __awaiter(void 0, void 0, void 0, function* () {
    const { bid, user_id, heading, content, published_date } = blog;
    yield sqlConnection_1.pool.query(`insert into blogs values(${bid},${user_id},'${heading}','${content}','${published_date}')`);
    return "record Inserted";
});
exports.addBlog = addBlog;
const getAllBlogs = () => __awaiter(void 0, void 0, void 0, function* () {
    const blogs = yield sqlConnection_1.pool.query(`select * from blogs`);
    return blogs[0];
});
exports.getAllBlogs = getAllBlogs;
const getBlogByID = (bid) => __awaiter(void 0, void 0, void 0, function* () {
    const blog = yield sqlConnection_1.pool.query(`select * from blogs where bid=${bid}`);
    if (Array.isArray(blog[0]) && blog[0].length === 0) {
        return "No record found";
    }
    else {
        return blog[0];
    }
});
exports.getBlogByID = getBlogByID;
const getBlogByUserID = (user_id) => __awaiter(void 0, void 0, void 0, function* () {
    const blog = yield sqlConnection_1.pool.query(`select * from blogs where user_id=${user_id}`);
    if (Array.isArray(blog[0]) && blog[0].length === 0) {
        return "No record found";
    }
    else {
        return blog[0];
    }
});
exports.getBlogByUserID = getBlogByUserID;
