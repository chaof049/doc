import { Schema } from "mongoose";

let cardSchema = Schema({
  picture: {
    type: String,
  },
  title: {
    type: String,
  },
  description: {
    type: String,
  },
});

export default cardSchema;
