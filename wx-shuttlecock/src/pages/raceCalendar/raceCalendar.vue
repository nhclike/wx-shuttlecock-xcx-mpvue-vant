<template>
  <div>
 
    <Calendar />
  </div>
</template>

<script>
import Calendar from "@/components/calendar"
export default {
  data () {
    return {
      searchWord:''
    }
  },

  components: {
    Calendar
  },

  methods: {
    
  },

  created () {


  }
}
</script>

<style scoped lang="less" rel="stylesheet/less">

</style>
