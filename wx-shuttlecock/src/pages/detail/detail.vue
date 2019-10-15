<template>
  <div class="box">
    <div class="box-content">
      <div class="title">
        {{name}}
      </div>
      <RaceDetail :raceDetail=raceDetail></RaceDetail>
    </div>
    <div class="groupMatch">
      <div class="title">
        小组赛
      </div>
      <div class="group-box">
        <div class="group-item" v-for="(val,key) in groupInfo" :key="key">
          <div class="type-title">{{key}}</div>
          <div class="table-wrapper">
            <div @click="toGroupDetail(key,index)" v-for="(item,index) in val" :key="index">
              <div class="second-title">第{{index+1}}组</div>
              <VTable :groupData="item.groupPlayerInfoList"></VTable>
            </div>  
          </div>
        </div>
      </div>
    </div>
    <div class="eliminationCompetition">
      <div class="title">
        淘汰赛
      </div>
      <div class="card-wrapper"> 
        <div v-for="(item,index) in KnockoutInfo" :key="index">
          <div class="second-title">
            第{{item.round}}轮
          </div>
          <div class="card-item">
            <div v-for="(card,i) in item.vsInfoList" :key="i">
              <RaceCard :cardData="card" @cardChoose="showIntegralDetail"></RaceCard>
            </div>
          </div>
        </div>
      </div>
    </div>
    <IntegralModal :show="modalShowFlag" @onClose="closeModal" :vsName="vsName" :integralList="integralList"></IntegralModal>
  </div>
</template>

<script>
  import RaceDetail from "@/components/raceDetail"
  import RaceCard from "@/components/raceCard"
  import VTable from "@/components/table"
  import IntegralModal from "@/components/integralModal"
  import { showModal } from "@/util";

  export default {
    data () {
    	return {
        id:'',
        name:'',
        raceDetail:{},
        groupInfo:{},
        KnockoutInfo:[],
        modalShowFlag:false,
        vsName:'',
        integralList:[]
    	}
    },
    components:{
      RaceDetail,
      RaceCard,
      VTable,
      IntegralModal
    },
    mounted(){
      console.log("-----detail-------mounted-----------");

      this.init(this.id);
    },
    computed:{
      
    },
    onLoad: function() {
      console.log("-----detail-------onLoad-----------");
      console.log(this.$root.$mp.query);
      this.id=this.$root.$mp.query.id;
      this.name=this.$root.$mp.query.name;
    },
    methods: {
      init(id){
        let params={
          competitionId:id  
        };
        this.$fly.getWxCompetitionDetail(params).then((res)=> {
          console.log(res)
          if(res&&res.data){
            let rdata=res.data;
            this.raceDetail=rdata;
          }
        })
        this.$fly.getWxGrouptCompetitionDetails(params).then((res)=> {
          console.log(res)
          if(res&&res.data!="null"){
            this.groupInfo=res.data;
          }
        })
        this.$fly.getWxKnockoutCompetitionDetailsInfo(params).then((res)=> {
          console.log(res)
          if(res&&res.data!="null"){
            this.KnockoutInfo=res.data;
          }
        })
      },
      toGroupDetail(competitionType,group){
        let url=`/pages/detailGroup/main?competitionId=${this.id}&competitionType=${competitionType}&group=${group+1}`
				wx.navigateTo({ url })
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
           this.vsName=val.vsName;
           this.modalShowFlag=true;
          }
        })
      },
      closeModal(){
        this.modalShowFlag=false;
      }
    }
  }
  
</script>

<style scoped lang="less" rel="stylesheet/less">
  @import "./../../common/less/variable.less";

.groupMatch,.eliminationCompetition{
  .title{
    height:70rpx;
    line-height:70rpx;
    color:@text-color-light;
    background: @bg-color !important;
    padding-left: 40rpx;
    font-size: @font-size-large-x;
  }
}

.box-content{
  padding: 0 40rpx;
  .title{
    border-bottom: 1px solid #ddd;
    height: 60rpx;
    line-height: 60rpx;
    color:@text-color-dark;
    font-size: @font-size-large-x;

  }
}
.group-item{
  padding:0 40rpx;
  .type-title{
    font-size: @font-size-large;

  }
}
.card-wrapper{
   padding:0 20rpx;
   .card-item{
     max-height: 315rpx;
     overflow-y: scroll;
   }
}

.second-title{
  padding-left: 20rpx;
  height: 60rpx;
  line-height: 60rpx;
  color:@text-color-dark;
  font-size: @font-size-large;

}
</style>
