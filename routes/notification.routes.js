const express = require("express");
const { getNotifications, markAsRead ,checkNotification } = require("../controllers/notification.controller");
// const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/", getNotifications);
// router.get("/", protect, getNotifications);

router.get("/checknotif",checkNotification)

// router.put("/:id/read", protect, markAsRead);
router.put("/:id/read", markAsRead);

module.exports = router;
