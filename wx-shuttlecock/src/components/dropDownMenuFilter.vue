<template>
  <div>
   <div class="dark-bg" @click="hideNavContent" v-show='darkBg'>
      
    </div>
    <div class="nav">
    	<div class="nav-son">
    		<div class="content" @click="chooseNav('type')">分类</div>
    		<div class="icon" :class="[curTitle=='type'?'icon-select':'']"></div>
    	</div>
    	<div class="nav-son">
    		<div class="content" @click="chooseNav('date')">日期</div>
    		<div class="icon" :class="[curTitle=='date'?'icon-select':'']"></div>
    	</div>
    	<div class="nav-son">
    		<div class="content" @click="chooseNav('area')">地区</div>
    		<div class="icon" :class="[curTitle=='area'?'icon-select':'']"></div>
    	</div>
    	<div class="nav-son">
    		<div class="content" @click="chooseNav('filter')">筛选</div>
    		<div class="icon" :class="[curTitle=='filter'?'icon-select':'']"></div>
    	</div>
    </div>
    <div class="nav-content type" v-show="curTitle=='type'">
    	<div v-for="(item,index) in type" class="type-item" 
          :key="index"
          @click="chooseType(index)"
          :class="[index==curSelectType?'type-select':'']">
    		{{item}}
    	</div>
    </div>
    <div class="nav-content" v-show="curTitle=='date'">
      日期
    </div>
     <div class="nav-content" v-show="curTitle=='area'">
      地区
    </div>
     <div class="nav-content" v-show="curTitle=='filter'">
      筛选
    </div>
  </div>
</template>

<script>
export default {
  props: ['text'],
  data(){
  	return {
  		type:["不限","俱乐部赛事","学校赛事","公司赛事","其他"],
      curSelectType:0,
      curTitle:'type',
      darkBg:true
  	}
  },
  methods:{
    //选择比赛类型
    chooseType (index) {
      this.curSelectType=index;
    },
    chooseNav (title) {
      this.curTitle=title;
      this.darkBg=true;
    },
    hideNavContent () {
      this.curTitle='';
      this.darkBg=false;
    }
  }
}
</script>

<style scoped lang="less">
.dark-bg{
  background: rgba(108,108,108,0.3);
  position:fixed;
  top:0;
  left:0;
  right:0;
  bottom: 0;
  z-index:10;
}
.nav {
  position: relative;
  z-index: 99;
  display: flex;
  border-bottom: 1rpx solid #ddd;
  background: #fff;
  .nav-son {
	  display: flex;
	  flex: 1;
	  text-align: center;
	  height: 80rpx;
	  align-items: center;
	  justify-content: center;
	  font-size: 28rpx;
	  .content {
		  display: inline-block;
		  font-size: 32rpx;
		  color: #666;
		}

		.icon {
		  display: inline-block;
		  border: 10rpx solid transparent;
		  border-top: 10rpx solid #666;
		  margin-left: 10rpx;
		  margin-top: 10rpx;
		}
    .icon-select{
      transform:rotate(180deg) translate(0,10rpx);
      transition: transform 1s ease 0s;
    }
	}
}

.nav-content{
	background:#fff;
  position: relative;
  z-index: 99;
}
.type{
	.type-item{
		font-size:24rpx;
		border-bottom: 1px solid #ddd;
		height:80rpx;
		line-height: 80rpx;
		padding-left:20rpx;
	}
  .type-select{
    color:#e4393c;
  }
}
.borders {
  border-left: 1rpx solid #f4f4f4;
  border-right: 1rpx solid #f4f4f4;
}


</style>
