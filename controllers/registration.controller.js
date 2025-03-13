const Registration = require("../models/Registration");

// Register for an event
const registerForEvent = async (req, res) => {
  try {
    const registration = await Registration.create({ event: req.params.eventId, user: req.user.id });
    res.status(201).json(registration);
  } catch (error) {
    res.status(500).json({ message: "Registration failed", error });
  }
};

// Get event registrations
const getRegistrations = async (req, res) => {
  const registrations = await Registration.find({ event: req.params.eventId }).populate("user", "name email");
  res.json(registrations);
};

// Cancel registration
const cancelRegistration = async (req, res) => {
  await Registration.deleteOne({ event: req.params.eventId, user: req.user.id });
  res.json({ message: "Registration cancelled" });
};

const checkRegis = async (req,res)=>{
    res.send("registration routes working properly")
}

module.exports = { registerForEvent, getRegistrations, cancelRegistration , checkRegis};
