<template>
  <div class="container-enroll">
    <div class="raceInfo">
      <div class="title">{{competitionInfo.competitionName}}</div>
      <div class="item">
        <div class="label">时&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;间</div>
        <div class="content">{{competitionInfo.competitionStartDate}}</div>
      </div>
      <div class="item">
        <div class="label">地&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;点</div>
        <div class="content">{{competitionInfo.competitionSite}}</div>
      </div>
      <div class="item">
        <div class="label">比赛类型</div>
        <div class="content">{{typeName}}</div>
      </div>
      <!-- <div class="item">
        <div class="label">报名要求</div>
        <div class="content">年龄25岁到30岁</div>
      </div> -->
    </div>
    <div class="selfInfo">
      <div class="title-box">参赛者信息</div>
      <van-cell-group>
        <van-field
          :value="selfInfo.name"
          required
          disabled
          clearable
          label="姓名"
          placeholder="姓名"
        />
        <van-field
          value="身份证"
          required
          disabled
          clearable
          label="证件类型"
        />
        <van-field
          :value="selfInfo.idCard"
          required
          disabled
          clearable
          label="证件号"
          placeholder="请输入证件号"
        />
        <van-field
          :value="selfInfo.phone"
          required
          disabled
          clearable
          label="手机号"
          placeholder="请输入手机号"
        />
		  </van-cell-group>
    </div>
    <div class="memberInfo" v-show="memberInfoShowFlag">
      <div class="title-box">队友信息</div>
      <van-cell-group>
        <van-field
          :value="memberInfo.name"
          required
          clearable
          label="姓名"
          placeholder="姓名"
          @change="nameChange"
          :error-message="nameMessage"
        />
        <van-field
          value="身份证"
          required
          clearable
          label="证件类型"
        />
        <van-field
          :value="memberInfo.idCard"
          required
          clearable
          label="证件号"
          placeholder="请输入证件号"
          @change="idCardChange"
          :error-message="idCardMessage"
        />
        <van-field
          :value="memberInfo.phone"
          required
          clearable
          label="手机号"
          placeholder="请输入手机号"
          @change="telChange"
          :error-message="telMessage"
        />
		  </van-cell-group>
    </div>
    <div class="footer-box">
      <div class="xy-wrapper">
        <van-radio-group  >
          <van-radio use-icon-slot name="1" :value="radio" @change="changeRadio" @click="clickRadio">
            <div class="xy-box">
              <a href="" class="xy-text">《参赛协议》</a>
              我已阅读并接受
            </div>
            <image
              slot="icon"
              :src=" radio === '1' ? icon.active : icon.normal "
              class="img-icon"
            />
          </van-radio>
        </van-radio-group>
      </div>
      <van-button type="primary" :disabled="submitFlag" size="large" @click.stop.prevent="submitEnroll">提交</van-button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { showSuccess ,showModal} from "@/util.js";
  export default {
    data () {
    	return {
        radio: '0',
        icon: {
          normal: '/static/images/unchoose.png',
          active: '/static/images/choose.png'
        },
        selfInfo:{
          name:"",
					idCard:"",
					phone:""
        },
        memberInfo:{
          name:"",
					idCard:"",
					phone:""
        },
        competitionInfo:{},
        memberInfoShowFlag:false,
        telMessage:'',
        nameMessage:'',
        idCardMessage:'',
        
    	}
    },
    components:{
      
    },
    onLoad: function() {
      console.log("-----enroll-------onLoad-----------");
      console.log(this.$root.$mp.query);
      console.log(this.userInfo);
      this.selfInfo={
        name:this.userInfo.realName,
        idCard:this.userInfo.cardId,
        phone:this.userInfo.tel
      }
      this.memberInfo={
        name:"",
        idCard:"",
        phone:""
      }
      let type=this.$root.$mp.query.type;
      if(type>2){
        this.memberInfoShowFlag=true;
      }
      else{
        this.memberInfoShowFlag=false;
      }
      this.getWxCompetitionInfo();
    },
    mounted(){
      console.log("-----enroll-------mounted-----------");
      console.log(this.userInfo);
      
    },
    computed:{
      ...mapGetters([
        'openId',
        'userInfo'
      ]),
      submitFlag (){
        return this.radio=='0'
      },
      typeName(){
        let name=''
        switch (this.$root.$mp.query.type) {
          case "1":
            name="男单"
            break;
          case "2":
            name="女单"
            break;
          case "3":
            name="男双"
            break;  
          case "4":
            name="女双"
            break;
          case "5":
            name="混双"
            break;
          default:
            break;
        }
        return name;
      }
    },
    methods: {
      changeRadio (e) {
        console.log("changeRadio"+e.mp.detail);
      },
      clickRadio (){
        console.log("clickRadio");
        this.radio=='0'?this.radio='1':this.radio='0';
      },
      getWxCompetitionInfo(){
        let params={
          competitionId:this.$root.$mp.query.competitionId
        }
        this.$fly.getWxCompetitionInfoByCompetitionId(params).then((res)=> {
          console.log(res)
          if(res&&res.data){
            this.competitionInfo=res.data;
          }
        })
      },
      submitEnroll (){
        let params={
          openId:this.openId,
          competitionId:this.$root.$mp.query.competitionId,
          competitionType:this.$root.$mp.query.type,
          personnelList:[
            this.selfInfo
          ]
        }
        if(this.memberInfoShowFlag){
          if(!this.telMessage && !this.nameMessage && !this.idCardMessage){
            console.log("验证同伴信息通过");
            params.personnelList.push(this.memberInfo);

          }
        }
        if(this.radio=='1'){
          this.$fly.wxEntry(params).then((res)=> {
            console.log(res)
            if(res&&res.code=='1'){
              showSuccess("报名比赛成功！")
              let url="/pages/enrolled/main";
                wx.switchTab({ url }) 
            }
          })
        }
        else{
          showModal("系统提示","请阅读并接受参赛协议");
        }
        

      },
      telChange (event) {
        let val = event.mp.detail;
        console.log("telChange"+val);
        let message = '';
        let reg=/^1(3|4|5|7|8|9)\d{9}$/;
        if (val) {
          if(val.length>=11){
            if (reg.test(val)) {
              message = '';
            } else {
              message = '您输入的手机号码有误';
            }
          }
        } else {
          message = '输入的手机号不能为空';
        }
        this.telMessage=message;
        this.memberInfo.phone=val;
      },
      nameChange(event){
        let val = event.mp.detail;
        console.log("nameChange"+val);
        let message = '';
        let reg = /^[\u4e00-\u9fa5]{2,6}(·[\u4e00-\u9fa5]{2,6})*$/;
        if (val) {
          if (reg.test(val)) {
            message = '';
          } else {
            message = '请输入的中文姓名';
          }
        } else {
          message = '输入的姓名不能为空';
        }
        this.nameMessage=message;
        this.memberInfo.name=val;
      },
      idCardChange(event){
        let val = event.mp.detail;
        console.log("idCardChange"+val);
        let message = '';
        let reg =  /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
        if (val) {
          if (reg.test(val)) {
            message = '';
          } else {
            message = '您输入的身份证有误';
          }
        } else {
          message = '输入的身份证不能为空';
        }
        this.idCardMessage=message;
        this.memberInfo.idCard=val;
      }
    }
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  @import "./../../common/less/variable.less";

.container-enroll{
  background-color:@bg-color;
  padding-bottom: 30rpx;
  .raceInfo{
    background: #fff;
    padding:20rpx;
    .title{
      border-bottom: 1px solid #ddd;
      height: 60rpx;
      line-height: 60rpx;
      padding-left: 20rpx;
      color:@text-color-dark;
    }
    .item{
      overflow: hidden;
      height: 60rpx;
      line-height: 60rpx;
      .label{
        float:left;
        width:160rpx;
        text-align:center;
        color:@text-color;
      }
      .content{
        float:left;
        color:@text-color-light;
      }
    }
  }
  .selfInfo,.memberInfo{
    padding:20rpx;
    background: #fff;

  }
  .title-box{
    height:70rpx;
    line-height:70rpx;
    color:@text-color-light;
    background: @bg-color !important;
    padding-left: 20rpx;
  }
  .footer-box{
    padding:0 20rpx;
    .xy-wrapper{
      height:60rpx;
      line-height:60rpx;
      margin:10rpx 0;
    }
    .img-icon{
      width: 40rpx;
      height: 40rpx;
    }
    .xy-box{
      font-size: @font-size-medium;
      color:@text-color-light;
      .xy-text{
        float:right;
        color:#576B95;
        margin-left: 10rpx;
      }
    }
  }
}
</style>
