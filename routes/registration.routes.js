const express = require("express");
const { registerForEvent, getRegistrations, cancelRegistration ,checkRegis } = require("../controllers/registration.controller");
// const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/checkregis",checkRegis)

router.post("/:eventId", registerForEvent);
router.get("/:eventId", getRegistrations);
router.delete("/:eventId", cancelRegistration);
// router.post("/:eventId", protect, registerForEvent); // fpr middleware auth protecchtion use protect
// router.get("/:eventId", protect, getRegistrations);
// router.delete("/:eventId", protect, cancelRegistration);

module.exports = router;
