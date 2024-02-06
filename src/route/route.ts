import express from "express";
import * as cardController from "../controller/cardController";

const router = express.Router();

router.get("/cards", cardController.getCards);

export default router;
