// Data
const regions = require("../data/regions");
const districts = require("../data/districts");
const translations = require("../data/translations");

/**
 * Get translation for a key in user's language
 * @param {string} key - Translation key
 * @param {string} language - User language code
 * @returns {string} Translated text
 */
const translate = (key, language = "uz_latn") => {
  const keys = key.split(".");
  let value = translations;

  for (const k of keys) {
    value = value[k];
    if (!value) return key;
  }

  return value[language] || value["uz_latn"] || key;
};

/**
 * Format report data for display
 * @param {Object} report - Report object
 * @param {string} language - User language
 * @returns {string} Formatted report text
 */
const formatReport = (report, language = "uz_latn") => {
  const statusText = translate(`reportStatus.${report.status}`, language);
  const date = new Date(report.createdAt).toLocaleDateString();

  let text = `📋 ${translate("reportViolation", language)}\n\n`;
  text += `📅 ${date}\n`;
  text += `📍 ${report.region}, ${report.district}\n`;
  text += `📝 ${report.description}\n`;
  text += `👤 ${report.applicant.firstName} ${report.applicant.lastName}\n`;
  text += `📊 ${statusText}\n`;

  return text;
};

/**
 * Format report for channel message
 * @param {Object} report - Report object
 * @returns {string} Formatted channel message
 */
const formatChannelReport = (report, user) => {
  let text = "🚨 Yangi ariza\n\n";
  text += `📅 Sana: ${new Date(report.createdAt).toLocaleString()}\n`;
  text += `📍 Viloyat: ${report.region}\n`;
  text += `🏘 Tuman/Shahar: ${report.district}\n`;
  text += `🗺 Joylashuv: https://www.google.com/maps?q=${report.location.latitude},${report.location.longitude}\n\n`;

  text += `🏢 Tashkilot: ${report.businessEntity || "Kiritilmadi"}\n`;
  text += `🏪 Do'kon nomi: ${report.shopName || "Kiritilmadi"}\n`;
  text += `📬 Do'kon manzili: ${report.shopAddress || "Kiritilmadi"}\n`;

  text += `\n📝 Tavsif: ${report.description}\n\n`;
  text += `👤 Arizachi:\n`;
  text += `   Ism: ${report.applicant.firstName} ${report.applicant.lastName} ${report.applicant.fatherName}\n`;
  text += `   Telefon: ${report.applicant.phoneNumber}\n`;
  text += `   Tg ism: ${user.first_name}\n`;
  text += `   Tg username: @${user.username}\n\n`;
  text += `📎 Media Fayllar: ${report.mediaFiles.length}ta\n`;
  text += `🆔 Ariza ID: ${report._id}`;

  return text;
};

/**
 * Format feedback for channel message
 * @param {string} feedback - feedback
 * @returns {string} Formatted channel message
 */
const formatChannelFeedback = (feedback, from) => {
  let text = "✍️ Yangi fikr-mulohaza\n\n";

  text += `👤 Foydalanuvchi: ${from.first_name}`;
  if (from.username) text += `\n🆔 Username: @${from.username}`;

  text += `\n📃 Fikr-mulohaza: ${feedback}`;
  return text;
};

/**
 * Get region name by ID in specified language
 * @param {string} regionId - Region ID
 * @param {string} language - Language code
 * @returns {string} Region name
 */
const getRegionName = (regionId, language = "uz_latn") => {
  const region = regions.find((r) => r.id === regionId);
  return region ? region[language] : regionId;
};

/**
 * Get district name by region and district ID in specified language
 * @param {string} regionId - Region ID
 * @param {string} districtId - District ID
 * @param {string} language - Language code
 * @returns {string} District name
 */
const getDistrictName = (regionId, districtId, language = "uz_latn") => {
  const regionDistricts = districts[regionId];
  if (!regionDistricts) return districtId;

  const district = regionDistricts.find((d) => d.id === districtId);
  return district ? district[language] : districtId;
};

module.exports = {
  translate,
  formatReport,
  getRegionName,
  getDistrictName,
  formatChannelReport,
  formatChannelFeedback,
};
