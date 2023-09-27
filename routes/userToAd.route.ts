import express from "express";
import authToAdController from "../controllers/userToAd.controller";

const router = express.Router();

router.post("/sendtoadmin", authToAdController.authToAdController);

export default router;