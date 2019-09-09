<template>
  <div class="box">
    <div class="box-wrapper">
      <div class="title">
        {{titleText}}
      </div>
      <div class="content">
        <van-cell-group>
          <van-field
            :value="tel"
            required
            clearable
            label="手机号"
            placeholder="请输入手机号"
            @change="telChange"
            :error-message="telMessage"
          />
          <van-field
            :value="sms"
            required
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
      <van-button type="primary" size="large" @click="bindTel">{{btnText}}</van-button>
    </div>
  </div>
  
</template>

<script>
  import { mapGetters, mapMutations } from 'vuex'
  import { showSuccess } from "@/util.js"
  export default {
    data () {
    	return {
        tel:'',
        telMessage:'',
        sms:'',
        btnText:'立即绑定',
        titleText:'绑定手机号'
    	}
    },
    computed:{
      ...mapGetters([
        'openId',
        "userInfo"
      ])
    },
    components:{
    },
    mounted () {
      console.log("-----bindTel-------mounted-----------");
      console.log(this.userInfo);
    },
    onLoad: function() {
      console.log("-----bindTel-------onLoad-----------");
      console.log(this.userInfo);
      if(this.userInfo.tel){
        this.tel=this.userInfo.tel;
        this.titleText="修改手机号";
        this.btnText="立即修改";
      }
    },
    methods: {
      telChange (event) {
        const phone = event.mp.detail;
        console.log("change"+phone);
        let message = '';
        if (phone) {
          if(phone.length>=11){
            if (/^1(3|4|5|7|8)\d{9}$/.test(phone)) {
              message = '';
            } else {
              message = '您输入的手机号码有误';
            }
          }
        } else {
          message = '输入的手机号不能为空';
        }
        this.telMessage=message;
        this.tel=phone;
      },
      bindTel(){
        let params={
          openId:this.openId,
          username:this.tel
        }
        if(this.btnText==="立即绑定"){
          this.$fly.bindWxUserPhone(params).then((res)=> {
            console.log(res);
            if(res.code==1){
              this.setUserInfo({tel:this.tel});
              showSuccess("绑定成功");
              let url="/pages/me/main";
              wx.switchTab({ url })
            }
          })
        }
        else if(this.btnText==="立即修改"){
          this.$fly.updateWxBindPhone(params).then((res)=> {
            console.log(res);
            if(res.code){
              this.setUserInfo({tel:this.tel});
              showSuccess("修改成功！")
              let url="/pages/me/main";
              wx.switchTab({ url })
            }
          })
        }
      },
      ...mapMutations({
        setUserInfo:'SET_USER_INFO'
      }), 
    },
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
   @import "./../../common/less/variable.less";
.box{
   position: fixed;
  top:0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: @bg-color;
  .box-wrapper{
    margin: 40rpx;
    .title{
      margin: 30rpx 0;
    }
    .content{
      margin: 30rpx 0;
    }
  }
}


</style>
