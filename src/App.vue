<template>
  <router-view/>
  <a class="btn-scroll-top" @click="scrollToTop()" href="javascript:void(0)" data-scroll="" aria-label="Scroll back to top">
    <svg viewBox="0 0 40 40" fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="circ">
      <circle cx="20" cy="20" r="19" fill="none" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10"
              style="stroke-dasharray: 119.397px; stroke-dashoffset: 0;"></circle>
    </svg>
    <i class="fal fa-arrow-up"></i>
  </a>
</template>

<script>
export default {
  methods:{
    scrollToTop(){
      window.scrollTo(0,0)
    }
  },
  mounted() {
    const button = document.querySelector('.btn-scroll-top')
    const scrollOffset = 450

    if (button == null) return

    const offsetFromTop = parseInt(scrollOffset, 10)
    const progress = button.querySelector('svg circle')
    const length = progress.getTotalLength()

    progress.style.strokeDasharray = length
    progress.style.strokeDashoffset = length

    const showProgress = () => {
      const scrollPercent =
          (document.body.scrollTop + document.documentElement.scrollTop) /
          (document.documentElement.scrollHeight -
              document.documentElement.clientHeight)
      const draw = length * scrollPercent
      progress.style.strokeDashoffset = length - draw
    }

    window.addEventListener('scroll', (e) => {
      if (e.currentTarget.pageYOffset > offsetFromTop) {
        button.classList.add('show')
      } else {
        button.classList.remove('show')
      }

      showProgress()
    })
  },
}
</script>
<style lang="scss">
@import "@/assets/sass/main.scss";

.btn-scroll-top {
  --ar-btn-scroll-top-size: 2.5rem;
  --ar-btn-scroll-top-font-size: 1rem;
  --ar-btn-scroll-top-color: var(--ar-gray-800);
  --ar-btn-scroll-top-bg: var(--ar-body-bg);
  --ar-btn-scroll-top-border-radius: 50%;
  --ar-btn-scroll-top-box-shadow: 0 0.275rem 1.125rem rgba(18, 21, 25, 0.1);
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  z-index: 1030;
  display: flex;
  align-items: center;
  justify-content: center;
  width: var(--ar-btn-scroll-top-size);
  height: var(--ar-btn-scroll-top-size);
  font-size: var(--ar-btn-scroll-top-font-size);
  color: var(--ar-btn-scroll-top-color) !important;
  text-decoration: none;
  box-shadow: var(--ar-btn-scroll-top-box-shadow);
  opacity: 0;
  transition: transform .25s ease-in-out, opacity .25s;
  transform: scale(0);
  border-radius: 50%;
  background-color: #ffffff;
}

.btn-scroll-top.show {
  opacity: 1;
  transform: scale(1);
}
.btn-scroll-top > .circ {
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  transform: rotate(90deg);
}
</style>
