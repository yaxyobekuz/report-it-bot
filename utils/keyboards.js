// Data
const regions = require("../data/regions");
const districts = require("../data/districts");
const translations = require("../data/translations");

/**
 * Create main menu keyboard
 * @param {string} language - User language code
 * @returns {Object} Keyboard object
 */
const createMainMenuKeyboard = (language = "uz_latn") => {
  const t = (key) => translations[key][language];

  return {
    keyboard: [
      [{ text: t("selectLanguage") }],
      [{ text: t("counterfeitProducts") }],
      [{ text: t("reportViolation") }],
      [{ text: t("myReports") }],
      [{ text: t("sendFeedback") }],
    ],
    resize_keyboard: true,
    one_time_keyboard: false,
  };
};

/**
 * Create language selection keyboard
 * @returns {Object} Keyboard object
 */
const createLanguageKeyboard = () => {
  return {
    keyboard: [
      [{ text: "🇺🇿 O'zbekcha" }, { text: "🇺🇿 Ўзбекча" }],
      [{ text: "🇬🇧 English" }, { text: "🇷🇺 Русский" }],
    ],
    resize_keyboard: true,
    one_time_keyboard: true,
  };
};

/**
 * Create region selection keyboard
 * @param {string} language - User language code
 * @returns {Object} Keyboard object
 */
const createRegionKeyboard = (language = "uz_latn") => {
  const keyboard = regions.map((region) => [{ text: region[language] }]);
  keyboard.push([{ text: translations.backToMain[language] }]);

  return {
    keyboard,
    resize_keyboard: true,
    one_time_keyboard: true,
  };
};

/**
 * Create district selection keyboard
 * @param {string} regionId - Region ID
 * @param {string} language - User language code
 * @returns {Object} Keyboard object
 */
const createDistrictKeyboard = (regionId, language = "uz_latn") => {
  const regionDistricts = districts[regionId] || [];
  const keyboard = regionDistricts.map((district) => [
    { text: district[language] },
  ]);
  keyboard.push([{ text: translations.backToMain[language] }]);

  return {
    keyboard,
    resize_keyboard: true,
    one_time_keyboard: true,
  };
};

/**
 * Create skip button keyboard
 * @param {string} language - User language code
 * @returns {Object} Keyboard object
 */
const createSkipKeyboard = (language = "uz_latn") => {
  return {
    keyboard: [
      [{ text: translations.skip[language] }],
      [{ text: translations.backToMain[language] }],
    ],
    resize_keyboard: true,
    one_time_keyboard: true,
  };
};

/**
 * Create continue button keyboard
 * @param {string} language - User language code
 * @returns {Object} Keyboard object
 */
const createContinueKeyboard = (language = "uz_latn") => {
  return {
    keyboard: [
      [{ text: translations.continue[language] }],
      [{ text: translations.backToMain[language] }],
    ],
    resize_keyboard: true,
    one_time_keyboard: true,
  };
};

/**
 * Create inline keyboard for report status toggle
 * @param {string} reportId - Report ID
 * @param {string} currentStatus - Current status
 * @returns {Object} Inline keyboard object
 */
const createStatusToggleKeyboard = (reportId, currentStatus) => {
  return {
    inline_keyboard: [
      [
        {
          text:
            currentStatus === "checked"
              ? "✅ Tekshirilgan"
              : "⏳ Tekshirilmoqda",
          callback_data: `toggle_status:${reportId}:${
            currentStatus === "checked" ? "unchecked" : "checked"
          }`,
        },
      ],
    ],
  };
};

/**
 * Create back to main menu keyboard
 * @param {string} language - User language code
 * @returns {Object} Keyboard object
 */
const createBackToMainKeyboard = (language = "uz_latn") => {
  return {
    keyboard: [[{ text: translations.backToMain[language] }]],
    resize_keyboard: true,
    one_time_keyboard: false,
  };
};

module.exports = {
  createSkipKeyboard,
  createRegionKeyboard,
  createContinueKeyboard,
  createLanguageKeyboard,
  createMainMenuKeyboard,
  createDistrictKeyboard,
  createBackToMainKeyboard,
  createStatusToggleKeyboard,
};
