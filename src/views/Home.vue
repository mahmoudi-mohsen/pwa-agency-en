<template>
  <div>
    <Header/>
    <HomeMain/>
    <Footer/>
  </div>
</template>

<script>
import Header from "@/components/Header";
import HomeMain from "@/components/HomeMain";
import Footer from "@/components/Footer";

export default {
  components: {Footer, HomeMain, Header}
}
</script>

<style scoped>

</style>