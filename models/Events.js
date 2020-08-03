const mongoose = require("mongoose");

const UserEventsSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
    unique: true,
  },
  events: [],
});

module.exports = Events = mongoose.model("events", UserEventsSchema);
