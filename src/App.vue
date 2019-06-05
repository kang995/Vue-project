<template>
  <div id="app">
      <!-- <AppHeader></AppHeader> -->
      <!-- <Tabbar></Tabbar> -->
      <router-view></router-view>
  </div>
</template>

<style lang="scss">
</style>

<script>
// import Tabbar from "@/components/Tabbar"
// import AppHeader from "@/components/Header"
export default {
    created(){
      this.$store.dispatch("initCar");//dispatch用来派发actions
   },
  components:{
    // Tabbar,
    // AppHeader
  }
}
</script>
