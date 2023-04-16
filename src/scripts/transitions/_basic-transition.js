import anime from 'animejs'

export default {
  after() {},

  afterEnter() {
    const tl = anime.timeline({
      easing: 'easeInOutCubic',
      duration: 1200,
    })

    tl.add({
      targets: this.container,
      translateY: '-100%',
    })

    return tl.finished
  },

  afterLeave() {},

  before() {},

  beforeEnter() {
  },

  beforeLeave() {},

  enter() {},

  init(call, config) {
    this.container = document.querySelector('#js-loader')
    this.call = call
    this.config = config
  },

  invoke() {
    return {
      after: this.after.bind(this),
      afterEnter: this.afterEnter.bind(this),
      afterLeave: this.afterLeave.bind(this),
      before: this.before.bind(this),
      beforeEnter: this.beforeEnter.bind(this),
      beforeLeave: this.beforeLeave.bind(this),
      enter: this.enter.bind(this),
      init: this.init.bind(this),
      leave: this.leave.bind(this),
      name: 'basic',
      once: this.once.bind(this),
    }
  },

  leave() {
    const tl = anime.timeline({
      easing: 'easeInOutCubic',
      duration: 1200,
    })

    tl.add({
      targets: this.container,
      translateY: ['100%', '0%'],
    })

    return tl.finished
  },

  once(data) {
    this.afterEnter(data).then(() => {
      this.after()
      this.call('after', null, 'Website', 'website')
    })
  },
}.invoke()
