<template>
  <div>
    <section class="bg-about position-relative py-5">
      <div class="container position-relative z-2 py-5 mb-4 mb-sm-5">
        <div class="row pb-5 mb-2 mb-sm-0 mb-lg-3">
          <div class="col-lg-10 col-xl-9">
            <nav aria-label="breadcrumb">
              <ol class="pt-lg-3 pb-lg-4 pb-2 breadcrumb">
                <li class="breadcrumb-item">
                  <router-link to="/">Home</router-link>
                </li>
                <li class="breadcrumb-item active" aria-current="page">About us</li>
              </ol>
            </nav>
            <h1 class="display-2 pb-2 pb-sm-3">We believe in the success of every business</h1>
            <ul class="list-unstyled d-flex flex-wrap mb-0">
              <li class="d-flex text-body py-1 me-4">
                <i class="far fa-check text-primary lead me-2"></i>
                Forecasting and recommendations
              </li>
              <li class="d-flex text-body py-1 me-4">
                <i class="far fa-check text-primary lead me-2"></i>
                Identification of patterns, analysis
              </li>
              <li class="d-flex text-body py-1">
                <i class="far fa-check text-primary lead me-2"></i>
                Segmentation by various methods
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <section class="container position-relative z-3" style="margin-top: -135px;">
      <div class="rounded-5 overflow-hidden" style="height: 667px;">
        <div class="jarallax ratio ratio-16x9">
          <KinesisContainer event="scroll"
                            style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; z-index: -100; clip-path: polygon(0px 0px, 100% 0px, 100% 100%, 0px 100%);"
                            class="jarallax-container">
            <KinesisElement class="jarallax-img rounded-5" :strength="280" type="translate" duration="1000"
                            style="object-fit: cover; object-position: 50% 50%; max-width: none; position: absolute; top: 0; left: 0; width: 1296px; height: 900px; overflow: hidden; pointer-events: none; transform-style: preserve-3d; backface-visibility: hidden; margin-top: -46.5px">
            </KinesisElement>
          </KinesisContainer>
        </div>
      </div>
      <div class="row pt-5 mt-n2 mt-sm-0 mt-md-2 mt-lg-4 mt-xl-5">
        <div class="col-md-6 col-lg-5">
          <div class="fs-sm text-uppercase mb-3">What we do</div>
          <h2 class="display-6">We are a team who create marketing strategies</h2>
        </div>
        <div class="col-md-6 col-xl-5 offset-lg-1 offset-xl-2 pt-1 pt-sm-2 pt-md-5">
          <p class="fs-xl">
            Morbi et massa fames ac scelerisque sit commodo dignissim
            <strong>
              faucibus quisque proin
            </strong>
            lectus laoreet sem adipiscing sollicitudin erat massa tellus lorem enim aenean phasellus in hendrerit
            interdum lorem proin pretium dictum urna suspendisse quis risus et.
          </p>
          <p class="fs-xl">
            Sit congue tellus urna phasellus sagittis interdum sed laoreet eget curabitur.
            <strong>
              Vel magna sit aliquet viverra morbi massa mattis urna,
            </strong>
            feugiat egestas tincidunt ipsum diam quam massa amet odio nisi duis dolor.
          </p>
          <p class="fs-xl mb-0">
            Ac facilisis eros sem faucibus aliquet venenatis amet fermentum nisi. Mauris consectetur sem malesuada.
            viverra a non sapien odio id risus volutpat at.
          </p>
        </div>
      </div>
    </section>
    <section class="pt-5 mt-md-2 mt-xl-4 mt-xxl-5">
      <div class="container pt-2 pt-sm-4 pt-lg-5 mt-xxl-2">
        <div class="fs-sm text-uppercase mb-3">Our Mission</div>
        <h2 class="display-6 pb-3 mb-lg-4">Professional approach</h2>
        <div>
          <div class="row">
            <div class="col-md-4 h-auto">
              <div class="card border-0 bg-secondary rounded-5 h-100">
                <div class="card-body">
                  <svg class="d-block mt-1 mt-sm-0 mb-4" width="40" height="40" viewBox="0 0 40 40"
                       xmlns="http://www.w3.org/2000/svg">
                    <g class="text-info">
                      <path
                          d="M20.0004 36.0226L10.982 21.3535C9.42594 23.3156 8.49609 25.7968 8.49609 28.4955C8.49609 34.8492 13.6467 39.9998 20.0004 39.9998C26.3541 39.9998 31.5047 34.8492 31.5047 28.4955C31.5047 25.7969 30.5749 23.3156 29.0188 21.3535L20.0004 36.0226Z"
                          fill="currentColor"></path>
                    </g>
                    <g class="text-primary">
                      <path
                          d="M39.3962 0H0.605469L20.0009 31.5477L39.3962 0ZM25.7601 7.62359L20.0009 16.9914L14.2416 7.62359H25.7601Z"
                          fill="currentColor"></path>
                    </g>
                  </svg>
                  <h3 class="h4">Individual approach</h3>
                  <p class="mb-0">
                    Find aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur neque congue aliqua dolor.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-4 h-auto">
              <div class="card border-0 bg-secondary rounded-5 h-100">
                <div class="card-body">
                  <svg class="d-block mt-1 mt-sm-0 mb-4" width="40" height="40" viewBox="0 0 40 40"
                       xmlns="http://www.w3.org/2000/svg">
                    <g class="text-info">
                      <path
                          d="M26.307 23.1116C26.307 28.3136 22.09 32.5307 16.888 32.5307C11.6859 32.5307 7.46891 28.3136 7.46891 23.1116C7.46891 17.9096 11.6859 13.6925 16.888 13.6925C17.1467 13.6925 17.4028 13.7038 17.6562 13.7243V6.24121C17.4016 6.22973 17.1455 6.22363 16.888 6.22363C7.56102 6.22363 0 13.7846 0 23.1116C0 32.4386 7.56102 39.9996 16.888 39.9996C26.2149 39.9996 33.7759 32.4386 33.7759 23.1116C33.7759 22.8541 33.7698 22.598 33.7584 22.3433H26.2753C26.2958 22.5968 26.307 22.8529 26.307 23.1116Z"
                          fill="currentColor"></path>
                    </g>
                    <g class="text-primary">
                      <path d="M40 20C40 8.9543 31.0457 0 20 0V20H40Z" fill="currentColor"></path>
                    </g>
                  </svg>
                  <h3 class="h4">Integrated analytics</h3>
                  <p class="mb-0">
                    Find aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur neque congue aliqua dolor.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-4 h-auto">
              <div class="card border-0 bg-secondary rounded-5 h-100">
                <div class="card-body">
                  <svg class="d-block mt-1 mt-sm-0 mb-4" width="40" height="40" viewBox="0 0 40 40"
                       xmlns="http://www.w3.org/2000/svg">
                    <g class="text-primary">
                      <path
                          d="M25.2791 12.7502C28.1954 9.83389 28.1954 5.10556 25.2791 2.18921C22.3627 -0.727136 17.6344 -0.727137 14.718 2.18921C11.8017 5.10556 11.8017 9.83389 14.718 12.7502C17.6344 15.6666 22.3627 15.6666 25.2791 12.7502Z"
                          fill="currentColor"></path>
                    </g>
                    <g class="text-info">
                      <path
                          d="M14.6859 29.3056C15.6559 27.0123 16.9202 24.8838 18.4577 22.9467C13.8666 17.9802 7.29664 14.8701 0 14.8701V40.0004H12.5259C12.5259 36.2925 13.2527 32.6942 14.6859 29.3056Z"
                          fill="currentColor"></path>
                    </g>
                    <g class="text-primary">
                      <path d="M40.0014 40.0004V14.8701C26.1223 14.8701 14.8711 26.1214 14.8711 40.0004H40.0014Z"
                            fill="currentColor"></path>
                    </g>
                  </svg>
                  <h3 class="h4">Step by step work</h3>
                  <p class="mb-0">
                    Find aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur neque congue aliqua dolor.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="container pt-5 mt-1 mt-sm-2 mt-xl-4 mt-xxl-5">
      <div class="row align-items-center pt-2 pt-sm-3 pt-md-4 pt-lg-5 mt-xl-2 mt-xxl-3">
        <div class="col-md-6 col-xl-5 pb-3 pb-md-0 mb-4 mb-md-0">
          <div
              class="ratio ratio-1x1 d-flex align-items-center step-background position-relative rounded-circle overflow-hidden bg-size-cover mx-auto"
              style="max-width: 530px;">
            <div class="bg-black position-absolute top-0 start-0 w-100 h-100 opacity-50"></div>
            <div class="position-relative z-2 p-4">
              <div class="text-center mx-auto" style="max-width: 275px;">
                <span class="d-block fs-sm text-uppercase mb-3 text-white">How we work</span>
                <h2 class="display-6 mb-0 text-white">The key to success</h2>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-xl-5 offset-xl-1">
          <div class="ps-md-4 ps-xl-0">
            <div class="steps steps-hoverable">
              <div class="step py-3 py-xl-4">
                <div class="step-number">
                  <div class="step-number-inner">01</div>
                </div>
                <div class="step-body">
                  <h3 class="h5 pb-1 mb-2">Formulation of the problem</h3>
                  <p class="mb-0">
                    Find aute irure dolor in reprehenderi voluptate velit esse cillum dolore eu fugiat nulla pariatur am luctus.
                  </p>
                </div>
              </div>
              <div class="step py-3 py-xl-4">
                <div class="step-number">
                  <div class="step-number-inner">02</div>
                </div>
                <div class="step-body">
                  <h3 class="h5 pb-1 mb-2">Assessment of the current state</h3>
                  <p class="mb-0">
                    Find aute irure dolor in reprehenderi voluptate velit esse cillum dolore eu fugiat nulla pariatur am luctus.
                  </p>
                </div>
              </div>
              <div class="step py-3 py-xl-4">
                <div class="step-number">
                  <div class="step-number-inner">03</div>
                </div>
                <div class="step-body">
                  <h3 class="h5 pb-1 mb-2">Business plan creation</h3>
                  <p class="mb-0">
                    Find aute irure dolor in reprehenderi voluptate velit esse cillum dolore eu fugiat nulla pariatur am luctus.
                  </p>
                </div>
              </div>
              <div class="step py-3 py-xl-4">
                <div class="step-number">
                  <div class="step-number-inner">04</div>
                </div>
                <div class="step-body">
                  <h3 class="h5 pb-1 mb-2">Strategy implementation</h3>
                  <p class="mb-0">
                    Find aute irure dolor in reprehenderi voluptate velit esse cillum dolore eu fugiat nulla pariatur am luctus.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="pt-5 mt-2 mb-5 mt-xl-4 mt-xxl-5">
      <div class="container pt-3 pt-sm-4 pt-lg-5 mt-xl-2 mt-xxl-3">
        <div class="fs-sm text-uppercase mb-3">Our team</div>
        <h2 class="display-6 pb-3 mb-lg-4">Team of professionals</h2>
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
          <div class="col">
            <div class="card card-hover border-0 rounded-5 overflow-hidden">
              <img :src="require(`@/assets/images/users/03.jpg`)" alt="Image">
              <div class="position-absolute top-0 start-0 w-100 h-100 opacity-0">
                <div class="bg-dark position-absolute top-0 start-0 w-100 h-100 opacity-50"></div>
                <div class="card-body d-flex flex-column justify-content-end h-100 position-relative z-2 text-center"
                     data-bs-theme="dark">
                  <h3 class="h5 mb-1">Jane Cooper</h3>
                  <p class="text-body mb-3">Head of PR department</p>
                  <div class="d-flex justify-content-center">
                    <a class="btn btn-icon btn-sm btn-light btn-instagram rounded-circle mx-2" href="#"
                       aria-label="Instagram">
                      <i class="fab fa-instagram"></i>
                    </a>
                    <a class="btn btn-icon btn-sm btn-light btn-facebook rounded-circle mx-2" href="#"
                       aria-label="Facebook">
                      <i class="fab fa-facebook"></i>
                    </a>
                    <a class="btn btn-icon btn-sm btn-light btn-linkedin rounded-circle mx-2" href="#"
                       aria-label="LinkedIn">
                      <i class="fab fa-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card card-hover border-0 rounded-5 overflow-hidden">
              <img :src="require(`@/assets/images/users/01.jpg`)" alt="Image">
              <div class="position-absolute top-0 start-0 w-100 h-100 opacity-0">
                <div class="bg-dark position-absolute top-0 start-0 w-100 h-100 opacity-50"></div>
                <div class="card-body d-flex flex-column justify-content-end h-100 position-relative z-2 text-center"
                     data-bs-theme="dark">
                  <h3 class="h5 mb-1">Guy Hawkins</h3>
                  <p class="text-body mb-3">Head of marketing</p>
                  <div class="d-flex justify-content-center">
                    <a class="btn btn-icon btn-sm btn-light btn-facebook rounded-circle mx-2" href="#"
                       aria-label="Facebook">
                      <i class="fab fa-facebook"></i>
                    </a>
                    <a class="btn btn-icon btn-sm btn-light btn-x rounded-circle mx-2" href="#" aria-label="X">
                      <i class="fab fa-twitter"></i>
                    </a>
                    <a class="btn btn-icon btn-sm btn-light btn-linkedin rounded-circle mx-2" href="#"
                       aria-label="LinkedIn">
                      <i class="fab fa-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card card-hover border-0 rounded-5 overflow-hidden">
              <img :src="require(`@/assets/images/users/02.jpg`)" alt="Image">
              <div class="position-absolute top-0 start-0 w-100 h-100 opacity-0">
                <div class="bg-dark position-absolute top-0 start-0 w-100 h-100 opacity-50"></div>
                <div class="card-body d-flex flex-column justify-content-end h-100 position-relative z-2 text-center"
                     data-bs-theme="dark">
                  <h3 class="h5 mb-1">Martha Winter</h3>
                  <p class="text-body mb-3">Data analyst</p>
                  <div class="d-flex justify-content-center">
                    <a class="btn btn-icon btn-sm btn-light btn-instagram rounded-circle mx-2" href="#"
                       aria-label="Instagram">
                      <i class="fab fa-instagram"></i>
                    </a>
                    <a class="btn btn-icon btn-sm btn-light btn-facebook rounded-circle mx-2" href="#"
                       aria-label="Facebook">
                      <i class="fab fa-facebook"></i>
                    </a>
                    <a class="btn btn-icon btn-sm btn-light btn-linkedin rounded-circle mx-2" href="#"
                       aria-label="LinkedIn">
                      <i class="fab fa-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card card-hover border-0 rounded-5 overflow-hidden">
              <img :src="require(`@/assets/images/users/05.jpg`)" alt="Image">
              <div class="position-absolute top-0 start-0 w-100 h-100 opacity-0">
                <div class="bg-dark position-absolute top-0 start-0 w-100 h-100 opacity-50"></div>
                <div class="card-body d-flex flex-column justify-content-end h-100 position-relative z-2 text-center"
                     data-bs-theme="dark">
                  <h3 class="h5 mb-1">Robert Fox</h3>
                  <p class="text-body mb-3">CTO</p>
                  <div class="d-flex justify-content-center">
                    <a class="btn btn-icon btn-sm btn-light btn-facebook rounded-circle mx-2" href="#"
                       aria-label="Facebook">
                      <i class="fab fa-facebook"></i>
                    </a>
                    <a class="btn btn-icon btn-sm btn-light btn-x rounded-circle mx-2" href="#" aria-label="X">
                      <i class="fab fa-twitter"></i>
                    </a>
                    <a class="btn btn-icon btn-sm btn-light btn-stack-overflow rounded-circle mx-2" href="#"
                       aria-label="Stack Overflow">
                      <i class="fab fa-stack-overflow"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card card-hover border-0 rounded-5 overflow-hidden">
              <img :src="require(`@/assets/images/users/06.jpg`)" alt="Image">
              <div class="position-absolute top-0 start-0 w-100 h-100 opacity-0">
                <div class="bg-dark position-absolute top-0 start-0 w-100 h-100 opacity-50"></div>
                <div class="card-body d-flex flex-column justify-content-end h-100 position-relative z-2 text-center"
                     data-bs-theme="dark">
                  <h3 class="h5 mb-1">Michelle Yang</h3>
                  <p class="text-body mb-3">CEO, Founder</p>
                  <div class="d-flex justify-content-center">
                    <a class="btn btn-icon btn-sm btn-light btn-instagram rounded-circle mx-2" href="#"
                       aria-label="Instagram">
                      <i class="fab fa-instagram"></i>
                    </a>
                    <a class="btn btn-icon btn-sm btn-light btn-facebook rounded-circle mx-2" href="#"
                       aria-label="Facebook">
                      <i class="fab fa-facebook"></i>
                    </a>
                    <a class="btn btn-icon btn-sm btn-light btn-linkedin rounded-circle mx-2" href="#"
                       aria-label="LinkedIn">
                      <i class="fab fa-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card card-hover border-0 rounded-5 overflow-hidden">
              <img :src="require(`@/assets/images/users/04.jpg`)" alt="Image">
              <div class="position-absolute top-0 start-0 w-100 h-100 opacity-0">
                <div class="bg-dark position-absolute top-0 start-0 w-100 h-100 opacity-50"></div>
                <div class="card-body d-flex flex-column justify-content-end h-100 position-relative z-2 text-center"
                     data-bs-theme="dark">
                  <h3 class="h5 mb-1">Albert Flores</h3>
                  <p class="text-body mb-3">Art director</p>
                  <div class="d-flex justify-content-center">
                    <a class="btn btn-icon btn-sm btn-light btn-facebook rounded-circle mx-2" href="#"
                       aria-label="Facebook">
                      <i class="fab fa-facebook"></i>
                    </a>
                    <a class="btn btn-icon btn-sm btn-light btn-behance rounded-circle mx-2" href="#"
                       aria-label="Behance">
                      <i class="fab fa-behance"></i>
                    </a>
                    <a class="btn btn-icon btn-sm btn-light btn-dribbble rounded-circle mx-2" href="#"
                       aria-label="Dribbble">
                      <i class="fab fa-dribbble"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="bg-secondary py-4 mt-5">
      <div class="container py-2 py-sm-4 py-lg-5 my-md-2 my-lg-3 my-xl-4 my-xxl-5">
        <div class="fs-sm text-uppercase mb-3 mt-xl-2 mt-xxl-3">Work with us</div>
        <h2 class="h1 pb-3 mb-lg-4">Our services</h2>
        <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4 pb-xl-2 pb-xxl-3">
          <div class="col">
            <div class="card h-100 border-0 rounded-5">
              <div class="card-body pb-3">
                <svg class="d-block mt-1 mt-sm-0 mb-4" width="40" height="40" viewBox="0 0 40 40"
                     xmlns="http://www.w3.org/2000/svg">
                  <g class="text-info">
                    <path
                        d="M26.307 23.1116C26.307 28.3136 22.09 32.5307 16.888 32.5307C11.6859 32.5307 7.46891 28.3136 7.46891 23.1116C7.46891 17.9096 11.6859 13.6925 16.888 13.6925C17.1467 13.6925 17.4028 13.7038 17.6562 13.7243V6.24121C17.4016 6.22973 17.1455 6.22363 16.888 6.22363C7.56102 6.22363 0 13.7846 0 23.1116C0 32.4386 7.56102 39.9996 16.888 39.9996C26.2149 39.9996 33.7759 32.4386 33.7759 23.1116C33.7759 22.8541 33.7698 22.598 33.7584 22.3433H26.2753C26.2958 22.5968 26.307 22.8529 26.307 23.1116Z"
                        fill="currentColor"></path>
                  </g>
                  <g class="text-primary">
                    <path d="M40 20C40 8.9543 31.0457 0 20 0V20H40Z" fill="currentColor"></path>
                  </g>
                </svg>
                <h3 class="h4">Market shares analysis</h3>
                <p class="mb-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget molestie massa. Donec egestas ex et velit egestas dignissim. Sed fringilla velit turpis.
                </p>
              </div>
              <div class="card-footer border-0 pt-3 mb-3">
                <a class="btn btn-icon btn-lg btn-outline-primary rounded-circle stretched-link" href="#"
                   aria-label="Learn more">
                  <i class="far fa-arrow-left"></i>
                </a>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100 border-0 rounded-5">
              <div class="card-body pb-3">
                <svg class="d-block mt-1 mt-sm-0 mb-4" width="40" height="40" viewBox="0 0 40 40"
                     xmlns="http://www.w3.org/2000/svg">
                  <g class="text-info">
                    <path d="M25,25h15v15H25V25z" fill="currentColor"></path>
                  </g>
                  <g class="text-primary">
                    <path
                        d="M10,20c0-5.5,4.5-10,10-10s10,4.5,10,10h10C40,9,31,0,20,0S0,9,0,20s9,20,20,20V30C14.5,30,10,25.5,10,20z"
                        fill="currentColor"></path>
                  </g>
                </svg>
                <h3 class="h4">Marketing and branding</h3>
                <p class="mb-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget molestie massa. Donec egestas ex et velit egestas dignissim. Sed fringilla velit turpis.
                </p>
              </div>
              <div class="card-footer border-0 pt-3 mb-3">
                <a class="btn btn-icon btn-lg btn-outline-primary rounded-circle stretched-link" href="#"
                   aria-label="Learn more">
                  <i class="far fa-arrow-left"></i>
                </a>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100 border-0 rounded-5">
              <div class="card-body pb-3">
                <svg class="d-block mt-1 mt-sm-0 mb-4" width="40" height="40" viewBox="0 0 40 40"
                     xmlns="http://www.w3.org/2000/svg">
                  <g class="text-primary">
                    <path
                        d="M25.2791 12.7502C28.1954 9.83389 28.1954 5.10556 25.2791 2.18921C22.3627 -0.727136 17.6344 -0.727137 14.718 2.18921C11.8017 5.10556 11.8017 9.83389 14.718 12.7502C17.6344 15.6666 22.3627 15.6666 25.2791 12.7502Z"
                        fill="currentColor"></path>
                  </g>
                  <g class="text-info">
                    <path
                        d="M14.6859 29.3056C15.6559 27.0123 16.9202 24.8838 18.4577 22.9467C13.8666 17.9802 7.29664 14.8701 0 14.8701V40.0004H12.5259C12.5259 36.2925 13.2527 32.6942 14.6859 29.3056Z"
                        fill="currentColor"></path>
                  </g>
                  <g class="text-primary">
                    <path d="M40.0014 40.0004V14.8701C26.1223 14.8701 14.8711 26.1214 14.8711 40.0004H40.0014Z"
                          fill="currentColor"></path>
                  </g>
                </svg>
                <h3 class="h4">Strategy development</h3>
                <p class="mb-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget molestie massa. Donec egestas ex et velit egestas dignissim. Sed fringilla velit turpis.
                </p>
              </div>
              <div class="card-footer border-0 pt-3 mb-3">
                <a class="btn btn-icon btn-lg btn-outline-primary rounded-circle stretched-link" href="#"
                   aria-label="Learn more">
                  <i class="far fa-arrow-left"></i>
                </a>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100 border-0 rounded-5">
              <div class="card-body pb-3">
                <svg class="d-block mt-1 mt-sm-0 mb-4" width="40" height="40" viewBox="0 0 40 40"
                     xmlns="http://www.w3.org/2000/svg">
                  <g class="text-info">
                    <path d="M34.9811 16.2655C34.3635 26.3194 26.3194 34.3634 16.2656 34.981V40H40V16.2655H34.9811Z"
                          fill="currentColor"></path>
                  </g>
                  <g class="text-info">
                    <path d="M15.0195 30.0413C23.3152 30.0413 30.0403 23.3163 30.0403 15.0205H15.0195V30.0413Z"
                          fill="currentColor"></path>
                  </g>
                  <g class="text-primary">
                    <path
                        d="M29.1953 10.0415C27.141 4.19328 21.571 0 15.0208 0C6.725 0 0 6.725 0 15.0208C0 21.571 4.19328 27.141 10.0415 29.1953V10.0415H29.1953Z"
                        fill="currentColor"></path>
                  </g>
                </svg>
                <h3 class="h4">Email marketing</h3>
                <p class="mb-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget molestie massa. Donec egestas ex et velit egestas dignissim. Sed fringilla velit turpis.
                </p>
              </div>
              <div class="card-footer border-0 pt-3 mb-3">
                <a class="btn btn-icon btn-lg btn-outline-primary rounded-circle stretched-link" href="#"
                   aria-label="Learn more">
                  <i class="far fa-arrow-left"></i>
                </a>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100 border-0 rounded-5">
              <div class="card-body pb-3">
                <svg class="d-block mt-1 mt-sm-0 mb-4" width="40" height="40" viewBox="0 0 40 40"
                     xmlns="http://www.w3.org/2000/svg">
                  <g class="text-primary">
                    <path
                        d="M19.9999 0C11.1313 0 3.61211 5.77313 0.992188 13.7659H39.0077C36.3877 5.77313 28.8686 0 19.9999 0Z"
                        fill="currentColor"></path>
                  </g>
                  <g class="text-info">
                    <path
                        d="M7.29328 16.1094H0.379453C0.131328 17.368 0 18.6684 0 19.9998C0 26.9291 3.52437 33.0348 8.87797 36.6237L18.3427 27.1589L7.29328 16.1094Z"
                        fill="currentColor"></path>
                  </g>
                  <g class="text-primary">
                    <path
                        d="M10.9688 37.848C13.6819 39.2238 16.7505 39.9998 20.0007 39.9998C31.0464 39.9998 40.0007 31.0455 40.0007 19.9998C40.0007 18.6684 39.8694 17.3679 39.6213 16.1094H32.7074L10.9688 37.848Z"
                        fill="currentColor"></path>
                  </g>
                </svg>
                <h3 class="h4">Working on communication</h3>
                <p class="mb-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget molestie massa. Donec egestas ex et velit egestas dignissim. Sed fringilla velit turpis.
                </p>
              </div>
              <div class="card-footer border-0 pt-3 mb-3">
                <a class="btn btn-icon btn-lg btn-outline-primary rounded-circle stretched-link" href="#"
                   aria-label="Learn more">
                  <i class="far fa-arrow-left"></i>
                </a>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100 border-0 rounded-5">
              <div class="card-body pb-3">
                <svg class="d-block mt-1 mt-sm-0 mb-4" width="40" height="40" viewBox="0 0 40 40"
                     xmlns="http://www.w3.org/2000/svg">
                  <g class="text-info">
                    <path
                        d="M20.0004 36.0226L10.982 21.3535C9.42594 23.3156 8.49609 25.7968 8.49609 28.4955C8.49609 34.8492 13.6467 39.9998 20.0004 39.9998C26.3541 39.9998 31.5047 34.8492 31.5047 28.4955C31.5047 25.7969 30.5749 23.3156 29.0188 21.3535L20.0004 36.0226Z"
                        fill="currentColor"></path>
                  </g>
                  <g class="text-primary">
                    <path
                        d="M39.3962 0H0.605469L20.0009 31.5477L39.3962 0ZM25.7601 7.62359L20.0009 16.9914L14.2416 7.62359H25.7601Z"
                        fill="currentColor"></path>
                  </g>
                </svg>
                <h3 class="h4">Business copywriting</h3>
                <p class="mb-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget molestie massa. Donec egestas ex et velit egestas dignissim. Sed fringilla velit turpis.
                </p>
              </div>
              <div class="card-footer border-0 pt-3 mb-3">
                <a class="btn btn-icon btn-lg btn-outline-primary rounded-circle stretched-link" href="#"
                   aria-label="Learn more">
                  <i class="far fa-arrow-left"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import {KinesisContainer, KinesisElement} from 'vue-kinesis'

export default {
  components: {
    KinesisContainer,
    KinesisElement,
  },
}
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
  left: calc(var(--ar-steps-number-size) * .5);
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
  left: 0;
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
  padding-left: var(--ar-steps-padding-x);
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