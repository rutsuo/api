import express, { Express } from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";

// v1
import { DataRouter } from "./v1/routes/DataRoutes";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

app.use("/v1/data", DataRouter);

app.listen(port, () => {
  console.log(
    `🚀 Application Programming Interface is avaiable on: http://localhost:${port}`
  );
});
