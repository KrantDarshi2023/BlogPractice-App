"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userController_1 = require("../controller/userController");
var userRouter = express_1.default.Router();
userRouter.post("/add", userController_1.addUserController);
userRouter.post("/login", userController_1.loginUserController);
userRouter.get("/userDetails/:user_id", userController_1.getUserByIdController);
userRouter.get("/updateUser/:user_id", userController_1.updateUserByIdController);
exports.default = userRouter;
