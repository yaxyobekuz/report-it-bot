const Report = require("../models/report.model");

/**
 * Handle status toggle callback from inline keyboard
 * @param {Object} bot - Telegram bot instance
 * @param {Object} callbackQuery - Callback query object
 */
const handleStatusToggle = async (bot, callbackQuery) => {
  const chatId = callbackQuery.message.chat.id;
  const messageId = callbackQuery.message.message_id;
  const data = callbackQuery.data;

  try {
    // Parse callback data: "toggle_status:reportId:newStatus"
    const parts = data.split(":");
    if (parts.length !== 3 || parts[0] !== "toggle_status") {
      throw new Error("Invalid callback data");
    }

    const reportId = parts[1];
    const newStatus = parts[2];

    // Update report status
    const report = await Report.findByIdAndUpdate(
      reportId,
      { status: newStatus },
      { new: true }
    );

    if (!report) {
      throw new Error("Report not found");
    }

    // Update inline keyboard
    const { createStatusToggleKeyboard } = require("../utils/keyboards");
    await bot.editMessageReplyMarkup(
      createStatusToggleKeyboard(reportId, newStatus),
      {
        chat_id: chatId,
        message_id: messageId,
      }
    );

    // Answer callback query
    const statusText =
      newStatus === "checked"
        ? "✅ Marked as checked"
        : "⏳ Marked as unchecked";
    await bot.answerCallbackQuery(callbackQuery.id, {
      text: statusText,
    });
  } catch (error) {
    console.error("Error in handleStatusToggle:", error);
    await bot.answerCallbackQuery(callbackQuery.id, {
      text: "❌ Error updating status",
    });
  }
};

module.exports = { handleStatusToggle };
