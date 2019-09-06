import Fly from 'flyio/dist/npm/wx'
// 'flyio'(与axios、fentch对比 https://wendux.github.io/dist/#/doc/flyio/compare)
// var Fly=require("flyio/dist/npm/wx") //npm引入方式

const request = new Fly()

//添加请求拦截器
request.interceptors.request.use(
    (request) => {
        wx.showLoading({ title: '加载中' })
        console.log(request)
        return request
    }
)

//添加响应拦截器
request.interceptors.response.use(
    (response, promise) => {
        wx.hideLoading()
        console.log(response);
        if (response.data.code === 0) {
            wx.showToast({
                title: response.data.msg,
                icon: 'none',
                duration: 1000
            })
        }
        return promise.resolve(response.data)
    },
    (err, promise) => {
        wx.hideLoading()
        console.log(err);
        wx.showToast({
            title: err.message,
            icon: 'none',
            duration: 1000
        })
        return promise.resolve()
    }
)

export default request;