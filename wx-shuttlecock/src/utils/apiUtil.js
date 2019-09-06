import api from './../api'

// export default api
export default { //作为组件库(install)
    install: function(Vue, name = "$fly") { //自定义名字(vue-resource也使用$http)
        Object.defineProperty(Vue.prototype, name, { value: api }); //将组件库挂载在原型对象上
    }
}