// Models
const User = require("../models/user.model");
const Feedback = require("../models/feedback.model");

// Utilities
const {
  createBackToMainKeyboard,
  createMainMenuKeyboard,
} = require("../utils/keyboards");
const { getLanguage, setStep, clearSession } = require("../utils/session");
const { translate, formatChannelFeedback } = require("../utils/formatters");

const FEEDBACK_STEP = "awaiting_feedback";

/**
 * Start feedback process
 * @param {Object} bot - Telegram bot instance
 * @param {number} chatId - Chat ID
 * @param {string} language - User language
 */
const startFeedbackProcess = async (bot, chatId, language) => {
  setStep(chatId, FEEDBACK_STEP);

  const text = translate("feedbackPrompt", language);
  await bot.sendMessage(chatId, text, {
    reply_markup: createBackToMainKeyboard(language),
  });
};

/**
 * Handle feedback submission
 * @param {Object} bot - Telegram bot instance
 * @param {Object} msg - Message object
 */
const handleFeedbackInput = async (bot, msg) => {
  const text = msg.text;
  const chatId = msg.chat.id;
  const language = getLanguage(chatId);

  // Validate input
  if (!text) {
    await bot.sendMessage(chatId, translate("invalidFeedback", language));
    return;
  }

  try {
    // Find user
    const user = await User.findOne({ telegramId: msg.from.id });

    if (!user) {
      throw new Error("User not found");
    }

    // Save feedback
    await Feedback.create({
      userId: user._id,
      message: text.trim(),
      telegramId: msg.from.id,
    });

    // Send confirmation
    const successText = translate("feedbackSubmitted", language);
    await bot.sendMessage(chatId, successText, {
      reply_markup: createMainMenuKeyboard(language),
    });

    // Clear session
    clearSession(chatId);

    // Send confirmation
    const formattedFeedback = formatChannelFeedback(text, msg.from);
    await bot.sendMessage(process.env.CHANNEL_ID, formattedFeedback);
  } catch (error) {
    console.error("Error in handleFeedbackInput:", error);
    const errorText = translate("errorOccurred", language);
    await bot.sendMessage(chatId, errorText);
  }
};

module.exports = { startFeedbackProcess, handleFeedbackInput, FEEDBACK_STEP };
