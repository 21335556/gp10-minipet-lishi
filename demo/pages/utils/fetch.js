const fetch = (cb) => {
  return wx.request({
    url: 'https://api.myjson.com/bins/dx7m3', //仅为示例，并非真实的接口地址
    data: {
      x: '',
      y: ''
    },
    header: {
      'content-type': 'application/json' // 默认值
    },
    success(res) {
      console.log(res.data)
    }
  })
}

module.exports = fetch