const express = require("express");
const { registerUser, loginUser, getUserProfile , check } = require("../controllers/auth.controller");
// const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/check",check)
// router.get("/profile", protect, getUserProfile);

module.exports = router;



