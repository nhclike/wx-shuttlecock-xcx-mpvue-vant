<template>
  <div class="container">
    <div class="login-box">
      <img class="login-icon" :src="userinfo.avatarUrl" alt="">
      <div class="login-wrapper" @click="login">
              <van-cell :title="userinfo.nickName" is-link size="large" :label="labelInfo" />
      </div>
      <button v-show="labelInfo!=''" open-type="getUserInfo" lang="zh_CN" @getuserinfo="onGotUserInfo">获取授权</button>

    </div>
    <div class="tabbar">
      <van-tabbar
        :active="active"
        active-color="#07c160"
        inactive-color="#000"
        bind:change="onChange"
        :fixed="false"
      >
        <van-tabbar-item icon="home-o">标签</van-tabbar-item>
        <van-tabbar-item icon="search">标签</van-tabbar-item>
        <van-tabbar-item icon="friends-o">标签</van-tabbar-item>
        <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
      </van-tabbar>
    </div>
    <div class="me-list">
      <van-cell-group>
        <van-cell title="我的比赛" is-link></van-cell>
        <van-cell title="常用报名信息" is-link></van-cell>
      </van-cell-group>
    </div>
  </div>
</template>

<script>
  import {get,post,showSuccess,showModal} from '@/util'
  import { mapGetters, mapMutations } from 'vuex'

  export default {
    data () {
      return {
        userinfo: {
          avatarUrl: '/static/images/unlogin.png',
          nickName: '登录/注册'
        },
        active: 0,
        labelInfo:'登录同步更多信息'
      }
    },
    computed:{
      ...mapGetters([
        'openId'
      ])
    },
    created () {

    },
    mounted () {

      console.log(this.openId+"------------openId");
    },
    onLoad: function() {
      let self=this;
      // 查看是否授权
      wx.getSetting({
        success (res){
          if (res.authSetting['scope.userInfo']) {
            // 已经授权，可以直接调用 getUserInfo 获取头像昵称
            self.login();
          }
        }
      })
    },
    methods: {
      onChange (event) {
          console.log(event.detail);
      },
      //页面没有授权首先要弹出授权页面
      onGotUserInfo (e) {
        console.log(e.mp.detail.errMsg)
        console.log(e.mp.detail.userInfo)
        console.log(e.mp.detail.rawData)
        if(e.mp.detail.userInfo){
          console.log("用户点击了允许");
          this.setInfo (this,e.mp.detail.userInfo);
        }
        else{
          console.log("用户点击了拒绝");
          
        }
        
      },
      //授权后登陆
      login () {
        let self=this;
        wx.getUserInfo({
          success: function(res) {
            let userInfo = res.userInfo;
            console.log(userInfo);
            self.setInfo (self,userInfo);
          }
        })
      },
      setInfo (self,userInfo) {
        self.userinfo.avatarUrl=userInfo.avatarUrl;
        self.userinfo.nickName=userInfo.nickName;
        self.labelInfo="";
        self.setUserInfo(userInfo);
      },
      ...mapMutations({
        setOpenId:'SET_OPEN_ID',
        setUserInfo:'SET_USER_INFO'
      })
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
