const Notification = require("../models/notification");

const getNotifications = async (req, res) => {
  const notifications = await Notification.find({ user: req.user.id });
  res.json(notifications);
};

const markAsRead = async (req, res) => {
  await Notification.findByIdAndUpdate(req.params.id, { read: true });
  res.json({ message: "Notification marked as read" });
};

const checkNotification = async(req,res)=>{
    res.send("notification route working properly")
}

module.exports = { getNotifications, markAsRead , checkNotification};
