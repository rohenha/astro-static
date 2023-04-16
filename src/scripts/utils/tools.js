
/**
 * List of usefull tools
 *
 * @module utils
 * @example
 * import { ready } from "path/to/utils.js"
 */

/**
 * Execute a callback when element is ready
 *
 * @method ready
 * @access public
 * @param {function} fn - Callback to execute if element is ready
 * @param {nodeElement} [element] - Element on wich check if it's ready
 * @example
 * import { ready } from "path/to/utils.js"
 *
 * ready(() => {
 *   // your code here
 * })
 */
export const ready = (fn, element = document) => {
  // eslint-disable-next-line no-unused-expressions
  element.readyState !== "loading"
    ? fn.apply(element)
    : element.addEventListener("DOMContentLoaded", fn.bind(element));
};

/**
 * Debouncing enforces that a function not be called again until a certain amount of time has passed without it being called.
 * As in "execute this function only if 100 milliseconds have passed without it being called."
 *
 * @method debounce
 * @access public
 * @param {function} callback
 * @param {integer} delay
 * @returns {function}
 * @example
 * import { debounce } from "path/to/utils.js"
 *
 * document.body.addEventListener('scroll', debounce(
 *    () => {
 *      // Your code here
 *      // Executed 50ms after the user stops to scroll
 *    }, 50
 * ))
 */
export const debounce = (callback, delay) => {
  let timer;
  return (...args) => {
    // eslint-disable-next-line no-undef
    const context = this
    clearTimeout(timer)
    timer = setTimeout(() => {
      callback.apply(context, args)
    }, delay)
  };
};

/**
 * Throttling enforces a maximum number of times a function can be called over time.
 * As in "execute this function at most once every 100 milliseconds."
 *
 * @method throttle
 * @access public
 * @param {function} callback
 * @param {integer} delay
 * @returns {function}
 * @example
 * import { throttle } from "path/to/utils.js"
 *
 * document.body.addEventListener('scroll', throttle(
 *    () => {
 *      // Your code here
 *      // Executed everey 50ms during scrolling
 *    }, 50
 * ))
 */
export const throttle = (callback, delay) => {
  let last
  let timer
  // eslint-disable-next-line func-names
  return (...args) => {
    const context = this
    const now = +new Date()
    // eslint-disable-next-line prefer-rest-params
    if (last && now < last + delay) {
      // le délai n'est pas écoulé on reset le timer
      clearTimeout(timer)
      timer = setTimeout(() => {
        last = now
        callback.apply(context, args)
      }, delay)
    } else {
      last = now
      callback.apply(context, args)
    }
  }
}

export const getResponsiveValue = (responsiveObject) => {
  if(typeof responsiveObject === 'object') {
    let responsiveValue = 1
    Object.entries(responsiveObject).forEach(([key, value]) => {
      if (Number(key) < window.screen.width) {
        responsiveValue = value
      }
    })
    return responsiveValue
  } 
  return responsiveObject
}

/**
 * Get a template from a string
 * https://stackoverflow.com/a/41015840
 * @param  {String} str    The string to interpolate
 * @param  {Object} params The parameters
 * @return {String}        The interpolated string
 */
export const interpolate = (str, params) => {
  return str.replace(/\${([^}]+)\}/g, (dummy, v) => params[v] || '')
}

export const normalizeText = (text) => {
  const newText = text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()
  return newText
}


export const setScript = (src, userConf) => {
  const defaultConf = {
    async: true,
    id: '',
  }

  const config = Object.assign(defaultConf, userConf)
  const t = document.querySelector('script')
  const e = document.createElement('script')
  const keys = Object.keys(config)
  for (let i = keys.length - 1; i >= 0; i -= 1) {
    const key = keys[i]
    const singleConfig = config[key]
    if (singleConfig) {
      e[key] = singleConfig
    }
  }
  e.src = src
  t.parentNode.insertBefore(e, t)
  return e
}