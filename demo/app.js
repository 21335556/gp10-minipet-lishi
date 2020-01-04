App({
  onLaunch() {
    // console.log('onLaunch')
  },

  onShow() {
    // console.log('onShow')
    // console.log(this.myFoo())
  },

  onHide() {
    // console.log('onHide')
  },

  myVar: 'hello',

  myFoo() {
    return this.myVar
  }
})