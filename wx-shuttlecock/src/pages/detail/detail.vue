<template>
  <div class="box">
    <div class="box-content">
      <RaceDetail :raceDetail=raceDetail></RaceDetail> 
    </div>
  </div>
</template>

<script>
  import RaceDetail from "@/components/raceDetail"

  export default {
    data () {
    	return {
        id:'',
        raceDetail:{}
    	}
    },
    components:{
      RaceDetail,
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
      showEnrollType () {
          this.showEnrollTypeFlag=true;
      },
      closeEnrollType () {
          this.showEnrollTypeFlag=false;

      }
    }
  }
  
</script>

<style scoped lang="less" rel="stylesheet/less">
// .box{
//   position: fixed;
//   top:0;
//   bottom:0;
//   left:0;
//   right:0;
//   z-index:0;
//   .box-content{
//     position: absolute;
//     top:0;
//     bottom:100rpx;
//     width: 100%;
//     z-index: 1;
//   }
//   .box-footer{
//     position: absolute;
//     bottom: 0;
//     width: 100%;
//     height: 100rpx;
//     left: 0;
//     z-index: 1;
//   }
//   .box-type{
//     position: fixed;
//     top: 0;
//     width: 100%;
//     height: 100%;
//     left: 0;
//     z-index: 5000;
//   }
// }

</style>
