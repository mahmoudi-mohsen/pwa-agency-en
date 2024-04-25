<template>
  <div>
    <section class="bg-secondary py-5">
      <div class="container pt-5 pb-lg-2 pb-xl-4 py-xxl-5">
        <nav aria-label="breadcrumb">
          <ol class="pt-lg-3 pb-lg-4 pb-2 breadcrumb">
            <li class="breadcrumb-item"><router-link to="/">Home</router-link></li>
            <li class="breadcrumb-item active" aria-current="page">Contacts</li>
          </ol>
        </nav>
        <h1 class="display-2">Contacts</h1>
        <p class="fs-lg pb-4 mb-2 mb-sm-3">Get in touch with us by completing the below form or call us now</p>
        <div class="row row-cols-1 row-cols-sm-2 row-cols-xl-4 g-4 pb-2 pb-sm-4 pb-lg-5">
          <div class="col">
            <div class="card border-0 h-100">
              <div class="card-body">
                <h4 class="card-title mb-4">Address</h4>
                <p class="fs-lg fw-medium pb-3 mb-3">514 Magnolia St. Orlando, FL 32806</p>
                <a class="btn btn-sm btn-outline-primary" href="#">
                  <i class="ai-map-pin me-1"></i>
                  Get directions
                </a>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card border-0 h-100">
              <div class="card-body">
                <h4 class="card-title mb-4">Phone</h4>
                <ul class="list-unstyled mb-0">
                  <li class="pb-1 mb-2">
                    <span class="d-block fs-sm text-body-secondary mb-1">Main office</span>
                    <a class="nav-link fs-lg p-0" href="tel:+982188775833" style="direction: ltr">+98&nbsp;(21)&nbsp;887&nbsp;758&nbsp;33</a>
                  </li>
                  <li>
                    <span class="d-block fs-sm text-body-secondary mb-1">Reception room</span>
                    <a class="nav-link fs-lg p-0" href="tel:+989125725644" style="direction: ltr">+98&nbsp;(912)&nbsp;572&nbsp;56&nbsp;44</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card border-0 h-100">
              <div class="card-body">
                <h4 class="card-title mb-4">Schedule</h4>
                <ul class="list-unstyled mb-0">
                  <li class="pb-1 mb-2">
                    <span class="d-block fs-sm text-body-secondary mb-1">Mon - Thu</span>
                    <div class="d-flex align-items-center">
                      <span class="text-nav fs-lg fw-medium">10:00</span>
                      <span class="border-top mx-4" style="width: 36px; height: 1px;"></span>
                      <span class="text-nav fs-lg fw-medium">22:00</span>
                    </div>
                  </li>
                  <li>
                    <span class="d-block fs-sm text-body-secondary mb-1">Fri - Sat</span>
                    <div class="d-flex align-items-center">
                      <span class="text-nav fs-lg fw-medium">10:00</span>
                      <span class="border-top mx-4" style="width: 36px; height: 1px;"></span>
                      <span class="text-nav fs-lg fw-medium">13:00</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card border-0 h-100">
              <div class="card-body">
                <h4 class="card-title mb-4">Email</h4>
                <ul class="list-unstyled mb-0">
                  <li class="pb-1 mb-2">
                    <span class="d-block fs-sm text-body-secondary mb-1">Main office</span>
                    <a class="nav-link fs-lg p-0" href="mailto:office@example.com">office@example.com</a>
                  </li>
                  <li>
                    <span class="d-block fs-sm text-body-secondary mb-1">Reception room</span>
                    <a class="nav-link fs-lg p-0" href="mailto:reception@example.com">reception@example.com</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style="height: 250px;"></div>
    </section>
    <section class="container" style="margin-top: -260px;" data-bs-theme="dark">
      <div class="card border-0 bg-primary position-relative py-lg-4 py-xl-5">
        <svg class="position-absolute start-0 mt-n2" width="242" height="331" viewBox="0 0 242 331" fill="none"
             xmlns="http://www.w3.org/2000/svg">
          <path
              d="M172.014 250.127C137.236 227.74 112.349 192.144 144.586 153.591C157.686 137.932 176.759 127.973 196.524 122.046C234.647 110.639 277.027 113.361 313.349 129.576C338.19 140.666 361.129 159.183 369.934 184.502C383.476 223.496 359.75 260.161 321.569 273.118C288.832 284.223 247.685 279.513 214.885 269.837C201.003 265.743 185.745 258.966 172.014 250.127Z"
              fill="#121519" fill-opacity=".07"></path>
          <path
              d="M20.3265 69.264C19.7064 43.0736 29.8071 17.1878 62.3851 19.8622C75.6229 20.9505 87.9525 27.2066 98.3563 35.3132C118.426 50.9253 132.424 73.896 136.952 98.6413C140.044 115.562 138.424 134.218 127.978 148C111.901 169.236 83.4531 170.283 62.5246 155.209C44.5807 142.281 32.0983 119.217 25.3391 98.6799C22.4836 89.9885 20.5616 79.6021 20.3265 69.264Z"
              fill="#121519" fill-opacity=".07"></path>
        </svg>
        <svg class="position-absolute end-0 bottom-0 ms-3" width="169" height="217" viewBox="0 0 169 217" fill="none"
             xmlns="http://www.w3.org/2000/svg">
          <path
              d="M34.2574 90.0177C29.666 97.6253 26.6254 106.591 24.9502 114.96C19.9522 140.043 26.4112 168.792 49.6162 181.885C66.0705 191.17 91.0017 189.904 108.062 183.692C125.725 177.266 135.045 168.04 142.29 150.389C151.409 128.174 150.912 99.6904 125.93 91.6429C115.423 88.254 104.723 86.5065 94.2249 82.5889C84.6622 79.0248 74.8545 72.1766 64.4411 71.6149C50.8011 70.8777 40.9122 79.0146 34.2574 90.0177Z"
              fill="#121519" fill-opacity="0.07"></path>
          <path
              d="M147.005 75.6331C152.135 70.7783 156.106 64.2374 159.153 57.9073C166.014 43.6372 174.127 22.1368 160.207 9.68505C152.924 3.17188 139.243 3.86644 130.324 5.29774C118.428 7.20428 107.295 8.85077 96.5031 14.783C85.8056 20.6599 79.0155 33.6997 77.0014 45.6686C75.4978 54.5776 79.63 63.6672 84.7391 70.7453C91.8208 80.5571 103.503 84.2003 114.817 84.3975C121.101 84.5081 127.716 84.0527 133.89 82.8121C138.932 81.7962 143.273 79.1597 147.005 75.6331Z"
              fill="#121519" fill-opacity="0.07"></path>
        </svg>
        <div class="card-body position-relative z-2 py-5">
          <form class="mx-auto" style="max-width: 800px;">
            <h2 class="h1  text-center pb-4 text-white">Get a free consultation</h2>
            <div class="row g-4">
              <div class="col-sm-6">
                <label class="form-label fs-base" for="name">Name</label>
                <input class="form-control form-control-lg" type="text" placeholder="Your name" required=""
                       id="name">
              </div>
              <div class="col-sm-6">
                <label class="form-label fs-base" for="company">Company</label>
                <input class="form-control form-control-lg" type="text" placeholder="Your company Name" id="company">
              </div>
              <div class="col-sm-6">
                <label class="form-label fs-base" for="email">Email</label>
                <input class="form-control form-control-lg" type="email" placeholder="Email address" required=""
                       id="email">
              </div>
              <div class="col-sm-6">
                <label class="form-label fs-base" for="phone">Phone</label>
                <input class="form-control form-control-lg" type="text" placeholder="Phone number" id="phone">
              </div>
              <div class="col-sm-12">
                <label class="form-label fs-base" for="message">How can we help?</label>
                <textarea class="form-control form-control-lg" rows="6"
                          placeholder="Enter your message here..."
                          required="" id="message"></textarea>
              </div>
              <div class="col-sm-12">
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="checkbox" id="seo">
                  <label class="form-check-label fs-base" for="seo">SEO Website Audit</label>
                </div>
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="checkbox" id="email-marketing" checked="">
                  <label class="form-check-label fs-base" for="email-marketing">Email Marketing</label>
                </div>
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="checkbox" id="social">
                  <label class="form-check-label fs-base" for="social">Social Networks</label>
                </div>
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="checkbox" id="content-marketing">
                  <label class="form-check-label fs-base" for="content-marketing">Content Marketing</label>
                </div>
              </div>
              <div class="col-sm-12 text-center pt-4">
                <button class="btn btn-lg btn-light" type="submit">
                  Send a request
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.bg-primary {
  --ar-bg-opacity: 1;
  background-color: rgba(var(--ar-primary-rgb), var(--ar-bg-opacity)) !important;

}

.bg-secondary {
  background-color: rgba(var(--ar-primary-rgb), .1) !important;
}

.card-hover:hover .opacity-0 {
  opacity: 1 !important;
}

.card-hover .opacity-0, .card-hover .opacity-100 {
  transition: opacity .3s ease-in-out;
}

.card-hover .text-body {
  color: #f1f1f1 !important;
}
.card-title{
  color: #222222!important;
}
.card-hover h3 {
  color: #ffffff !important;
}

.card-footer {
  background-color: transparent !important;
}

.bg-dark {
  --ar-bg-opacity: 1;
  background-color: rgba(var(--ar-dark-rgb), var(--ar-bg-opacity)) !important;
}

.step-background {
  background-image: url("@/assets/images/home/steps-image.jpg");
}

.steps {
  --ar-steps-padding-y: 1.5rem;
  --ar-steps-padding-x: 1.5rem;
  --ar-steps-number-size: 4.5rem;
  --ar-steps-number-inner-size: 3.5rem;
  --ar-steps-number-border-radius: 50%;
  --ar-steps-number-font-size: calc(var(--ar-body-font-size) * 1.25);
  --ar-steps-number-inner-bg: var(--ar-gray-100);
  --ar-steps-number-color: var(--ar-primary);
  --ar-steps-connect-width: var(--ar-border-width);
  --ar-steps-connect-style: dashed;
  --ar-steps-connect-color: var(--ar-gray-400);
  --ar-steps-active-number-bg: rgba(var(--ar-primary-rgb), 0.1);
  --ar-steps-active-number-inner-bg: var(--ar-primary);
  --ar-steps-active-number-color: #fff;
}

.step {
  position: relative;
  display: flex;
  align-items: center;
  padding: var(--ar-steps-padding-y) 0;
}

.step::before, .step::after {
  position: absolute;
  right: calc(var(--ar-steps-number-size) * .5);
  height: calc(50% - var(--ar-steps-number-size) * .5);
  border-left: var(--ar-steps-connect-width) var(--ar-steps-connect-style) var(--ar-steps-connect-color);
}

.step-number {
  position: relative;
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  width: var(--ar-steps-number-size);
  height: var(--ar-steps-number-size);
}

.step-number::before {
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  content: "";
  background-color: var(--ar-steps-active-number-bg);
  border-radius: var(--ar-steps-number-border-radius);
  opacity: 0;
  transition: transform .3s ease-in-out, opacity .2s;
  transform: scale(0.5);
}

.step:not(:last-child)::after {
  content: "";
}

.step:not(:first-child)::before {
  content: "";
}

.step::before {
  top: 0;
}

.step::after {
  bottom: 0;
}

.step-number-inner {
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  width: var(--ar-steps-number-inner-size);
  height: var(--ar-steps-number-inner-size);
  color: var(--ar-steps-number-color);
  background-color: var(--ar-steps-number-inner-bg);
  border-radius: var(--ar-steps-number-border-radius);
  transition: color .3s ease-in-out, background-color .3s ease-in-out;
  font-size: var(--ar-steps-number-font-size);
  font-weight: 700;
}

.step-body {
  padding-right: var(--ar-steps-padding-x);
}
.steps-hoverable .step:hover .step-number-inner, .step.active .step-number-inner {
  color: var(--ar-steps-active-number-color);
  background-color: var(--ar-steps-active-number-inner-bg);
}
.steps-hoverable .step:hover .step-number::before, .step.active .step-number::before {
  opacity: 1;
  transform: scale(1);
}
.jarallax {
  position: relative;
  z-index: 0;
}

.jarallax-img {
  background-image: url("@/assets/images/home/parallax-image.jpg");
  z-index: -1;
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
}

.bg-about {
  --ar-bg-opacity: 1;
  background-color: rgba(var(--ar-primary-rgb), 0.1) !important;
  background-image: url("@/assets/images/home/hero-bg-pattern.png");
  background-size: cover;
}

.breadcrumb-item.active {
  color: var(--ar-breadcrumb-item-active-color);
}

.breadcrumb-item a {
  color: #222;
}

.bg-opacity-10 {
  --ar-bg-opacity: 0.1;
}

.parallax {
  position: relative;
}

.parallax-layer {
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
}

.text-primary {
  --ar-text-opacity: 1;
  color: rgba(var(--ar-primary-rgb), var(--ar-text-opacity)) !important;
}

.text-info {
  --ar-text-opacity: 1;
  color: rgba(var(--ar-info-rgb), var(--ar-text-opacity)) !important;
}

.text-warning {
  --ar-text-opacity: 1;
  color: rgba(var(--ar-warning-rgb), var(--ar-text-opacity)) !important;
}

.text-danger {
  --ar-text-opacity: 1;
  color: rgba(var(--ar-danger-rgb), var(--ar-text-opacity)) !important;
}

.bg-dark {
  --ar-bg-opacity: 1;
  background-color: rgba(var(--ar-dark-rgb), var(--ar-bg-opacity)) !important;
}

.rounded-3 {
  border-radius: var(--ar-border-radius-lg) !important;
}

.translate-middle-x {
  transform: translateX(-50%) !important;
  right: unset !important;
}

.row {
  --ar-gutter-x: 1.5rem;
  --ar-gutter-y: 0;
  display: flex;
  flex-wrap: wrap;
  margin-top: calc(-1 * var(--ar-gutter-y));
  margin-right: calc(-0.5 * var(--ar-gutter-x));
  margin-left: calc(-0.5 * var(--ar-gutter-x));
}

.g-2, .gx-2 {
  --ar-gutter-x: 0.5rem;
}

.border-white {
  --ar-border-opacity: 1;
  border-color: rgba(var(--ar-white-rgb), var(--ar-border-opacity)) !important;
}

.border {
  border: var(--ar-border-width) var(--ar-border-style) var(--ar-border-color) !important;
}

.fs-xs {
  font-size: calc(var(--ar-body-font-size) * 0.75) !important;
}

.text-nav {
  --ar-text-opacity: 1;
  color: var(--ar-nav-link-color) !important;
}

.parallax-layer > img {
  display: block;
  width: 100%;
}

.opacity-30 {
  opacity: .3 !important;
}

.opacity-80 {
  opacity: .8 !important;
}

.btn {
  --ar-btn-padding-x: 1.75rem;
  --ar-btn-padding-y: 0.825rem;
  --ar-btn-font-size: calc(var(--ar-body-font-size) * 0.875);
  --ar-btn-font-weight: 600;
  --ar-btn-line-height: 1.4;
  --ar-btn-color: #fff;
  --ar-btn-bg: transparent;
  --ar-btn-border-width: var(--ar-border-width);
  --ar-btn-border-color: transparent;
  --ar-btn-border-radius: var(--ar-border-radius);
  --ar-btn-hover-border-color: transparent;
  --ar-btn-box-shadow: unset;
  --ar-btn-disabled-opacity: 0.65;
  --ar-btn-focus-box-shadow: 0 0 0 0 rgba(var(--ar-btn-focus-shadow-rgb), .5);
  display: inline-block;
  padding: var(--ar-btn-padding-y) var(--ar-btn-padding-x);
  font-family: var(--ar-btn-font-family);
  font-size: var(--ar-btn-font-size);
  font-weight: var(--ar-btn-font-weight);
  line-height: var(--ar-btn-line-height);
  color: var(--ar-btn-color);
  text-align: center;
  text-decoration: none;
  white-space: nowrap;
  vertical-align: middle;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  border: var(--ar-btn-border-width) solid var(--ar-btn-border-color);
  border-radius: var(--ar-btn-border-radius);
  background-color: var(--ar-btn-bg);
  transition: color .2s ease-in-out, background-color .2s ease-in-out, border-color .2s ease-in-out, box-shadow .2s ease-in-out;
}

.btn-primary {
  --ar-btn-color: #fff;
  --ar-btn-bg: #448c74;
  --ar-btn-border-color: #448c74;
  --ar-btn-hover-color: #fff;
  --ar-btn-hover-bg: #3a7763;
  --ar-btn-hover-border-color: #36705d;
  --ar-btn-focus-shadow-rgb: 96, 157, 137;
  --ar-btn-active-color: #fff;
  --ar-btn-active-bg: #36705d;
  --ar-btn-active-border-color: #336957;
  --ar-btn-active-shadow: unset;
  --ar-btn-disabled-color: #fff;
  --ar-btn-disabled-bg: #448c74;
  --ar-btn-disabled-border-color: #448c74;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.btn-primary {
  --ar-btn-hover-color: #fff;
  --ar-btn-active-color: #fff;
  --ar-btn-hover-bg: #37715d;
  --ar-btn-active-bg: #37715d;
  --ar-btn-hover-border-color: #37715d;
  --ar-btn-active-border-color: #37715d;
  --ar-btn-disabled-color: #fff;
}

.btn:not([class^="btn-outline-"]):not([class*=" btn-outline-"]):not(.btn-secondary):not(.btn-light):not(.btn-link) {
  --ar-btn-color: #fff;
}

.btn:hover {
  color: var(--ar-btn-hover-color);
  background-color: var(--ar-btn-hover-bg);
  border-color: var(--ar-btn-hover-border-color);
}

.btn-link {
  --ar-btn-font-weight: 400;
  --ar-btn-color: var(--ar-link-color);
  --ar-btn-bg: transparent;
  --ar-btn-border-color: transparent;
  --ar-btn-hover-color: var(--ar-link-hover-color);
  --ar-btn-hover-border-color: transparent;
  --ar-btn-active-color: var(--ar-link-hover-color);
  --ar-btn-active-border-color: transparent;
  --ar-btn-disabled-color: #858c97;
  --ar-btn-disabled-border-color: transparent;
  --ar-btn-box-shadow: 0 0 0 #000;
  --ar-btn-focus-shadow-rgb: 96, 157, 137;
  text-decoration: underline;
}

.btn-link {
  --ar-btn-font-weight: 600;
  text-decoration: none;
  margin-bottom: 0;
  box-shadow: none;
}

.btn-lg, .btn-group-lg > .btn {
  --ar-btn-padding-y: 1rem;
  --ar-btn-padding-x: 2rem;
  --ar-btn-font-size: 1rem;
  --ar-btn-border-radius: var(--ar-border-radius-lg);
}

.btn-link:hover {
  color: var(--ar-btn-hover-color);
}

.bg-opacity-10 {
  --ar-bg-opacity: 0.1;
}

.opacity-10 {
  opacity: .1 !important;
}

.card {
  --ar-card-spacer-y: 2.375rem;
  --ar-card-spacer-x: 2.375rem;
  --ar-card-title-spacer-y: 1rem;
  --ar-card-title-color: var(--ar-gray-900);
  --ar-card-border-width: var(--ar-border-width);
  --ar-card-border-color: var(--ar-border-color);
  --ar-card-border-radius: var(--ar-border-radius-xxl);
  --ar-card-inner-border-radius: calc(var(--ar-border-radius-xxl) - (var(--ar-border-width)));
  --ar-card-cap-padding-y: 1.5rem;
  --ar-card-cap-padding-x: 2.375rem;
  --ar-card-cap-bg: transparent;
  --ar-card-color: var(--ar-body-color);
  --ar-card-bg: var(--ar-body-bg);
  --ar-card-img-overlay-padding: 1rem;
  --ar-card-group-margin: 0.75rem;
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  height: var(--ar-card-height);
  color: var(--ar-body-color);
  word-wrap: break-word;
  background-color: var(--ar-card-bg);
  background-clip: border-box;
  border: var(--ar-card-border-width) solid var(--ar-card-border-color);
  border-radius: var(--ar-card-border-radius);
}

.card-body {
  flex: 1 1 auto;
  padding: var(--ar-card-spacer-y) var(--ar-card-spacer-x);
  color: var(--ar-card-color);
}

.fs-sm {
  font-size: calc(var(--ar-body-font-size) * 0.875) !important;
}

h1, .h1, h2, .h2, h3, .h3, h4, .h4, h5, .h5, h6, .h6 {
  font-weight: var(--ar-heading-font-weight);
}

.z-4 {
  z-index: 4 !important;
}

.btn-icon.btn-xl {
  --ar-btn-size: 4.5rem;
  --ar-btn-font-size: calc(var(--ar-body-font-size) * 1.125);
}

.btn-icon {
  --ar-btn-size: 3rem;
  flex-shrink: 0;
  width: var(--ar-btn-size);
  height: var(--ar-btn-size);
  padding: 0;
  font-size: 20px;
}

.opacity-20 {
  opacity: .2 !important;
}

.binded-content {
  position: relative;
  height: 100%;
}

.binded-item {
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  transition: opacity .35s ease-in-out, visibility .35s ease-in-out;
  position: relative;
  visibility: visible;
  opacity: 1;
}

.btn-outline-primary {
  --ar-btn-color: #448c74;
  --ar-btn-border-color: #448c74;
  --ar-btn-hover-color: #fff;
  --ar-btn-hover-bg: #448c74;
  --ar-btn-hover-border-color: #448c74;
  --ar-btn-focus-shadow-rgb: 68, 140, 116;
  --ar-btn-active-color: #fff;
  --ar-btn-active-bg: #448c74;
  --ar-btn-active-border-color: #448c74;
  --ar-btn-active-shadow: unset;
  --ar-btn-disabled-color: #448c74;
  --ar-btn-disabled-bg: transparent;
  --ar-btn-disabled-border-color: #448c74;
  --ar-gradient: none;
}

[class^="btn-outline-"], [class*=" btn-outline-"] {
  --ar-btn-hover-color: #fff;
  --ar-btn-active-color: #fff;
}

.card-title {
  margin-bottom: var(--ar-card-title-spacer-y);
  color: #fff;
}

.form-label {
  margin-bottom: .3125rem;
  font-size: calc(var(--ar-body-font-size) * 0.875);
  font-weight: 500;
  color: #fff;
}

.form-control {
  display: block;
  width: 100%;
  padding: .825rem 1rem;
  font-size: calc(var(--ar-body-font-size) * 0.875);
  font-weight: 400;
  line-height: 1.4;
  color: var(--ar-body-color);
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-color: rgba(0, 0, 0, 0);
  background-clip: padding-box;
  border: var(--ar-border-width) solid var(--ar-gray-400);
  border-radius: var(--ar-border-radius);
  transition: border-color .15s ease-in-out;
}

.form-control-lg {
  min-height: calc(1.4em + 2rem + calc(var(--ar-border-width) * 2));
  padding: 1rem 1.125rem;
  font-size: 1rem;
  border-radius: var(--ar-border-radius-lg);
}

.form-check-input {
  --ar-form-check-bg: transparent;
  flex-shrink: 0;
  width: 1.125rem;
  height: 1.125rem;
  margin-top: .1875rem;
  vertical-align: top;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-color: var(--ar-form-check-bg);
  background-image: var(--ar-form-check-bg-image);
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  border: 1px solid var(--ar-gray-500);
  -webkit-print-color-adjust: exact;
  color-adjust: exact;
  print-color-adjust: exact;
}

.form-check-input:checked[type="checkbox"] {
  --ar-form-check-bg-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='m6 10 3 3 6-6'/%3e%3c/svg%3e");
}

.bg-primary .form-check-input:checked {
  background-color: #fff !important;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23448c74' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10l3 3l6-6'/%3e%3c/svg%3e") !important;
  border-color: #fff !important;
}

.btn-light, .card-hover-primary:hover .btn-primary, [data-bs-theme="dark"] .btn-dark:not([data-bs-theme="light"]) {
  --ar-btn-color: #000;
  --ar-btn-bg: #fff;
  --ar-btn-border-color: #fff;
  --ar-btn-hover-color: #000;
  --ar-btn-hover-bg: #d9d9d9;
  --ar-btn-hover-border-color: #cccccc;
  --ar-btn-focus-shadow-rgb: 217, 217, 217;
  --ar-btn-active-color: #000;
  --ar-btn-active-bg: #cccccc;
  --ar-btn-active-border-color: #bfbfbf;
  --ar-btn-active-shadow: unset;
  --ar-btn-disabled-color: #000;
  --ar-btn-disabled-bg: #fff;
  --ar-btn-disabled-border-color: #fff;
}

.btn-light, .card-hover-primary:hover {
  --ar-btn-hover-color: #fff;
  --ar-btn-active-color: #fff;
  --ar-btn-hover-bg: #ebebeb;
  --ar-btn-active-bg: #ebebeb;
  --ar-btn-hover-border-color: #ebebeb;
  --ar-btn-active-border-color: #ebebeb;
  --ar-btn-disabled-color: #fff;
}

.btn-secondary, .btn-light, .card-hover-primary:hover .btn-primary, [data-bs-theme="dark"] .btn-dark:not([data-bs-theme="light"]) {
  --ar-btn-color: #434a57 !important;
  --ar-btn-hover-color: #121519 !important;
  --ar-btn-active-color: #121519 !important;
  --ar-btn-disabled-color: #576071;
}

.form-check-label {
  color: #ffffff;
}

@media (min-width: 576px) {
  .pb-sm-3 {
    padding-bottom: 1rem !important;
  }
  .w-sm-auto {
    width: auto !important;
  }
}

@media (min-width: 768px) {
  .py-md-4 {
    padding-top: 1.5rem !important;
    padding-bottom: 1.5rem !important;
  }
}

@media (min-width: 1200px) {
  .py-xl-5 {
    padding-top: 3rem !important;
    padding-bottom: 3rem !important;
  }
}
</style>