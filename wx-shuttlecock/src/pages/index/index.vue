<template>
  <div>
    <div class="header-box">
      <div class="search-box">
        <div class="search-wrapper">
          <Search></Search>
        </div>
      </div>
      <div class="navbar-filter">
         <MenuFilter @changeItem="changeMenuFilter"></MenuFilter> 
      </div>
    </div>
    <div class="list-box">
        <RaceInfo :raceList=raceList></RaceInfo>
    </div>
  </div>
</template>

<script>
import RaceInfo from "@/components/raceInfo"
import MenuFilter from "@/components/dropDownMenuFilter"
import Search from "@/components/search"
import { mapGetters } from "vuex";
export default {
  data () {
    return {
      searchWord:'',
      raceList:[]
    }
  },
  components: {
    RaceInfo,
    MenuFilter,
    Search
  },
  created () {
    console.log("-----index-------created-----------");
  },
  computed:{
    ...mapGetters([
      'filterRaceObj'
    ])
  },
  mounted () {
    console.log("-----index-------mounted-----------");
  },
  onLoad: function() {
    console.log("-----index-------onLoad-----------");
    this.init();

  },
  methods:{
    init(){
      let _this=this;
      let params={
        pageNum:0,
        pageSize:10,
        competitionState:_this.filterRaceObj.competitionState,
        competitionDate:_this.filterRaceObj.competitionDate,
      }
      _this.$fly.getWxCompetitionList(params).then((res)=> {
        console.log(res)
        if(res&&res.data){
          _this.raceList=res.data;
        }
      })
    },
    changeMenuFilter(){
      console.log("changItem");
      console.log(this.filterRaceObj);
      this.init();
    }
  }
}
</script>

<style scoped lang="less" rel="stylesheet/less">
  @import "./../../common/less/variable.less";

@calendar_size:80rpx;
@header_height:170rpx;
.header-box{
  position:fixed;
  height:@header_height;
  width:100%;
  background-color:#fff;
  .search-box{
    position:relative;
    z-index:99;
    // .calendar-wrapper{
    //   height:@calendar_size;
    //   width:@calendar_size;
    //   float:left;
    //   background:#fff;
    //   img{
    //     width:60rpx;
    //     height:60rpx;
    //     margin: 10rpx;
    //   }
    // }
    .search-wrapper{
      width:100%;
      height:@calendar_size;
      box-sizing:border-box;
      // padding-left:@calendar_size;
    }
  }
}
.list-box{
  width:100%;
  height:100%;
  box-sizing:border-box;
  padding-top: @header_height+10rpx;
  overflow: hidden;
  background:@bg-color;
}

</style>
