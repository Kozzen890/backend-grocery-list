import express from "express";
import { getUsers, getUserById, Register, updateUser, deleteUser, login, getUserLogin } from "../controllers/UserController.js";
import { verifyToken } from "../helpers/middleware.js";
import { refreshToken } from "../helpers/RefreshToken.js";

const router = express.Router();

router.get("/users", getUsers);
router.get("/users/:id", getUserById);
router.post("/users", Register);
router.post("/login", login);
router.get("/token", verifyToken, getUserLogin);
router.patch("/users/:id", updateUser);
router.delete("/users/:id", deleteUser);
router.get("/refToken", refreshToken);

export default router;
