/**
 * Media file handling utilities
 */

/**
 * Get the largest photo file from photo array
 * @param {Array} photos - Array of photo sizes
 * @returns {Object} Largest photo object
 */
const getLargestPhoto = (photos) => {
  if (!photos || photos.length === 0) return null;
  return photos.reduce((largest, photo) => {
    return photo.file_size > (largest.file_size || 0) ? photo : largest;
  });
};

/**
 * Extract file ID from message
 * @param {Object} msg - Telegram message object
 * @returns {Object|null} Object with fileId and fileType, or null
 */
const extractMediaFileId = (msg) => {
  if (msg.photo && msg.photo.length > 0) {
    const photo = getLargestPhoto(msg.photo);
    return {
      fileId: photo.file_id,
      fileType: "photo",
    };
  }

  if (msg.video) {
    return {
      fileId: msg.video.file_id,
      fileType: "video",
    };
  }

  return null;
};

/**
 * Check if message contains media
 * @param {Object} msg - Telegram message object
 * @returns {boolean} True if contains photo or video
 */
const hasMedia = (msg) => {
  return !!(msg.photo || msg.video);
};

module.exports = { getLargestPhoto, extractMediaFileId, hasMedia };
