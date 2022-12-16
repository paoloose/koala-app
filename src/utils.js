
// Scroll to the top of an HTML container
export function scrollToBottom(element) {
  element.scrollTo({
    top: element.scrollHeight,
    behavior: 'smooth',
  })
}

/**
 * Alias for document.querySelector
 * @param  {string} query 
 */
export function $(query) {
  return document.querySelector(query)
}
/**
 * Alias for document.querySelectorAll
 * @param {string} query 
 */
export function $$(query) {
  return document.querySelectorAll(query)
}

// Log only in development
export function log(...args) {
  if (!import.meta.env.DEV) return;
  console.log(...args);
}
