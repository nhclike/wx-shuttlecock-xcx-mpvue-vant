<template>
  <div>
    <div class="gen-schedule-card">
      <div class="gen-table">
        <div class="gen-thead">
          <div class="gen-tr">
            <div class="gen-th">
              参赛人员
            </div>
            <div class="gen-th">
              胜场
            </div>
            <div class="gen-th">
              负场
            </div>
            <div class="gen-th">
              积分
            </div>
          </div>
        </div>
        <div class="gen-tbody">
          <div class="gen-tr" v-for="(item,index) in groupData" :key="index">
            <div class="gen-td">
              {{item.entryName}}
            </div>
            <div class="gen-td">
              {{item.victoryNum}}
            </div>
            <div class="gen-td">
              {{item.defeatNum}}
            </div>
            <div class="gen-td">
              {{item.score}}
            </div>
          </div>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    groupData:{
      type:Array,
      default:[]
    }
  },
  data () {
    return {
      
    }
  }
  
}
</script>

<style scoped lang="less" rel="stylesheet/less">
  @import "./../common/less/variable.less";

.gen-table {
  border: 0px solid darkgray;
  .gen-thead{
    .gen-tr{
      background: @theme-color-light;
    }
  }
  .gen-tbody{
    max-height: 10vh;
    overflow-y: scroll;
  }
  .gen-tr {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    height: 60rpx;
  }
  .gen-td {
    width:20%;
    justify-content: center;
    text-align: center;
    color: @text-color;
    &:first-child{
      width:40%;
    }
  }
  .gen-th {
    width: 20%;
    justify-content: center;
    color: @text-color-dark;
    text-align: center;
    &:first-child{
      width:40%;
    }
  }
}
.gen-schedule-card{
  margin: 4vw 0;
  background-color: #fff;
  border-radius: 8rpx;
}
.gen-tr{
  height: 5vh;
  /*line-height: 4vh;*/
}

</style>
