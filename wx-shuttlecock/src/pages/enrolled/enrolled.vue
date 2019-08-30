<template>
  <div>
    <div>
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
  export default {
    data () {
    	return {
    		
    	}
    },
    components:{
      RaceInfo
    },
    methods: {
      onClickIcon () {

      },
      onClickButton () {

      }
    }
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
.van-goods-action{
  background-color:#ddd;
}
</style>
