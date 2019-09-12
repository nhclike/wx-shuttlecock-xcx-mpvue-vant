<template>
  <div>
    <van-action-sheet :show="show" title="比赛类型" @close="onClose">
      <div class="center-box">
        <div v-for="(item,index) in types"  class="type-item" 
          :class="[item.competitionType==curSelType?'selectType':'']"
          :key="index" 
          @click="changeType(item.competitionType)"
          >
          {{item.competitionTypeName}}
        </div>
      </div>
  		
      <div class="footer-box">
        <div class="enrollBtn" @click="goToEnroll">报名</div>
      </div>
		</van-action-sheet>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
	props:{
		show:{
			type:Boolean,
      default:false
    },
    types:{
      type:Array,
      default:[{
        competitionTypeName:'',
        competitionType:0
      }]
    }
	},
  data () {
  	return {
      curSelType:1
  	}
  },
  computed:{
    ...mapGetters([
      'curEnrollId',
      'openId',
      'userInfo'
    ])
  },
  methods:{
    goToEnroll () {
      let url='';
      console.log("this.curEnrollId"+this.curEnrollId);
      console.log("this.curEnrollId"+this.openId);
      console.log("this.curEnrollId"+this.userInfo);

      if(!this.openId){
        url="/pages/authUserInfo/main";
      }
      else if(!this.userInfo.tel){
        url="/pages/bindTel/main";
      }
      else{
        url=`/pages/enroll/main?type=${this.curSelType}&competitionId=${this.curEnrollId}`;
      }
      wx.navigateTo({ url })
    },
    onClose () {
      this.$emit('onClose');
    },
    changeType (type) {
      this.curSelType=type;
    }
  }
}
</script>

<style scoped lang="less">
  @import "./../common/less/variable.less";
  .center-box{
    margin-bottom: 100rpx;
  }
  .footer-box{
    position:absolute;
    bottom: 0;
    height:100rpx;
    width:100%;

  }
  .type-item{
    height: 80rpx;
    line-height:80rpx;
    margin: 20rpx;
    border: 1px solid #ddd;
    border-radius:10rpx;
    text-align: center;
    background: #ddd;
    font-size: @font-size-medium-x;
    color:@text-color-dark;
  }
  .selectType{
    border-color: @theme-color;
    color:@theme-color;
    background:rgba(37,146,252,0.4);
  }
  .enrollBtn {
    font-size:@font-size-medium;
    color:#fff;
    background:@theme-color;
    height:60rpx;
    line-height:60rpx;
    width:160rpx;
    text-align:center;  
    border-radius:40rpx; 
    float: right;
    margin:20rpx;
  }
</style>
