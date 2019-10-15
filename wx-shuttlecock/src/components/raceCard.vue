<template>
  <div >
    	<div class="raceInfo" @click.stop="cardChoose(cardData.id,cardData.p1VsP2Name,cardData.status)">
					<div class="race-wrapper">	
						<div class="thumb-box" :style="{backgroundImage:'url(https://6d70-mpvue-test-demo-xiq0s-1259052527.tcb.qcloud.la/match.png?sign=62d5310c2ae3676e0273b5c41b5d0e01&t=1565749502)',backgroundSize:'140rpx 140rpx'}">
							<!-- <img class="recomment" src="/static/images/recommend.png" alt=""> -->
						</div>
						<div class="info-box">
							<div class="info-wrapper">
								<div class="title">
									{{cardData.p1VsP2Name}}
								</div>
								<div class="time">
									{{cardData.competitionDate}}  {{cardData.competitionEndDate}}
								</div>
								<div class="content">
									<div class="location">
										{{cardData.competitionTerrain}}
									</div>
									<div class="num">
										{{cardData.player1VSPlayer2Score==null?"":cardData.player1VSPlayer2Score}}
									</div>
								</div>
							</div>
						</div>
            <div class="operate">
									<div  v-if="cardData.status=='1'">
										<img src="./../../static/images/unstart.png" alt="">
									</div>
                  <div v-else-if="cardData.status=='2'">
                    <img src="./../../static/images/going.png" alt="">
                  </div>
									<div  v-else>
										<img src="./../../static/images/stoped.png" alt="">
									</div>
								</div>
					</div>
				</div>
  </div>
</template>

<script>
export default {
  props:{
    cardData:{
      type:Object,
      default:{}
    }
  },
 data () {
    return {
      
    }
  },
  methods:{
    cardChoose(id,vsName,status){
      console.log("--------raceCard --------------cardChoose-----------")
      let data={
        id:id,
				vsName:vsName,
				status:status
      }
      this.$emit("cardChoose",data)
    }
  }
}
</script>

<style scoped lang="less">
  @import "./../common/less/variable.less";
	@icon-height:140rpx;
	@li-height:160rpx;
	.raceInfo{
		width:100%;
		box-sizing:border-box;
    padding:10rpx 20rpx;
		.race-wrapper{
      border-top:2px solid #ddd;
			background:#fff;
			height:@li-height;
      border-radius:2rpx;
      position: relative;
      .operate{
        position: absolute;
        top:0;
        right: 0;
        img{
          height: 55rpx;
          width: 120rpx;
        }
      }
			.thumb-box{
				height:@icon-height;
				width:@icon-height;
				float:left;
				margin-top:25rpx;
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
          margin-top: 10rpx;
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
			}
		}
	}
	
</style>
