<template>
  <div>
    <van-datetime-picker
		  type="year-month"
		  :value="currentDate"
		  :min-date="minDate"
      cancel-button-text="不限"
		  @input="onInput"
      @confirm="onConfirm"
      @cancel="onCancel"
		/>
  </div>
</template>

<script>
export default {
  data () {
  	return {
  		currentDate: new Date().getTime(),
  	}
  },
  methods: {
  	onInput (e) {
      console.log("onInput");
  		console.log(e);
  	},
    onConfirm (e) {
      console.log("onConfirm");
      let timestamp=e.mp.detail;
      let d=new Date(timestamp);
      console.log(timestamp);
      console.log(d);
      console.log(d.getFullYear());
      console.log(d.getMonth()+1);
      let year=d.getFullYear();
      let month=d.getMonth()+1;
      let time=year+"-"+month;
      this.$emit('onConfirm',time);

    },
    onCancel () {
      console.log("onCancel");
      this.$emit('onCancel')


    }
  }
}
</script>

<style>

</style>
