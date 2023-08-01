import { Iblog } from "../controller/blogControllers";
import { pool } from "../database/sqlConnection";

const addBlog = async (blog: Iblog) => {
  const { bid, user_id, heading, content, published_date } = blog;
  await pool.query(
    `insert into blogs values(${bid},${user_id},'${heading}','${content}','${published_date}')`
  );
  return "record Inserted";
};
const getAllBlogs = async () => {
  const blogs = await pool.query(`select * from blogs`);
  return blogs[0];
};
const getBlogByID = async (bid: number) => {
  const blog = await pool.query(`select * from blogs where bid=${bid}`);
  if (Array.isArray(blog[0]) && blog[0].length === 0) {
    return "No record found";
  } else {
    return blog[0];
  }
};
const getBlogByUserID = async (user_id: number) => {
  const blog = await pool.query(`select * from blogs where user_id=${user_id}`);
  if (Array.isArray(blog[0]) && blog[0].length === 0) {
    return "No record found";
  } else {
    return blog[0];
  }
};
export { addBlog, getAllBlogs, getBlogByID, getBlogByUserID };
