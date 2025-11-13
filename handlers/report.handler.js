// Data
const regions = require("../data/regions");
const districts = require("../data/districts");

// Models
const User = require("../models/user.model");
const Report = require("../models/report.model");

// Utilities
const {
  setStep,
  setData,
  getData,
  getSession,
  getLanguage,
  clearSession,
} = require("../utils/session");
const {
  validateText,
  validateName,
  validateLocation,
  validatePhoneNumber,
} = require("../utils/validators");
const { extractMediaFileId, hasMedia } = require("../utils/media");
const {
  createSkipKeyboard,
  createRegionKeyboard,
  createDistrictKeyboard,
  createContinueKeyboard,
  createMainMenuKeyboard,
  createBackToMainKeyboard,
  createStatusToggleKeyboard,
} = require("../utils/keyboards");
const { translate, formatChannelReport } = require("../utils/formatters");

const REPORT_STEPS = {
  MEDIA: "media",
  REGION: "region",
  CONFIRM: "confirm",
  DISTRICT: "district",
  LOCATION: "location",
  LAST_NAME: "last_name",
  SHOP_NAME: "shop_name",
  FIRST_NAME: "first_name",
  DESCRIPTION: "description",
  FATHER_NAME: "father_name",
  PHONE_NUMBER: "phone_number",
  SHOP_ADDRESS: "shop_address",
  BUSINESS_ENTITY: "business_entity",
};

/**
 * Start report submission process
 * @param {Object} bot - Telegram bot instance
 * @param {number} chatId - Chat ID
 * @param {string} language - User language
 */
const startReportProcess = async (bot, chatId, language) => {
  clearSession(chatId);
  setStep(chatId, REPORT_STEPS.REGION);
  setData(chatId, "mediaFiles", []);

  const text = translate("selectRegion", language);
  await bot.sendMessage(chatId, text, {
    reply_markup: createRegionKeyboard(language),
  });
};

/**
 * Handle report form steps
 * @param {Object} bot - Telegram bot instance
 * @param {Object} msg - Message object
 */
const handleReportStep = async (bot, msg) => {
  const chatId = msg.chat.id;
  const session = getSession(chatId);
  const language = getLanguage(chatId);

  try {
    switch (session.step) {
      case REPORT_STEPS.REGION:
        await handleRegionSelection(bot, msg, language);
        break;

      case REPORT_STEPS.DISTRICT:
        await handleDistrictSelection(bot, msg, language);
        break;

      case REPORT_STEPS.LOCATION:
        await handleLocationInput(bot, msg, language);
        break;

      case REPORT_STEPS.BUSINESS_ENTITY:
        await handleBusinessEntityInput(bot, msg, language);
        break;

      case REPORT_STEPS.SHOP_NAME:
        await handleShopNameInput(bot, msg, language);
        break;

      case REPORT_STEPS.SHOP_ADDRESS:
        await handleShopAddressInput(bot, msg, language);
        break;

      case REPORT_STEPS.DESCRIPTION:
        await handleDescriptionInput(bot, msg, language);
        break;

      case REPORT_STEPS.MEDIA:
        await handleMediaInput(bot, msg, language);
        break;

      case REPORT_STEPS.FIRST_NAME:
        await handleFirstNameInput(bot, msg, language);
        break;

      case REPORT_STEPS.LAST_NAME:
        await handleLastNameInput(bot, msg, language);
        break;

      case REPORT_STEPS.FATHER_NAME:
        await handleFatherNameInput(bot, msg, language);
        break;

      case REPORT_STEPS.PHONE_NUMBER:
        await handlePhoneNumberInput(bot, msg, language);
        break;

      default:
        break;
    }
  } catch (error) {
    console.error("Error in handleReportStep:", error);
    const errorText = translate("errorOccurred", language);
    await bot.sendMessage(chatId, errorText);
  }
};

/**
 * Handle region selection
 */
const handleRegionSelection = async (bot, msg, language) => {
  const text = msg.text;
  const chatId = msg.chat.id;

  // Find region by name
  const region = regions.find((r) => r[language] === text);

  if (!region) {
    const errorText = translate("invalidInput", language);
    await bot.sendMessage(chatId, errorText);
    return;
  }

  setData(chatId, "region", region.id);
  setData(chatId, "regionName", region[language]);
  setStep(chatId, REPORT_STEPS.DISTRICT);

  const districtText = translate("selectDistrict", language);
  await bot.sendMessage(chatId, districtText, {
    reply_markup: createDistrictKeyboard(region.id, language),
  });
};

/**
 * Handle district selection
 */
const handleDistrictSelection = async (bot, msg, language) => {
  const chatId = msg.chat.id;
  const text = msg.text;
  const regionId = getData(chatId, "region");

  const regionDistricts = districts[regionId] || [];
  const district = regionDistricts.find((d) => d[language] === text);

  if (!district) {
    const errorText = translate("invalidInput", language);
    await bot.sendMessage(chatId, errorText);
    return;
  }

  setData(chatId, "district", district.id);
  setData(chatId, "districtName", district[language]);
  setStep(chatId, REPORT_STEPS.LOCATION);

  const locationText = translate("sendLocation", language);
  await bot.sendPhoto(chatId, "./how-to-send-location.jpg", {
    caption: locationText,
    reply_markup: createBackToMainKeyboard(language),
  });
};

/**
 * Handle location input
 */
const handleLocationInput = async (bot, msg, language) => {
  const chatId = msg.chat.id;

  if (!msg.location) {
    const errorText = translate("invalidInput", language);
    await bot.sendMessage(chatId, errorText);
    return;
  }

  if (!validateLocation(msg.location)) {
    const errorText = translate("invalidInput", language);
    await bot.sendMessage(chatId, errorText);
    return;
  }

  setData(chatId, "location", {
    latitude: msg.location.latitude,
    longitude: msg.location.longitude,
  });
  setStep(chatId, REPORT_STEPS.BUSINESS_ENTITY);

  const businessText = translate("enterBusinessEntity", language);
  await bot.sendMessage(chatId, businessText, {
    reply_markup: createSkipKeyboard(language),
  });
};

/**
 * Handle business entity input
 */
const handleBusinessEntityInput = async (bot, msg, language) => {
  const chatId = msg.chat.id;
  const text = msg.text;
  const skipText = translate("skip", language);

  if (text === skipText) {
    setData(chatId, "businessEntity", null);
  } else {
    setData(chatId, "businessEntity", text.trim());
  }

  setStep(chatId, REPORT_STEPS.SHOP_NAME);

  const shopNameText = translate("enterShopName", language);
  await bot.sendMessage(chatId, shopNameText, {
    reply_markup: createSkipKeyboard(language),
  });
};

/**
 * Handle shop name input
 */
const handleShopNameInput = async (bot, msg, language) => {
  const chatId = msg.chat.id;
  const text = msg.text;
  const skipText = translate("skip", language);

  if (text === skipText) {
    setData(chatId, "shopName", null);
  } else {
    setData(chatId, "shopName", text.trim());
  }

  setStep(chatId, REPORT_STEPS.SHOP_ADDRESS);

  const shopAddressText = translate("enterShopAddress", language);
  await bot.sendMessage(chatId, shopAddressText, {
    reply_markup: createSkipKeyboard(language),
  });
};

/**
 * Handle shop address input
 */
const handleShopAddressInput = async (bot, msg, language) => {
  const chatId = msg.chat.id;
  const text = msg.text;
  const skipText = translate("skip", language);

  if (text === skipText) {
    setData(chatId, "shopAddress", null);
  } else {
    setData(chatId, "shopAddress", text.trim());
  }

  setStep(chatId, REPORT_STEPS.DESCRIPTION);

  const descriptionText = translate("enterDescription", language);
  await bot.sendMessage(chatId, descriptionText, {
    reply_markup: createBackToMainKeyboard(language),
  });
};

/**
 * Handle description input
 */
const handleDescriptionInput = async (bot, msg, language) => {
  const chatId = msg.chat.id;
  const text = msg.text;

  if (!validateText(text, 5, 1000)) {
    const errorText = translate("invalidInput", language);
    await bot.sendMessage(chatId, errorText);
    return;
  }

  setData(chatId, "description", text.trim());
  setStep(chatId, REPORT_STEPS.MEDIA);

  const mediaText = translate("sendMedia", language);
  await bot.sendMessage(chatId, mediaText, {
    reply_markup: createContinueKeyboard(language),
  });
};

/**
 * Handle media input
 */
const handleMediaInput = async (bot, msg, language) => {
  const text = msg.text;
  const chatId = msg.chat.id;
  const continueText = translate("continue", language);

  // Check if user wants to continue
  if (text === continueText) {
    const mediaFiles = getData(chatId, "mediaFiles") || [];

    if (mediaFiles.length === 0) {
      const noMediaText = translate("noMediaProvided", language);
      await bot.sendMessage(chatId, noMediaText);
      return;
    }

    setStep(chatId, REPORT_STEPS.FIRST_NAME);
    const firstNameText = translate("enterFirstName", language);
    await bot.sendMessage(chatId, firstNameText, {
      reply_markup: createBackToMainKeyboard(language),
    });
    return;
  }

  // Handle media upload
  if (hasMedia(msg)) {
    const mediaFiles = getData(chatId, "mediaFiles") || [];

    // Check media limit
    if (mediaFiles.length >= 10) {
      const limitText = translate("mediaLimitReached", language);
      await bot.sendMessage(chatId, limitText);

      setStep(chatId, REPORT_STEPS.FIRST_NAME);
      const firstNameText = translate("enterFirstName", language);
      await bot.sendMessage(chatId, firstNameText, {
        reply_markup: createBackToMainKeyboard(language),
      });
      return;
    }

    const mediaData = extractMediaFileId(msg);
    if (mediaData) {
      mediaFiles.push(mediaData);
      setData(chatId, "mediaFiles", mediaFiles);

      await bot.sendMessage(chatId, `✅ ${mediaFiles.length}/10`);
    }
  }
};

/**
 * Handle first name input
 */
const handleFirstNameInput = async (bot, msg, language) => {
  const text = msg.text;
  const chatId = msg.chat.id;

  if (!validateName(text)) {
    const errorText = translate("invalidInput", language);
    await bot.sendMessage(chatId, errorText);
    return;
  }

  setData(chatId, "firstName", text.trim());
  setStep(chatId, REPORT_STEPS.LAST_NAME);

  const lastNameText = translate("enterLastName", language);
  await bot.sendMessage(chatId, lastNameText, {
    reply_markup: createBackToMainKeyboard(language),
  });
};

/**
 * Handle last name input
 */
const handleLastNameInput = async (bot, msg, language) => {
  const chatId = msg.chat.id;
  const text = msg.text;

  if (!validateName(text)) {
    const errorText = translate("invalidInput", language);
    await bot.sendMessage(chatId, errorText);
    return;
  }

  setData(chatId, "lastName", text.trim());
  setStep(chatId, REPORT_STEPS.FATHER_NAME);

  const fatherNameText = translate("enterFatherName", language);
  await bot.sendMessage(chatId, fatherNameText, {
    reply_markup: createBackToMainKeyboard(language),
  });
};

/**
 * Handle father name input
 */
const handleFatherNameInput = async (bot, msg, language) => {
  const text = msg.text;
  const chatId = msg.chat.id;

  if (!validateName(text)) {
    const errorText = translate("invalidInput", language);
    await bot.sendMessage(chatId, errorText);
    return;
  }

  setData(chatId, "fatherName", text.trim());
  setStep(chatId, REPORT_STEPS.PHONE_NUMBER);

  const phoneText = translate("enterPhoneNumber", language);
  await bot.sendMessage(chatId, phoneText, {
    reply_markup: createBackToMainKeyboard(language),
  });
};

/**
 * Handle phone number input and submit report
 */
const handlePhoneNumberInput = async (bot, msg, language) => {
  const text = msg.text;
  const chatId = msg.chat.id;

  if (!validatePhoneNumber(text)) {
    const errorText = translate("invalidPhoneNumber", language);
    await bot.sendMessage(chatId, errorText);
    return;
  }

  setData(chatId, "phoneNumber", text.trim());

  // Submit report
  await submitReport(bot, msg);
};

/**
 * Submit complete report to database and channel
 */
const submitReport = async (bot, msg) => {
  const chatId = msg.chat.id;
  const session = getSession(chatId);
  const language = getLanguage(chatId);
  const data = session.data;

  try {
    // Find user
    const user = await User.findOne({ telegramId: msg.from.id });
    if (!user) throw new Error("User not found");

    // Create report
    const report = await Report.create({
      userId: user._id,
      telegramId: msg.from.id,
      region: data.regionName,
      location: data.location,
      shopName: data.shopName,
      district: data.districtName,
      mediaFiles: data.mediaFiles,
      shopAddress: data.shopAddress,
      description: data.description,
      businessEntity: data.businessEntity,
      applicant: {
        firstName: data.firstName,
        lastName: data.lastName,
        fatherName: data.fatherName,
        phoneNumber: data.phoneNumber,
      },
    });

    // Send media files to channel
    const channelId = process.env.CHANNEL_ID;
    const applicantName = `${data.firstName} ${data.lastName}`;

    for (const media of data.mediaFiles) {
      let sentMessage;

      if (media.fileType === "photo") {
        sentMessage = await bot.sendPhoto(channelId, media.fileId, {
          caption: applicantName,
        });
      } else if (media.fileType === "video") {
        sentMessage = await bot.sendVideo(channelId, media.fileId, {
          caption: applicantName,
        });
      }

      // Update media with message ID
      media.messageId = sentMessage.message_id;
    }

    // Send final report message to channel
    const reportText = formatChannelReport(report, msg.from);
    const finalMessage = await bot.sendMessage(channelId, reportText, {
      reply_markup: createStatusToggleKeyboard(
        report._id.toString(),
        "unchecked"
      ),
    });

    // Update report with channel message ID
    report.channelMessageId = finalMessage.message_id;
    report.mediaFiles = data.mediaFiles;
    await report.save();

    // Send confirmation to user
    const successText = translate("reportSubmitted", language);
    await bot.sendMessage(chatId, successText, {
      disable_web_page_preview: true,
      reply_markup: createMainMenuKeyboard(language),
    });

    // Clear session
    clearSession(chatId);
  } catch (error) {
    console.error("Error in submitReport:", error);
    const errorText = translate("errorOccurred", language);
    await bot.sendMessage(chatId, errorText);
  }
};

module.exports = { startReportProcess, handleReportStep, REPORT_STEPS };
