
import modular from 'modujs'
import * as modules from './organisms/_modules'

window.addEventListener('load', () => {
  const init = () => {
    console.log(
      '%cFait avec ❤️❤️❤️ par TROA',
      'font-size:10px;color:#AACBF4; background-color:#263069; padding:5px;'
    )
    // eslint-disable-next-line new-cap
    const manager = new modular({
      modules,
    })
    manager.init(manager)
  }

	init()
})