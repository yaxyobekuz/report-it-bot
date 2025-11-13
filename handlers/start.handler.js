// Models
const User = require("../models/user.model");

// Keyboards
const { createMainMenuKeyboard } = require("../utils/keyboards");

// Utils
const { translate } = require("../utils/formatters");
const { clearSession, setLanguage, getLanguage } = require("../utils/session");

/**
 * Handle /start command
 * @param {Object} bot - Telegram bot instance
 * @param {Object} msg - Message object
 */
const handleStart = async (bot, msg) => {
  const chatId = msg.chat.id;

  try {
    // Find or create user
    const user = await User.findOrCreate(msg.from);

    // Clear any existing session
    clearSession(chatId);

    // Set user's saved language
    setLanguage(chatId, user.language);

    const language = getLanguage(chatId);
    const welcomeText = translate("welcome", language);

    // Language selection
    await bot.sendMessage(chatId, welcomeText, {
      reply_markup: createMainMenuKeyboard(),
    });
  } catch (error) {
    console.error("Error in handleStart:", error);
    await bot.sendMessage(chatId, "An error occurred. Please try again.");
  }
};

/**
 * Handle main menu display
 * @param {Object} bot - Telegram bot instance
 * @param {number} chatId - Chat ID
 * @param {string} language - Language code
 */
const showMainMenu = async (bot, chatId, language) => {
  const mainMenuText = translate("mainMenu", language);

  await bot.sendMessage(chatId, mainMenuText, {
    reply_markup: createMainMenuKeyboard(language),
  });
};

module.exports = { handleStart, showMainMenu };
