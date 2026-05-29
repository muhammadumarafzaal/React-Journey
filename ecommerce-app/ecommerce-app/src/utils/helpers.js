/**
 * Format price to currency
 */
export const formatPrice = (price) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price);
};

/**
 * Format date to readable format
 */
export const formatDate = (date) => {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(date));
};

/**
 * Truncate text
 */
export const truncateText = (text, length = 100) => {
  return text.length > length ? text.substring(0, length) + '...' : text;
};

/**
 * Get star rating array
 */
export const getStarRating = (rating) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(i < Math.floor(rating) ? 'full' : i < rating ? 'half' : 'empty');
  }
  return stars;
};

/**
 * Validate email
 */
export const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

/**
 * Calculate discount percentage
 */
export const calculateDiscount = (originalPrice, discountedPrice) => {
  return Math.round(((originalPrice - discountedPrice) / originalPrice) * 100);
};

/**
 * Debounce function
 */
export const debounce = (func, wait) => {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

/**
 * Generate unique ID
 */
export const generateId = () => {
  return Math.random().toString(36).substr(2, 9);
};

/**
 * Get category color
 */
export const getCategoryColor = (category) => {
  const colors = {
    electronics: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
    jewelery: 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200',
    "men's clothing": 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
    "women's clothing": 'bg-rose-100 text-rose-800 dark:bg-rose-900 dark:text-rose-200',
  };
  return colors[category.toLowerCase()] || 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
};
