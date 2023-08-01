"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userServices = exports.updateUserById = exports.getUserById = exports.loginUser = exports.addUser = void 0;
const sqlConnection_1 = require("../database/sqlConnection");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = require("jsonwebtoken");
const dotenv = __importStar(require("dotenv"));
dotenv.config();
const addUser = (user) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id, first_name, last_name, gender, email, password } = user;
        const hashedPassword = yield bcrypt_1.default.hash(password, 10);
        const res = yield sqlConnection_1.pool.query(`insert into users values (${id}, '${first_name}','${last_name}','${gender}','${email}','${hashedPassword}')`);
        return "Record Inserted Successfully";
    }
    catch (err) {
        return err;
    }
});
exports.addUser = addUser;
const loginUser = (user) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = user;
        if (!email) {
            return "Please Enter credentials";
        }
        else {
            const data = yield sqlConnection_1.pool.query(`select user_id, email,password from users where email='${email}'`);
            const d = data[0];
            if (d.length == 0) {
                return "Wrong Credentials";
            }
            else {
                const passCompare = yield bcrypt_1.default.compare(password, d[0].password);
                if (passCompare) {
                    const id = d[0].user_id;
                    const token = (0, jsonwebtoken_1.sign)(d[0].email, process.env.ACCESS_TOKEN);
                    return { id, token };
                }
                else {
                    return "Wrong Credentials";
                }
            }
        }
    }
    catch (err) {
        return err;
    }
});
exports.loginUser = loginUser;
const getUserById = (user_id) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield sqlConnection_1.pool.query(`select * from users where user_id =${user_id}`);
    if (Array.isArray(res[0]) && res[0].length === 0) {
        return "No record found";
    }
    else {
        return res[0];
    }
});
exports.getUserById = getUserById;
const updateUserById = (user) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield sqlConnection_1.pool.query(``);
    if (Array.isArray(res[0]) && res[0].length === 0) {
        return "Not able to update";
    }
    else {
        return res[0];
    }
});
exports.updateUserById = updateUserById;
exports.userServices = { addUser: exports.addUser, loginUser: exports.loginUser, getUserById: exports.getUserById, updateUserById: exports.updateUserById };
