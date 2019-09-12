<template>
  <div class="box">
    <div class="box-wrapper">
      <img src="./../../../static/images/logo.png">
      <span>允许微信授权后可体验更多功能</span>
      <button type="primary" size="default" v-show="labelInfo!=''" open-type="getUserInfo" lang="zh_CN" @getuserinfo="onGotUserInfo">微信登录授权</button>
      <button @click="goIndex">返回首页</button>
      <!-- <button @click="getOpenId">获取用户唯一标识openid</button>
      openid:{{openid}}session_key:{{session_key}} -->
    </div>
  </div>
</template>

<script>
  import { mapMutations } from 'vuex'
  import config from '@/config.js'
import { resolve } from 'q';
  export default {
    data () {
    	return {
        openid:'',
        session_key:''
    	}
    },
    components:{
    },
    mounted () {
      console.log("-----authUserInfo-------mounted-----------");
    },
    onLoad: function() {
      console.log("-----authUserInfo-------onLoad-----------");
    },
    methods: {
      //页面没有授权首先要弹出授权页面
      onGotUserInfo (e) {
        // console.log(e.mp.detail.errMsg)
         console.log(e.mp.detail.userInfo)
        // console.log(e.mp.detail.rawData)
        let _this=this;
        let wx_userInfo=e.mp.detail.userInfo;
        if(wx_userInfo){
          console.log("用户点击了允许");
          this.wxLogin().then(res=>{
            if(res){
              _this.getOpenId(res).then(res=>{
                if(res){
                  //设置openId
                  _this.setOpenId(_this.openid);
                  //记录用户信息
                  _this.setUserInfo(wx_userInfo);
                  wx.switchTab({
                    url: '/pages/me/main'
                  })
                }
              })  
            }
          });  
        }
        else{
          console.log("用户点击了拒绝");
        }
      },
      goIndex (){
          wx.switchTab({
            url: '/pages/index/main'
          })
      },
      wxLogin (){
        return new Promise((resolve,reject)=>{
          wx.login({
            success:function(res){
              console.log("拿到wx.login返回值code");
              console.log(res.code);
              if(res.code){
                resolve(res.code)
              }
              else{
                reject(res.errMsg);
              }
            }
          });
        })
      },
      getOpenId (code) {
        const APP_ID =config.wechat.appID;//输入小程序appid
        const APP_SECRET =config.wechat.appSecret;//输入小程序app_secret
        var that=this;
        return new Promise((resolve,reject)=>{
          wx.request({
                  //获取openid接口
                url: `https://api.weixin.qq.com/sns/jscode2session?appid=${APP_ID}&secret=${APP_SECRET}&js_code=${code}&grant_type=authorization_code`,
                method:'GET',
                success:function(res){
                  console.log("----jscode2session-----")
                  console.log(res)
                  that.openid = res.data.openid;//获取到的openid
                  that.session_key = res.data.session_key;//获取到session_key
                  resolve(res.data);
                },
                fail:function(err){
                  reject(err)
                }
              })
        })
      },
      ...mapMutations({
        setOpenId:'SET_OPEN_ID',
        setUserInfo:'SET_USER_INFO'
      }),
    },
    
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  @import "./../../common/less/variable.less";

.box{
  position: fixed;
  top:0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #fff;
  .box-wrapper{
    margin: 40rpx;
    text-align: center;
    img{
      height: 260rpx;
      width: 260rpx;
      display: block;
      margin: 40rpx auto;
    }
    span{
      
    }
    button{
      margin: 40rpx auto;
    }
  }
  
}
</style>
