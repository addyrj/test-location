import express from "express";
import { isAuthenticated } from "../middlewares/auth.js";

import { getAllUsers, register ,  getMyProfile,login,logout} from "../controller/user.js";

const router = express.Router();


router.get("/all", getAllUsers);
router.post("/register",  register);
router.post("/login",  login);
router.get("/logout",  logout);
router.get("/me", isAuthenticated, getMyProfile)



export default router;
