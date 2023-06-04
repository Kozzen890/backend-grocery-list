import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import UserRoute from "./routes/UserRoute.js";
import db from "./config/database.js";

dotenv.config();
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());
app.use(UserRoute);

db.sync();
// routes(app, express);

app.listen(port, () => console.log("Server up and running..."));
