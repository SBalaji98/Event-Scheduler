const mongoose = require('mongoose');

const UserEventsSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
    unique: true,
  },
  events: [],
});

module.exports = Events = mongoose.model('events', UserEventsSchema);
// {
//     title: {
//       type: String,
//     },
//     start: {
//       type: Date,
//       required: true,
//     },
//     end: {
//       type: Date,
//       required: true,
//     },
//     allDay: {
//       type: Boolean,
//       default: false,
//     },
//     desc: {
//       type: String,
//     },
//   },
