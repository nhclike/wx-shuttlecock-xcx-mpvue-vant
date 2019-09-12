<template>
  <div class="container-enroll">
    <div class="raceInfo">
      <div class="title">某某俱乐部羽毛球比赛</div>
      <div class="item">
        <div class="label">时&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;间</div>
        <div class="content">2019-09-01</div>
      </div>
      <div class="item">
        <div class="label">地&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;点</div>
        <div class="content">滨江羽毛球俱乐部中心</div>
      </div>
      <div class="item">
        <div class="label">比赛类型</div>
        <div class="content">男女混双</div>
      </div>
      <div class="item">
        <div class="label">报名要求</div>
        <div class="content">年龄25岁到30岁</div>
      </div>
    </div>
    <div class="selfInfo">
      <div class="title-box">参赛者信息</div>
      <EnrollForm></EnrollForm>
    </div>
    <div class="memberInfo">
      <div class="title-box">队友信息</div>
      <EnrollForm></EnrollForm>
    </div>
    <div class="footer-box">
      <div class="xy-wrapper">
        <van-radio-group :value="radio" @change="onChange">
          <van-radio name="1">
            <div class="xy-box">
              <a href="" class="xy-text">《参赛协议》</a>
              我已阅读并接受
            </div>
          </van-radio>
        </van-radio-group>
      </div>
      <van-button type="primary" size="large">提交</van-button>
    </div>
  </div>
</template>

<script>
import EnrollForm from "@/components/enrollForm"
  export default {
    data () {
    	return {
    		radio: '1'
    	}
    },
    components:{
      EnrollForm
    },
    onLoad: function() {
      console.log("-----index-------onLoad-----------");
      console.log(this.$root.$mp.query);
    
    },
    methods: {
      onChange () {

      }
    }
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  @import "./../../common/less/variable.less";

.container-enroll{
  background-color:@bg-color;
  padding-bottom: 30rpx;
  .raceInfo{
    background: #fff;
    padding:20rpx;
    .title{
      border-bottom: 1px solid #ddd;
      height: 60rpx;
      line-height: 60rpx;
      padding-left: 20rpx;
      color:@text-color-dark;
    }
    .item{
      overflow: hidden;
      height: 60rpx;
      line-height: 60rpx;
      .label{
        float:left;
        width:160rpx;
        text-align:center;
        color:@text-color;
      }
      .content{
        float:left;
        color:@text-color-light;
      }
    }
  }
  .selfInfo,.memberInfo{
    padding:20rpx;
    background: #fff;

  }
  .title-box{
    height:70rpx;
    line-height:70rpx;
    color:@text-color-light;
    background: @bg-color !important;
    padding-left: 20rpx;
  }
  .footer-box{
    padding:0 20rpx;
    .xy-wrapper{
      height:60rpx;
      line-height:60rpx;
      margin:10rpx 0;
    }
    .xy-box{
      font-size: @font-size-medium;
      color:@text-color-light;
      .xy-text{
        float:right;
        color:#576B95;
        margin-left: 10rpx;
      }
    }
  }
}
</style>
