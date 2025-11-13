// Environment setup
require("dotenv").config();

// Utils
const {
  setStep,
  getSession,
  getLanguage,
  clearSession,
} = require("./utils/session");
const { translate } = require("./utils/formatters");

// Telegram Bot API
const TelegramBot = require("node-telegram-bot-api");

// Database
const { connectDatabase } = require("./config/database");

// Handlers
const {
  showLanguageMenu,
  handleLanguageSelection,
} = require("./handlers/language.handler");
const {
  REPORT_STEPS,
  handleReportStep,
  startReportProcess,
} = require("./handlers/report.handler");
const { handleMyReports } = require("./handlers/myReports.handler");
const {
  FEEDBACK_STEP,
  handleFeedbackInput,
  startFeedbackProcess,
} = require("./handlers/feedback.handler");
const { handleStatusToggle } = require("./handlers/callback.handler");
const { handleStart, showMainMenu } = require("./handlers/start.handler");

// Validate environment variables
const requiredEnvVars = ["BOT_TOKEN", "MONGO_URI", "CHANNEL_ID"];
const missingEnvVars = requiredEnvVars.filter((envVar) => !process.env[envVar]);

if (missingEnvVars.length > 0) {
  console.error(
    "❌ Missing required environment variables:",
    missingEnvVars.join(", ")
  );
  console.error("Please check your .env file");
  process.exit(1);
}

// Initialize bot
const bot = new TelegramBot(process.env.BOT_TOKEN, { polling: true });

console.log("🤖 Bot is starting...");

/**
 * Initialize bot and database
 */
const initialize = async () => {
  try {
    // Connect to database
    await connectDatabase();

    // Get bot info
    const botInfo = await bot.getMe();
    console.log(`✅ Bot started successfully: @${botInfo.username}`);
    console.log("📡 Listening for messages...");
  } catch (error) {
    console.error("Failed to initialize bot:", error);
    process.exit(1);
  }
};

/**
 * Handle /start command
 */
bot.onText(/\/start/, async (msg) => {
  await handleStart(bot, msg);
});

/**
 * Handle callback queries (inline keyboard buttons)
 */
bot.on("callback_query", async (callbackQuery) => {
  const data = callbackQuery.data;

  if (data.startsWith("toggle_status:")) {
    await handleStatusToggle(bot, callbackQuery);
  }
});

/**
 * Handle all text messages
 */
bot.on("message", async (msg) => {
  // Skip if it's a command
  if (msg.text && msg.text.startsWith("/")) return;

  const text = msg.text;
  const chatId = msg.chat.id;
  const session = getSession(chatId);
  const language = getLanguage(chatId);

  console.log(session);
  

  const step = session.step;

  try {
    // Check if user is selecting language
    if (step === "languageSelection") {
      await handleLanguageSelection(bot, msg);
      return;
    }

    // Handle main menu buttons
    const myReportsText = translate("myReports", language);
    const backToMainText = translate("backToMain", language);
    const sendFeedbackText = translate("sendFeedback", language);
    const selectLanguageText = translate("selectLanguage", language);
    const reportViolationText = translate("reportViolation", language);
    const counterfeitProductsText = translate("counterfeitProducts", language);

    // Back to main menu
    if (step && text === backToMainText) {
      clearSession(chatId);
      await showMainMenu(bot, chatId, language);
      return;
    }

    // Language selection
    if (!step && text === selectLanguageText) {
      setStep(chatId, "languageSelection");

      await showLanguageMenu(bot, chatId, language);
      return;
    }

    // Counterfeit products info
    if (text === counterfeitProductsText) {
      const infoText = `ℹ️ ${translate("counterfeitProducts", language)}`;
      await bot.sendMessage(chatId, infoText);
      return;
    }

    // Start report process
    if (text === reportViolationText) {
      await startReportProcess(bot, chatId, language);
      return;
    }

    // My reports
    if (!step && text === myReportsText) {
      await handleMyReports(bot, msg);
      return;
    }

    // Send feedback
    if (text === sendFeedbackText) {
      await startFeedbackProcess(bot, chatId, language);
      return;
    }

    // Handle report steps
    const reportSteps = Object.values(REPORT_STEPS);
    if (reportSteps.includes(session.step)) {
      await handleReportStep(bot, msg);
      return;
    }

    // Handle feedback input
    if (session.step === FEEDBACK_STEP) {
      await handleFeedbackInput(bot, msg);
      return;
    }
  } catch (error) {
    console.error("Error handling message:", error);
    const errorText = translate("errorOccurred", language);
    await bot.sendMessage(chatId, errorText);
  }
});

/**
 * Handle location messages
 */
bot.on("location", async (msg) => {
  const session = getSession(msg.chat.id);

  if (session.step === REPORT_STEPS.LOCATION) {
    await handleReportStep(bot, msg);
  }
});

/**
 * Graceful shutdown
 */
const gracefulShutdown = async () => {
  console.log("\n🛑 Shutting down gracefully...");

  try {
    await bot.stopPolling();
    const { disconnectDatabase } = require("./config/database");
    await disconnectDatabase();
    console.log("✅ Shutdown complete");
    process.exit(0);
  } catch (error) {
    console.error("Error during shutdown:", error);
    process.exit(1);
  }
};

process.on("SIGINT", gracefulShutdown);
process.on("SIGTERM", gracefulShutdown);

// Start the bot
initialize();
