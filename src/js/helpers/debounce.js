/**
 * debounce scroll event function
 * @param {Function} func [callback function to call] 
 * @param {Number} wait [debounce time to wait until next callback] 
 * @param {Boolean} immediate [should callback be called immediately]
 */

export function debounce(func, wait, immediate) {
  let timeout;
  return function () {
    let context = this;
    let args = arguments;
    let later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    }
    let callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  }
}