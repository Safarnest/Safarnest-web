const express = require("express");

const router = express.Router();

const auth = require("../middleware/authMiddleware");
const admin = require("../middleware/adminMiddleware");

const {
  createPackage,
  getPackages,
  getPackageBySlug,
  updatePackage,
  deletePackage,
} = require("../controllers/packageController");

/* ================= PUBLIC ROUTES ================= */

// Get All Packages
router.get("/", getPackages);

// Get Single Package
router.get("/:slug", getPackageBySlug);

/* ================= ADMIN ROUTES ================= */

// Create Package
router.post("/", auth, admin, createPackage);

// Update Package
router.put("/:id", auth, admin, updatePackage);

// Delete Package
router.delete("/:id", auth, admin, deletePackage);

module.exports = router;