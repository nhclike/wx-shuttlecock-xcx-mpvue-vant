<template>
  <div class="container-enroll">
    <div class="raceInfo">
      <div class="title">{{competitionInfo.competitionName}}</div>
      <div class="item">
        <div class="label">时&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;间</div>
        <div class="content">{{competitionInfo.competitionStartDate}}</div>
      </div>
      <div class="item">
        <div class="label">地&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;点</div>
        <div class="content">{{competitionInfo.competitionSite}}</div>
      </div>
      <div class="item">
        <div class="label">比赛类型</div>
        <div class="content">{{competitionInfo.type}}</div>
      </div>
    </div>
    <div class="selfInfo">
      <div class="title-box">报名信息</div>
      <div :key="index" v-for="(item,index) in enrollInfoList">
        <van-cell-group >
          <van-field
            :value="item.name"
            disabled
            clearable
            label="姓名"
            placeholder="姓名"
          />
          <van-field
            value="身份证"
            disabled
            clearable
            label="证件类型"
          />
          <van-field
            :value="item.idCard"
            disabled
            clearable
            label="证件号"
            placeholder="请输入证件号"
          />
          <van-field
            :value="item.phone"
            disabled
            clearable
            label="手机号"
            placeholder="请输入手机号"
          />
        </van-cell-group>
      </div>
      
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { showSuccess } from "@/util.js";
  export default {
    data () {
    	return {
        enrollInfoList:[
          {
            name:"11",
            idCard:"222",
            phone:"33"
          },
          {
            name:"33",
            idCard:"444",
            phone:"55"
          }
        ],
        competitionInfo:{
          type:''
        }        
    	}
    },
    components:{
      
    },
    onLoad: function() {
      console.log("-----enroll-------onLoad-----------");
      console.log(this.$root.$mp.query);
      console.log(this.userInfo);
      this.getWxCompetitionInfo();
      this.getEntryPersonnelList();
    },
    mounted(){
      console.log("-----enroll-------mounted-----------");
      console.log(this.userInfo);
      
    },
    computed:{
      ...mapGetters([
        'openId',
        'userInfo'
      ])
    },
    methods: {
      getWxCompetitionInfo(){
        let _this=this;
        let params={
          competitionId:this.$root.$mp.query.competitionId
        }
        this.$fly.getWxCompetitionInfoByCompetitionId(params).then((res)=> {
          console.log(res)
          if(res&&res.data){
            this.competitionInfo=Object.assign(res.data,{type:_this.$root.$mp.query.type});
          }
        })
      },
      getEntryPersonnelList(){
        let _this=this;
        let params={
          id:this.$root.$mp.query.entryId,
          groupCompetitionTypeId:this.$root.$mp.query.teamCompetitionType
        }
        this.$fly.getEntryPersonnelList(params).then((res)=> {
          console.log(res)
          if(res&&res.data&&res.data.length>0){
            this.enrollInfoList=res.data;
          }
        })
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
    .img-icon{
      width: 40rpx;
      height: 40rpx;
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
