//message model (schema)

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MessageSchema = new Schema({
    messageContent: {
      type: String,
      required: true
    },
    createdOn: {
      type: Date,
      default: Date.now,
      immutable: true
    },
    messageAuthor: {
      type: String,
      required: true
    },
    messagePalindrome: {
      type: Boolean,
      required: true      
    }
  });
  
  module.exports = mongoose.model("Message", MessageSchema);