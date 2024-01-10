import express, { json } from "express";
import cors from "cors";
import { port } from "./src/config.js";
import connectToMongoDB from "./src/databaseConnection/dbConnection.js";
import userRouter from "./src/router/userRouter.js";
import uploadRouter from "./src/router/uploadRouter.js";

let expressApp = express();
expressApp.use(json());
expressApp.use(cors());
expressApp.use(express.static("./public"));

expressApp.listen(port, () => {
  console.log(`express app is listening at port ${port}`);
});

expressApp.use("/users", userRouter);
expressApp.use("/uploads", uploadRouter);

connectToMongoDB();
