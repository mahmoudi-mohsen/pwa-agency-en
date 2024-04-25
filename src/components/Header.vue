<template>
  <header class="navbar navbar-expand-lg fixed-top" data-aos="ox-anime" data-aos-offset="1000"
          data-aos-duration="500">
    <div class="container">

      <!-- Navbar brand (Logo) -->
      <router-link class="navbar-brand pe-sm-3" to="/">
            <span class="text-primary flex-shrink-0 me-2">
              <svg width="35" height="32" viewBox="0 0 36 33" xmlns="http://www.w3.org/2000/svg">
                <path fill="currentColor"
                      d="M35.6,29c-1.1,3.4-5.4,4.4-7.9,1.9c-2.3-2.2-6.1-3.7-9.4-3.7c-3.1,0-7.5,1.8-10,4.1c-2.2,2-5.8,1.5-7.3-1.1c-1-1.8-1.2-4.1,0-6.2l0.6-1.1l0,0c0.6-0.7,4.4-5.2,12.5-5.7c0.5,1.8,2,3.1,3.9,3.1c2.2,0,4.1-1.9,4.1-4.2s-1.8-4.2-4.1-4.2c-2,0-3.6,1.4-4,3.3H7.7c-0.8,0-1.3-0.9-0.9-1.6l5.6-9.8c2.5-4.5,8.8-4.5,11.3,0L35.1,24C36,25.7,36.1,27.5,35.6,29z"></path>
              </svg>
            </span>
        X-Company
      </router-link>


      <!-- Mobile menu toggler (Hamburger) -->
      <button class="navbar-toggler ms-sm-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
              aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Navbar collapse (Main navigation) -->
      <nav class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav navbar-nav-scroll me-auto" style="--ar-scroll-height: 520px;">
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown"
               aria-expanded="false">Services</a>
            <div class="dropdown-menu overflow-hidden p-0">
              <div class="d-lg-flex">
                <div class="mega-dropdown-column pt-1 pt-lg-3 pb-lg-4">
                  <ul class="list-unstyled mb-0">
                    <li>
                      <a class="dropdown-item" href="javascript:void(0)">Lorem ipsum</a>
                      <span
                          class="mega-dropdown-column position-absolute top-0 end-0 h-100 rounded-3 rounded-start-0 bg-col"></span>
                    </li>
                    <li>
                      <a class="dropdown-item" href="javascript:void(0)">Lorem ipsum</a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="javascript:void(0)">Lorem ipsum</a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="javascript:void(0)">Lorem ipsum</a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="javascript:void(0)">Lorem ipsum</a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="javascript:void(0)">Lorem ipsum</a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="javascript:void(0)">
                        Lorem ipsum
                        <span class="text-danger fs-xs ms-2">New</span>
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="javascript:void(0)">Shop Homepage v.1</a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="javascript:void(0)">
                        Lorem ipsum
                        <span class="text-danger fs-xs ms-2">New</span>
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="javascript:void(0)">Lorem ipsum</a>

                    </li>
                  </ul>
                </div>
                <div class="mega-dropdown-column pb-2 pt-lg-3 pb-lg-4">
                  <ul class="list-unstyled mb-0">
                    <li>
                      <a class="dropdown-item" href="javascript:void(0)">Lorem ipsum</a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="javascript:void(0)">Lorem ipsum (Lorem ipsum)</a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="javascript:void(0)">Lorem ipsum</a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="javascript:void(0)">Lorem ipsum</a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="javascript:void(0)">
                        Lorem ipsum
                        <span class="text-danger fs-xs ms-2">New</span>
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="javascript:void(0)">Lorem ipsum</a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="javascript:void(0)">Lorem ipsum</a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="javascript:void(0)">Lorem ipsum</a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="javascript:void(0)">Lorem ipsum</a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="javascript:void(0)">Lorem ipsum</a>
                    </li>
                  </ul>
                </div>
                <div class="mega-dropdown-column position-relative border-start z-3"></div>
              </div>
            </div>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">About</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/contact">Contacts</router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
import AOS from "aos";

export default {
  mounted() {
    AOS.init();
  }
}
</script>

<style lang="scss" scoped>
[data-aos="ox-anime"] {
  opacity: 1;
  transition-property: background-color;
  background-color: transparent;

  &.aos-animate {
    background-color: #ffffff;
  }
}

.fixed-top {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1030;
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
.router-link-active, .router-link-exact-active {
  color: var(--ar-navbar-active-color);
}

.router-active {
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

.bg-col {
  background-image: url("@/assets/images/home/photography-camera.webp");
  background-repeat: no-repeat;
  background-size: cover;
}

@media (min-width: 576px) {
  .ms-sm-3 {
    margin-right: 1rem !important;
  }
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