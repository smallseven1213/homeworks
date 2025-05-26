/**
 * Format seconds into a display time string (MM:SS format)
 * @param {number} totalSeconds - Total seconds to format
 * @returns {string} - Formatted time string in MM:SS format
 */
export const formatTime = (totalSeconds) => {
  const mins = Math.floor(totalSeconds / 60);
  const secs = totalSeconds % 60;
  return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
};
