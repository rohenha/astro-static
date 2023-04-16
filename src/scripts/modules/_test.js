import { module as mmodule } from 'modujs'

export default class Test extends mmodule {
  constructor(m) {
    super(m)
    this.index = 0
    this.events = {
      // click: 'onClick',
    }
  }

  // onClick() {
  //   this.index += 1
  // }
}
