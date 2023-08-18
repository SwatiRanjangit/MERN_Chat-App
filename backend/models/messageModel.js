const mongoose = require("mongoose");

const messageModel = mongoose.model(
  {
    sender: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    sender: { type: String, trim: true },
    chat: { type: mongoose.Schema.Types.ObjectId, ref: "Chat" },
  },
  {
    timeStamps: true,
  }
);

const Message = mongoose.model("Message", messageModel);

module.exports = Message;
