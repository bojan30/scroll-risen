import {isReversible} from './isReversible';

/**
 * scroll handler function
 * @param {Node List} elems [list of DOM elements] 
 * @param {Object} config [config object]
 */

//scroll handler function
export function scrollHandler(elems, config) {
  let windowHeight = window.innerHeight;
  let scrollAmount = window.scrollY;
  elems.forEach((item, i) => {
    // let itemHeight = item.offsetHeight;
    let itemTop = item.offsetTop;
    if (windowHeight - windowHeight * config.trigger + scrollAmount >= itemTop) {
      item.classList.add(config.activeClass);
    }
    else {
      if(isReversible(item,config) && windowHeight + scrollAmount < itemTop){
        item.classList.remove(config.activeClass);
      }
    }
  });
}