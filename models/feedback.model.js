const mongoose = require("mongoose");

/**
 * Feedback schema for storing user feedback
 */
const feedbackSchema = new mongoose.Schema(
  {
    userId: {
      ref: "User",
      required: true,
      type: mongoose.Schema.Types.ObjectId,
    },
    message: { type: String, required: true },
    telegramId: { type: Number, required: true, index: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Feedback", feedbackSchema);
