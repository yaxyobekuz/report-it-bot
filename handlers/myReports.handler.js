// Models
const Report = require("../models/report.model");

// Utilities
const { getLanguage } = require("../utils/session");
const { createMainMenuKeyboard } = require("../utils/keyboards");
const { translate, formatReport } = require("../utils/formatters");

/**
 * Handle "My Reports" request
 * @param {Object} bot - Telegram bot instance
 * @param {Object} msg - Message object
 */
const handleMyReports = async (bot, msg) => {
  const chatId = msg.chat.id;
  const language = getLanguage(chatId);

  try {
    const reports = await Report.getUserReports(msg.from.id, 10);

    if (reports.length === 0) {
      const noReportsText = translate("noReports", language);
      await bot.sendMessage(chatId, noReportsText, {
        reply_markup: createMainMenuKeyboard(language),
      });
      return;
    }

    // Send each report
    for (const report of reports) {
      const reportText = formatReport(report, language);
      await bot.sendMessage(chatId, reportText);
    }

    await bot.sendMessage(chatId, `📊 Total: ${reports.length}`, {
      reply_markup: createMainMenuKeyboard(language),
    });
  } catch (error) {
    console.error("Error in handleMyReports:", error);
    const errorText = translate("errorOccurred", language);
    await bot.sendMessage(chatId, errorText);
  }
};

module.exports = { handleMyReports };
