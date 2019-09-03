<template>
  <div class="box">
    <div class="box-wrapper">
			<div class="item">
    		<b>比赛名称：</b>
    		<span>杭州市青年比赛</span>
    	</div>
			<div class="item">
    		<b>比赛方式：</b>
    		<span>小组积分淘汰赛</span>
    	</div>
			<div class="item">
    		<b>比赛类型：</b>
    		<span>男单/女单/混双</span>
    	</div>
    	<div class="item">
    		<b>比赛时间：</b>
    		<span>2019-10-20</span>
    	</div>
    	<div class="item">
    		<b>报名时间：</b>
    		<span>2019-7-28开始到2019-9-25结束</span>
    	</div>
    	<div class="item">
    		<b>比赛地点：</b>
    		<span>杭州市 滨江区 市体育馆</span>
    	</div>
			<div class="item">
    		<b>比赛器械：</b>
    		<span>自备</span>
    	</div>
			<div class="item">
    		<b>报名费用：</b>
    		<span>0</span>
    	</div>
			<div class="item">
    		<b>比赛说明：</b>
    		<span>本次比赛为促进公司团队合作</span>
    	</div>
    	<div class="item">
    		<b>主办方：</b>
    		<span>某某某公司</span>
    	</div>
    	<div class="item">
    		<b>咨询电话：</b>
    		<span>8098980</span>
    	</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['text']
}
</script>

<style scoped lang="less">
  @import "./../common/less/variable.less";

.box{

	.box-wrapper{
		margin: 40rpx;
		.item{
			display: flex;
			font-size: @font-size-medium-x;
			margin: 20rpx 0;
			b{
				color:@text-color;
			}
			span{
				color:@text-color-light;
			}
		}
	}
}
</style>
