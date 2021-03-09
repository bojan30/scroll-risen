import '../css/scrollrisen.css';

//import helper functions
import {
  debounce
} from './helpers/debounce';
import {
  scrollHandler
} from './helpers/scrollHandler';

//init library function
function init(options) {
  //default configuration
  const defaultOptions = {
    /**
     * easing function
     */
    easing: 'ease',
    /**
     * animation duration in ms
     */
    duration: 2000,
    /**
     * animation trigger point(where is the top of the element relative to viewport), 0,5 means center
     */
    trigger: 0.2,
    /**
     * should animation go in reverse when element is below the viewport
     */
    reverse: true,
    /**
     * how often should scroll handler be called in ms
     */
    debounce: 16,
    /**
     * active class applied to elements in viewport
     */
    activeClass: '_sr-active'
  }

  //overwrite default options with user options
  const config = {
    ...defaultOptions,
    ...options
  };

  //collect all elements with data-sr attribute
  const asItems = document.querySelectorAll('[data-sr]');

  //set items styles to match global config
  asItems.forEach(function (item) {
    /**
     * if data-easing is set on specific element then use it, otherwise use global config setting
     */
    item.style.transitionTimingFunction = item.getAttribute('data-easing') || config.easing;
    /**
     * if data-duration is set on specific element then use it, otherwise use global config setting
     */
    item.style.transitionDuration = item.getAttribute('data-duration') || config.duration + 'ms';
  });

  //call scroll handler function once before scrolling
  scrollHandler(asItems, config);

  //call scroll handler on scroll and resize
  ['scroll', 'resize'].forEach(function (event) {
    window.addEventListener(event, debounce(function () {
      scrollHandler(asItems, config);
    }, config.debounce, true));
  });
}

export {
  init
}