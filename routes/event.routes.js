const express = require("express");
const { createEvent, getEvents, getEventById, updateEvent, deleteEvent , checkEvent } = require("../controllers/event.controller");
// const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

// router.post("/", protect, createEvent); // for middleware use protect
router.post("/", createEvent);
router.get("/", getEvents);

router.get("/checkevent",checkEvent) //all dynamic routes should be at last eg. /:id is dynamic route and is after normal route/checkevent

router.get("/:id", getEventById);
router.put("/:id", updateEvent);
router.delete("/:id", deleteEvent);

module.exports = router;
