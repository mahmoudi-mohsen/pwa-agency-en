<template>
<div style="height: 100vh">
  <swiper
      :direction="'vertical'"
      :slidesPerView="1"
      :spaceBetween="30"
      :mousewheel="true"
      :keyboard="{
      enabled: true,
    }"
      :pagination="false"
      :modules="modules"
      class="mySwiper"
  >
    <swiper-slide>
      <div class="position-relative h-100">
        <div class="bg-info position-absolute top-0 end-0 w-50 h-100 d-none d-lg-block"></div>
        <div class="d-flex flex-column flex-lg-row align-items-center h-100 position-relative z-2">
          <div class="position-relative w-100 order-lg-2">
            <div class="bg-info position-absolute top-0 end-0 w-100 h-100 d-lg-none"></div>
            <a href="javascript:void(0)">
              <img class="d-block position-relative z-2 mx-auto scale-up" :src="require(`@/assets/images/home/01-p.png`)" width="748" alt="Image">
            </a>
          </div>
          <div class="w-100 order-lg-1 px-3 px-lg-4 py-4 pt-lg-0">
            <div class="text-center text-sm-start mx-auto" style="max-width: 450px;">
              <h2 class="h1 pb-2 pb-sm-0">لورم ایپسوم متن ساختگی</h2>
              <p class="d-none d-sm-block pb-3 pb-lg-4 mb-1 text-justify">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها
                و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز.
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها
                و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز.
              </p>
            </div>
          </div>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="position-relative h-100">
        <div class="bg-danger position-absolute top-0 end-0 w-50 h-100 d-none d-lg-block"></div>
        <div class="d-flex flex-column flex-lg-row align-items-center h-100 position-relative z-2">
          <div class="position-relative w-100 order-lg-2">
            <div class="bg-danger position-absolute top-0 end-0 w-100 h-100 d-lg-none"></div>
            <a href="javascript:void(0)">
              <img class="d-block position-relative z-2 m-0 ms-auto from-end" :src="require(`@/assets/images/home/02-p.png`)" width="748" alt="Image">
            </a>
          </div>
          <div class="w-100 order-lg-1 px-3 px-lg-4 py-4 pt-lg-0">
            <div class="text-center text-sm-start mx-auto" style="max-width: 450px;">
              <img class="d-block position-relative z-2 m-0 ms-auto from-end" :src="require(`@/assets/images/home/05.jpg`)" width="748" alt="Image">
            </div>
          </div>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="position-relative h-100">
        <div class="bg-primary position-absolute top-0 end-0 w-50 h-100 d-none d-lg-block"></div>
        <div class="d-flex flex-column flex-lg-row align-items-center h-100 position-relative z-2">
          <div class="position-relative w-100 order-lg-2">
            <div class="bg-primary position-absolute top-0 end-0 w-100 h-100 d-lg-none"></div>
            <a href="javascript:void(0)">
              <img class="d-block position-relative z-2 mx-auto scale-up" :src="require(`@/assets/images/home/03.png`)" width="748" alt="Image">
            </a>
          </div>
          <div class="w-100 order-lg-1 px-3 px-lg-4 py-4 pt-lg-0">
            <div class="text-center text-sm-start mx-auto" style="max-width: 450px;">
              <img class="d-block position-relative z-2 mx-auto scale-up" :src="require(`@/assets/images/home/06.avif`)" width="748" alt="Image">
            </div>
          </div>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="position-relative h-100">
        <div class="position-absolute top-0 end-0 w-50 h-100 d-none d-lg-block" style="background-color: #d7e4f4;"></div>
        <div class="d-flex flex-column flex-lg-row align-items-center h-100 position-relative z-2">
          <div class="position-relative w-100 order-lg-2">
            <div class="position-absolute top-0 end-0 w-100 h-100 d-lg-none" style="background-color: #d7e4f4;"></div>
            <a href="javascript:void(0)">
              <img class="d-block position-relative z-2 mx-auto scale-up" :src="require(`@/assets/images/home/04.png`)" width="748" alt="Image">
            </a>
          </div>
          <div class="w-100 order-lg-1 px-3 px-lg-4 py-4 pt-lg-0">
            <div class="text-center text-sm-start mx-auto" style="max-width: 450px;">
              <img class="d-block position-relative z-2 mx-auto scale-up" :src="require(`@/assets/images/home/07.webp`)" width="748" alt="Image">
            </div>
          </div>
        </div>
      </div>
    </swiper-slide>
  </swiper>

</div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import {Keyboard, Mousewheel, Pagination } from 'swiper/modules';
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Keyboard,Mousewheel, Pagination],
    };
  },
}
</script>

<style lang="scss" scoped>
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  flex-shrink: 0;
  width: 100%;
  height: 100%;
  position: relative;
  transition-property: transform;
  display: block;
}
.from-top, .from-bottom, .from-start, .from-end, .scale-up, .scale-down {
  opacity: 0;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  transition: all .4s .4s ease-in-out;
}
.scale-up {
  transform: scale(0.85);
}
.from-end {
  transform: translateX(-2.25rem);
}
.swiper-slide-active .scale-up, .swiper-slide-active .scale-down, .active .scale-up, .active .scale-down {
  opacity: 1;
  transform: scale(1);
}
.swiper-slide-active .from-start, .swiper-slide-active .from-end, .active .from-start, .active .from-end {
  opacity: 1;
  transform: translateX(0);
}
.bg-info {
  --ar-bg-opacity: 1;
  background-color: rgba(var(--ar-info-rgb), var(--ar-bg-opacity)) !important;
}
.bg-danger {
  --ar-bg-opacity: 1;
  background-color: rgba(var(--ar-danger-rgb), var(--ar-bg-opacity)) !important;
}
.bg-primary {
  --ar-bg-opacity: 1;
  background-color: rgba(var(--ar-primary-rgb), var(--ar-bg-opacity)) !important;
}
</style>