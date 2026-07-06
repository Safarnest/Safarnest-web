const Package = require("../models/Package");

// ================= CREATE PACKAGE =================

const createPackage = async (req, res) => {
  try {
    const packageData = await Package.create({
      ...req.body,
      createdBy: req.user.id,
    });

    res.status(201).json({
      success: true,
      message: "Package Created Successfully",
      data: packageData,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// ================= GET ALL PACKAGES =================

const getPackages = async (req, res) => {
  try {
    const packages = await Package.find().sort({
      createdAt: -1,
    });

    res.status(200).json({
      success: true,
      count: packages.length,
      data: packages,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

module.exports = {
  createPackage,
  getPackages,
};