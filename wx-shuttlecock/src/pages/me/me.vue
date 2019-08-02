<template>
  <div class="container">
    <div class="login-box">
      <img class="login-icon" :src="userinfo.avatarUrl" alt="">
      <div class="login-wrapper" @click="login">
              <van-cell :title="userinfo.nickName" is-link size="large" :label="labelInfo" />
      </div>
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
      // 查看是否授权
      wx.getSetting({
        success (res){
          if (res.authSetting['scope.userInfo']) {
            // 已经授权，可以直接调用 getUserInfo 获取头像昵称
            wx.getUserInfo({
              success: function(res) {
                console.log(res.userInfo)
              }
            })
          }
        }
      })
    },
    methods: {
      onChange (event) {
          console.log(event.detail);
      },
      login () {
        let self=this;
        wx.getUserInfo({
          success: function(res) {
            let userInfo = res.userInfo;
            console.log(userInfo);
            self.userinfo.avatarUrl=userInfo.avatarUrl;
            self.userinfo.nickName=userInfo.nickName;
            self.labelInfo="";
          }
        })
      },
      ...mapMutations({
        setOpenId:'SET_OPEN_ID'
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
