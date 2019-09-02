<template>
  <div class="box">
    <div class="box-wrapper">
      <div class="title">
        完善个人信息
      </div>
      <div class="content">
        <van-cell-group>
          <van-field
            :value="name"
            required
            clearable
            label="姓名"
            placeholder="姓名"
          />
          <van-field
            :value="cardId"
            required
            center
            clearable
            label="身份证"
            placeholder="请输入身份证"
          >
          </van-field>
        </van-cell-group>
      </div>
      <van-button type="primary" size="large">保存</van-button>
    </div>
  </div>
  
</template>

<script>
  import { mapMutations } from 'vuex'
  export default {
    data () {
    	return {
        name:'',
        cardId:''
    	}
    },
    components:{
    },
    mounted () {
      console.log("------------mounted-----------");
    },
    onLoad: function() {
      console.log("------------onLoad-----------");
    },
    methods: {
      
    },
    
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
   @import "./../../common/less/variable.less";
.box{
   position: fixed;
  top:0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: @bg-color;
  .box-wrapper{
    margin: 40rpx;
    .title{
      margin: 30rpx 0;
    }
    .content{
      margin: 30rpx 0;
    }
  }
}


</style>
