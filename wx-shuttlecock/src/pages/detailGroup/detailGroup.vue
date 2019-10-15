<template>
  <div class="box">
    <div class="title">
      {{competitionType}}
    </div>
    <div class="second-title">
      第{{group}}组
    </div>
    <div v-for="(item,index) in groupRaceList" :key="item.id">
      <RaceCard :cardData="item" @cardChoose="showIntegralDetail"></RaceCard>
    </div>
    <IntegralModal :show="modalShowFlag" @onClose="closeModal" :vsName="vsName" :integralList="integralList"></IntegralModal>

  </div>
</template>

<script>
  import RaceCard from "@/components/raceCard"
  import IntegralModal from "@/components/integralModal"
  import { showModal } from "@/util";
  export default {
    data () {
    	return {
        groupRaceList:[],
        competitionType:'',
        group:'',
        modalShowFlag:false,
        vsName:'',
        integralList:[]
    	}
    },
    components:{
      RaceCard,
      IntegralModal
    },
    mounted(){
      console.log("-----detailGroup-------mounted-----------");

      this.init();
    },
    onLoad: function() {
      console.log("-----detailGroup-------onLoad-----------");
      let queryData=this.$root.$mp.query;
      console.log(queryData);
      this.group=queryData.group;
      this.competitionType=queryData.competitionType;
     
    },
    onShow:function (params) {
      console.log("-----detailGroup-------onShow-----------");

    },
    methods: {
      init(id){
        this.$fly.getWxGroupPlayerVSInfo(this.$root.$mp.query).then((res)=> {
          console.log(res)
          if(res&&res.data!="null"){
           this.groupRaceList=res.data;
          }
        })
      },
      closeModal(){
        this.modalShowFlag=false;
      },
      showIntegralDetail(val){
        console.log(val);
        if(val.status=='1'){
          showModal("系统提示","当前比赛未开始");
          return false;
        }
        let params={
          id:val.id
        }
        
        this.$fly.getIntegralInfo(params).then((res)=> {
          console.log(res)
          if(res&&res.data!="null"){
            this.integralList=res.data;
            this.modalShowFlag=true;
            this.vsName=val.vsName;
          }
        })
      },
    }
  }
  
</script>

<style scoped lang="less" rel="stylesheet/less">
  @import "./../../common/less/variable.less";
.box{
  padding: 20rpx;

}
.title{
  height:70rpx;
  line-height:70rpx;
  color:@text-color-light;
  background: @bg-color !important;
  padding-left: 20rpx;
  font-size: @font-size-large-x;

}
.second-title{
  padding-left: 20rpx;
  height: 60rpx;
  line-height: 60rpx;
  color:@text-color-dark;
  font-size: @font-size-large;

}

</style>
