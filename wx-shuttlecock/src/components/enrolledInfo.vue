<template>
	<div>
		<div  :key="index" v-for="(item,index) in raceList">
			<!-- <a :href="detailUrl"> -->
				<div class="raceInfo" @click.stop="detailUrl(item.competitionType,item.id,item.entryId,item.teamCompetitionType)">
					<div class="race-wrapper">	
						<div class="thumb-box" :style="{backgroundImage:'url(https://6d70-mpvue-test-demo-xiq0s-1259052527.tcb.qcloud.la/match.png?sign=62d5310c2ae3676e0273b5c41b5d0e01&t=1565749502)',backgroundSize:'180rpx 180rpx'}">
							<!-- <img class="recomment" src="/static/images/recommend.png" alt=""> -->
						</div>
						<div class="info-box">
							<div class="info-wrapper">
								<div class="title">
									{{item.competitionName}}
								</div>
								<div class="time">
									{{item.competitionStartDate}} ~ {{item.competitionEndDate}}
								</div>
								<div class="content">
									<div class="location">
										{{item.competitionSite}}
									</div>
									<div class="num">
										{{item.competitionAppleNum}}
									</div>
								</div>
								<div class="operate">
									<div class="opt-btn gray" v-if="item.competitionState=='1'">
										报名中
									</div>
									<div class="opt-btn orange" v-else>
										已结束报名
									</div>
									<div class="opt-btn red">
										{{item.competitionType}}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			<!-- </a> -->
		</div>
	</div>
</template>

<script>
  export default {
		props:{
			raceList:{
				type:Array,
				default:[]
			}
		},
    data(){
      return{

      }
    },
    components:{

    },
    computed:{
    
    },
    methods:{
			detailUrl(type,competitionId,entryId,teamCompetitionType){
				let url='';
				let groupCompetitionTypeId=teamCompetitionType?teamCompetitionType:"";
				console.log(groupCompetitionTypeId+"groupCompetitionTypeId")
				url= `/pages/enrolledDetail/main?type=${type}&competitionId=${competitionId}&entryId=${entryId}&teamCompetitionType=${groupCompetitionTypeId}`;
				wx.navigateTo({ url })

      }
    }
  }

</script>
<style scoped lang="less">
  @import "./../common/less/variable.less";
	@icon-height:180rpx;
	@li-height:220rpx;
	.raceInfo{
		width:100%;
		box-sizing:border-box;
		padding:10rpx 20rpx;
		.race-wrapper{
			background:#fff;
			height:@li-height;
			border-radius:10rpx;
			.thumb-box{
				height:@icon-height;
				width:@icon-height;
				float:left;
				margin-top:10rpx;
				.recomment{
					float:left;
					width:100rpx;
					height:100rpx;
				}
			}
			.info-box{
				width:100%;
				height:@li-height;
				box-sizing:border-box;
				padding-left:@icon-height;
				.info-wrapper{
					width:100%;
					height:100%;
					display:flex;
					flex-direction: column;
					justify-content: center;
				}
				.title,.time,.content,.operate{
					margin:5rpx 10rpx;
				}
				.title{
					font-size:@font-size-large;
					color: @text-color-dark;
				}
				.time{
					font-size:@font-size-medium;
					color: @text-color;
				}
				.content{
					display: flex;
					font-size:@font-size-medium;
					color:@text-color-light;
					.location{
						margin-right: 20rpx;
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
						&.red{
							color:#e4393c;
							background-color:#FCD8D8;
						}
					}
				}
			}
		}
	}
</style>
