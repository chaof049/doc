import { model } from "mongoose";

import userSchema from "./userSchema.js";
import cardSchema from "./cardSchema.js";

export let User = model("User", userSchema);
export let Card = model("Card", cardSchema);
