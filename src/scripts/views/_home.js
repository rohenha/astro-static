export default {
  init(call, config) {
    this.call = call
    this.config = config
  },

  invoke() {
    return {
      namespace: 'home',
      init: this.init.bind(this),
      afterEnter: this.afterEnter.bind(this),
      beforeEnter: this.beforeEnter.bind(this),
    }
  },

  afterEnter() {
    // this.call('test', null, 'Website', 'website')
  },

  beforeEnter() {},
}.invoke()