import express from "express";
import photoController from "../controllers/photoController.js";

const router = express.Router();

router.route("/").get(photoController.getAllPhotos);
router.route("/").post(photoController.createPhoto);

export default router;
