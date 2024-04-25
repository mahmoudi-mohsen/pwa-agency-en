<template>
<div>
  <Header/>
  <GalleryMain/>
  <Footer/>
</div>
</template>

<script>
import Header from "@/components/Header";
import GalleryMain from "@/components/GalleryMain";
import Footer from "@/components/Footer";
export default {
  components: {Footer, GalleryMain, Header}
}
</script>

<style scoped>

</style>