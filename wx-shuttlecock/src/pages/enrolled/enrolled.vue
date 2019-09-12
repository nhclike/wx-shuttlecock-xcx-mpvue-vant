<template>
  <div class="box">
    <div class="no-box" v-show="!hasEnroll">
      <img src="./../../../static/images/no.png">
      <div class="title">目前没有报名的比赛</div>
      <div class="text">不去比比，怎么知道自己行不行？</div>
    </div>
    <div class="enroll-box" v-show="hasEnroll">
      <RaceInfo></RaceInfo>
      <RaceInfo></RaceInfo>  
      <RaceInfo></RaceInfo>  
      <RaceInfo></RaceInfo>  
      <RaceInfo></RaceInfo>  
      <RaceInfo></RaceInfo>  
      <RaceInfo></RaceInfo>  
      <RaceInfo></RaceInfo>  
      <RaceInfo></RaceInfo>   
    </div>
  </div>
</template>

<script>
import RaceInfo from "@/components/raceInfo"
  export default {
    data () {
    	return {
    		hasEnroll:false
    	}
    },
    components:{
      RaceInfo
    },
    methods: {
      onClickIcon () {

      },
      onClickButton () {

      }
    }
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
  background-color: @bg-color;
  .enroll-box{
    height: 100%;
    width: 100%;
    overflow: auto;
  }
}
.no-box{
  text-align: center;
  margin-top:300rpx;
  img{
    width: 360rpx;
    height: 300rpx;
  }
  .title{
    font-size: @font-size-medium-x;
    color: @text-color-dark;
    margin: 30rpx;
  }
  .text{
    font-size: @font-size-medium;
    color: @text-color-light;
  }
}
</style>
