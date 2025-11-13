const mongoose = require("mongoose");

/**
 * User schema for storing Telegram user data and preferences
 */
const userSchema = new mongoose.Schema(
  {
    username: { type: String, default: null },
    lastName: { type: String, default: null },
    firstName: { type: String, default: null },
    isActive: { type: Boolean, default: true },
    telegramId: { type: Number, required: true, unique: true, index: true },
    language: {
      type: String,
      default: "uz_latn",
      enum: ["uz_latn", "uz_cyrl", "en", "ru"],
    },
  },
  { timestamps: true }
);

/**
 * Find or create user by Telegram ID
 * @param {Object} userData - Telegram user data
 * @returns {Promise<Object>} User document
 */
userSchema.statics.findOrCreate = async function (userData) {
  let user = await this.findOne({ telegramId: userData.id });

  if (!user) {
    user = await this.create({
      telegramId: userData.id,
      username: userData.username,
      firstName: userData.first_name,
      lastName: userData.last_name,
    });
  }

  return user;
};

module.exports = mongoose.model("User", userSchema);
