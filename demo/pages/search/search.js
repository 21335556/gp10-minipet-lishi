Page({
  data: {
    array: [1, 2, 3, 4, 5]
  },

  handleTap(e) {
    console.log(e)
  },

  handleOuterTap() {
    console.log('outer tap')
  }
})