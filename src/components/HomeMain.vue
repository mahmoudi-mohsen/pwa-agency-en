<template>
  <div>
    <section class="bg-primary bg-opacity-10 d-flex min-vh-100 overflow-hidden py-5">
      <div class="container d-flex justify-content-center pb-sm-3 py-md-4 py-xl-5">
        <KinesisContainer class="row align-items-center pt-5 mt-4 mt-xxl-0">
          <div class="col-lg-6 mb-4 mb-lg-0 pb-3 pb-lg-0">
            <div class="parallax mx-auto mx-lg-0 d-block"
                 style="max-width: 582px;">
              <KinesisElement tag="div" class="parallax-layer z-3" :strength="-20" type="translate"
                              style="position: relative;display: block;right: 0;top: 0;">
                <div class="position-relative bg-dark mx-auto"
                     style="max-width: 61%; padding: .3125rem; margin-bottom: 9.9%; border-radius: calc(var(--ar-border-radius) * 2.125);">
                  <div class="position-absolute start-50 translate-middle-x" style="top: 4.4%; width: 85%;">
                    <div class="row row-cols-4 gx-2 mb-3">
                      <div class="col position-relative">
                        <div class="position-absolute top-0 end-0 w-50 border-white border opacity-80"></div>
                        <div class="position-absolute top-0 start-0 w-100 border-white border opacity-30"></div>
                      </div>
                      <div class="col">
                        <div class="border-white border opacity-80"></div>
                      </div>
                      <div class="col">
                        <div class="border-white border opacity-80"></div>
                      </div>
                      <div class="col">
                        <div class="border-white border opacity-80"></div>
                      </div>

                    </div>
                    <div class="d-flex align-items-center">
                      <img class="rounded-circle m-0" :src="require(`@/assets/images/users/person1.jpg`)" width="35"
                           alt="Avatar">
                      <div class="fs-xs pe-2" data-bs-theme="light">
                        <span class="text-nav fw-bold ms-1 me-2">@company</span>
                        <span class="text-secondary">12 min</span>
                      </div>
                    </div>
                  </div>
                  <video class="d-block w-100" autoplay loop muted
                         style="border-radius: calc(var(--ar-border-radius) * 1.875);">
                    <source :src="require(`@/assets/images/home/video.mp4`)" type="video/mp4">
                  </video>
                </div>
              </KinesisElement>
              <KinesisElement tag="div" class="parallax-layer" :strength="-10" type="translate"
                              style="position: absolute; display: block; left: 0; top: 0;">
                <img :src="require(`@/assets/images/home/shape01.svg`)" alt="Background shape">
              </KinesisElement>
              <KinesisElement tag="div" class="parallax-layer z-2" :strength="-20" type="translate"
                              style="position: absolute; display: block; left: 0; top: 0;">
                <img :src="require(`@/assets/images/home/shape02.svg`)" alt="Background shape">
              </KinesisElement>
              <KinesisElement tag="div" class="parallax-layer" :strength="-15" type="translate"
                              style="position: absolute; display: block; left: 0; top: 0;">
                <img :src="require(`@/assets/images/home/shape03.svg`)" alt="Background shape">
              </KinesisElement>
              <KinesisElement tag="div" class="parallax-layer z-2" :strength="-25" type="translate"
                              style="position: absolute; display: block; left: 0; top: 0;">
                <img :src="require(`@/assets/images/home/shape04.svg`)" alt="Background shape">
              </KinesisElement>
            </div>
          </div>
          <div class="col-lg-6 text-center text-lg-start">
            <h1 class="display-2 pb-3 mb-4 fw-bold">
              <span class="fw-normal d-block">Full services</span>
              Digital Marketing Agency
            </h1>
            <div class="row row-cols-3">
              <div class="col">
                <i class="fas fa-lightbulb-on d-block fs-1 text-dark mb-2 pb-1"></i>
                <p class="mb-0">Individual approach to the brand</p>
              </div>
              <div class="col">
                <i class="fas fa-rocket fs-2 text-dark mb-3"></i>
                <p class="mb-0">We guarantee the result after a month</p>
              </div>
              <div class="col">
                <i class="fas fa-check-circle d-block fs-3 text-dark mb-3"></i>
                <p class="mb-0">Completing tasks exactly on time</p>
              </div>
            </div>
            <div class="d-sm-flex justify-content-center justify-content-lg-start pt-5 mt-lg-2">
              <a class="btn btn-lg btn-primary w-100 w-sm-auto mb-2 mb-sm-0 me-sm-1" href="#">Get in touch</a>
              <a class="btn btn-lg btn-link" href="#">
                Our projects
                <i class="fas fa-arrow-right ms-2"></i>
              </a>
            </div>
          </div>
        </KinesisContainer>
      </div>
    </section>
    <section class="container py-5 my-md-2 my-lg-3 my-xl-4 my-xxl-5">
      <div class="row align-items-center py-1 py-sm-3 py-md-4 my-lg-2">
        <div class="col-lg-4 offset-xl-1">
          <h2 class="h1 text-center text-lg-start pb-3 pb-lg-1">Our services</h2>
          <ul class="list-unstyled d-none d-lg-block pb-3 mb-3 mb-lg-4">
            <li class="d-flex pt-2">
              <i class="far fa-check fs-4 text-primary mt-n1 me-2"></i>
              Individual approach to the brand
            </li>
            <li class="d-flex pt-2">
              <i class="far fa-check fs-4 text-primary mt-n1 me-2"></i>
              We guarantee the result after a month
            </li>
            <li class="d-flex pt-2">
              <i class="far fa-check fs-4 text-primary mt-n1 me-2"></i>
              Completing tasks exactly on time
            </li>
          </ul>
          <a class="btn btn-primary d-none d-lg-inline-flex" href="#">See all services</a>
        </div>

        <div class="col-lg-8 col-xl-7 col-xxl-6">
          <KinesisContainer class="row row-cols-1 row-cols-sm-2" event="scroll">
            <div class="col">
              <KinesisElement :strength="-80" type="translate" class="card border-0 bg-primary bg-opacity-10">
                <div class="card-body">
                  <i class="fas fa-globe fs-1 text-primary d-block mb-3"></i>
                  <h3 class="h4">Design and Develop Website</h3>
                  <p class="fs-sm text-justify">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua
                  </p>
                </div>
              </KinesisElement>
              <KinesisElement :strength="-80" type="translate" class="card border-0 bg-info bg-opacity-10 mt-4">
                <div class="card-body">
                  <i class="fas fa-lightbulb-on fs-1 text-info d-block mb-3"></i>
                  <h3 class="h4">Content Marketing</h3>
                  <p class="fs-sm text-justify">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua
                  </p>
                </div>
              </KinesisElement>
            </div>
            <div class="col pt-lg-3">
              <KinesisElement :strength="-80" type="translate"
                              class="card border-0 bg-warning bg-opacity-10 mt-4 mt-sm-0 mt-lg-4">
                <div class="card-body">
                  <i class="fas fa-envelope fs-1 text-warning d-block mb-3"></i>
                  <h3 class="h4">Email Marketing</h3>
                  <p class="fs-sm text-justify">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua
                  </p>
                </div>
              </KinesisElement>
              <KinesisElement :strength="-80" type="translate" class="card border-0 bg-danger bg-opacity-10 mt-4">
                <div class="card-body">
                  <i class="fab fa-instagram fs-2 text-danger d-block mb-3"></i>
                  <h3 class="h4">Social Networks</h3>
                  <p class="fs-sm text-justify">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua
                  </p>
                </div>
              </KinesisElement>
            </div>
          </KinesisContainer>
          <div class="d-lg-none text-center pt-3 mt-3 mt-sm-4">
            <a class="btn btn-primary" href="#">See all services</a>
          </div>
        </div>
      </div>
    </section>
    <section class="container">
      <div class="bg-primary bg-opacity-10 rounded-5 py-5 px-4 p-sm-5">
        <div class="d-lg-flex align-items-center g-0 py-2 py-sm-3 py-md-4 p-xl-5">
          <div class="order-lg-2 text-center text-lg-start ps-lg-5 mx-auto me-lg-0">
            <h2 class="h1 mb-4">
              The tools
              <br class="d-none d-lg-inline"> we work with</h2>
            <p class="pb-3 mb-3 mb-lg-4 text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua Egestas purus viverra accumsan in nisl nisi Arcu cursus vitae congue mauris rhoncus
              aenean vel elit scelerisque
            </p>
            <a class="btn btn-primary d-none d-lg-inline-flex" href="#">For more info please contact us</a>
          </div>
          <div class="order-lg-1 w-100 mx-auto mx-lg-0" style="max-width: 558px;">
            <div class="row row-cols-3 g-3 g-sm-4 g-lg-3 g-xl-4">
              <div class="col">
                <div class="bg-light rounded-3 aos-init aos-animate" data-aos="zoom-in" data-aos-easing="ease-out-back"
                     data-aos-delay="300">
                  <img :src="require(`@/assets/images/home/bing.svg`)" alt="Bing">
                </div>
              </div>
              <div class="col">
                <div class="bg-light rounded-3 aos-init aos-animate" data-aos="zoom-in" data-aos-easing="ease-out-back"
                     data-aos-delay="500">
                  <img :src="require(`@/assets/images/home/facebook.svg`)" alt="Facebook">
                </div>
              </div>
              <div class="col">
                <div class="bg-light rounded-3 aos-init aos-animate" data-aos="zoom-in" data-aos-easing="ease-out-back"
                     data-aos-delay="200">
                  <img class="d-dark-mode-none" :src="require(`@/assets/images/home/microsoft-dark.svg`)"
                       alt="Facebook">
                </div>
              </div>
              <div class="col">
                <div class="bg-light rounded-3 aos-init aos-animate" data-aos="zoom-in" data-aos-easing="ease-out-back"
                     data-aos-delay="800">
                  <img :src="require(`@/assets/images/home/google.svg`)" alt="Google">
                </div>
              </div>
              <div class="col">
                <div class="bg-light rounded-3 aos-init aos-animate" data-aos="zoom-in" data-aos-easing="ease-out-back">
                  <img class="d-dark-mode-none" :src="require(`@/assets/images/home/google-ads-dark.svg`)"
                       alt="Google Ads">
                </div>
              </div>
              <div class="col">
                <div class="bg-light rounded-3 aos-init aos-animate" data-aos="zoom-in" data-aos-easing="ease-out-back"
                     data-aos-delay="600">
                  <img class="d-dark-mode-none" :src="require(`@/assets/images/home/admitad-dark.svg`)"
                       alt="Admitad">
                </div>
              </div>
              <div class="col">
                <div class="bg-light rounded-3 aos-init" data-aos="zoom-in" data-aos-easing="ease-out-back"
                     data-aos-delay="400">
                  <img class="d-dark-mode-none"
                       :src="require(`@/assets/images/home/google-analytics-dark.svg`)" alt="Google Analytics">
                </div>
              </div>
              <div class="col">
                <div class="bg-light rounded-3 aos-init" data-aos="zoom-in" data-aos-easing="ease-out-back"
                     data-aos-delay="700">
                  <img class="d-dark-mode-none" :src="require(`@/assets/images/home/instagram-dark.svg`)"
                       alt="Instagram">
                </div>
              </div>
              <div class="col">
                <div class="bg-light rounded-3 aos-init" data-aos="zoom-in" data-aos-easing="ease-out-back"
                     data-aos-delay="100">
                  <img class="d-dark-mode-none" :src="require(`@/assets/images/home/tiktok-dark.svg`)"
                       alt="TikTok">
                </div>
              </div>
            </div>
            <div class="d-lg-none text-center pt-4 mt-2 mt-md-3 aos-init aos-animate" data-aos="zoom-in"
                 data-aos-easing="ease-out-back" data-aos-delay="900">
              <a class="btn btn-primary" href="#">For more info please contact us</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="container py-5 my-lg-3 my-xl-4 my-xxl-5">
      <h2 class="h1 text-center pb-3 pt-2 pt-sm-3 pt-md-4 pt-lg-5 mt-md-3 mt-lg-0 mb-3 mb-lg-4">Our benefits</h2>
      <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-4 gy-4 gy-sm-5 gx-4 pb-3 pb-md-4 pb-lg-5 mb-md-3 mb-lg-0">
        <div class="col text-center">
          <div class="ratio ratio-1x1 position-relative mx-auto mb-3 mb-sm-4" style="width: 80px;">
            <i class="fas fa-users-cog text-primary fs-1 d-flex align-items-center justify-content-center position-absolute end-50 translate-middle-x"></i>
            <svg class="position-absolute top-0 start-0 text-primary" width="80" height="80" viewBox="0 0 68 68"
                 fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path
                  d="M56.0059 60.5579C44.1549 78.9787 18.0053 58.9081 6.41191 46.5701C-2.92817 35.5074 -2.81987 12.1818 11.7792 3.74605C30.0281 -6.79858 48.0623 7.40439 59.8703 15.7971C71.6784 24.1897 70.8197 37.5319 56.0059 60.5579Z"
                  fill-opacity="0.1"></path>
            </svg>
          </div>
          <h3 class="h4 pb-2 mb-1">Online support</h3>
          <p class="fs-sm mb-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua
          </p>
        </div>
        <div class="col text-center">
          <div class="ratio ratio-1x1 position-relative mx-auto mb-3 mb-sm-4" style="width: 80px;">
            <i class="fas fa-lightbulb-on text-primary fs-1 d-flex align-items-center justify-content-center position-absolute end-50 translate-middle-x"></i>
            <svg class="position-absolute top-0 start-0 text-primary" width="80" height="80" viewBox="0 0 68 68"
                 fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path
                  d="M65.0556 29.2672C75.4219 46.3175 48.5577 59.7388 33.8299 64.3181C21.0447 67.5599 1.98006 58.174 0.888673 42.8524C-0.475555 23.7004 18.3473 14.5883 29.9289 8.26059C41.5104 1.93285 52.0978 7.9543 65.0556 29.2672Z"
                  fill-opacity="0.1"></path>
            </svg>
          </div>
          <h3 class="h4 pb-2 mb-1">100% guarantee</h3>
          <p class="fs-sm mb-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua
          </p>
        </div>
        <div class="col text-center">
          <div class="ratio ratio-1x1 position-relative mx-auto mb-3 mb-sm-4" style="width: 80px;">
            <i class="fas fa-check-circle text-primary fs-2 d-flex align-items-center justify-content-center position-absolute end-50 translate-middle-x"></i>
            <svg class="position-absolute top-0 start-0 text-primary" width="80" height="80" viewBox="0 0 68 68"
                 fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path
                  d="M6.61057 18.2783C10.8205 -1.22686 39.549 7.51899 53.3869 14.3301C64.8949 20.7749 72.2705 40.7038 62.5199 52.5725C50.3318 67.4085 30.4034 61.0689 17.6454 57.6914C4.88745 54.314 1.3482 42.6597 6.61057 18.2783Z"
                  fill-opacity="0.1"></path>
            </svg>
          </div>
          <h3 class="h4 pb-2 mb-1">Work on time</h3>
          <p class="fs-sm mb-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua
          </p>
        </div>
        <div class="col text-center">
          <div class="ratio ratio-1x1 position-relative mx-auto mb-3 mb-sm-4" style="width: 80px;">
            <i class="fas fa-rocket text-primary fs-2 d-flex align-items-center justify-content-center position-absolute end-50 translate-middle-x"></i>
            <svg class="position-absolute top-0 start-0 text-primary" width="80" height="80" viewBox="0 0 68 68"
                 fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path
                  d="M9.34481 53.5078C-7.24653 42.4218 11.4487 18.9206 22.8702 8.55583C33.0946 0.223307 54.3393 0.690942 61.7922 14.1221C71.1082 30.9111 57.886 47.1131 50.0546 57.7358C42.2233 68.3586 30.084 67.3653 9.34481 53.5078Z"
                  fill-opacity="0.1"></path>
            </svg>
          </div>
          <h3 class="h4 pb-2 mb-1">Free consultation</h3>
          <p class="fs-sm mb-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua
          </p>
        </div>
      </div>
    </section>
    <section class="overflow-hidden pb-5 mb-lg-3 mb-xl-4 mb-xxl-5">
      <div class="container pb-sm-2 pb-md-3 pb-lg-5 mb-md-3 mb-lg-0">

        <!-- Parallax image -->
        <div class="position-relative mx-auto" style="max-width: 1198px;">
          <div class="position-relative z-3 aos-init" data-aos="fade-left" data-aos-duration="600"
               data-aos-offset="300">
            <img :src="require(`@/assets/images/home/01.png`)" alt="">
          </div>
          <div class="position-absolute top-0 start-0 z-2 aos-init" data-aos="fade-right" data-aos-duration="600"
               data-aos-offset="300">
            <img :src="require(`@/assets/images/home/02.png`)" alt="">
          </div>
          <div class="position-absolute top-0 start-0 z-4 aos-init" data-aos="zoom-in" data-aos-duration="500"
               data-aos-offset="300" data-aos-delay="900" data-aos-easing="ease-out-back">
            <svg class="w-100 h-100 text-info" width="1198" height="693" viewBox="0 0 1198 693" fill="currentColor"
                 xmlns="http://www.w3.org/2000/svg">
              <path
                  d="M579.362 65.02c1.689-.051 3.25-1.264 4.785-1.89l2.699-1.2 1.203-.587c-.051.026 1.446-.69.704-.613 3.147-.345 2.571-4.916-.589-4.303-.844.166-1.33.626-2.008 1.098-.909.638-1.907 1.2-2.879 1.711l-2.827 1.443c-.653.409-1.19 1.034-1.881 1.379-1.433.715-.729 3.013.793 2.962zm-27.74-8.747c1.56.357 3.428-.792 4.835-1.405.998-.434 1.945-.983 2.917-1.481.665-.332 1.484-.97 1.983-1.239 1.753-.907 1.036-4.163-1.062-3.907-1.126.14-1.471.587-2.239 1.302-.614.562-1.522 1.073-2.2 1.571l-4.452 3.397c-.678.421-.627 1.57.218 1.762zm22.666-6.037l.077.153c.217.472.908.868 1.433.817 1.356-.141 2.571-.919 3.812-1.481l3.505-1.711c2.546-.958 1.587-4.648-1.125-4.099-1.766.358-3.467 1.941-5.028 2.796-1.177.677-3.441 1.852-2.674 3.524zm29.078 9.805c1.65.69 3.761-.702 5.271-1.328 1.612-.664 3.224-1.073 4.541-2.273 1.766-1.622-1.01-4.38-2.622-2.618-.896.983-2.252 1.328-3.403 1.928l-4.056 2.273c-.882.536-.588 1.66.269 2.017zm7.491 14.504c2.533-1.073 4.555-3.103 6.909-4.469.87-.511.947-1.826.409-2.579-.627-.881-1.727-.907-2.584-.409-1.152.677-2.111 1.698-3.16 2.528-1.062.83-2.431 1.545-3.25 2.617-.857 1.136.269 2.911 1.676 2.311zm-8.731 22.483c2.265-2.464 4.683-4.801 6.909-7.278 2.188-2.439-1.829-5.516-3.544-2.732-.473.779-1.049 1.417-1.471 2.234-.499.945-1.088 1.813-1.715 2.682-.946 1.315-2.418 2.86-2.085 4.584.141.843 1.356 1.111 1.906.511zm-23.927 4.292c1.433-.307 2.814-1.673 3.723-2.771.985-1.187 2.226-2.171 2.904-3.588 1.164-2.439-2.917-4.15-3.877-1.622-.921 2.452-4.311 4.035-4.196 6.87.025.664.806 1.251 1.446 1.111zm-20.46 13.752c-.013.306.55-.588.691-.792.448-.651.832-1.341 1.215-2.018.819-1.468 1.856-2.758 2.726-4.188 1.292-2.094-2.252-4.073-3.263-1.902l-2.597 5.924c-.461 1.213-1.331 2.439-.384 3.64.55.702 1.574.063 1.612-.664zm-15.532-2.812c1.177-.306 2.06-2.209 2.636-3.167.46-.766.831-1.596 1.254-2.387.025-.039.806-1.711.192-.703.217-.357.665-.574.895-.995.665-1.213-.141-3.282-1.765-3.065-2.943.383-2.854 3.831-3.672 6.103-.192.524-1.485 4.725.46 4.214zm17.857-15.767c.243-.204.781-.332 1.1-.485.909-.447 1.728-1.047 2.521-1.647 1.407-1.047 2.981-2.158 4.107-3.499 1.458-1.737-.742-3.92-2.482-2.477-.806.664-1.472 1.507-2.188 2.26l-2.508 2.413c-.819.83-2.392 1.979-1.714 3.294.243.434.831.434 1.164.141zm-14.918-2.936c.602-1.149 1.024-2.273 1.408-3.524.32-1.047.921-1.915 1.228-2.937.448-1.456-1.292-2.771-2.584-1.979-1.433.881-1.484 2.503-1.459 4.022.038 1.392-.294 3.141.294 4.405.205.447.909.421 1.113.013zm57.587-50.408l5.194.306c2.034.051 4.081.741 5.718-.702.563-.498.563-1.545 0-2.056-1.714-1.52-4.35-.868-6.486-.6-1.535.191-3.646.026-5.028.83-1.061.638-.537 2.145.602 2.222zm26.732 4.633c-.409 1.29 1.408 1.839 2.329 2.017l6.946 1.468c2.431.702 3.39-3.345 1.011-3.677-2.072-.294-4.209-.358-6.294-.268-.934.038-2.584.472-3.454.153-.218-.077-.474.102-.538.306zm3.38 14.008c1.753.702 3.377 1.264 5.232 1.647 1.408.294 3.16.792 4.58.677 1.612-.128 2.597-2.03 1.356-3.281-1.356-1.366-3.377-.843-5.117-.932-1.829-.102-4.324-.613-6.064.064-.882.37-.882 1.481.013 1.826zm8.212 14.185c3.365 1.379 7.241.472 10.721 1.328 3.748.932 3.774-5.427 0-4.482-3.48.868-7.356-.051-10.721 1.328-.882.37-.895 1.456 0 1.826zm-50.489 29.84c-.716.038-1.023.319-1.561.766l-2.443 2.069c-1.305 1.187-2.239 2.464-3.288 3.856-1.203 1.583 1.074 3.435 2.584 2.579.755-.421.908-.894 1.267-1.622.409-.829 1.01-1.583 1.586-2.311.973-1.213 2.431-2.592 2.751-4.162.115-.562-.256-1.213-.896-1.175zm-17.324 10.214c-1.023.791-1.356 1.979-1.727 3.166-.575 1.839-.742 3.614-.857 5.542-.153 2.707 4.414 2.681 4.184 0-.154-1.839-.307-3.576-.167-5.414.077-.958.282-2.477-.575-3.18-.218-.178-.602-.306-.858-.114zm-22.837 9.935c-.448 1.341.422 3.052.716 4.379.307 1.354.64 2.746 1.369 3.933 1.894 3.103 6.282-.83 3.711-2.86-.857-.677-1.28-1.507-1.74-2.477l-.806-1.698c-.295-.575-.781-1.009-1.088-1.558-.512-.919-1.842-.651-2.162.281zM531.155 95.51c.806-1.009 1.561-1.954 2.098-3.141l1.689-4.175c1.177-2.911-3.864-4.443-4.811-1.328l-1.139 4.226c-.345 1.251-1.215 2.273-.793 3.626.371 1.162 2.073 1.89 2.956.792zm8.903-21.707c.78-.868 1.74-1.558 2.482-2.477.716-.881 1.369-2.081 2.239-2.809 2.303-1.941-1.165-5.516-3.34-3.333-.524.536-.831 1.111-1.202 1.749-.41.715-.96 1.354-1.357 2.069-.742 1.366-1.573 2.567-1.189 4.188.23.996 1.663 1.392 2.367.613zm42.435 8.175c1.791-.473 3.621-1.456 5.092-2.567 1.279-.97 3.083-1.941 3.991-3.294 1.331-1.979-1.906-3.869-3.211-1.877-.179.281-.831.562-1.113.779l-2.494 2.005c-1.241.945-3.02 1.532-3.787 2.962-.55 1.034.345 2.311 1.522 1.992zm-23.063-3.834c.32-.523.934-.83 1.369-1.251.499-.472.883-1.047 1.318-1.583.959-1.149 2.239-1.979 3.198-3.116 1.548-1.839-.78-4.15-2.622-2.618-1.421 1.175-2.598 2.924-3.493 4.52-.653 1.162-1.971 2.707-1.293 4.048.32.6 1.203.536 1.523 0zm62.284 2.389c1.138.217 2.2.064 3.313-.204 1.152-.268 2.342-.255 3.506-.46 2.239-.383 1.241-4.175-.947-3.422-.921.319-1.906.434-2.815.779-.895.332-1.804.983-2.75 1.098-1.139.153-1.664 1.954-.307 2.209zm36.932-17.275c.256 2.017 2.431 2.796 4.069 3.601l1.765.868c-.102-.051.704.434.512.281-.397-.294.767.728.908.805 1.318.702 3.019.102 3.429-1.392l.038-.141c.217-.779.026-1.826-.627-2.375-1.087-.919-2.264-1.124-3.62-1.341-1.689-.281-3.301-.868-4.887-1.507-.704-.281-1.676.447-1.587 1.2zm-125.755 53.139c-.09 1.673.601 3.626 1.164 5.184.614 1.698 1.766 3.486 3.813 3.077.998-.204 1.407-1.289 1.241-2.183-.141-.766-.614-1.047-1.062-1.596-.32-.396-.563-.932-.806-1.379l-.909-1.698c-.409-.754-.882-1.29-1.356-1.967-.64-.906-2.034-.574-2.085.562z"></path>
            </svg>
          </div>
          <div class="position-absolute top-0 start-0 aos-init" data-aos="fade-up" data-aos-duration="600"
               data-aos-offset="300" data-aos-delay="600" data-aos-easing="ease-out-back">
            <svg class="w-100 h-100 text-warning" width="1198" height="693" viewBox="0 0 1198 693" fill="currentColor"
                 xmlns="http://www.w3.org/2000/svg">
              <path
                  d="M828.762 131.524c-38.952 16.753-134.813 136.894-54.172 163.269 29.536 9.657 62.546 1.819 92.465 13.085 33.408 12.588 60.283 32.772 97.566 29.519 31.269-2.729 42.409-28.44 45.229-56.387 2.93-29.041 12.95-35.606 31.06-57.194 14.93-17.793 25.09-41.532 6.11-59.579-20.29-19.286-53.376-9.385-78.904-10.343-17.496-.656-35.976-2.91-50.929-11.198-8.325-4.62-17.067-11.049-26.502-13.973-19.456-5.976-44.603-4.649-61.923 2.801z"></path>
            </svg>
          </div>
        </div>
        <div class="row pt-5 mt-md-4">
          <div class="col-md-6 col-xxl-5 offset-xxl-1 mb-4 mb-md-0">
            <div class="text-center text-md-start pe-md-4 pe-xl-5 pe-xxl-0">
              <h2 class="h1 mb-sm-4">
                A team of specialists works for your business
              </h2>
              <p class="fs-lg mb-2 mb-sm-3 mb-xl-4 mx-auto mx-md-0 text-justify" style="max-width: 475px;">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris
                rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis.
                Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien
                faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt
                ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam
                maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat
                sed lectus. Non nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis scelerisque
                fermentum. Odio ut enim blandit volutpat maecenas volutpat. Ornare lectus sit amet est placerat in
                egestas erat. Nisi vitae suscipit tellus mauris a diam maecenas sed. Placerat duis ultricies lacus sed
                turpis tincidunt id aliquet.
              </p>
              <a class="btn btn-lg btn-link px-0" href="#">
                More about us
                <i class="fas fa-arrow-left ms-2"></i>
              </a>
            </div>
          </div>
          <div class="col-md-6 mt-n3">
            <div class="position-relative mt-5 mb-4 mb-sm-5">
              <img class="d-block rounded-5" :src="require(`@/assets/images/home/video-cover.jpg`)" alt="Video cover">
              <div class="d-nline-flex position-absolute top-50 start-50 translate-middle z-2 p-4">
                <a class="btn btn-icon btn-xl btn-primary rounded-circle stretched-link" href="javascript:void(0)"
                   data-bs-toggle="video" aria-label="Play video">
                  <i class="fas fa-play"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="container">

      <div class="card border-0 bg-primary bg-opacity-10 position-relative overflow-hidden">
        <svg class="d-block position-absolute top-0 end-0 text-white text-dark-mode-dark" width="125" height="99"
             viewBox="0 0 125 99" fill="none" stroke="currentColor" stroke-width="2" stroke-miterlimit="10"
             xmlns="http://www.w3.org/2000/svg">
          <path
              d="M-17.819-8.269c-.305.249-.567.498-.814.791-1.018 1.172-1.585 2.695-2.08 4.204-4.145 12.479-9.482 29.206-10.223 42.652-.553 10.063 2.516 19.232 8.885 27.317 9.729 12.347 18.367 9.096 32.037 9.887 16.084.937 25.391 8.173 39.497 16.156 13.103 7.426 27.427 6.943 39.163-1.128 13.859-9.521 26.045-30.056 30.495-46.387 4.494-16.493 8.071-34.611.247-51.865-12.273-27.053-55.726-15.233-74.457-11.996-8.827 1.523-17.131 5.829-26.176 6.708-5.73.556-11.547-.527-17.349-.059-5.25.425-14.935.234-19.225 3.72z"></path>
          <path
              d="M-3.201 8.561c-.582.923-1.003 1.992-1.28 3.105-2.414 9.594-4.974 20.77-4.552 29.792.175 3.589.945 7.016 2.458 10.282 1.323 2.871 3.127 5.595 5.395 8.188 7.329 8.378 13.801 6.459 23.631 7.162 11.721.849 18.862 5.727 29.143 10.795 9.467 4.658 19.705 3.882 28.285-2.402 10.049-7.323 18.571-22.058 21.581-33.937 3.054-12.054 5.104-25.134-.742-37.438-9.074-19.188-39.54-11.981-53.836-9.828-7.199 1.084-14.979 4.409-22.468 5.463-2.429.337-4.683.483-6.588.469-2.516.234-5.002.601-7.358 1.435C6.499 3.054-.074 4.474-2.692 7.829c-.204.234-.349.483-.509.732z"></path>
          <path
              d="M12.237 24.598c-.189.63-.407 1.304-.48 2.007-.625 6.781-.509 12.23 1.12 16.932.625 1.787 1.44 3.545 2.763 5.288 1.134 1.494 2.487 2.944 4.043 4.35 4.915 4.423 9.249 3.823 15.226 4.423 7.344.747 12.303 3.296 18.803 5.419 5.831 1.904 11.983.806 17.393-3.662C77.329 54.2 82.186 45.28 83.771 37.854c1.6-7.617 2.109-15.658-1.745-23.025-5.904-11.293-23.355-8.774-33.229-7.66-5.555.63-12.826 3.047-18.774 4.233-2.283.454-4.203.791-5.41.894a14.19 14.19 0 0 0-5.148 2.973c-2.69 2.432-6.151 5.39-7.082 8.656-.058.234-.087.469-.146.674z"></path>
          <path
              d="M31.449 24.407c-3.548 2.915-5.337 11.454-3.766 16.243 2.021 6.166 4.77 4.409 10.194 5.258 9.962 1.567 16.666 6.796 24.475-2.666 8.725-10.56 1.251-23.538-11.605-23.142-5.831.176-17.756 3.676-19.298 4.306z"></path>
        </svg>
        <svg class="d-block position-absolute bottom-0 start-0 text-info opacity-20" width="140" height="86"
             viewBox="0 0 140 86" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path
              d="M1.56155 84.728C3.89813 95.3168 8.77193 105.696 14.3618 114.354C31.1345 140.282 61.2598 159.203 93.1024 149.868C115.683 143.25 136.909 120.078 146.906 99.6379C157.262 78.4816 157.784 62.3169 149.314 40.7686C138.656 13.647 114.088 -10.3284 84.9291 4.90565C72.6616 11.3094 61.6112 19.2912 48.9043 25.2334C37.333 30.6501 22.7611 33.4689 12.9718 42.2129C0.148055 53.665 -1.80519 69.4006 1.56155 84.728Z"></path>
        </svg>
        <svg class="d-block position-absolute text-danger opacity-20" width="100" height="109" viewBox="0 0 100 109"
             fill="currentColor" xmlns="http://www.w3.org/2000/svg" style="right: 60px; bottom: 62px;">
          <path
              d="M13.0417 15.1485C18.7381 10.3806 25.7233 6.78779 32.3773 4.42805C52.3217 -2.62478 76.5803 -0.291377 89.9528 18.0914C99.436 31.1261 101.262 52.5761 98.137 67.8474C94.9071 83.6571 88.4295 92.6458 74.8221 100.795C57.6962 111.053 34.339 113.786 24.8896 93.3249C20.9119 84.7197 18.2546 75.7674 13.8455 67.2289C9.83276 59.4504 3.10546 51.8265 1.45115 42.988C-0.716922 31.4112 4.80452 22.0566 13.0417 15.1485Z"></path>
        </svg>
        <div class="card-body position-relative z-2 px-lg-0 py-lg-5">
          <Carousel :items-to-show="1"  ref="myCarousel" :wrap-around="true"
                    :transition="1500">
            <Slide :key="0" class="row py-2 py-sm-1 py-md-3 py-lg-4 py-xl-5">
              <div class="col-md-4 col-lg-3 offset-lg-1 mb-3 mb-md-0">
                <div class="binded-content">
                  <div class="binded-item active" id="author1">
                    <img class="d-block rounded-circle mb-3" :src="require(`@/assets/images/users/person1.jpg`)"
                         width="86"
                         alt="Lilianna Bocouse">
                    <h4 class="mb-0">Lilianna Bocouse</h4>
                    <p class="fs-lg text-body-secondary mb-0">Head of Marketing</p>
                  </div>
                </div>
              </div>
              <div class="col-md-8 col-lg-7">
                <div class="swiper swiper-initialized swiper-horizontal swiper-backface-hidden">
                  <div class="swiper-wrapper">
                    <div class="swiper-slide swiper-slide-active"
                         style="width: 746px; margin-right: 40px;">
                      <p class="text-dark lead mb-0">“
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae
                        congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi
                        porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id
                        aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper
                        velit sed ullamcorper morbi tincidunt ornare massa eget.
                        ”</p>
                    </div>
                  </div>
                </div>
              </div>
            </Slide>
            <Slide :key="1" class="row py-2 py-sm-1 py-md-3 py-lg-4 py-xl-5">
              <div class="col-md-4 col-lg-3 offset-lg-1 mb-3 mb-md-0">
                <div class="binded-content">
                  <div class="binded-item" id="author2">
                    <img class="d-block rounded-circle mb-3" :src="require(`@/assets/images/users/person2.jpg`)"
                         width="86"
                         alt="Darell Steward">
                    <h4 class="mb-0">Darell Steward</h4>
                    <p class="fs-lg text-body-secondary mb-0">Project Manager</p>
                  </div>
                </div>
              </div>
              <div class="col-md-8 col-lg-7">
                <div class="swiper swiper-initialized swiper-horizontal swiper-backface-hidden">
                  <div class="swiper-wrapper">
                    <div class="swiper-slide"
                         style="width: 746px; margin-right: 40px;">
                      <p class="text-dark lead mb-0">“
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae
                        congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi
                        porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id
                        aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper
                        velit sed ullamcorper morbi tincidunt ornare massa eget.
                        ”</p>
                    </div>
                  </div>
                </div>
              </div>
            </Slide>
            <Slide :key="2" class="row py-2 py-sm-1 py-md-3 py-lg-4 py-xl-5">
              <div class="col-md-4 col-lg-3 offset-lg-1 mb-3 mb-md-0">
                <div class="binded-content">
                  <div class="binded-item" id="author3">
                    <img class="d-block rounded-circle mb-3" :src="require(`@/assets/images/users/person3.jpg`)"
                         width="86"
                         alt="Annette Black">
                    <h4 class="mb-0">Annette Black</h4>
                    <p class="fs-lg text-body-secondary mb-0">Designer</p>
                  </div>
                </div>
              </div>
              <div class="col-md-8 col-lg-7">
                <div class="swiper swiper-initialized swiper-horizontal swiper-backface-hidden">
                  <div class="swiper-wrapper">
                    <div class="swiper-slide" style="width: 746px; margin-right: 40px;">
                      <p class="text-dark lead mb-0">“
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae
                        congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi
                        porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id
                        aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper
                        velit sed ullamcorper morbi tincidunt ornare massa eget.
                        ”</p>
                    </div>
                  </div>
                </div>
              </div>
            </Slide>
            <Slide :key="3" class="row py-2 py-sm-1 py-md-3 py-lg-4 py-xl-5">
              <div class="col-md-4 col-lg-3 offset-lg-1 mb-3 mb-md-0">
                <div class="binded-content">
                  <div class="binded-item" id="author4">
                    <img class="d-block rounded-circle mb-3" :src="require(`@/assets/images/users/person4.jpg`)"
                         width="86"
                         alt="Ralph Edwards">
                    <h4 class="mb-0">Ralph Edwards</h4>
                    <p class="fs-lg text-body-secondary mb-0">CEO</p>
                  </div>
                </div>
              </div>
              <div class="col-md-8 col-lg-7">
                <div class="swiper swiper-initialized swiper-horizontal swiper-backface-hidden">
                  <div class="swiper-wrapper">
                    <div class="swiper-slide" style="width: 746px; margin-right: 40px;">
                      <p class="text-dark lead mb-0">“
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae
                        congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi
                        porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id
                        aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper
                        velit sed ullamcorper morbi tincidunt ornare massa eget.
                        ”</p>
                    </div>
                  </div>
                </div>
              </div>
            </Slide>
            <template #addons>
              <Pagination/>
            </template>
          </Carousel>
        </div>
      </div>
    </section>
    <section class="container pt-5 pb-5 mt-lg-3 mt-xl-4 mt-xxl-5 position-relative blog-wrap">
      <Carousel :items-to-show="1"  ref="myCarousel" :wrap-around="true"
                :transition="1500" @slide-end="slideEnd">

        <Slide :key="0" class="overflow-hidden">
          <div class="row align-items-center pt-md-4 mt-2 mt-sm-3">
            <div class="col-md-6 position-relative pb-3 pb-md-0 mb-2 mb-sm-3 mb-md-0">
              <div class="binded-content z-2">
                <div class="binded-item active" id="image1">
                  <img class="d-block rounded-5 position-relative z-3" :src="require(`@/assets/images/home/01.jpg`)"
                       alt="Image">
                </div>
              </div>
            </div>
            <div class="col-md-6 col-xl-5">
              <div class="ps-md-4 ps-xl-0">
                <div class="swiper swiper-initialized swiper-horizontal swiper-backface-hidden">
                  <div class="swiper-wrapper"
                       style="height: 370px; transition-duration: 0ms; transform: translate3d(0px, 0px, 0px); transition-delay: 0ms;">
                    <div class="swiper-slide pb-1 swiper-slide-active" style="width: 526px;">
                      <h3 class="h4 text-start">Growth of subscribers and sales on social networks for the eco shoe brand</h3>
                      <p class="pb-3 mb-3 mb-xl-4 text-justify">
                        Morbi et massa fames ac scelerisque sit commodo dignissim faucibus vel quisque proin lectus. Morbi et massa fames ac scelerisque sit commodo dignissim.
                      </p>
                      <div
                          class="d-flex d-md-none d-lg-flex justify-content-between w-100 pb-4 pb-xl-5 mb-2 mb-sm-3 mb-xl-2"
                          style="max-width: 440px;">
                        <div class="pe-4">
                          <div class="h2 mb-1 text-start">1000+</div>
                          <div class="fs-sm">leads for $ 2.1</div>
                        </div>
                        <div class="pe-4">
                          <div class="h2 mb-1 text-start">160%</div>
                          <div class="fs-sm">revenue increase</div>
                        </div>
                        <div>
                          <div class="h2 mb-1 text-start">12+</div>
                          <div class="fs-sm">sales channels</div>
                        </div>
                      </div>
                      <div class="d-sm-flex">
                        <a class="btn btn-primary w-100 w-sm-auto mb-3 mb-sm-0 me-sm-3 me-xl-4" href="#">
                          Read a full story
                        </a>
                        <a class="btn btn-outline-primary w-100 w-sm-auto d-md-none d-lg-inline-flex mb-0" href="#">
                          All case studies
                        </a>
                      </div>
                    </div>
                  </div>
                  <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div>
              </div>
            </div>
          </div>
        </Slide>
        <Slide :key="1" class="overflow-hidden">
          <div class="row align-items-center pt-md-4 mt-2 mt-sm-3">
            <div class="col-md-6 position-relative pb-3 pb-md-0 mb-2 mb-sm-3 mb-md-0">
              <div class="binded-content z-2">
                <div class="binded-item active" id="image1">
                  <img class="d-block rounded-5 position-relative z-3" :src="require(`@/assets/images/home/02.jpg`)"
                       alt="Image">
                </div>
              </div>
            </div>
            <div class="col-md-6 col-xl-5">
              <div class="ps-md-4 ps-xl-0">
                <div class="swiper swiper-initialized swiper-horizontal swiper-backface-hidden">
                  <div class="swiper-wrapper"
                       style="height: 370px; transition-duration: 0ms; transform: translate3d(0px, 0px, 0px); transition-delay: 0ms;">
                    <div class="swiper-slide pb-1 swiper-slide-active" style="width: 526px;">
                      <h3 class="h4 text-start">Growth of subscribers and sales on social networks for the eco shoe brand</h3>
                      <p class="pb-3 mb-3 mb-xl-4 text-justify">
                        Morbi et massa fames ac scelerisque sit commodo dignissim faucibus vel quisque proin lectus. Morbi et massa fames ac scelerisque sit commodo dignissim.
                      </p>
                      <div
                          class="d-flex d-md-none d-lg-flex justify-content-between w-100 pb-4 pb-xl-5 mb-2 mb-sm-3 mb-xl-2"
                          style="max-width: 440px;">
                        <div class="pe-4">
                          <div class="h2 mb-1 text-start">1000+</div>
                          <div class="fs-sm">leads for $ 2.1</div>
                        </div>
                        <div class="pe-4">
                          <div class="h2 mb-1 text-start">160%</div>
                          <div class="fs-sm">revenue increase</div>
                        </div>
                        <div>
                          <div class="h2 mb-1 text-start">12+</div>
                          <div class="fs-sm">sales channels</div>
                        </div>
                      </div>
                      <div class="d-sm-flex">
                        <a class="btn btn-primary w-100 w-sm-auto mb-3 mb-sm-0 me-sm-3 me-xl-4" href="#">
                          Read a full story
                        </a>
                        <a class="btn btn-outline-primary w-100 w-sm-auto d-md-none d-lg-inline-flex mb-0" href="#">
                          All case studies
                        </a>
                      </div>
                    </div>
                  </div>
                  <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div>
              </div>
            </div>
          </div>
        </Slide>
        <Slide :key="2" class="overflow-hidden">
          <div class="row align-items-center pt-md-4 mt-2 mt-sm-3">
            <div class="col-md-6 position-relative pb-3 pb-md-0 mb-2 mb-sm-3 mb-md-0">
              <div class="binded-content z-2">
                <div class="binded-item active" id="image1">
                  <img class="d-block rounded-5 position-relative z-3" :src="require(`@/assets/images/home/03.jpg`)"
                       alt="Image">
                </div>
              </div>
            </div>
            <div class="col-md-6 col-xl-5">
              <div class="ps-md-4 ps-xl-0">
                <div class="swiper swiper-initialized swiper-horizontal swiper-backface-hidden">
                  <div class="swiper-wrapper"
                       style="height: 370px; transition-duration: 0ms; transform: translate3d(0px, 0px, 0px); transition-delay: 0ms;">
                    <div class="swiper-slide pb-1 swiper-slide-active" style="width: 526px;">
                      <h3 class="h4 text-start">Growth of subscribers and sales on social networks for the eco shoe brand</h3>
                      <p class="pb-3 mb-3 mb-xl-4 text-justify">
                        Morbi et massa fames ac scelerisque sit commodo dignissim faucibus vel quisque proin lectus. Morbi et massa fames ac scelerisque sit commodo dignissim.
                      </p>
                      <div
                          class="d-flex d-md-none d-lg-flex justify-content-between w-100 pb-4 pb-xl-5 mb-2 mb-sm-3 mb-xl-2"
                          style="max-width: 440px;">
                        <div class="pe-4">
                          <div class="h2 mb-1 text-start">1000+</div>
                          <div class="fs-sm">leads for $ 2.1</div>
                        </div>
                        <div class="pe-4">
                          <div class="h2 mb-1 text-start">160%</div>
                          <div class="fs-sm">revenue increase</div>
                        </div>
                        <div>
                          <div class="h2 mb-1 text-start">12+</div>
                          <div class="fs-sm">sales channels</div>
                        </div>
                      </div>
                      <div class="d-sm-flex">
                        <a class="btn btn-primary w-100 w-sm-auto mb-3 mb-sm-0 me-sm-3 me-xl-4" href="#">
                          Read a full story
                        </a>
                        <a class="btn btn-outline-primary w-100 w-sm-auto d-md-none d-lg-inline-flex mb-0" href="#">
                          All case studies
                        </a>
                      </div>
                    </div>
                  </div>
                  <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div>
              </div>
            </div>
          </div>
        </Slide>

        <template #addons>
          <div class="blog-nav">
            <span class="text-secondary">
              {{ currentSlideIndex }}
              /
              3</span>
            <Navigation/>
          </div>
        </template>
      </Carousel>
      <div class="d-none d-xxl-block position-absolute aos-init"
           style="width: 861px; height: 719px; top: 120px; left: -180px;z-index: -1;" data-aos="zoom-in"
           data-aos-duration="700" data-aos-offset="600">
        <svg class="text-primary opacity-10" width="861" height="719" viewBox="0 0 861 719" fill="currentColor"
             xmlns="http://www.w3.org/2000/svg">
          <path
              d="M25.1985 361.161C26.6142 363.592 28.4042 365.854 30.3902 367.846L115.89 453.613C117.366 455.093 119.008 456.457 120.69 457.697C220.882 531.542 166.267 694.09 321.314 716.256C481 739.09 730.799 588.084 806.496 453.151C844.188 385.962 885.87 273.92 840.453 199.651C808.854 147.97 742.627 142.437 686.285 142.442C616.832 142.453 556.116 167.459 491.294 135.468C449.5 114.831 426.769 82.5406 392.702 51.7928C206.459 -116.148 -88.0611 166.69 25.1985 361.161Z"></path>
        </svg>
      </div>
    </section>
    <section class="position-relative  pt-5 mt-lg-3 mt-xl-4 mt-xxl-5" style="margin-top: 15rem!important;">
      <div class="position-absolute w-100 start-0 bottom-0 overflow-hidden">
        <div class="text-primary opacity-10" style="width: 3840px; height: 250px;">
          <svg width="3840" height="250" viewBox="0 0 3840 250" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M3840,32.1V250H0V32.1c72.5,0,112.1-17.4,271.6,5.5c199.3,28.5,206,34.7,378.4,29c172.4-5.7,287.8-34.5,418.9-34.5S1317,55.2,1430,48.4c113-6.8,176.5-37.9,248-45.9c15.4-1.7,33-2.6,51.8-2.6c68.4,0.1,166.7,14,223.1,23.4c84.8,6.6,128.1,27.8,288.5,43.5c199.8,19.5,156.2,5.5,328.6-0.2c172.4-5.7,287.8-34.5,418.9-34.5c131.1,0,248.1,23.1,361.1,16.3c113-6.8,176.5-37.9,248-45.9c15.4-1.7,33-2.6,51.8-2.6C3718.2,0,3800.9,11.2,3840,32.1z"></path>
          </svg>
        </div>
      </div>
    </section>
    <section class="bg-primary bg-opacity-10 py-5">
      <div style="height: 380px;"></div>
    </section>
    <section class="container" style="margin-top: -480px;" data-bs-theme="dark">
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
            <h2 class="h1 card-title text-center pb-4">Get a free consultation</h2>
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
import {KinesisContainer, KinesisElement} from 'vue-kinesis'
import AOS from "aos";
import 'vue3-carousel/dist/carousel.css'
import {Carousel, Slide, Pagination, Navigation} from 'vue3-carousel'

export default {
  components: {
    KinesisContainer,
    KinesisElement,
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  data() {
    return {
      currentSlideIndex: 1
    }
  },
  mounted() {
    AOS.init();
  },
  methods: {
    slideEnd(e) {
      this.currentSlideIndex = e.currentSlideIndex + 1;
    },
  }
}
</script>

<style lang="scss" scoped>
.bg-primary {
  --ar-bg-opacity: 1;
  background-color: rgba(var(--ar-primary-rgb), var(--ar-bg-opacity)) !important;
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