<template>
  <div>
   <div class="dark-bg" @click="hideNavContent" v-show='darkBg'>

    </div>
    <div class="nav">
    	<div class="nav-son" v-for="(item,index) in titles" :key="index" @click="chooseNav(index)">
    		<div class="content" >{{item}}</div>
    		<div class="icon" :class="[curTitleIndex==index?'icon-select':'']"></div>
    	</div>
    	<!-- <div class="nav-son">
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
    	</div> -->
    </div>
    <div class="nav-content type" v-show="curTitleIndex==0">
    	<div v-for="(item,index) in types" class="type-item"
          :key="index"
          @click="chooseType(index)"
          :class="[index==curSelectType?'type-select':'']">
    		{{item}}
    	</div>
    </div>
    <div class="nav-content" v-show="curTitleIndex==1">
      <Datetime-Picker 
        @onConfirm="datetimeConfirm"
        @onCancel="datetimeCancel">
      </Datetime-Picker> 
    </div>
    <div class="nav-content" v-show="curTitleIndex==2">
      <div class="area-wrapper">
        <div v-for="(item,index) in areaNames" class="area-item"
          :key="index" 
          @click="chooseArea(index)"
          :class="[index==curSelectArea?'area-select':'']">
          {{item}}
        </div> 
      </div>   
    </div>
     <div class="nav-content" v-show="curTitleIndex==3">
      <div class="filter-wrapper">
        <div class="small-title">筛选</div>
        <div class="status-wrapper">
          <div v-for="(item,index) in status"  class="status-item" 
            :key="index"
            @click="chooseStatus(index)"
            :class="[index==curSelectStatus?'status-select':'']">
            {{item}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DatetimePicker from "@/components/DatetimePicker"

export default {
  props: ['text'],
  data(){
  	return {
      curTitleIndex:-1,
      titles:["分类","日期","地区","筛选"],
  		types:["不限","俱乐部赛事","学校赛事","公司赛事","其他"],
      curSelectType:0,
      
      darkBg:false,
      areaNames:["不限","上海","重庆","杭州","上海","武汉","天津","南京","南昌","广州","深圳","成都","长沙"],
      curSelectArea:0,
      status:["不限","一键报名","正在报名"],
      curSelectStatus:0

  	}
  },
  components: {
    DatetimePicker
  },
  methods:{
    //选择比赛类型
    chooseType (index) {
      this.curSelectType=index;
      if(index==0){
        this.chooseItem("类型");
      }
      else{
        this.chooseItem(this.types[index]);
      }
    },
    //选择比赛区域
    chooseArea (index) {
      this.curSelectArea=index;
      if(index==0){
        this.chooseItem("区域");
      }
      else{
        this.chooseItem(this.areaNames[index]);
      }
    },
    //选择比赛状态
    chooseStatus (index) {
      this.curSelectStatus=index;
      if(index==0){
        this.chooseItem("筛选");
      }
      else{
        this.chooseItem(this.status[index]);
      }
    },
    //确定日期选择
    datetimeConfirm (val) {
      console.log(val);
      this.chooseItem(val);
    },
    
    //取消日期选择--选择不限
    datetimeCancel () {
      console.log("datetimeCancel");
      this.chooseItem("日期");

    },
    chooseItem (val) {
      this.titles[this.curTitleIndex]=val;
      this.hideNavContent();
    },
    //选择导航菜单项
    chooseNav (index) {
      this.curTitleIndex=index;
      this.darkBg=true;
    },
    //隐藏导航菜单项
    hideNavContent () {
      this.curTitleIndex=-1;
      this.darkBg=false;
    }
  }
}
</script>

<style scoped lang="less">
  @import "./../common/less/variable.less";

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
    background: #fff;
    .nav-son {
      display: flex;
      flex: 1;
      text-align: center;
      height: 80rpx;
      align-items: center;
      justify-content: center;
      .content {
        display: inline-block;
        font-size: @font-size-medium-x;
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
      font-size:@font-size-medium-x;
      border-bottom: 1px solid #ddd;
      height:80rpx;
      line-height: 80rpx;
      padding-left:20rpx;
      color:@text-color;
    }
    
  }
  .type-select,.area-select,.status-select{
    color:@theme-color !important;
  }
  .borders {
    border-left: 1rpx solid #f4f4f4;
    border-right: 1rpx solid #f4f4f4;
  }
  .area-wrapper{
    overflow: hidden;
    .area-item{
      font-size:@font-size-medium-x;
      color:@text-color;
      float: left;
      margin:25rpx;
    }
  }
  .filter-wrapper{
    padding:10rpx;
    .small-title{
      font-size: @font-size-small-s;
      color:@text-color-light;

    }
    .status-wrapper{
      display:flex;
      justify-content:space-around;
      color:@text-color;
      font-size:@font-size-medium-x;
      margin:10rpx 0;
      .status-item{
        flex:0 0 33%;
        text-align:left;
      }
    }
  }


</style>
