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

    },
    onCancel () {
      console.log("onCancel");

    }
  }
}
</script>

<style>

</style>
