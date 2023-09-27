import express from "express";
import {getUploads} from "../controllers/userToAd.controller";

const router = express.Router();

router.get("/requests", getUploads);

export default router;