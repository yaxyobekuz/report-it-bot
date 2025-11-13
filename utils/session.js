/**
 * Session storage for user states
 */

const userSessions = new Map();

/**
 * Get user session data
 * @param {number} chatId - Telegram chat ID
 * @returns {Object} Session data
 */
const getSession = (chatId) => {
  if (!userSessions.has(chatId)) {
    userSessions.set(chatId, { step: null, data: {}, language: "uz_latn" });
  }
  return userSessions.get(chatId);
};

/**
 * Set user session data
 * @param {number} chatId - Telegram chat ID
 * @param {Object} sessionData - Session data to set
 */
const setSession = (chatId, sessionData) => {
  const currentSession = getSession(chatId);
  userSessions.set(chatId, { ...currentSession, ...sessionData });
};

/**
 * Update session step
 * @param {number} chatId - Telegram chat ID
 * @param {string} step - New step name
 */
const setStep = (chatId, step) => {
  const session = getSession(chatId);
  session.step = step;
  userSessions.set(chatId, session);
};

/**
 * Update session data
 * @param {number} chatId - Telegram chat ID
 * @param {string} key - Data key
 * @param {any} value - Data value
 */
const setData = (chatId, key, value) => {
  const session = getSession(chatId);
  session.data[key] = value;
  userSessions.set(chatId, session);
};

/**
 * Get session data value
 * @param {number} chatId - Telegram chat ID
 * @param {string} key - Data key
 * @returns {any} Data value
 */
const getData = (chatId, key) => {
  const session = getSession(chatId);
  return session.data[key];
};

/**
 * Clear user session
 * @param {number} chatId - Telegram chat ID
 */
const clearSession = (chatId) => {
  const session = getSession(chatId);
  userSessions.set(chatId, {
    step: null,
    data: {},
    language: session.language,
  });
};

/**
 * Set user language
 * @param {number} chatId - Telegram chat ID
 * @param {string} language - Language code
 */
const setLanguage = (chatId, language) => {
  const session = getSession(chatId);
  session.language = language;
  userSessions.set(chatId, session);
};

/**
 * Get user language
 * @param {number} chatId - Telegram chat ID
 * @returns {string} Language code
 */
const getLanguage = (chatId) => {
  const session = getSession(chatId);
  return session.language || "uz_latn";
};

module.exports = {
  getSession,
  setStep,
  setData,
  getData,
  setSession,
  setLanguage,
  getLanguage,
  clearSession,
};
