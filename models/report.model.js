const mongoose = require("mongoose");

/**
 * Report schema for storing counterfeit product reports
 */
const reportSchema = new mongoose.Schema(
  {
    userId: {
      ref: "User",
      index: true,
      required: true,
      type: mongoose.Schema.Types.ObjectId,
    },
    location: {
      latitude: { type: Number, required: true },
      longitude: { type: Number, required: true },
    },
    region: { type: String, required: true },
    district: { type: String, required: true },
    shopAddress: { type: String, default: null },
    description: { type: String, required: true },
    businessEntity: { type: String, default: null },
    telegramId: { type: Number, required: true, index: true },
    shopName: { type: String, default: null },
    mediaFiles: [
      {
        fileId: { type: String, required: true },
        messageId: { type: Number, default: null },
        fileType: { type: String, enum: ["photo", "video"], required: true },
      },
    ],
    applicant: {
      lastName: { type: String, required: true },
      firstName: { type: String, required: true },
      fatherName: { type: String, required: true },
      phoneNumber: { type: String, required: true },
    },
    status: {
      index: true,
      type: String,
      default: "unchecked",
      enum: ["unchecked", "checked"],
    },
    channelMessageId: { type: Number, default: null },
  },
  { timestamps: true }
);

/**
 * Get user reports with pagination
 * @param {Number} telegramId - User Telegram ID
 * @param {Number} limit - Results limit
 * @returns {Promise<Array>} Array of reports
 */
reportSchema.statics.getUserReports = async function (telegramId, limit = 10) {
  return this.find({ telegramId }).sort({ createdAt: -1 }).limit(limit).lean();
};

module.exports = mongoose.model("Report", reportSchema);
