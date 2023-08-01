import { pool } from "../database/sqlConnection";
import bcrypt from "bcrypt";
import { sign, Secret } from "jsonwebtoken";
import * as dotenv from "dotenv";
dotenv.config();

import { IUsers } from "../controller/userController";

export const addUser = async (user: IUsers) => {
  try {
    const { id, first_name, last_name, gender, email, password } = user;
    const hashedPassword = await bcrypt.hash(password, 10);
    const res = await pool.query(
      `insert into users values (${id}, '${first_name}','${last_name}','${gender}','${email}','${hashedPassword}')`
    );
    return "Record Inserted Successfully";
  } catch (err) {
    return err;
  }
};

export const loginUser = async (user: IUsers) => {
  try {
    const { email, password } = user;
    if (!email) {
      return "Please Enter credentials";
    } else {
      const data = await pool.query(
        `select user_id, email,password from users where email='${email}'`
      );
      const d: any = data[0];
      if (d.length == 0) {
        return "Wrong Credentials";
      } else {
        const passCompare = await bcrypt.compare(password, d[0].password);

        if (passCompare) {
          const id = d[0].user_id;
          const token = sign(d[0].email, process.env.ACCESS_TOKEN as Secret);
          return { id, token };
        } else {
          return "Wrong Credentials";
        }
      }
    }
  } catch (err) {
    return err;
  }
};

export const getUserById = async (user_id: number) => {
  const res = await pool.query(`select * from users where user_id =${user_id}`);
  if (Array.isArray(res[0]) && res[0].length === 0) {
    return "No record found";
  } else {
    return res[0];
  }
};

export const updateUserById = async (user: IUsers) => {
  const res = await pool.query(``);
  if (Array.isArray(res[0]) && res[0].length === 0) {
    return "Not able to update";
  } else {
    return res[0];
  }
};
export const userServices = { addUser, loginUser, getUserById, updateUserById };
