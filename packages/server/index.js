import fs from "node:fs";
import process from "node:process";
import path from "node:path";
import express from "express";
import cors from "cors";
import dayjs from "dayjs";
import logger from "./logger.js";

const app = express();

const port = 8000;

app.use(cors());
app.use(express.json());

app.post("/download", (req, res) => {

  const filename = req.body.filename;
  const filepath = path.join(process.cwd(), "static", filename);
  const content = fs.readFileSync(filepath);

  res.setHeader("Content-Type", "application/octet-stream");
  res.setHeader("Content-Disposition", `attachment;filename:${filename}`);

  logger.info(`[${dayjs().format("YYYY-MM-DD HH:mm:ss")}] Download ${filename}`)

  res.send(content);
});

app.listen(port, () => {
  if (process.env.NODE_ENV === "develop")
    logger.info(`[${dayjs().format("YYYY-MM-DD HH:mm:ss")}] Server listening on Port ${port}`);

  if (process.env.NODE_ENV === "production")
    logger.error(`[${dayjs().format("YYYY-MM-DD HH:mm:ss")}] Server listening on Port ${port}`);
});
