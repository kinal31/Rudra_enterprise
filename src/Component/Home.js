import React from 'react';
import Img1 from '../Image/img1.jpg';
import Img2 from '../Image/img2.jpg';
import Img3 from '../Image/img3.jpg';
import Img4 from '../Image/img4.jpg';
import Timg1 from '../Image/testominal logo 1.png'
import Timg3 from '../Image/testominal logo 3.png'
import cimg1 from '../Image/cimg1.jpg'
import cimg2 from '../Image/cimg2.jpg'
import cimg4 from '../Image/cimg4.jpg'
import img5 from '../Image/img5.jpg'
import img6 from '../Image/img6.png'

import './Home.css'

const Home = () => {
  return (
    <>
      <div className='home m-2 my-3'>

        <div id="carouselExample" class="carousel slide">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src={Img1} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={Img2} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={Img3} class="d-block w-100" alt="..." />
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>

        {/* <!-- Hero 4 - Bootstrap Brain Component --> */}
        <section class="sec1 mt-2">
          <div class="container-fluid overflow-hidden">
            <div class="row">
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
              <div class="col-12 col-md-6 p-0">
                <img class="img-fluid w-100 h-100 object-fit-cover" loading="lazy" src={img5} alt="We Offer Modern Web Solutions" />
              </div>
            </div>
          </div>
        </section>

        <section class="sec2  mt-2">
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

        <div className="box my-2">
          <div class="sec3 card text-center">
            <div class="card-body">
              <h5 class="card-title">We listen to our customers</h5>
              <h4 class="card-title my-4">Rudra Enterprise is a Exporter Of ***, *****, ***, And *** From India.​</h4>
              <p class="card-text mx-4">OCEANWORLD EXPORT” is a well-known name in Surat, Gujarat, India, with a rich history of delivering superior quality products in various categories such as spices, onion products, vegetable powder, garlic products, dehydrated vegetables, and fruits. We are engaged in the manufacturing, supplying, and exporting of all the aforementioned products worldwide. Additionally, we hold all the necessary licenses required for different categories.</p>
              <div class="row row-cols-1 row-cols-md-2 g-4">
                <div class="col">
                  <div class="card">
                    <img src={cimg1} class="card-img-top" alt="..." />
                  </div>
                </div>
                <div class="col">
                  <div class="card">
                    <img src={cimg2} class="card-img-top" alt="..." />
                  </div>
                </div>
                <div class="col">
                  <div class="card">
                    <img src={cimg2} class="card-img-top" alt="..." />
                  </div>
                </div>
                <div class="col">
                  <div class="card">
                    <img src={cimg4} class="card-img-top" alt="..." />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Testimonial 3 - Bootstrap Brain Component --> */}
        <section class="sec4  py-5 py-xl-8">
          <div class="container">
            <div class="row justify-content-md-center">
              <div class="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
                <h2 class="fs-6 text-secondary mb-2 text-uppercase text-center">Happy Customers</h2>
                <p class="display-5 mb-4 mb-md-5 text-center">We deliver what we promise. See what clients are expressing about us.</p>
                <hr class="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle" />
              </div>
            </div>
          </div>

          <div class="container overflow-hidden">
            <div class="row gy-4 gy-md-0 gx-xxl-5">
              <div class="col-12 col-md-4">
                <div class="card border-0 border-bottom shadow-sm">
                  <div class="card-body p-4 p-xxl-5">
                    <figure>
                      <img class="img-fluid rounded rounded-circle mb-4 border border-5" loading="lazy" src={Timg1} alt="Luna John" height={"10%"} />
                      <figcaption>
                        <div class="bsb-ratings text-warning mb-3" data-bsb-star="5" data-bsb-star-off="0"></div>
                        <blockquote class="bsb-blockquote-icon mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. A delectus nemo, commodi quisquam consequuntur, cupiditate non vero hic deleniti illum consectetur, sequi eos. Hic veritatis voluptatibus cupiditate beatae magni provident, ullam quo nobis ratione corporis?</blockquote>
                        <h4 class="mb-2">Luna John</h4>
                        <h5 class="fs-6 text-secondary mb-0">UX Designer</h5>
                      </figcaption>
                    </figure>
                  </div>
                </div>
              </div>
              <div class="col-12 col-md-4">
                <div class="card border-0 border-bottom  shadow-sm">
                  <div class="card-body p-4 p-xxl-5">
                    <figure>
                      <img class="img-fluid rounded rounded-circle mb-4 border border-5" loading="lazy" src={Timg3} alt="Mark Smith" />
                      <figcaption>
                        <div class="bsb-ratings text-warning mb-3" data-bsb-star="4" data-bsb-star-off="1"></div>
                        <blockquote class="bsb-blockquote-icon mb-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis corrupti animi inventore, magni ratione maxime beatae, tenetur dolorem, laudantium ab quia? Inventore voluptatibus temporibus ab ipsa, laudantium animi dolore saepe dicta libero repellendus tenetur cumque obcaecati, itaque ratione eum maiores?</blockquote>
                        <h4 class="mb-2">Mark Smith</h4>
                        <h5 class="fs-6 text-secondary mb-0">Marketing Specialist</h5>
                      </figcaption>
                    </figure>
                  </div>
                </div>
              </div>
              <div class="col-12 col-md-4">
                <div class="card border-0 border-bottom shadow-sm">
                  <div class="card-body p-4 p-xxl-5">
                    <figure>
                      <img class="img-fluid rounded rounded-circle mb-4 border border-5" loading="lazy" src={Timg1} alt="Luke Reeves" />
                      <figcaption>
                        <div class="bsb-ratings text-warning mb-3" data-bsb-star="5" data-bsb-star-off="0"></div>
                        <blockquote class="bsb-blockquote-icon mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt sequi odit et adipisci deserunt dolorum quos quaerat quia obcaecati enim laborum rerum itaque accusantium asperiores consequatur sed voluptates culpa, quae veniam exercitationem explicabo harum quo.</blockquote>
                        <h4 class="mb-2">Luke Reeves</h4>
                        <h5 class="fs-6 text-secondary mb-0">Sales Manager</h5>
                      </figcaption>
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
