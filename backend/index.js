import express from "express";
import db from "./db/db.js";
import cors from "cors";
import dotenv from "dotenv";
import product from "./routes/product.js";
dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
app.use("/api/product", product);

app.listen(process.env.PORT, () => {
  console.log("Server running in port " + process.env.PORT);
});

db.dbConnection();
