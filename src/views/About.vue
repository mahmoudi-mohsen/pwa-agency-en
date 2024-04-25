<template>
  <div>
    <Header/>
    <AboutMain/>
    <Footer/>
  </div>
</template>

<script>
import Header from "@/components/Header";
import AboutMain from "@/components/AboutMain";
import Footer from "@/components/Footer";

export default {
  name: "About",
  components: {Footer, AboutMain, Header}
}
</script>

<style scoped>

</style>