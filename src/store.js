import { Store } from 'iflux2'
import CounterActor from './actor/counter-actor'


export default class AppStore extends Store {
  bindActor() {
    return [
      new CounterActor
    ]
  }

  constructor(props) {
    super(props)
    window.store = this
  }

  //;;;;;;;;;;;;;;;;;Action;;;;;;;;;;;;;;;;;;;;;;;;;;;;
  increment = () => {
    this.dispatch('increment')
  };

  decrement = () => {
    this.dispatch('decrement')
  };
}
