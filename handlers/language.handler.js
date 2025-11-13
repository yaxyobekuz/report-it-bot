// Models
const User = require("../models/user.model");

// Utilities
const {
  createLanguageKeyboard,
  createMainMenuKeyboard,
} = require("../utils/keyboards");
const { translate } = require("../utils/formatters");
const { setLanguage, getLanguage, setStep } = require("../utils/session");

/**
 * Language mapping from button text to language code
 */
const languageMap = {
  "🇺🇿 O'zbekcha": "uz_latn",
  "🇺🇿 Ўзбекча": "uz_cyrl",
  "🇬🇧 English": "en",
  "🇷🇺 Русский": "ru",
};

/**
 * Handle language selection
 * @param {Object} bot - Telegram bot instance
 * @param {Object} msg - Message object
 */
const handleLanguageSelection = async (bot, msg) => {
  const text = msg.text;
  const chatId = msg.chat.id;

  try {
    // Map button text to language code
    const selectedLanguage = languageMap[text];

    if (!selectedLanguage) {
      await bot.sendMessage(chatId, "Iltimos, tilni tanlang:", {
        reply_markup: createLanguageKeyboard(),
      });
      return;
    }

    // Update user language in database
    await User.findOneAndUpdate(
      { telegramId: msg.from.id },
      { language: selectedLanguage },
      { new: true }
    );

    // Update session
    setStep(chatId, null);
    setLanguage(chatId, selectedLanguage);

    // Send confirmation
    const confirmationText = translate("languageChanged", selectedLanguage);
    await bot.sendMessage(chatId, confirmationText);

    // Show main menu
    const mainMenuText = translate("mainMenu", selectedLanguage);
    await bot.sendMessage(chatId, mainMenuText, {
      reply_markup: createMainMenuKeyboard(selectedLanguage),
    });
  } catch (error) {
    console.error("Error in handleLanguageSelection:", error);
    const language = getLanguage(chatId);
    const errorText = translate("errorOccurred", language);
    await bot.sendMessage(chatId, errorText);
  }
};

/**
 * Show language selection menu
 * @param {Object} bot - Telegram bot instance
 * @param {number} chatId - Chat ID
 * @param {string} language - Current language
 */
const showLanguageMenu = async (bot, chatId, language) => {
  const languageText = translate("selectLanguageMessage", language);

  await bot.sendMessage(chatId, languageText, {
    reply_markup: createLanguageKeyboard(),
  });
};

module.exports = { handleLanguageSelection, showLanguageMenu, languageMap };
