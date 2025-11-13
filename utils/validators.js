/**
 * Validation utilities for user input
 */

/**
 * Validate phone number format (+998XXXXXXXXX)
 * @param {string} phoneNumber - Phone number to validate
 * @returns {boolean} True if valid
 */
const validatePhoneNumber = (phoneNumber) => {
  const phoneRegex = /^\+998\d{9}$/;
  return phoneRegex.test(phoneNumber?.trim());
};

/**
 * Validate text input (not empty and reasonable length)
 * @param {string} text - Text to validate
 * @param {number} minLength - Minimum length (default: 1)
 * @param {number} maxLength - Maximum length (default: 500)
 * @returns {boolean} True if valid
 */
const validateText = (text, minLength = 1, maxLength = 500) => {
  if (typeof text !== "string") return false;
  const trimmed = text.trim();
  return trimmed.length >= minLength && trimmed.length <= maxLength;
};

/**
 * Validate name (letters and spaces only, reasonable length)
 * @param {string} name - Name to validate
 * @returns {boolean} True if valid
 */
const validateName = (name) => {
  if (!validateText(name, 2, 50)) return false;
  // Allow letters from various scripts (Latin, Cyrillic, etc.) and spaces
  const nameRegex = /^[a-zA-ZÀ-ÿА-Яа-яЁёўЎқҚғҒҳҲ\s'-]+$/u;
  return nameRegex.test(name.trim());
};

/**
 * Validate location data
 * @param {Object} location - Location object with latitude and longitude
 * @returns {boolean} True if valid
 */
const validateLocation = (location) => {
  if (!location || typeof location !== "object") return false;
  const { latitude, longitude } = location;

  return (
    typeof latitude === "number" &&
    typeof longitude === "number" &&
    latitude >= -90 &&
    latitude <= 90 &&
    longitude >= -180 &&
    longitude <= 180
  );
};

module.exports = {
  validateText,
  validateName,
  validateLocation,
  validatePhoneNumber,
};
