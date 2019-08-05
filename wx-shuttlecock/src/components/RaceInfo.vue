<template>
	<a :href="detailUrl">
		<div class="raceInfo">
			<div class="thumb-box" :style="{backgroundImage:'url(/static/images/timg.png)',backgroundSize:'180rpx 180rpx'}">
				<img class="recomment" src="/static/images/recommend.png" alt="">
			</div>
			<div class="info-box">
				<div class="title">
					2019杭州滨江区羽毛球比赛
				</div>
				<div class="content">
					<div class="time">
						2019-07-07
					</div>
					<div class="location">
						滨江羽毛球馆
					</div>
				</div>
				<div class="operate">
					<div class="opt-btn gray">报名中</div>
					<div class="opt-btn orange">
						一键报名
					</div>
				</div>
			</div>
		</div>
	</a>

</template>

<script>
  export default {
    data(){
      return{

      }
    },
    components:{

    },
    computed:{
      detailUrl(){
        return '/pages/detail/main?id=1'
      }
    },
    methods:{

    }

  }

</script>
<style scoped lang="less">
  @import "./../common/less/variable.less";
	@icon-height:180rpx;
	.raceInfo{
		width:100%;
		height:@icon-height;
		box-sizing:border-box;
		padding: 0 20rpx;
		.thumb-box{
			height:@icon-height;
			width:@icon-height;
			float:left;
			.recomment{
				float:left;
				width:100rpx;
				height:100rpx;
			}
		}
		.info-box{
			width:100%;
			height:@icon-height;
			box-sizing:border-box;
			padding-left:@icon-height;
			.title{
				margin:10rpx;
			}
			.content{
				display: flex;
				font-size:@font-size-large;
				color: #666;
				margin:10rpx;
				.time{
					margin-right: 10rpx;
				}
			}
			.operate{
				display:flex;
				.opt-btn{
					text-align: center;
					font-size: @font-size-small-s;
					background-color: #ddd;
					border: 1rpx solid #ddd;
					border-radius: 20rpx;
					height:40rpx;
					width:120rpx;
					padding:5rpx;
					box-sizing:border-box;
					margin:10rpx;
					&.gray{
						color:#455578;
						background-color:#EBEFF1;
					}
					&.orange{
						color:#FF651F;
						background-color:#FFEAE1;
					}
				}
			}
		}
	}
</style>
