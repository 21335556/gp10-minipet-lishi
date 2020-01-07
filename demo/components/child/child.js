// components/child/child.js
Component({
	/**
	 * 组件的属性列表
	 */
	properties: {
		name: {
			type: String,
			value: ''
		}
	},

	/**
	 * 组件的初始数据
	 */
	data: {

	},

	/**
	 * 组件的方法列表
	 */
	methods: {
		handleButtonTap() {
			this.triggerEvent('myevent', {x: 0})
		},

		showMsg(msg) {
			console.log(msg)
		}
	}
})
