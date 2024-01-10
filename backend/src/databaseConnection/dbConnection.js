import mongoose from "mongoose";
import { database } from "../config.js";

let connectToMongoDB = async () => {
  try {
    await mongoose.connect(`${database}`);
    console.log("connected successfully");
  } catch (error) {
    console.log(error.message);
  }
};

export default connectToMongoDB;
