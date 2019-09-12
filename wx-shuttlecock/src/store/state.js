const state = {
    openId: '', //当前用户openId
    userInfo: { //当前用户信息
        tel: '',
        cardId: '',
        realName: ''
    },
    curEnrollId: '', //当前报名比赛的id
    filterRaceObj: { //当前比赛的过滤条件
        competitionState: '',
        competitionDate: '',
    }
};
export default state