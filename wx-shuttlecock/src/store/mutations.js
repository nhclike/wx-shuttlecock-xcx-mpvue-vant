import * as types from './mutation-types'
const mutations = {
    /**
     * state:当前状态树
     * v: 提交matations时传的参数
     */
    [types.SET_OPEN_ID](state, v) {
        state.openId = v;
    },
    [types.SET_USER_INFO](state, obj) {
        state.userInfo = Object.assign(state.userInfo, obj);
    },
    [types.SET_CUR_ENROLL_ID](state, v) {
        state.curEnrollId = v;
    },
    [types.SET_Filter_RACE_OBJ](state, obj) {
        state.filterRaceObj = Object.assign(state.filterRaceObj, obj);
    },
};

export default mutations