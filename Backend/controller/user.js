import { User } from "../model/user.js";
import bcrypt from "bcrypt";
// import jwt from "jsonwebtoken";
import { sendCookie } from "../utils/features.js";

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({
      success: true,
      users,
    });
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({
      success: false,
      message: "Error fetching users",
    });
  }
};

// ----------------login---------------------

export const login = async (req, res, next) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email }).select("+password");
  if (!user)
    return res.status(404).json({
      success: false,
      message: "invalid email or password",
    });

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch)
    return res.status(404).json({
      success: false,
      message: "invalid email or password",
    });
  sendCookie(user, res, `Welcome  back, ${user.name}`, 200);
};
// ---------------------register----------------
export const register = async (req, res) => {
  const { name, email, password } = req.body;
  // console.log(req.body);

  let user = await User.findOne({ email });

  if (user) {
    return res.status(404).json({
      success: false,
      message: "User Already Exist",
    });
  }
  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    user = await User.create({ email, name, password: hashedPassword });
    ge: "register successfully",
      sendCookie(user, res, "Register successfully", 201);
  } catch (error) {
    console.error("During registration:", error);
    res.status(500).json({
      success: false,
      message: "error during registration",
    });
  }
};
// ----------get my profile-------------
export const getMyProfile = (req, res) => {
  res.status(200).json({
    success: true,
    user: req.user,
  });
};
// ------logout----------------

export const logout = (req, res) => {
  res
    .status(200)
    .cookie("token", "", { expires: new Date(Date.now()) })
    .json({
      success: true,
      user: req.user,
      message: `you are log out successfully`,
    });
};
