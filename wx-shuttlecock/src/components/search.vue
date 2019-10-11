<template>
  <div>
    <van-search 
      :value="searchWord" 
      placeholder="搜索比赛/地区" 
      input-class="search-input-class"
      field-class="search-field-class"
      custom-class="search-custom-class"
      cancel-class="search-cancel-class"
      :use-action-slot="useActionSlot"
      @search="onSearch"
      @cancel="onCancel"
      @change="onChange"
      @focus="onFocus"
      @blur="onBlur"
      @clear="onClear"
      >
     <view slot="action" @click="actionBtnClick" :class="[searchBtnText=='取消'?'btn-cancel-class':'btn-search-class']">{{searchBtnText}}</view>
    </van-search>          
  </div>
</template>

<script>
export default {
  data () {
    return {
      searchBtnText:'搜索',
      useActionSlot:false
    }
  },
  methods: {
    onCancel (e) {
      console.log("onCancel");
    },
    onSearch (e) {
      console.log("onSearch");
      console.log(e);
      this.searchBtnText="搜索";
    },
    onChange (e) {
      console.log("onChange");
      console.log(e);
      if(e.mp.detail && e.mp.detail.length>0 &&  this.searchBtnText!="搜索"){
          this.searchBtnText="搜索";
      }
    },
    onFocus () {
      console.log("onFocus");
      this.useActionSlot=true;
      this.searchBtnText="取消";
    },
    onBlur () {
    	console.log("onBlur");
    },
    actionBtnClick () {
      console.log("actionBtnClick");
      if(this.searchBtnText=="搜索"){

      }
      else {
        this.useActionSlot=false;
      }
    },
    onClear () {
      this.searchBtnText="取消";
    }
  }
}
</script>

<style scoped lang="less">
  @import "./../common/less/variable.less";
  .btn-search-class{
    font-size:@font-size-medium;
    color:#fff;
    background:@theme-color;
    height:50rpx;
    line-height:50rpx;
    width:120rpx;
    text-align:center;
    border-radius:10rpx;
  }
  .btn-cancel-class{
    font-size:@font-size-medium;
    color:#333;
    background:#f2f2f2;
    height:50rpx;
    line-height:50rpx;
    width:120rpx;
    text-align:center;
    border-radius:10rpx;
  }
</style>
