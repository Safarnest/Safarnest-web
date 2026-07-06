const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");

const authRoutes = require("./routes/authRoutes");
const packageRoutes = require("./routes/packageRoutes");

const errorMiddleware = require("./middleware/errorMiddleware");

const app = express();

/* ==================== MIDDLEWARE ==================== */

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

/* ==================== HEALTH CHECK ==================== */

app.get("/api/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Safarnest Backend is Running 🚀",
    timestamp: new Date(),
  });
});

/* ==================== ROUTES ==================== */

app.use("/api/auth", authRoutes);

app.use("/api/packages", packageRoutes);

/* ==================== 404 ==================== */

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route Not Found",
  });
});

/* ==================== GLOBAL ERROR HANDLER ==================== */

app.use(errorMiddleware);

module.exports = app;