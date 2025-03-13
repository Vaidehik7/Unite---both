const Event = require("../models/event");

// Create new event
const createEvent = async (req, res) => {
  const { title, description, date, location } = req.body;
  try {
    const event = await Event.create({ title, description, date, location, createdBy: req.user.id });
    res.status(201).json(event);
  } catch (error) {
    res.status(500).json({ message: "Event creation failed", error });
  }
};

// Get all events
const getEvents = async (req, res) => {
  const events = await Event.find();
  res.json(events);
};

// Get event by ID
const getEventById = async (req, res) => {
  const event = await Event.findById(req.params.id);
  if (event) res.json(event);
  else res.status(404).json({ message: "Event not found" });
};

// Update event
const updateEvent = async (req, res) => {
  const event = await Event.findById(req.params.id);
  if (event) {
    event.title = req.body.title || event.title;
    event.description = req.body.description || event.description;
    event.date = req.body.date || event.date;
    event.location = req.body.location || event.location;

    const updatedEvent = await event.save();
    res.json(updatedEvent);
  } else {
    res.status(404).json({ message: "Event not found" });
  }
};

// Delete event
const deleteEvent = async (req, res) => {
  const event = await Event.findById(req.params.id);
  if (event) {
    await event.remove();
    res.json({ message: "Event deleted" });
  } else {
    res.status(404).json({ message: "Event not found" });
  }
};
const checkEvent = async (req,res)=>{
    res.send ("event route working properly")
}


module.exports = { createEvent, getEvents, getEventById, updateEvent, deleteEvent , checkEvent };
