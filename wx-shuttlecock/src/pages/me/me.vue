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
        <van-tabbar-item icon="home-o">标签</van-tabbar-item>
        <van-tabbar-item icon="search">标签</van-tabbar-item>
        <van-tabbar-item icon="friends-o">标签</van-tabbar-item>
        <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
      </van-tabbar>
    </div> -->
    <div class="me-list">
      <van-cell-group>
        <van-cell title="完善个人信息" is-link  url="/pages/perfectingInfo/main"></van-cell>
        <van-cell title="常用参赛信息" is-link></van-cell>
      </van-cell-group>
    </div>
    <div>
      <button @click="testDouBan">接口豆瓣测试</button>
      <button @click="testWx">wx接口测试</button>
      <button @click="testFlyio">flyio接口测试</button>
      <button open-type="getPhoneNumber" @getphonenumber="getPhoneNumber">微信手机号授权登陆</button>
    </div>
  </div>
</template>

<script>
  import {get,post,showSuccess,showModal} from '@/util'
  import { mapGetters, mapMutations } from 'vuex'
  import { apiTest } from "@/api/wx"

  export default {
    data () {
      return {
        active: 0,
        labelInfo:'请绑定手机号'
      }
    },
    computed:{
      ...mapGetters([
        'openId',
        'userInfo'
      ])
    },
    created () {

    },
    mounted () {
      console.log(this.openId+"------------openId------------");
    },
    onLoad: function() {
      console.log("------------onLoad-----------");
      console.log("------------userInfo------------");
      console.log(this.userInfo);
      if(!this.userInfo.nickName){
          let url="/pages/authUserInfo/main";
          wx.redirectTo({ url })
      }
    },
    methods: {
      onChange (event) {
          console.log(event.detail);
      },
      bindTel () {
          let url="/pages/bindTel/main";
          wx.navigateTo({ url })
      },
      getPhoneNumber () {
        if ("getPhoneNumber:ok" != e.mp.detail.errMsg){
          wx.showToast({
            icon:'none',
            title: '快捷登陆失败'
          })
          return;
        }
      },
      ...mapMutations({
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
        apiTest().then((res)=>{
          console.log(res);
        }); 
      },
      testFlyio () {
        // this.$http.authorList().then(function (res) {
        //   console.log(res)
        // })
        this.$http.test({name:'nhc'}).then(function (res) {
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
