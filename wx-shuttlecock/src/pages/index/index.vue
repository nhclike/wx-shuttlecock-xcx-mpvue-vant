<template>
  <div>
    <div class="header-box">
      <div class="search-box">
        <div class="calendar-wrapper">
          <a href="/pages/raceCalendar/main">
            <img src="/static/images/calendar.png" alt="">
          </a>
        </div>
        <div class="search-wrapper">
          <van-search 
          :value="searchWord" 
          placeholder="搜索比赛/地区" 
          input-class="search-input-class"
          field-class="search-field-class"
          custom-class="search-custom-class"
          />
        </div>
      </div>
      
      <div class="navbar-filter">
        <MenuFilter></MenuFilter>  
      </div>
    </div>
    <div class="list-box">
        <RaceInfo></RaceInfo>
        <RaceInfo></RaceInfo>  
        <RaceInfo></RaceInfo>  
        <RaceInfo></RaceInfo>  
        <RaceInfo></RaceInfo>  
        <RaceInfo></RaceInfo>  
        <RaceInfo></RaceInfo>  
        <RaceInfo></RaceInfo>  
        <RaceInfo></RaceInfo>  
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
import MenuFilter from "@/components/dropDownMenuFilter"
export default {
  data () {
    return {
      searchWord:''
    }
  },

  components: {
    RaceInfo,
    MenuFilter
  },

  methods: {
    
  },

  created () {


  }
}
</script>

<style scoped lang="less" rel="stylesheet/less">
@calendar_size:80rpx;
@header_height:180rpx;
.navigator-hover{
  background-color:#fff;
  opacity: 1;
}
.header-box{
  position:fixed;
  height:@header_height;
  width:100%;
  background-color:#fff;
  .search-box{
    position:relative;
    z-index:99;
    .calendar-wrapper{
      height:@calendar_size;
      width:@calendar_size;
      float:left;
      img{
        width:60rpx;
        height:60rpx;
        margin: 10rpx;
      }
    }
    .search-wrapper{
      width:100%;
      height:@calendar_size;
      box-sizing:border-box;
      padding-left:@calendar_size;
    }
  }
}
.list-box{
  width:100%;
  height:100%;
  box-sizing:border-box;
  padding-top: @header_height;
  overflow: hidden;

}

</style>
