<template>
  <footer class="footer py-5">
    <div class="container pt-md-2 pt-lg-3 pt-xl-4">
      <div class="row pb-5 pt-sm-2 mb-lg-2">
        <div class="col-md-12 col-lg-3 pb-2 pb-lg-0 mb-4 mb-lg-0">
          <a class="navbar-brand py-0 mb-3 mb-lg-4 d-block" href="index.html">
              <span class="text-primary flex-shrink-0 me-2">
                <svg version="1.1" width="35" height="32" viewBox="0 0 36 33" xmlns="http://www.w3.org/2000/svg">
                  <path fill="currentColor"
                        d="M35.6,29c-1.1,3.4-5.4,4.4-7.9,1.9c-2.3-2.2-6.1-3.7-9.4-3.7c-3.1,0-7.5,1.8-10,4.1c-2.2,2-5.8,1.5-7.3-1.1c-1-1.8-1.2-4.1,0-6.2l0.6-1.1l0,0c0.6-0.7,4.4-5.2,12.5-5.7c0.5,1.8,2,3.1,3.9,3.1c2.2,0,4.1-1.9,4.1-4.2s-1.8-4.2-4.1-4.2c-2,0-3.6,1.4-4,3.3H7.7c-0.8,0-1.3-0.9-0.9-1.6l5.6-9.8c2.5-4.5,8.8-4.5,11.3,0L35.1,24C36,25.7,36.1,27.5,35.6,29z"></path>
                </svg>
              </span>
            <span class="text-nav">X-Company</span>
          </a>
          <p class="fs-sm pb-2 pb-lg-3 mb-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
          <div class="d-flex">
            <a class="btn btn-icon btn-sm btn-secondary btn-facebook rounded-circle me-3" href="#"
               aria-label="Facebook">
              <i class="fab fa-facebook"></i>
            </a>
            <a class="btn btn-icon btn-sm btn-secondary btn-instagram rounded-circle me-3" href="#"
               aria-label="Instagram">
              <i class="fab fa-instagram"></i>
            </a>
            <a class="btn btn-icon btn-sm btn-secondary btn-linkedin rounded-circle" href="#" aria-label="LinkedIn">
              <i class="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
        <div class="col-sm-3 col-lg-2 offset-xl-1 mb-4 mb-sm-0">
          <ul class="nav flex-column">
            <li><a class="nav-link py-1 px-0" href="#">Services</a></li>
            <li><a class="nav-link py-1 px-0" href="#">Reviews</a></li>
            <li><a class="nav-link py-1 px-0" href="#">Case studies</a></li>
            <li><a class="nav-link py-1 px-0" href="#">Privacy policy</a></li>
          </ul>
        </div>
        <div class="col-sm-4 col-lg-2 mb-4 mb-sm-0">
          <ul class="nav flex-column">
            <li><a class="nav-link py-1 px-0" href="mailto:contact@example.com">contact@company.com</a></li>
            <li><a class="nav-link py-1 px-0" href="tel:+98912222222">+98&nbsp;912&nbsp;222&nbsp;2222</a></li>
            <li><a class="nav-link py-1 px-0" href="tel:+982188775665">+98&nbsp;218&nbsp;877&nbsp;5665</a></li>
          </ul>
        </div>
        <div class="col-sm-5 col-lg-4 col-xl-3 offset-lg-1">
          <h3 class="h6 mb-2">Stay up to date</h3>
          <p class="fs-sm">Subscribe to our news and case studies</p>
          <div class="input-group input-group-sm">
            <input class="form-control" type="text" placeholder="Your email">
            <button class="btn btn-primary mb-0" type="button">Subscribe</button>
          </div>
        </div>
      </div>
      <p class="nav fs-sm mb-0">
        <span class="text-body-secondary">© All rights reserved. Made by</span>
        <a class="nav-link fw-normal p-0 ms-1" href="https://mohsenmahmoodi.com" target="_blank" rel="noopener">
          Mohsen Mahmoudi</a>
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style lang="scss" scoped>
.input-group {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  width: 100%;
}
.input-group {
  --ar-input-group-padding-y: 0.5rem;
  --ar-input-group-padding-x: 0.5rem;
  --ar-input-group-border-color: var(--ar-gray-400);
  --ar-input-group-border-width: var(--ar-border-width);
  --ar-input-group-border-radius: var(--ar-border-radius-lg);
  padding: var(--ar-input-group-padding-y) var(--ar-input-group-padding-x);
  border: var(--ar-input-group-border-width) solid var(--ar-input-group-border-color);
  border-radius: var(--ar-input-group-border-radius);
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
  background-color: rgba(0,0,0,0);
  background-clip: padding-box;
  border: var(--ar-border-width) solid var(--ar-gray-400);
  border-radius: var(--ar-border-radius);
  transition: border-color .15s ease-in-out;
}
.input-group > .form-control, .input-group > .form-select, .input-group > .form-floating {
  position: relative;
  flex: 1 1 auto;
  width: 1%;
  min-width: 0;
}
.input-group-sm {
  --ar-input-group-border-radius: var(--ar-border-radius);
}

.input-group-sm > .form-control, .input-group-sm > .form-select, .input-group-sm > .input-group-text, .input-group-sm > .btn {
  padding: .575rem .875rem;
  font-size: calc(var(--ar-body-font-size) * 0.75);
  border-radius: var(--ar-border-radius-sm);
}
.input-group .form-control, .input-group .form-select {
  border-color: rgba(0,0,0,0) !important;
  border-radius: 0 !important;
}
.input-group .btn {
  --ar-btn-padding-y: 0.825rem;
  --ar-btn-padding-x: 1.75rem;
  --ar-btn-border-radius: var(--ar-border-radius);
  padding: var(--ar-btn-padding-y) var(--ar-btn-padding-x);
}
.btn {
  --ar-btn-padding-x: 1.75rem;
  --ar-btn-padding-y: 0.825rem;
  --ar-btn-font-family: ;
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
  transition: color .2s ease-in-out,background-color .2s ease-in-out,border-color .2s ease-in-out,box-shadow .2s ease-in-out;
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
.input-group .btn {
  position: relative;
  z-index: 2;
}
.input-group-sm .btn {
  --ar-btn-padding-y: 0.575rem;
  --ar-btn-padding-x: 1.25rem;
  --ar-btn-border-radius: var(--ar-border-radius-sm);
}
.input-group .btn:not(.rounded-pill) {
  border-radius: var(--ar-btn-border-radius) !important;
}
.input-group > :not(:first-child):not(.dropdown-menu):not(.valid-tooltip):not(.valid-feedback):not(.invalid-tooltip):not(.invalid-feedback) {
  margin-left: calc(var(--ar-border-width)*-1);
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
.btn:not([class^="btn-outline-"]):not([class*=" btn-outline-"]):not(.btn-secondary):not(.btn-light):not(.btn-link) {
  --ar-btn-color: #fff;
}
.footer {
  flex-shrink: 0;
}

.text-primary {
  --ar-text-opacity: 1;
  color: rgba(var(--ar-primary-rgb), var(--ar-text-opacity)) !important;
}

.navbar {
  --ar-navbar-padding-x: 0;
  --ar-navbar-padding-y: 0.75rem;
  --ar-navbar-color: var(--ar-gray-800);
  --ar-navbar-hover-color: var(--ar-primary);
  --ar-navbar-disabled-color: var(--ar-gray-600);
  --ar-navbar-active-color: var(--ar-primary);
  --ar-navbar-brand-padding-y: 0.5rem;
  --ar-navbar-brand-margin-end: 1rem;
  --ar-navbar-brand-font-size: 1.375rem;
  --ar-navbar-brand-color: var(--ar-gray-800);
  --ar-navbar-brand-hover-color: var(--ar-gray-800);
  --ar-navbar-nav-link-padding-x: 1rem;
  --ar-navbar-toggler-padding-y: 0.625rem;
  --ar-navbar-toggler-padding-x: 0.25rem;
  --ar-navbar-toggler-font-size: calc(var(--ar-body-font-size) * 1.125);
  --ar-navbar-toggler-icon-bg: initial;
  --ar-navbar-toggler-border-color: transparent;
  --ar-navbar-toggler-border-radius: 0;
  --ar-navbar-toggler-focus-width: 0;
  --ar-navbar-toggler-transition: box-shadow 0.15s ease-in-out;
}

.navbar {
  --ar-navbar-stuck-bg: var(--ar-light);
  --ar-navbar-toggler-color: var(--ar-gray-800);
  --ar-navbar-collapse-bg: var(--ar-light);
  --ar-navbar-collapse-border-color: var(--ar-border-color);
}

.navbar-nav {
  --ar-nav-link-padding-x: 0;
  --ar-nav-link-padding-y: 0.725rem;
  --ar-nav-link-font-weight: 500;
  --ar-nav-link-color: var(--ar-navbar-color);
  --ar-nav-link-hover-color: var(--ar-navbar-hover-color);
  --ar-nav-link-disabled-color: var(--ar-navbar-disabled-color);
  list-style: none;
}

.navbar-nav {
  --ar-nav-link-font-weight: 500;
  --ar-mega-dropdown-column-width: 14rem;
}

.dropdown-menu {
  --ar-dropdown-zindex: 1000;
  --ar-dropdown-min-width: 12rem;
  --ar-dropdown-padding-x: 0;
  --ar-dropdown-padding-y: 0.75rem;
  --ar-dropdown-spacer: 0.25rem;
  --ar-dropdown-font-size: calc(var(--ar-body-font-size) * 0.875);
  --ar-dropdown-color: var(--ar-body-color);
  --ar-dropdown-bg: #fff;
  --ar-dropdown-border-color: #f0f3f6;
  --ar-dropdown-border-radius: var(--ar-border-radius-lg);
  --ar-dropdown-border-width: var(--ar-border-width);
  --ar-dropdown-inner-border-radius: calc(var(--ar-border-radius-lg) - var(--ar-border-width));
  --ar-dropdown-divider-bg: var(--ar-border-color);
  --ar-dropdown-divider-margin-y: 0.375rem;
  --ar-dropdown-box-shadow: 0 0.4375rem 1.25rem rgba(208, 208, 196, 0.32);
  --ar-dropdown-link-color: var(--ar-gray-800);
  --ar-dropdown-link-hover-color: var(--ar-primary);
  --ar-dropdown-link-hover-bg: transparent;
  --ar-dropdown-link-active-color: var(--ar-primary);
  --ar-dropdown-link-active-bg: transparent;
  --ar-dropdown-link-disabled-color: var(--ar-gray-600);
  --ar-dropdown-item-padding-x: 1.25rem;
  --ar-dropdown-item-padding-y: 0.375rem;
  --ar-dropdown-header-color: var(--ar-gray-900);
  --ar-dropdown-header-padding-x: 1.25rem;
  --ar-dropdown-header-padding-y: 0.75rem;
  position: absolute;
  z-index: var(--ar-dropdown-zindex);
  display: none;
  min-width: var(--ar-dropdown-min-width);
  padding: var(--ar-dropdown-padding-y) var(--ar-dropdown-padding-x);
  margin: 0;
  font-size: var(--ar-dropdown-font-size);
  color: var(--ar-dropdown-color);
  text-align: left;
  list-style: none;
  background-color: var(--ar-dropdown-bg);
  background-clip: padding-box;
  border: var(--ar-dropdown-border-width) solid var(--ar-dropdown-border-color);
  border-radius: var(--ar-dropdown-border-radius);
}

.navbar-toggler {
  padding: var(--ar-navbar-toggler-padding-y) var(--ar-navbar-toggler-padding-x);
  font-size: var(--ar-navbar-toggler-font-size);
  line-height: 1;
  color: var(--ar-navbar-color);
  background-color: rgba(0, 0, 0, 0);
  border: var(--ar-border-width) solid var(--ar-navbar-toggler-border-color);
  border-radius: var(--ar-navbar-toggler-border-radius);
  transition: var(--ar-navbar-toggler-transition);
}

.navbar-toggler {
  position: relative;
  width: 1.875rem;
  height: 2.25rem;
}

.navbar-toggler-icon {
  display: inline-block;
  width: 1.5em;
  height: 1.5em;
  vertical-align: middle;
  background-image: var(--ar-navbar-toggler-icon-bg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
}

.navbar-toggler-icon, .navbar-toggler-icon::before, .navbar-toggler-icon::after {
  position: absolute;
  width: 1.375rem;
  height: .125rem;
  background-color: var(--ar-navbar-toggler-color);
  transition-property: transform;
}

.navbar-toggler-icon {
  top: 50%;
  display: block;
  margin-top: -0.0625rem;
  transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  transition-duration: .075s;
}

.nav-item {
  margin-bottom: 0;
}

.dropup, .dropend, .dropdown, .dropstart, .dropup-center, .dropdown-center {
  position: relative;
}

.navbar-nav .nav-link.active, .navbar-nav .nav-link.show {
  color: var(--ar-navbar-active-color);
}

.nav-link {
  display: flex;
  align-items: center;
  background: none;
  border: 0;
}

.dropdown-toggle::after {
  width: 1.375em;
  height: 1.375em;
  margin-left: -0.25rem;
  content: "";
  background-color: currentcolor;
  border: 0 !important;
  -webkit-mask: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3e%3cpath d='M8.7,13.7c0.4-0.4,1.1-0.4,1.5,0l6,6l6-6c0.4-0.4,1.1-0.4,1.5,0s0.4,1.1,0,1.5l-6.7,6.7c-0.4,0.4-1.1,0.4-1.5,0l-6.7-6.7C8.3,14.6,8.3,14.1,8.7,13.7z'/%3e%3c/svg%3e") no-repeat 50% 50%;
  mask: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3e%3cpath d='M8.7,13.7c0.4-0.4,1.1-0.4,1.5,0l6,6l6-6c0.4-0.4,1.1-0.4,1.5,0s0.4,1.1,0,1.5l-6.7,6.7c-0.4,0.4-1.1,0.4-1.5,0l-6.7-6.7C8.3,14.6,8.3,14.1,8.7,13.7z'/%3e%3c/svg%3e") no-repeat 50% 50%;
  -webkit-mask-size: cover;
  mask-size: cover;
}

.navbar .dropdown-toggle::after {
  width: 1.25em;
  height: 1.25em;
  margin-left: 0;
  margin-bottom: 4px;
}

.nav-link {
  display: block;
  padding: var(--ar-nav-link-padding-y) var(--ar-nav-link-padding-x);
  font-size: var(--ar-nav-link-font-size);
  font-weight: var(--ar-nav-link-font-weight);
  color: var(--ar-nav-link-color);
  text-decoration: none;
  background: none;
  border: 0;
  transition: color .2s ease-in-out, background-color .2s ease-in-out, border-color .2s ease-in-out;
}

.px-0 {
  padding-right: 0 !important;
  padding-left: 0 !important;
}

.nav-link {
  display: flex;
  align-items: center;
  background: none;
  border: 0;
}

.nav-link:hover, .nav-link:focus {
  color: var(--ar-primary);
}
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.btn-secondary {
  --ar-btn-hover-color: #fff;
  --ar-btn-active-color: #fff;
  --ar-btn-hover-bg: #d3dde6;
  --ar-btn-active-bg: #d3dde6;
  --ar-btn-hover-border-color: #d3dde6;
  --ar-btn-active-border-color: #d3dde6;
  --ar-btn-disabled-color: #fff;
}
.btn-secondary, .btn-light, .card-hover-primary:hover .btn-primary, [data-bs-theme="dark"] .btn-dark:not([data-bs-theme="light"]) {
  --ar-btn-color: #434a57 !important;
  --ar-btn-hover-color: #121519 !important;
  --ar-btn-active-color: #121519 !important;
  --ar-btn-disabled-color: #576071;
}

.btn-icon {
  --ar-btn-size: 3rem;
  flex-shrink: 0;
  width: var(--ar-btn-size);
  height: var(--ar-btn-size);
  padding: 0;
  font-size: 1.25rem;
}
.rounded-circle {
  border-radius: 50% !important;
}
.text-body-secondary {
  --ar-text-opacity: 1;
  color: var(--ar-secondary-color) !important;
}
@media (min-width: 992px) {
  .navbar-expand-lg .dropdown::before {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    height: .375rem;
    content: "";
  }
  .navbar-expand-lg .navbar-nav .nav-link {
    padding-right: var(--ar-navbar-nav-link-padding-x);
    padding-left: var(--ar-navbar-nav-link-padding-x);
  }
  .navbar-expand-lg .navbar-nav .nav-link {
    padding-top: var(--ar-nav-link-padding-y);
    padding-bottom: var(--ar-nav-link-padding-y);
  }
  .navbar-expand-lg .dropdown:hover > .dropdown-menu {
    display: block;
    animation: dropdown-show .25s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }
  .navbar-expand-lg .navbar-nav .dropdown-menu {
    position: absolute;
  }
  .navbar-expand-lg .navbar-nav .dropdown-menu {
    padding-top: var(--ar-dropdown-padding-y);
    padding-bottom: var(--ar-dropdown-padding-y);
    margin-top: var(--ar-dropdown-spacer) !important;
    background-color: var(--ar-dropdown-bg);
    border: var(--ar-dropdown-border-width) solid var(--ar-dropdown-border-color);
    border-radius: var(--ar-dropdown-border-radius);
    box-shadow: var(--ar-dropdown-box-shadow) !important;
  }
  .navbar-expand-lg .mega-dropdown-column {
    width: var(--ar-mega-dropdown-column-width);
    padding: 0 .5rem;

  }
}
</style>