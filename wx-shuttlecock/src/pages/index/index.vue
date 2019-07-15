<template>
  <div class="header-box">
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
    <div class="list-box">
      <RaceInfo></RaceInfo>  
    </div>
  </div>
</template>

<script>
import RaceInfo from "@/components/raceInfo"
export default {
  data () {
    return {
      searchWord:''
    }
  },

  components: {
    RaceInfo
  },

  methods: {
    
  },

  created () {


  }
}
</script>

<style scoped lang="less" rel="stylesheet/less">
@calendar_size:80rpx;
.header-box{
  padding: 0 10rpx;
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
.list-box{
  width:100%;
}

</style>
