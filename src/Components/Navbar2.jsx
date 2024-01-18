import React from 'react'
import '../Css/Navbar2.css'

import { FiSearch } from "react-icons/fi";
import { TbGridDots } from "react-icons/tb";
import { MdClose } from "react-icons/md";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { TbLetterP } from "react-icons/tb";
import { Button } from 'react-bootstrap';

function Navbar2() {
  return (
    <>
      <nav class="navbar navbar-expand-lg" id='navbar-2'>
        <a class="navbar-brand" href="#">
        <img id='logo' src='/Images/logo.png'/>
        </a>
        <button class="navbar-toggler border-0 grid-btn pt-2 m-2" type="button" data-bs-toggle="offcanvas" data-bs-target="#navbarOffcanvasLg" aria-controls="navbarOffcanvasLg">
          <TbGridDots/>
        </button>
        <div class="offcanvas offcanvas-end" tabindex="-1" id="navbarOffcanvasLg" aria-labelledby="navbarOffcanvasLgLabel">
        <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasNavbarLabel"><img id='logo' src='/Images/logo.png'/></h5>
        <button className='nav-close-btn' data-bs-dismiss="offcanvas"><MdClose/></button>
      </div>
      <div class="offcanvas-body d-flex align-items-center justify-content-between">
        <div className=''>
          <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle custom-color" href="#">
                      Home
                  </a>
                  <ul id='dropdownMenu' class="dropdown-menu">
                      <li><a class="dropdown-item" href="#">Business</a></li>
                      <li><a class="dropdown-item" href="#">Finance</a></li>
                      <li><a class="dropdown-item" href="#">Consulting</a></li>
                      <li><a class="dropdown-item" href="#">Insurance</a></li>
                      <li><a class="dropdown-item" href="#">Digital Agency</a></li>
                  </ul>
                </li>
                <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle custom-color" href="#">
                    About Us
                </a>
                <ul id='dropdownMenu' class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Business About</a></li>
                    <li><a class="dropdown-item" href="#">Finance About</a></li>
                    <li><a class="dropdown-item" href="#">Consulting About</a></li>
                    <li><a class="dropdown-item" href="#">Insurance About</a></li>
                    <li><a class="dropdown-item" href="#">Digital Agency About</a></li>
                </ul>
                </li>
                <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle custom-color" href="#">
                    Services
                </a>
                <ul id='dropdownMenu' class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Business Services</a></li>
                    <li><a class="dropdown-item" href="#">Finance Services</a></li>
                    <li><a class="dropdown-item" href="#">Consulting Services</a></li>
                    <li><a class="dropdown-item" href="#">Insurance Services</a></li>
                    <li><a class="dropdown-item" href="#">Digital Agency Services</a></li>
                    <li><a class="dropdown-item" href="#">Service Detail One</a></li>
                    <li><a class="dropdown-item" href="#">Service Detail Two</a></li>
                    <li><a class="dropdown-item" href="#">Service Detail Three</a></li>
                    <li><a class="dropdown-item" href="#">Service Detail Four</a></li>
                    <li><a class="dropdown-item" href="#">Service Detail Five</a></li>
                </ul>
                </li>

                <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle custom-color" href="#">
                    Pages
                </a>
                <ul id='dropdownMenu' class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Team One</a></li>
                    <li><a class="dropdown-item" href="#">Team Two</a></li>
                    <li><a class="dropdown-item" href="#">Team Three</a></li>
                    <li><a class="dropdown-item" href="#">Team Four</a></li>
                    <li><a class="dropdown-item" href="#">Team Details</a></li>
                    <li><a class="dropdown-item" href="#">Project Details</a></li>
                    <li><a class="dropdown-item" href="#">404 Error Page</a></li>
                </ul>
                </li>
                <li class="nav-item">
                <a class="nav-link custom-color" href="#" tabindex="-1" >Blog</a>
                </li>
                <li class="nav-item">
                <a class="nav-link custom-color" href="#" tabindex="-1" >Contact</a>
                </li>
          </ul>
        </div>
        <div className='navbar-icons' id='hiding_with_offcanva'>
              <ul className='list-group list-group-horizontal d-flex align-items-center'>
                <li className='list-group m-3'>
                  <button class="btn srch-icon" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop">
                    <FiSearch/>
                  </button>
                </li>
                <li className='list-group m-3'><Button className='border-0 grid-btn gridBtn' data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><TbGridDots/></Button></li>
                <li className='list-group m-3'><Button className='border-0 text-btn'>LET'S TALK</Button></li>
              </ul>
        </div>
        <div className='offcanva-contact-detail'>
              <p>+123 9898 500</p>
              <p>info@apexa.com</p>
              <div className='d-flex'>
                <div className='contact-icons'><FaFacebookF/></div>
                <div className='contact-icons'><FaTwitter/></div>
                <div className='contact-icons'><FaInstagram/></div>
                <div className='contact-icons'><FaLinkedinIn/></div>
                <div className='contact-icons'><TbLetterP/></div>
              </div>
        </div>

      </div>
      </div>
      </nav>

      
{/* -------------------- search-canva------------------- */}
      <div class="offcanvas offcanvas-top" tabindex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
        <div class="offcanvas-header">
          <h5 id="offcanvasTopLabel"></h5>
          <button className='nav-close-btn' data-bs-dismiss="offcanvas"><MdClose/></button>
        </div>
        <div class="offcanvas-body m-auto" id='canva_search_div'>
          <div className='d-flex align-items-start'>
            <input type='text' placeholder='Type keywords here' className='p-2 '/>
            <button className='btn'><FiSearch/></button>
          </div>
        </div>
      </div>


  {/* -----------------normal-canva-------------------------------- */}
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
      <div class="offcanvas-header ">
        <a id="offcanvasRightLabel" className='mt-5'>
          <img id='logo' src='/Images/logo.png'/>
        </a>
        <button className='nav-close-btn m-0' data-bs-dismiss="offcanvas"><MdClose/></button>
      </div>
      <hr id='canva_hr'></hr>
      <div class="offcanvas-body m-2 mt-0">
        <div className='canva_contact_div m-2'>
          <h5>Office Address</h5>
          <p>123/A, Miranda City Likaoli</p>
          <p>Prikano, Dope</p>
        </div>
        <div className='canva_contact_div m-2 mt-4'>
          <h5>Phone Number</h5>
          <p>+0989 7876 9865 9</p>
          <p>+(090) 8765 86543 85</p>
        </div>
        <div className='canva_contact_div m-2 mt-4'>
          <h5>Email Address</h5>
          <p>info@example.com</p>
          <p>example.mail@hum.com</p>
        </div>
        <div className='canva_contact_icons mt-3'>
          <span><FaFacebookF/></span>
          <span><FaTwitter/></span>
          <span><FaLinkedinIn/></span>
          <span><FaInstagram/></span>
        </div>
      </div>
    </div>
    </>
  )
}

export default Navbar2
