<template>
  <div @click="cardChoose(cardData.id,cardData.p1VsP2Name)">
    <div>
      {{cardData.p1VsP2Name}} {{cardData.player1VSPlayer2Score==null?"":cardData.player1VSPlayer2Score}}
    </div>
    <div>
     {{cardData.competitionDate}} {{cardData.competitionTime}} {{cardData.competitionTerrain}}
    </div>
  </div>
</template>

<script>
export default {
  props:{
    cardData:{
      type:Object,
      default:{}
    }
  },
 data () {
    return {
      
    }
  },
  methods:{
    cardChoose(id,vsName){
      console.log("--------raceCard --------------cardChoose-----------")
      let data={
        id:id,
        vsName:vsName
      }
      this.$emit("cardChoose",data)
    }
  }
}
</script>

<style>
.card {
  padding: 10px;
}
</style>
