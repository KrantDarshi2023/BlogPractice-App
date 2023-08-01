import mysql from "mysql2";
export const pool = mysql
  .createPool({
    host: "localhost",
    user: "root",
    password: "password",
    database: "blogdata",
  })
  .promise();

