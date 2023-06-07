import express from "express";
import { getAllCategories, addCategories, deleteCategories } from "../controllers/CategoryController.js";

const router = express.Router();

router.get("/category", getAllCategories);
router.post("/category", addCategories);
router.delete("/category/:id", deleteCategories);

export default router;
