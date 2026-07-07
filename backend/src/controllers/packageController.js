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

// ================= GET SINGLE PACKAGE =================

const getPackageBySlug = async (req, res) => {
  try {
    const packageData = await Package.findOne({
      slug: req.params.slug,
    });

    if (!packageData) {
      return res.status(404).json({
        success: false,
        message: "Package Not Found",
      });
    }

    res.status(200).json({
      success: true,
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

// ================= UPDATE PACKAGE =================

const updatePackage = async (req, res) => {
  try {
    const packageData = await Package.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!packageData) {
      return res.status(404).json({
        success: false,
        message: "Package Not Found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Package Updated Successfully",
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

// ================= DELETE PACKAGE =================

const deletePackage = async (req, res) => {
  try {
    const packageData = await Package.findByIdAndDelete(req.params.id);

    if (!packageData) {
      return res.status(404).json({
        success: false,
        message: "Package Not Found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Package Deleted Successfully",
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
  getPackageBySlug,
  updatePackage,
  deletePackage,
};