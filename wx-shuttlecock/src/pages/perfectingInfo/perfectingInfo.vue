<template>
  <div class="box">
    <div class="box-wrapper">
      <div class="title">
        {{titleText}}
      </div>
      <div class="content">
        <van-cell-group>
          <van-field
            :value="name"
            required
            clearable
            label="姓名"
            placeholder="姓名"
            @change="nameChange"
          />
          <van-field
            :value="cardId"
            required
            center
            clearable
            label="身份证"
            placeholder="请输入身份证"
            @change="cardChange"
          >
          </van-field>
        </van-cell-group>
      </div>
      <van-button type="primary" size="large" @click="saveInfo">{{btnText}}</van-button>
    </div>
  </div>
  
</template>

<script>
  import { mapGetters, mapMutations } from 'vuex'
  import {validateName,validateIdCard} from "@/utils/validate.js"
  import { showSuccess } from "@/util.js"

  export default {
    data () {
    	return {
        name:'',
        cardId:'',
        titleText:'完善个人信息',
        btnText:'立即完善'
    	}
    },
    components:{
    },
    computed:{
      ...mapGetters([
        'openId',
        "userInfo"
      ])
    },
    mounted () {
      console.log("------------mounted-----------");
    },
    onLoad: function() {
      console.log("------------onLoad-----------");
      console.log(this.userInfo);
      this.name=this.userInfo.realName;
      this.cardId=this.userInfo.cardId;
      if(this.userInfo.realName && this.userInfo.cardId){
        
        this.titleText="修改个人信息";
        this.btnText="立即修改";
      }
    },
    methods: {
      nameChange (e){
        let val=e.mp.detail;
        this.name=val;
        //validateName(val);
      },
      cardChange (e){
        let val=e.mp.detail;
        this.cardId=val;
        //validateIdCard(val);
      },
      saveInfo (){
        if(validateIdCard(this.cardId)&&validateName(this.name)){
          //验证通过
          console.log("验证通过");
          let params={
            openId:this.openId,
            name:this.name,
            idCard:this.cardId
          };
          this.$fly.updateUserInfoByOpenId(params).then(res=>{
            console.log(res);
            if(res.code){
              this.setUserInfo({realName:this.name,cardId:this.cardId});
              showSuccess("保存成功！")
              let url="/pages/me/main";
              wx.switchTab({ url })
            }
          })
        }
        else{
          wx.showToast({
            title:'请输入正确的姓名和身份证',
            icon:'none',
            duration:2000
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
