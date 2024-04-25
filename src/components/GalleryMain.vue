<template>
  <div >
    <Lightgallery
        :settings="{ speed: 500, plugins: plugins }"
        :onInit="onInit"
        :onBeforeSlide="onBeforeSlide"
    >
      <a :href="require(`@/assets/images/users/01.jpg`)">
        <img alt="img1" :src="require(`@/assets/images/users/01.jpg`)"/>
      </a>
      <a :href="require(`@/assets/images/users/02.jpg`)">
        <img alt="img2" :src="require(`@/assets/images/users/02.jpg`)"/>
      </a>
    </Lightgallery>
  </div>
</template>

<script>
import Lightgallery from 'lightgallery/vue';
import lgZoom from 'lightgallery/plugins/zoom';
import lgVideo from 'lightgallery/plugins/video';

export default {
  components: {
    Lightgallery,
  },
  data() {
    return {
      plugins: [lgZoom, lgVideo],
    }
  },
  methods: {
    onInit: () => {
      console.log('lightGallery has been initialized');
    },
    onBeforeSlide: () => {
      console.log('calling before slide');
    },
  },
}
</script>

<style lang="scss" scoped>
@import url('lightgallery/css/lightgallery.css');
@import url('lightgallery/css/lg-zoom.css');
@import url('lightgallery/css/lg-video.css');

.gallery-item {
  margin: 5px;
}

</style>