const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");

const app = express();

/* ------------------------------ Middleware ------------------------------ */

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(helmet());

app.use(morgan("dev"));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

/* ------------------------------ Health Check ------------------------------ */

app.get("/api/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Safarnest Backend is Running 🚀",
    timestamp: new Date(),
  });
});

/* ------------------------------ 404 ------------------------------ */

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route Not Found",
  });
});

module.exports = app;