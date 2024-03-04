import React from 'react'
import logo from '../Image/bg remove.jpeg'
import { NavLink } from 'react-router-dom'
import './Footer.css'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      {/* <!-- Footer 2 - Bootstrap Brain Component --> */}
      <footer className="footer">

        {/* <!-- Widgets - Bootstrap Brain Component --> */}
        <section className=" py-4 py-md-5 py-xl-8 border-top border-light">
          <div className="container overflow-hidden">
            <div className="row gy-4 gy-lg-0 justify-content-xl-between">
              <div className="col-12 col-md-4 col-lg-3 col-xl-2">
                <div className="widget mx-auto">
                  <a href="#!">
                    <img src={logo} alt="BootstrapBrain Logo" width="180" height="170" />
                  </a>
                </div>
              </div>
              <div className="col-12 col-md-4 col-lg-3 col-xl-2">
                <div className="widget">
                  <h4 className="widget-title mb-4">RUDRA ENTERPRISE</h4>

                  <p className="mb-1">
                    <a className="link-secondary text-decoration-none" href="tel:+91 9714250480">+91 9714250480</a>
                  </p>
                  <p className="mb-0">
                    <a className="link-secondary text-decoration-none" href="Rudra.enterprise902@gmail.com">Rudra.enterprise902@gmail.com</a>
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-4 col-lg-3 col-xl-2">
                <div className="widget">
                  <h4 className="widget-title mb-4">Company</h4>
                  <ul className="list-unstyled">
                    <li className="mb-2">
                      <NavLink to="/about" style={{
                        color: "#2f234f",
                        textDecoration: "none"
                      }}>About</NavLink>
                    </li>
                    <li className="mb-2">
                      <NavLink to="/contact" style={{
                        color: "#2f234f",
                        textDecoration: "none"
                      }}>Contact</NavLink>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-12 col-lg-3 col-xl-4">
                <div className="widget">
                  <h4 className="widget-title mb-4">Address</h4>
                  <address className="mb-4">Surat, Gujarat, India</address>

                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- Copyright - Bootstrap Brain Component --> */}
        <div className='container p-4 text-center'>
          <section className="box">
            {/* <!-- Facebook --> */}
            <a data-mdb-ripple-init className="btn btn-outline btn-floating m-1" href="#!" role="button"
            ><FaFacebook /></a>

            {/* <!-- Twitter --> */}
            <a data-mdb-ripple-init className="btn btn-outline btn-floating m-1" href="#!" role="button"
            ><FaTwitter /></a>

            {/* <!-- Instagram --> */}
            <a data-mdb-ripple-init className="btn btn-outline btn-floating m-1" href="#!" role="button"
            ><FaInstagram /></a>

            {/* <!-- Linkedin --> */}
            <a data-mdb-ripple-init className="btn btn-outline btn-floating m-1" href="#!" role="button"
            ><FaLinkedin /></a>

            {/* <!-- Github --> */}
            <a data-mdb-ripple-init className="btn btn-outline btn-floating m-1" href="#!" role="button"
            ><FaGithub /></a>
          </section>
        </div>

        <div className="text-center p-5" style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}>
          © 2024 Copyright :
          <a className="text-reset fw-bold" href="https://7seasol.com/">7seasol</a>
        </div>
      </footer>
    </>
  )
}

export default Footer
