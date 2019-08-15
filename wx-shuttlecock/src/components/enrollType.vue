<template>
  <div>
    <van-action-sheet :show="show" title="比赛类型">
  		<div v-for="(item,index) in types" :key="index" @click="goToEnroll">
          {{item}}
      </div>
		</van-action-sheet>
  </div>
</template>

<script>
export default {
	props:{
		show:{
			type:Boolean,
      default:false
		}
	},
  data () {
  	return {
			types:["男子双打","男子单打","女子双打","女子单打","男女混打"]
  	}
  },
  methods:{
    goToEnroll () {
      let url="/pages/enroll/main?type=1";
      wx.navigateTo({ url })
    }
  }
}
</script>

<style>
.card {
  padding: 10px;
}
</style>
