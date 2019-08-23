/**
 * Created by nhc on 2019/8/23.
 */
import config from './../config'

//封装httpApi
import request from './../utils/httpUtil'
const host = config.host;
export default {
    // test地址
    authorList: (params) => request.get(`${host}/`),
    async test(params) {
        await request.post(`${host}/process_post`, params);
    },
}