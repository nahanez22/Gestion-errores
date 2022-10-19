const winston = require("winston");

const logger = winston.createLogger({
  level: "error",
  format: winston.format.json(),
  defaultMeta: { service: "user-service" },
  transports: [
    new winston.transports.File({ filename: "log/error.log", level: "error" }),
  ],
});

const miFuncion = () => {
  throw new Error(" Atención, esto es un error");
};

try {
  miFuncion();
} catch (e) {
  logger.log("error", `error ${e}`);
} finally {
  logger.log("error", "Finally siempre se ejecuta");
}
