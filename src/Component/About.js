import React from 'react'
import aimg1 from '../Image/Aimg1.png'
import './About.css'
import Timg1 from '../Image/testominal logo 1.png'
import Timg3 from '../Image/testominal logo 3.png'
import img6 from '../Image/img6.png'
const About = () => {
  return (
    <>
      {/* <!-- Hero 1 - Bootstrap Brain Component --> */}
      <section class="bsb-hero-1 px-3 bsb-overlay bsb-hover-pull m-2" style={{ backgroundImage: `url(${aimg1})`, height: 200, position: 'sticky' }}>
        <div class="container">
          <div class="row justify-content-center">
            <div className='text-center text-white pt-4'>
              <h2>About Us</h2>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Service 4 - Bootstrap Brain Component --> */}
      <section class="sec1 py-5 py-xl-8 m-2">
        <div class="container">
          <div class="row justify-content-md-center">
            <div class="col-12 col-md-12 col-lg-8 col-xl-7">
              <h2 class="display-6 mb-5 text-center">We are giving you perfect solutions with our proficient services.</h2>
              <hr class="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle" />
            </div>
          </div>
        </div>

        <div class="container overflow-hidden">
          <div class="row gy-4 gy-xl-0">
            <div class="col-12 col-sm-6 col-xl-3">
              <div class="card border-0 border-bottom  shadow-sm">
                <div class="card-body text-center p-4 p-xxl-5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="currentColor" class="bi bi-chat-text  mb-4" viewBox="0 0 16 16">
                    <path d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z" />
                    <path d="M4 5.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zM4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8zm0 2.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5z" />
                  </svg>
                  <h4 class="mb-4">Social Engagement</h4>
                  <p class="mb-4 text-secondary">We can help you to create and manage social media campaigns that will engage your audience and promote your brand.</p>
                  <a href="#!" class="fw-bold text-decoration-none link-primary text-dark">
                    Learn More
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-12 col-sm-6 col-xl-3">
              <div class="card border-0 border-bottom shadow-sm">
                <div class="card-body text-center p-4 p-xxl-5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="currentColor" class="bi bi-phone-flip  mb-4" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M11 1H5a1 1 0 0 0-1 1v6a.5.5 0 0 1-1 0V2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v6a.5.5 0 0 1-1 0V2a1 1 0 0 0-1-1Zm1 13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-2a.5.5 0 0 0-1 0v2a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-2a.5.5 0 0 0-1 0v2ZM1.713 7.954a.5.5 0 1 0-.419-.908c-.347.16-.654.348-.882.57C.184 7.842 0 8.139 0 8.5c0 .546.408.94.823 1.201.44.278 1.043.51 1.745.696C3.978 10.773 5.898 11 8 11c.099 0 .197 0 .294-.002l-1.148 1.148a.5.5 0 0 0 .708.708l2-2a.5.5 0 0 0 0-.708l-2-2a.5.5 0 1 0-.708.708l1.145 1.144L8 10c-2.04 0-3.87-.221-5.174-.569-.656-.175-1.151-.374-1.47-.575C1.012 8.639 1 8.506 1 8.5c0-.003 0-.059.112-.17.115-.112.31-.242.6-.376Zm12.993-.908a.5.5 0 0 0-.419.908c.292.134.486.264.6.377.113.11.113.166.113.169 0 .003 0 .065-.13.187-.132.122-.352.26-.677.4-.645.28-1.596.523-2.763.687a.5.5 0 0 0 .14.99c1.212-.17 2.26-.43 3.02-.758.38-.164.713-.357.96-.587.246-.229.45-.537.45-.919 0-.362-.184-.66-.412-.883-.228-.223-.535-.411-.882-.571ZM7.5 2a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1Z" />
                  </svg>
                  <h4 class="mb-4">Mobile Design</h4>
                  <p class="mb-4 text-secondary">We can help you to design and develop mobile apps and websites that are user-friendly and visually appealing.</p>
                  <a href="#!" class="fw-bold text-decoration-none link-primary text-dark">
                    Learn More
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-12 col-sm-6 col-xl-3">
              <div class="card border-0 border-bottom  shadow-sm">
                <div class="card-body text-center p-4 p-xxl-5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="currentColor" class="bi bi-heart-pulse  mb-4" viewBox="0 0 16 16">
                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053.918 3.995.78 5.323 1.508 7H.43c-2.128-5.697 4.165-8.83 7.394-5.857.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17c3.23-2.974 9.522.159 7.394 5.856h-1.078c.728-1.677.59-3.005.108-3.947C13.486.878 10.4.28 8.717 2.01L8 2.748ZM2.212 10h1.315C4.593 11.183 6.05 12.458 8 13.795c1.949-1.337 3.407-2.612 4.473-3.795h1.315c-1.265 1.566-3.14 3.25-5.788 5-2.648-1.75-4.523-3.434-5.788-5Z" />
                    <path d="M10.464 3.314a.5.5 0 0 0-.945.049L7.921 8.956 6.464 5.314a.5.5 0 0 0-.88-.091L3.732 8H.5a.5.5 0 0 0 0 1H4a.5.5 0 0 0 .416-.223l1.473-2.209 1.647 4.118a.5.5 0 0 0 .945-.049l1.598-5.593 1.457 3.642A.5.5 0 0 0 12 9h3.5a.5.5 0 0 0 0-1h-3.162l-1.874-4.686Z" />
                  </svg>
                  <h4 class="mb-4">SEO Services</h4>
                  <p class="mb-4 text-secondary">We can help you to drive organic traffic and outrank competitors with our data-driven SEO strategies and optimize your content.</p>
                  <a href="#!" class="fw-bold text-decoration-none link-primary text-dark">
                    Learn More
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-12 col-sm-6 col-xl-3">
              <div class="card border-0 border-bottom  shadow-sm">
                <div class="card-body text-center p-4 p-xxl-5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="currentColor" class="bi bi-mouse  mb-4" viewBox="0 0 16 16">
                    <path d="M8 3a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 3zm4 8a4 4 0 0 1-8 0V5a4 4 0 1 1 8 0v6zM8 0a5 5 0 0 0-5 5v6a5 5 0 0 0 10 0V5a5 5 0 0 0-5-5z" />
                  </svg>
                  <h4 class="mb-4">24/7 Support</h4>
                  <p class="mb-4 text-secondary">We offer 24/7 support to our clients. This means that you can always get help when you need it, no matter what time it is.</p>
                  <a href="#!" class="fw-bold text-decoration-none link-primary text-dark">
                    Learn More
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="sec2 m-2">
        <div class="container-fluid overflow-hidden">
          <div class="row">
            <div class="col-12 col-md-6 p-0">
              <img class="img-fluid w-100 h-100 object-fit-cover" loading="lazy" src={img6} alt="We Offer Modern Web Solutions" />
            </div>
            <div class="col-12 col-md-6 order-1 order-md-0 align-self-md-end">
              <div class="row py-3 py-sm-5 py-xl-9 mt-md-10 justify-content-sm-center">
                <div class="col-12 col-sm-10">
                  <h3 class=" fw-bolder mb-4 ">We Offer Modern Web Solutions</h3>
                  <div class="row">
                    <div class="col-12 col-xxl-8">
                      <p class="fs-5 mb-5 ">We work in a customized way by devising and handling entirely online projects with long-term partnerships.</p>
                    </div>
                  </div>
                  {/* <div class="d-grid gap-2 d-sm-flex">
                      <button type="button" class="btn btn-warning bsb-btn-2xl rounded-pill">Explore Now</button>
                    </div> */}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* <!-- Team 2 - Bootstrap Brain Component --> */}
      <section class="py-3 py-md-5 py-xl-8 m-2 sec3">
        <div class="container">
          <div class="row justify-content-md-center">
            <div class="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
              <h2 class="fs-6 text-secondary mb-2 text-uppercase text-center">Our Team</h2>
              <p class="display-5 mb-4 mb-md-5 text-center">With Our Team, you can expect personalized attention and engaging designs.</p>
              <hr class="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle" />
            </div>
          </div>
        </div>

        <div class="container overflow-hidden">
          <div class="row gy-4 gy-lg-0">
            <div class="col-12 col-lg-4">
              <div class="card border-0">
                <figure class="card-img-top m-0 overflow-hidden bsb-overlay-hover">
                  <a href="#!">
                    <img class="img-fluid bsb-scale bsb-hover-scale-up" loading="lazy" src={Timg1} alt="Flora Nyra" />
                  </a>
                  <figcaption>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-eye text-white bsb-hover-fadeInLeft" viewBox="0 0 16 16">
                      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                    </svg>
                    <h4 class="h6 text-white bsb-hover-fadeInRight mt-2">Read More</h4>
                  </figcaption>
                </figure>
                <div class="card-body border bg-white p-4">
                  <h2 class="card-title h4 fw-bold mb-3">Flora Nyra</h2>
                  <p class="card-text text-secondary">Define the product vision and strategy and conduct user research to understand the needs of the target market.</p>
                </div>
                <div class="card-footer border border-top-0 bg-white p-4">
                  <ul class="nav mb-0 bsb-nav-sep">
                    <li class="nav-item text-secondary">
                      <a class="nav-link link-secondary p-0 pe-3 d-inline-flex align-items-center" href="#!">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-lightbulb " viewBox="0 0 16 16">
                          <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13a.5.5 0 0 1 0 1 .5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1-.46-.302l-.761-1.77a1.964 1.964 0 0 0-.453-.618A5.984 5.984 0 0 1 2 6zm6-5a5 5 0 0 0-3.479 8.592c.263.254.514.564.676.941L5.83 12h4.342l.632-1.467c.162-.377.413-.687.676-.941A5 5 0 0 0 8 1z" />
                        </svg>
                        <span class="ms-2 fs-6">Product Manager</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-12 col-lg-4">
              <div class="card border-0">
                <figure class="card-img-top m-0 overflow-hidden bsb-overlay-hover">
                  <a href="#!">
                    <img class="img-fluid bsb-scale bsb-hover-scale-up" loading="lazy" src={Timg3} alt="James Levi" />
                  </a>
                  <figcaption>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-eye text-white bsb-hover-fadeInLeft" viewBox="0 0 16 16">
                      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                    </svg>
                    <h4 class="h6 text-white bsb-hover-fadeInRight mt-2">Read More</h4>
                  </figcaption>
                </figure>
                <div class="card-body border bg-white p-4">
                  <h2 class="card-title h4 fw-bold mb-3">James Levi</h2>
                  <p class="card-text text-secondary">Analyze financial statements to assess a company's financial performance and develop financial models for future performance.</p>
                </div>
                <div class="card-footer border border-top-0 bg-white p-4">
                  <ul class="nav mb-0 bsb-nav-sep">
                    <li class="nav-item text-secondary">
                      <a class="nav-link link-secondary p-0 pe-3 d-inline-flex align-items-center" href="#!">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-layers " viewBox="0 0 16 16">
                          <path d="M8.235 1.559a.5.5 0 0 0-.47 0l-7.5 4a.5.5 0 0 0 0 .882L3.188 8 .264 9.559a.5.5 0 0 0 0 .882l7.5 4a.5.5 0 0 0 .47 0l7.5-4a.5.5 0 0 0 0-.882L12.813 8l2.922-1.559a.5.5 0 0 0 0-.882l-7.5-4zm3.515 7.008L14.438 10 8 13.433 1.562 10 4.25 8.567l3.515 1.874a.5.5 0 0 0 .47 0l3.515-1.874zM8 9.433 1.562 6 8 2.567 14.438 6 8 9.433z" />
                        </svg>
                        <span class="ms-2 fs-6">Financial Analyst</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-12 col-lg-4">
              <div class="card border-0">
                <figure class="card-img-top m-0 overflow-hidden bsb-overlay-hover">
                  <a href="#!">
                    <img class="img-fluid bsb-scale bsb-hover-scale-up" loading="lazy" src={Timg1} alt="Taytum Elia" />
                  </a>
                  <figcaption>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-eye text-white bsb-hover-fadeInLeft" viewBox="0 0 16 16">
                      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                    </svg>
                    <h4 class="h6 text-white bsb-hover-fadeInRight mt-2">Read More</h4>
                  </figcaption>
                </figure>
                <div class="card-body border bg-white p-4">
                  <h2 class="card-title h4 fw-bold mb-3">Taytum Elia</h2>
                  <p class="card-text text-secondary">Develop and oversee the visual concept for a product or brand and direct and review the work of other creative professionals.</p>
                </div>
                <div class="card-footer border border-top-0 bg-white p-4">
                  <ul class="nav mb-0 bsb-nav-sep">
                    <li class="nav-item text-secondary">
                      <a class="nav-link link-secondary p-0 pe-3 d-inline-flex align-items-center" href="#!">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-brush " viewBox="0 0 16 16">
                          <path d="M15.825.12a.5.5 0 0 1 .132.584c-1.53 3.43-4.743 8.17-7.095 10.64a6.067 6.067 0 0 1-2.373 1.534c-.018.227-.06.538-.16.868-.201.659-.667 1.479-1.708 1.74a8.118 8.118 0 0 1-3.078.132 3.659 3.659 0 0 1-.562-.135 1.382 1.382 0 0 1-.466-.247.714.714 0 0 1-.204-.288.622.622 0 0 1 .004-.443c.095-.245.316-.38.461-.452.394-.197.625-.453.867-.826.095-.144.184-.297.287-.472l.117-.198c.151-.255.326-.54.546-.848.528-.739 1.201-.925 1.746-.896.126.007.243.025.348.048.062-.172.142-.38.238-.608.261-.619.658-1.419 1.187-2.069 2.176-2.67 6.18-6.206 9.117-8.104a.5.5 0 0 1 .596.04zM4.705 11.912a1.23 1.23 0 0 0-.419-.1c-.246-.013-.573.05-.879.479-.197.275-.355.532-.5.777l-.105.177c-.106.181-.213.362-.32.528a3.39 3.39 0 0 1-.76.861c.69.112 1.736.111 2.657-.12.559-.139.843-.569.993-1.06a3.122 3.122 0 0 0 .126-.75l-.793-.792zm1.44.026c.12-.04.277-.1.458-.183a5.068 5.068 0 0 0 1.535-1.1c1.9-1.996 4.412-5.57 6.052-8.631-2.59 1.927-5.566 4.66-7.302 6.792-.442.543-.795 1.243-1.042 1.826-.121.288-.214.54-.275.72v.001l.575.575zm-4.973 3.04.007-.005a.031.031 0 0 1-.007.004zm3.582-3.043.002.001h-.002z" />
                        </svg>
                        <span class="ms-2 fs-6">Art Director</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
