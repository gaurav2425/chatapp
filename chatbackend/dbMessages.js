const mongoose = require('mongoose');

const MsgSchema = mongoose.Schema({
  message: {
    type: String,
    require: true,
  },
  name: {
    type: String,
    require: true,
  },
  time: {
    type: Date,
    default: Date.now(),
  },
  received: {
    type: Boolean,
  },
});

module.exports = mongoose.model('messagecontent', MsgSchema);
