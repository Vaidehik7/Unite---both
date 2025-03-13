const express = require("express");
const { getUsers, getUserById, updateUser, deleteUser ,checkUser } = require("../controllers/user.controller");
// const { protect, admin } = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/checkuser",checkUser)

router.get("/",  getUsers); // for admin auth use admin middle ware
router.get("/:id", getUserById);
router.put("/:id", updateUser);
router.delete("/:id",  deleteUser);
// router.get("/", protect, admin, getUsers);// for admin auth use admin middle ware
// router.get("/:id", protect, getUserById);
// router.put("/:id", protect, updateUser);
// router.delete("/:id", protect, admin, deleteUser);// for admin auth use admin middle ware

module.exports = router;
