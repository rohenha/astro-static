// import anime from 'animejs'

export default {
  after() {},

  // afterEnter() {
  //   const tl = anime.timeline({
  //     easing: 'easeInOutCubic',
  //     duration: 1200,
  //     // delay: 3000,
  //   })

  //   tl.add({
  //     targets: this.container,
  //     translateY: '-100%',
  //   })
  //   return tl.finished
  // },

  afterLeave() {},

  before() {},

  beforeEnter() {},

  beforeLeave() {},

  enter({ next }) {
    // next.container.classList.add('-fade')
    // next.container.classList.add('-enter')
    // return new Promise((resolve) => {
    //   this.call('change', false, 'Menu', 'menu')
    //   setTimeout(() => {
    //     resolve()
    //   }, 700)
    // })
    // const tl = anime.timeline({
    //   easing: 'easeInOutCubic',
    //   duration: 600,
    //   // delay: 3000,
    // })
    // tl.add({
    //   targets: next.container.children,
    //   opacity: [0, 1],
    // })
    // return tl.finished
  },

  init(parent, config) {
    this.call = parent.call.bind(parent)
    this.config = config
  },

  custom: ({ trigger }) => {
    if (!trigger.dataset) {
      return false
    }
    const { transition } = trigger.dataset
    return transition === 'fade'
  },

  invoke() {
    return {
      // after: this.after.bind(this),
      // afterOnce: this.afterOnce.bind(this),
      // afterEnter: this.afterEnter.bind(this),
      // afterLeave: this.afterLeave.bind(this),
      // before: this.before.bind(this),
      // beforeEnter: this.beforeEnter.bind(this),
      // beforeLeave: this.beforeLeave.bind(this),
      enter: this.enter.bind(this),
      init: this.init.bind(this),
      custom: this.custom.bind(this),
      leave: this.leave.bind(this),
      name: 'fade',
    }
  },

  leave({ current }) {
    current.container.classList.add('-leave')
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve()
      }, 700)
    })
  },
}.invoke()
