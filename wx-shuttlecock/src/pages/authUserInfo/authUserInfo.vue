<template>
  <div>
    <button v-show="labelInfo!=''" open-type="getUserInfo" lang="zh_CN" @getuserinfo="onGotUserInfo">获取授权</button>
  </div>
</template>

<script>
  import { mapMutations } from 'vuex'

  export default {
    data () {
    	return {
    		
    	}
    },
    components:{
    },
    mounted () {
      console.log("------------mounted-----------");
    },
    onLoad: function() {
      console.log("------------onLoad-----------");
    },
    methods: {
      setInfo (userInfo) {
        this.setUserInfo(userInfo);
      },
      //页面没有授权首先要弹出授权页面
      onGotUserInfo (e) {
        console.log(e.mp.detail.errMsg)
        console.log(e.mp.detail.userInfo)
        console.log(e.mp.detail.rawData)
        if(e.mp.detail.userInfo){
          console.log("用户点击了允许");
          this.setInfo (e.mp.detail.userInfo);
          wx.switchTab({
            url: '/pages/me/main'
          })
        }
        else{
          console.log("用户点击了拒绝");
        }
      },
      ...mapMutations({
        setOpenId:'SET_OPEN_ID',
        setUserInfo:'SET_USER_INFO'
      }),
    },
    
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
.van-goods-action{
  background-color:#ddd;
}
</style>
