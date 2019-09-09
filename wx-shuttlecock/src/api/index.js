/**
 * Created by nhc on 2019/8/23.
 */
import config from './../config'

//封装httpApi
import request from './../utils/httpUtil'
const host = config.host;
export default {
    //通过openid获得用户信息
    getUserInfoByOpenId: (params) => request.post(`${host}/wx/user/getUserInfoByOpenId`, params),
    //微信绑定手机号
    bindWxUserPhone: (params) => request.post(`${host}/wx/user/bindWxUserPhone`, params),
    //修改微信绑定的手机号
    updateWxBindPhone: (params) => request.post(`${host}/wx/user/updateWxBindPhone`, params),

    //修改用户姓名和身份证
    updateUserInfoByOpenId: (params) => request.post(`${host}/wx/user/updateUserInfoByOpenId`, params),



}