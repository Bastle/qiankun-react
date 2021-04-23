const emptyAction = () => {
  console.warn('current execute is empty')
}


class Action {
  constructor() {
    this.actions = {
      onGlobalStateChange: emptyAction,
      setGlobalState: emptyAction,
      offGlobalStateChange: emptyAction
    }
  }
  setAction = (actions) => {
    console.log('actions: ', actions);
    this.actions = actions;
  }
  onGlobalStateChange = (...args) => {
    return this.actions.onGlobalStateChange(...args);
  }
  setGlobalState = (...args) => {
    return this.actions.setGlobalState(...args);
  }
  offGlobalStateChange = () => {
    return this.actions.offGlobalStateChange()
  }
}

const actions = new Action()

export default actions;