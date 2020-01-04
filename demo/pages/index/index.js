const app = getApp()

const fetch = require('../utils/fetch')

Page({
  data: {
    msg: "gp10",
    name: 'zhaoqian',
    age: 18
  },
 
  handleTap() {
    this.setData({
      msg: 'gp11'
    })

    wx.switchTab({
      url: '/pages/search/search'
    })
  },

  onLoad() {
    console.log('onLoad')
  },

  onReady() {
    console.log('onReady')
  },

  onShow() {
    console.log('onShow')
    const pages = getCurrentPages()
    // console.log(pages)

    fetch((data) => {
      console.log(data)
    })
  },

  onHide() {
    console.log('onHide')
  },

  onUnload() {
    console.log('onUnload')
  },
  
  onPullDownRefresh() {
    console.log('onPullDownRefresh')
  },

  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '自定义转发标题',
      path: '/page/index/index'
    }
  },

  onTabItemTap(item) {
    console.log(item)
  }
})