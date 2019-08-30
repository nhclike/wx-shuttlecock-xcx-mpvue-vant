<template>
  <div class="box">
    <div class="title">
      绑定手机号
    </div>
    <div>
      <van-cell-group>
        <van-field
          :value="tel"
          required
          clearable
          label="手机号"
          placeholder="请输入手机号"
        />
        <van-field
          :value="sms"
          center
          clearable
          label="短信验证码"
          placeholder="请输入短信验证码"
          border="false"
          use-button-slot
        >
          <van-button slot="button" size="small" type="primary">发送验证码</van-button>
        </van-field>
      </van-cell-group>
    </div>
          <van-button type="primary" size="large">立即绑定</van-button>

  </div>
</template>

<script>
  import { mapMutations } from 'vuex'
  export default {
    data () {
    	return {
        tel:'',
        sms:''
    	}
    },
    components:{
    },
    mounted () {
      console.log("------------mounted-----------");
    },
    onLoad: function() {
      console.log("------------onLoad-----------");
    },
    methods: {
      
    },
    
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  @import "./../../common/less/variable.less";


</style>
