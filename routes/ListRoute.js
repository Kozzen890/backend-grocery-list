import express from "express";
import { getAllList, createList, getListId, deleteList } from "../controllers/ListController.js";

const router = express.Router();

router.get("/list", getAllList);
router.get("/list/:id", getListId);
router.post("/list", createList);
router.delete("/list/:id", deleteList);

export default router;
