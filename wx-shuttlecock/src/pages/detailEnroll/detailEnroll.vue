<template>
  <div class="box">
    <div class="box-content">
      <RaceDetail :raceDetail=raceDetail></RaceDetail> 
    </div>
    <div class="box-footer">
      <van-goods-action >
        <!-- <van-goods-action-icon
          icon="like-o"
          text="收藏"
        />
        <van-goods-action-icon
          icon="edit"
          text="参赛宣言"
         
        />
        <van-goods-action-icon
          icon="flag-o"
          text="参加过"
          
        />
        
        <van-goods-action-button
          text="写点评"
          type="warning"
        /> -->
        <van-goods-action-button
          text="一键报名"
          @click="showEnrollType"
        />
      </van-goods-action>
    </div>
    <EnrollType 
      :show=showEnrollTypeFlag 
      :types=types
      @onClose=closeEnrollType>
    </EnrollType>
  </div>
</template>

<script>
  import RaceDetail from "@/components/raceDetail"
  import EnrollType from "@/components/enrollType"
  import { mapMutations } from "vuex";
  export default {
    data () {
    	return {
        showEnrollTypeFlag:false,
        id:'',
        raceDetail:{},
        types:[]
    	}
    },
    components:{
      RaceDetail,
      EnrollType
    },
    mounted(){
      this.init(this.id);
    },
    onLoad: function() {
      console.log("-----index-------onLoad-----------");
      console.log(this.$root.$mp.query);
      this.id=this.$root.$mp.query.id;
      
    },
    methods: {
      init(id){
        //拿到当前比赛详情
        let params={
          competitionId:id  
        };
        this.$fly.getWxCompetitionDetail(params).then((res)=> {
          console.log(res)
          if(res&&res.data){
            this.raceDetail=res.data;
          }
        })
      },
      //拿到当前比赛项目类型
      getWxCompetitionItem(){
        let params={
          competitionId:this.id 
        };
        this.$fly.getWxCompetitionItem(params).then((res)=> {
          console.log(res)
          if(res&&res.data){
            this.types=res.data;
          }
        })
      },
      showEnrollType () {
        if(this.types.length===0){
          this.getWxCompetitionItem();
        }
        this.setCurEnrollId(this.id);

        this.showEnrollTypeFlag=true;
      },
      closeEnrollType () {
        this.showEnrollTypeFlag=false;
      },
       ...mapMutations({
        setCurEnrollId:'SET_CUR_ENROLL_ID'
      }),
    }
  }
  
</script>

<style scoped lang="less" rel="stylesheet/less">


</style>
