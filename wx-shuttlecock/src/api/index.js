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
    //查询比赛列表 
    getWxCompetitionList: (params) => request.post(`${host}/wx/competition/getWxCompetitionList`, params),
    //得到比赛详细信息 
    getWxCompetitionDetail: (params) => request.post(`${host}/wx/competition/getWxCompetitionDetail`, params),
    //得到比赛有哪些比赛项目 
    getWxCompetitionItem: (params) => request.post(`${host}/wx/competition/getWxCompetitionItem`, params),
    //小程序报名
    wxEntry: (params) => request.post(`${host}/wx/entry/wxEntry`, params),
    //微信我报名的比赛
    getWxMyEntryCompetition: (params) => request.post(`${host}/wx/competition/getWxMyEntryCompetition`, params),
    //获得比赛信息(返回参数 ：competitionSite（地点），competitionStartDate（比赛时间）)
    getWxCompetitionInfoByCompetitionId: (params) => request.post(`${host}/wx/competition/getWxCompetitionInfoByCompetitionId`, params),
    //获得比赛人员信息(返回参数 ：competitionSite（地点），competitionStartDate（比赛时间）)
    getEntryPersonnelList: (params) => request.post(`${host}/wx/entry/getEntryPersonnelList`, params),
    //获得小组赛选手信息(返回参数 ：1：男单，2：女单，3：男双，4：女双，5：混双，6：团体赛)
    getWxGrouptCompetitionDetails: (params) => request.post(`${host}/wx/competitionDetails/getWxGrouptCompetitionDetails`, params),
    //获得小组对战信息
    getWxGroupPlayerVSInfo: (params) => request.post(`${host}/wx/competitionDetails/getWxGroupPlayerVSInfo`, params),
    //获得淘汰赛信息
    getWxKnockoutCompetitionDetailsInfo: (params) => request.post(`${host}/wx/competitionDetails/getWxKnockoutCompetitionDetailsInfo`, params),
    //获得积分详情
    getIntegralInfo: (params) => request.post(`${host}/wx/competitionDetails/info/${params.id}`),

}