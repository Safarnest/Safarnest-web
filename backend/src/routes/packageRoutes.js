const express = require("express");

const router = express.Router();

const auth = require("../middleware/authMiddleware");
const admin = require("../middleware/adminMiddleware");

const {
  createPackage,
  getPackages,
} = require("../controllers/packageController");

// Public
router.get("/", getPackages);

// Admin Only
router.post("/", auth, admin, createPackage);

module.exports = router;