import { config } from "dotenv";

config();

export let port = process.env.PORT;
export let database = process.env.DATABASE;
export let secretKey = process.env.SECRET_KEY;
export let email = process.env.EMAIL;
export let password = process.env.PASSWORD;
