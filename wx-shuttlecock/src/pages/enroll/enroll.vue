<template>
  <div>
    <div class="raceInfo">
      <div>某某俱乐部羽毛球比赛</div>

    </div>
    <div class="selfInfo">
      <div>参赛者信息</div>
      <EnrollForm></EnrollForm>
    </div>
    <div class="memberInfo">
      <div>队友信息</div>
      <EnrollForm></EnrollForm>
    </div>
    <div>
      <van-radio-group :value="radio" @change="onChange">
        <van-radio name="1">
          <div>
            我已阅读并接受<a href="">《参赛协议》</a>
          </div>
        </van-radio>
      </van-radio-group>
      
    </div>
  </div>
</template>

<script>
import EnrollForm from "@/components/enrollForm"
  export default {
    data () {
    	return {
    		radio: '1'
    	}
    },
    components:{
      EnrollForm
    },
    methods: {
      onChange () {

      }
    }
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
.van-goods-action{
  background-color:#ddd;
}
</style>
