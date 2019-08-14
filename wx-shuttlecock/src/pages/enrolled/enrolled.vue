<template>
  <div>
  
    <div>
      <RaceDetail></RaceDetail>  
    </div>



    <van-goods-action>
      <van-goods-action-icon
        icon="like-o"
        text="收藏"
        @click="onClickIcon"
      />
      <van-goods-action-icon
        icon="edit"
        text="参赛宣言"
        @click="onClickIcon"
      />
      <van-goods-action-icon
        icon="flag-o"
        text="参加过"
        @click="onClickIcon"
      />
      
      <van-goods-action-button
        text="写点评"
        @click="onClickButton"
        type="warning"
      />
      <van-goods-action-button
        text="一键报名"
        @click="onClickButton"
      />
    </van-goods-action>
  </div>
</template>

<script>
import RaceDetail from "@/components/RaceDetail"
  export default {
    data () {
    	return {
    		
    	}
    },
    components:{
      RaceDetail
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
