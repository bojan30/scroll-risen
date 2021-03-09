/**
 * check if item is reversable 
 * @param {Node} item [DOM element] 
 * @param {Object} config [config object] 
 * @returns {Boolean}
 */

export function isReversible(item, config){
  if(item.getAttribute('data-reverse') == 'true'){
    return true;
  }
  else if(item.getAttribute('data-reverse') == 'false'){
    return false;
  }
  else return config.reverse;
}