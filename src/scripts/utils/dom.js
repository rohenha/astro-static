/**
 * Return the closest ancestor of an element matching a selector
 *
 * @method closest
 * @access public
 * @param {nodeElement} element
 * @param {string} selector
 * @param {string} [stopSelector="body"]
 * @returns {nodeElement}
 * @example
 * <!-- Considering following HTML structure -->
 * <div class="foo">
 *    <div class="bar">
 *      <div id="baz">
 *        lorem ipsum
 *      </div>
 *    </div>
 * </div>
 * @example
 * import { closest } from "path/to/utils.js"
 *
 * // It return you `.foo` div
 * closest(document.querySelector('#baz'), '.foo');
 */
// eslint-disable-next-line complexity
export const closest = (element, selector, stopSelector = "body") => {
  // eslint-disable-next-line no-undef
  if (!Element.prototype.matches) Element.prototype.matches = Element.prototype.msMatchesSelector;
  let retval = null;
  while (element) {
    if (element.matches(selector)) {
      retval = element;
      break;
    } else if (stopSelector && element.matches(stopSelector)) {
      break;
    }
    element = element.parentElement;
  }
  return retval;
}

// Get transform values of el
export const getTransform = (el) => {
  const style = window.getComputedStyle(el)
  return style.transform || style.webkitTransform || style.mozTransform
}