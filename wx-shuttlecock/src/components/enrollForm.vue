<template>
  <div>
    <van-cell-group>
		  <van-field
		    :value="name"
		    required
		    clearable
		    label="姓名"
		    placeholder="姓名"
		  />
		  <van-field
		    value="身份证"
		    required
		    clearable
		    label="证件类型"
		  />
		  <van-field
		    :value="cardId"
		    required
		    clearable
		    label="证件号"
		    placeholder="请输入证件号"
		  />
		  <van-field
		    :value="tel"
		    required
		    clearable
		    label="手机号"
		    placeholder="请输入手机号"
		  />
		</van-cell-group>
  </div>
</template>

<script>
export default {
  data () {
  	return {
			name:"",
			cardId:"",
			tel:""
  	}
  }
}
</script>

<style>
.card {
  padding: 10px;
}
</style>
