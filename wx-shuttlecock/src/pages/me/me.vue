<template>
  <div class="container">
    <div class="login-box">
      <img class="login-icon" :src="userInfo.avatarUrl" alt="">
      <div class="login-wrapper" @click="bindTel">
        <van-cell :title="userInfo.nickName" is-link size="large" :label="labelInfo" />
      </div>
    </div>
    <!-- <div class="tabbar">
      <van-tabbar
        :active="active"
        active-color="#07c160"
        inactive-color="#000"
        bind:change="onChange"
        :fixed="false"
      >
        <van-tabbar-item icon="home-o">已报名</van-tabbar-item>
        <van-tabbar-item icon="search">已完成</van-tabbar-item>
        <van-tabbar-item icon="friends-o">待比赛</van-tabbar-item>
        <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
      </van-tabbar>
    </div> -->
    <div class="me-list">
      <van-cell-group>
        <van-cell title="个人信息" is-link  url="/pages/perfectingInfo/main"></van-cell>
        <van-cell title="参赛信息" is-link></van-cell>
        <van-cell title="赛程安排" is-link></van-cell>
      </van-cell-group>
    </div>
    <div>
      <!-- <button @click="testDouBan">接口豆瓣测试</button>
      <button @click="testWx">wx接口测试</button>
      <button @click="testFlyio">flyio接口测试</button>
      <button open-type="getPhoneNumber" @getphonenumber="getPhoneNumber">微信手机号授权登陆</button> -->
    </div>
  </div>
</template>

<script>
  import {get,post,showSuccess,showModal} from '@/util'
  import { mapGetters, mapMutations } from 'vuex'
  import { saveWxUserPhone } from "@/api/wx"
  import config from '@/config.js'

  export default {
    data () {
      return {
        active: 0
      }
    },
    computed:{
      ...mapGetters([
        'openId',
        'userInfo'
      ]),
      labelInfo () {
        return this.userInfo.tel?this.userInfo.tel:'请绑定手机号'
      }
    },
    created () {

    },
    mounted () {
      console.log(this.openId+"-----me-------openId------------");
    },
    onLoad: function() {
      console.log("--------me----onLoad-----------");
      console.log("------------userInfo------------");
      console.log(this.userInfo);
      let _this=this;
      wx.getSetting({
        success:function (res) {
          if(res.authSetting['scope.userInfo']){
            console.log("用户已经授权");
            console.log("_this.openId"+_this.openId);
            var wx_userInfo = wx.getStorageSync('wx_userInfo'); //获取本地缓存中的wx_userInfo
            if(wx_userInfo){
              _this.setUserInfo(wx_userInfo);
            }
            else{
              console.log("没有获取到授权后缓存的用户信息");
            }
            console.log(_this.userInfo);
            if(_this.openId){
              _this.authControl();
            }
            else{
              wx.login({
                success:function(res){
                  console.log("拿到wx.login返回值code");
                  console.log(res.code);
                  const APP_ID =config.wechat.appID;//输入小程序appid
                  const APP_SECRET =config.wechat.appSecret;//输入小程序app_secret
                  let code=res.code;
                  wx.request({
                    //获取openid接口
                    url: `https://api.weixin.qq.com/sns/jscode2session?appid=${APP_ID}&secret=${APP_SECRET}&js_code=${code}&grant_type=authorization_code`,
                    method:'GET',
                    success:function(res){
                      console.log("----jscode2session-----")
                      console.log(res)
                      _this.setOpenId(res.data.openid);
                      console.log(_this.openId+"this.openId");
                      _this.authControl();
                    },
                    fail:function(err){
                    }
                  })
                }
              });
            }
          }
          else{
            console.log("用户没有授权");
            if(!_this.openId){
                let url="/pages/authUserInfo/main";
                wx.redirectTo({ url })
            }
          }
        }
      })
      
    },
    methods: {
      onChange (event) {
          console.log(event.detail);
      },
      bindTel () {
          let url="/pages/bindTel/main";
          wx.navigateTo({ url })
      },
      authControl (){
        if(this.openId){
          this.$fly.getUserInfoByOpenId({openId:this.openId}).then((res)=> {
            console.log(res);
            if(res&&res.data){
              let self_userInfo={
                tel:res.data.username,
                realName:res.data.name,
                cardId:res.data.idCard
              };
              console.log("根据openId获取的用户信息");
              console.log(self_userInfo);
              this.setUserInfo(self_userInfo);
            }
            if(!this.userInfo.tel){
                let url="/pages/bindTel/main";
                wx.redirectTo({ url })
              }
          })
        }
      },
      getPhoneNumber (e) {
        if ("getPhoneNumber:ok" != e.mp.detail.errMsg){
          wx.showToast({
            icon:'none',
            title: '快捷登陆失败'
          })
          return;
        }
      },
      ...mapMutations({
        setOpenId:'SET_OPEN_ID',
        setUserInfo:'SET_USER_INFO'
      }),
      testDouBan () {
        wx.request({
              url: 'https://douban.uieee.com/v2/movie/in_theaters',
              method: 'GET',
              header:{
                   "content-type":"json"
              },
              data: {
                  start: 0,
                  count: 4,
                  city: '杭州'
              },
              success: res => {
                  console.log(res)
              },
              fail: () => {},
              complete: () => {}
          });  
      },
      testWx () {
        saveWxUserPhone({openId:'oIELT5B6J6sxHVhRnUU-gX0ON4ro"',username:'13337459399'}).then((res)=>{
          console.log(res);
        }); 
      },
      testFlyio () {
        this.$fly.bindWxUserPhone({openId:'oIELT5B6J6sxHVhRnUU-gX0ON4ro"',username:'13337459399'}).then((res)=> {
          console.log(res)
        })
      }
    }
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  .container{
    padding:0 30rpx;
    .login-box{
      width: 100%;
      .login-icon{
        width:120rpx;
        height:120rpx;
        border-radius:60rpx;
        float: left;
      }
      .login-wrapper{
        width:100%;
        padding-left: 120rpx;
        box-sizing: border-box;

      }
    }
    .userinfo{
      margin-top:100rpx;
      text-align:center;
      img{
        width: 150rpx;
        height:150rpx;
        margin: 20rpx;
        border-radius: 50%;
      }
    }
    .tabbar{
      height:100rpx;
      margin:5rpx 0;
      width:100%;
      box-sizing:content-box;
    }
    .me-list{
      width:100%;

    }
  }
</style>
