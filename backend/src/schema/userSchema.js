import { Schema } from "mongoose";

let userSchema = Schema(
  {
    userName: {
      type: String,
    },
    phoneNo: {
      type: Number,
    },
    email: {
      type: String,
    },
    password: {
      type: String,
    },
    role: {
      type: String,
    },
  },
  { timestamps: true }
);

export default userSchema;
