<template>
  <div class="container-enroll">
    <div class="raceInfo">
      <div>某某俱乐部羽毛球比赛</div>
      <div>
        <div>时间</div>
        <div>2019-09-01</div>
      </div>
      <div>
        <div>地点</div>
        <div>2019-09-01</div>
      </div>
      <div>
        <div>比赛类型</div>
        <div>男女混双</div>
      </div>
      <div>
        <div>报名要求</div>
        <div>年龄25岁到30岁</div>
      </div>
    </div>
    <div class="selfInfo">
      <div>参赛者信息</div>
      <EnrollForm></EnrollForm>
    </div>
    <div class="memberInfo">
      <div>队友信息</div>
      <EnrollForm></EnrollForm>
    </div>
    <div class="footer-box">
      <van-radio-group :value="radio" @change="onChange">
        <van-radio name="1">
          <div class="xy-box">
            <a href="" class="xy-text">《参赛协议》</a>
            我已阅读并接受
          </div>
        </van-radio>
      </van-radio-group>
      <van-button type="primary" size="large">提交</van-button>

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
  @import "./../../common/less/variable.less";

.container-enroll{
  background-color:#ddd;
  padding-bottom: 30rpx;
  .raceInfo{
    background: #fff;
    width: 100%;

  }
  .selfInfo,.memberInfo{
    width:100%;
  }
  .footer-box{
    padding:0 20rpx;
    .xy-box{
      font-size: @font-size-medium;
      color:@text-color-light;
      .xy-text{
        float:right;
        color:#576B95;
      }
    }
  }
}
</style>
