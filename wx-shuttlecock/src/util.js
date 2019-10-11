// 工具函数库
import config from './config'

// http get工具函数 获取数据
export function get(url, data, header) {
    return request(url, 'GET', data, header)
}
export function post(url, data, header) {
    return request(url, 'POST', data, header)
}

function request(url, method, data, header = {}) {
    return new Promise((resolve, reject) => {
        wx.request({
            data,
            method,
            header,
            url: config.host + url,
            success: function(res) {
                if (res.data.code === 0) {
                    resolve(res.data.data)
                } else {
                    showModal('失败', res.data.msg);
                    reject(res.data)
                }
            }
        })
    })
}

export function showModal(title, content) {
    wx.showModal({
        title,
        content,
        showCancel: false
    })
}
export function showSuccess(text) {
    wx.showToast({
        title: text,
        icon: 'success'
    })
}