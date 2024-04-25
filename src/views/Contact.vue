<template>
  <div>
    <Header/>
    <ContactMain/>
    <Footer/>
  </div>
</template>

<script>
import Header from "@/components/Header";
import ContactMain from "@/components/ContactMain";
import Footer from "@/components/Footer";

export default {

  components: {Footer, ContactMain, Header}
}
</script>

<style scoped>

</style>