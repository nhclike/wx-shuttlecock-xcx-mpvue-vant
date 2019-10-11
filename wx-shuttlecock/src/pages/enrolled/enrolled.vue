<template>
  <div class="box">
    <div class="no-box" v-show="!hasEnroll">
      <img src="./../../../static/images/no.png">
      <div class="title">目前没有报名的比赛</div>
      <div class="text">不去比比，怎么知道自己行不行？</div>
    </div>
    <div class="enroll-box" v-show="hasEnroll">
      <EnrolledInfo :raceList=raceList></EnrolledInfo>
    </div>
  </div>
</template>

<script>
  import EnrolledInfo from "@/components/enrolledInfo"
  import { mapGetters } from "vuex";

  export default {
    data () {
    	return {
        hasEnroll:false,
        raceList:[{
          // competitionAppleNum: 15,
          // competitionEndDate: "234234",
          // competitionName: "24234",
          // competitionSite: "23424",
          // competitionStartDate: "23424",
          // competitionState:'1'
        }]
    	}
    },
    components:{
      EnrolledInfo
    },
    computed:{
      ...mapGetters([
        'openId',
        'userInfo'
      ]),
    },
    mounted () {
      console.log("-----enrolled-------mounted-----------");
    },
    onLoad: function() {
      console.log("-----enrolled-------onLoad-----------");
      
    },
    onShow:function(){
      console.log("---------enrolled ----onShow------");
      if(this.openId){
        this.init();
      }
    },
    methods: {
      init(){
        let _this=this;
        let params={
          openId:_this.openId
        }

        this.$fly.getWxMyEntryCompetition(params).then((res)=> {
          console.log(res)
          if(res&&res.data&&res.data.length>0){
            _this.raceList=res.data;
            _this.hasEnroll=true;
          }
        })
      },
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
