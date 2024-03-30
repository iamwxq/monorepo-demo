import process from "node:process";
import winston from "winston";

const isProduction = process.env.NODE_ENV === "production";

const logger = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  transports: [
    new winston.transports.File({ filename: "./logs/info.log" }),
    new winston.transports.File({ filename: "./logs/error.log", level: "error" }),
  ],
});

if (!isProduction) {
  logger.add(new winston.transports.Console({
    format: winston.format.simple(),
  }));
}

export default logger;
