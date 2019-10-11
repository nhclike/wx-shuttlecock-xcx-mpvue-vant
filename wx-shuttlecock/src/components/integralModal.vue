<template>
  <div>
    <div class="modal" v-show="show" @click="closeModal">
      <div class="modal-box" >
        <div class="modal-wrapper">
          <div class="modal-header">
            比分明细
          </div>
          <div class="modal-body">
            <div class="gen-schedule-card">
              <div class="gen-table">
                <div class="gen-thead">
                  <div class="gen-tr">
                    <div class="gen-th">
                      序号
                    </div>
                    <div class="gen-th">
                      {{vsName}}
                    </div>
                  </div>
                </div>
                <div class="gen-tbody">
                  <div class="gen-tr"  v-for="(item,index) in integralList" :key="index">
                    <div class="gen-td">
                      {{index+1}}
                    </div>
                    <div class="gen-td">
                      {{item.vs}}
                    </div>
                  </div>
                  <div class="gen-tr"> 
                    <div class="gen-td">
                      2
                    </div>
                    <div class="gen-td">
                      2:3
                    </div>
                  </div>
                  <div class="gen-tr"> 
                    <div class="gen-td">
                      2
                    </div>
                    <div class="gen-td">
                      2:3
                    </div>
                  </div>
                  <div class="gen-tr"> 
                    <div class="gen-td">
                      2
                    </div>
                    <div class="gen-td">
                      2:3
                    </div>
                  </div>
                  <div class="gen-tr"> 
                    <div class="gen-td">
                      2
                    </div>
                    <div class="gen-td">
                      2:3
                    </div>
                  </div>
                  <div class="gen-tr"> 
                    <div class="gen-td">
                      2
                    </div>
                    <div class="gen-td">
                      2:3
                    </div>
                  </div>
                  <div class="gen-tr"> 
                    <div class="gen-td">
                      2
                    </div>
                    <div class="gen-td">
                      2:3
                    </div>
                  </div>
                  <div class="gen-tr"> 
                    <div class="gen-td">
                      2
                    </div>
                    <div class="gen-td">
                      2:3
                    </div>
                  </div>
                  <div class="gen-tr"> 
                    <div class="gen-td">
                      2
                    </div>
                    <div class="gen-td">
                      2:3
                    </div>
                  </div>
                  <div class="gen-tr"> 
                    <div class="gen-td">
                      2
                    </div>
                    <div class="gen-td">
                      2:3
                    </div>
                  </div>
                  <div class="gen-tr"> 
                    <div class="gen-td">
                      2
                    </div>
                    <div class="gen-td">
                      2:3
                    </div>
                  </div>
                  <div class="gen-tr"> 
                    <div class="gen-td">
                      2
                    </div>
                    <div class="gen-td">
                      2:3
                    </div>
                  </div>
                  <div class="gen-tr"> 
                    <div class="gen-td">
                      2
                    </div>
                    <div class="gen-td">
                      2:3
                    </div>
                  </div>
                  <div class="gen-tr"> 
                    <div class="gen-td">
                      2
                    </div>
                    <div class="gen-td">
                      2:3
                    </div>
                  </div>
                  <div class="gen-tr"> 
                    <div class="gen-td">
                      2
                    </div>
                    <div class="gen-td">
                      2:3
                    </div>
                  </div>
                  <div class="gen-tr"> 
                    <div class="gen-td">
                      2
                    </div>
                    <div class="gen-td">
                      2:3
                    </div>
                  </div>
                  <div class="gen-tr"> 
                    <div class="gen-td">
                      2
                    </div>
                    <div class="gen-td">
                      2:3
                    </div>
                  </div>
                </div>
                

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    show:{
			type:Boolean,
      default:false
    },
    vsName:{
			type:String,
      default:""
    },
    integralList:{
      type:Array,
      default:[]
    }
  },
  methods:{
    showIntegralDetail(){
      this.modalShowFlag=true;
    },
    closeModal(){
      this.$emit("onClose")
    },
  }
}
</script>

<style scoped lang="less" rel="stylesheet/less">
  @import "./../common/less/variable.less";

.modal{
  position: fixed;
  top:0;
  left: 0;
  right: 0;
  bottom: 0;

}
.modal-box{
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  .modal-wrapper{
    min-width: 70%;
    //max-height: 60%;
    //overflow-y: scroll;
    background: @bg-color;
    .modal-header{
      height: 80rpx;
      line-height: 80rpx;
      padding-left: 10rpx;
      font-size: @font-size-large;
      background: @theme-color;
      color:@bg-color;
    }
    // .modal-body{
    //   height: 100%;
    //   box-sizing: border-box;
    //   border-top:80rpx solid transparent;
    //   padding: 0;
    //   position: relative;
    //   top:-80rpx;
    //   overflow-y: scroll;
    // }
  }
}


.gen-table {
  border: 0px solid darkgray;
  .gen-thead{
    .gen-tr{
      background: @theme-color-light;
    }
  }
  .gen-tbody{
    max-height: 50vh;
    overflow-y: scroll;
  }
  .gen-tr {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    height: 5vh;
    background: #fff;
  }
  .gen-td {
    justify-content: center;
    text-align: center;
    color: @text-color;
    &:first-child{
      width:20%;
    }
    &:last-child{
      width:80%;
    }
  }
  .gen-th {
    justify-content: center;
    background: @theme-color-light;
    color:@text-color-dark;
    text-align: center;
    &:first-child{
      width:20%;
    }
    &:last-child{
      width:80%;
    }
  }
}

</style>
