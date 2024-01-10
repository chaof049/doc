import { Router } from "express";
import upload from "../middleware/upload.js";
import { uploadMultipleFile } from "../controller/uploadController.js";


let uploadRouter = Router();

uploadRouter.route("/").post(upload.array("pictures", 5), uploadMultipleFile);

export default uploadRouter;
