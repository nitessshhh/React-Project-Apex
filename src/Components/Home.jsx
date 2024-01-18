import React, { useState, useEffect } from 'react'
import '../Css/Home.css'
import Navbar from './Navbar'
import Navbar2 from './Navbar2'

import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaRegSmileBeam,FaStar,FaQuoteRight  , FaGlobeAfrica} from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { TbLetterP } from "react-icons/tb";
import { Button } from 'react-bootstrap';
import { LiaTrophySolid } from "react-icons/lia";
import { TbTargetArrow, TbBulb} from "react-icons/tb";
import { HiOutlinePresentationChartBar } from "react-icons/hi";
import { BiPhoneCall } from "react-icons/bi";
import { LiaFileInvoiceDollarSolid } from "react-icons/lia";
import { CiMail, CiLocationOn  } from "react-icons/ci";
import { PiChartPieSliceDuotone } from "react-icons/pi";
import { MdAccessTime, MdOutlineArrowOutward, MdShare } from "react-icons/md";





function Home() {

  const[activeIndex, setActiveIndex] = useState(0);

 function handleTestiCarousel (index){
    setActiveIndex(index);
  }

  useEffect(() => {
    const circleText = document.querySelector('#circle_text p');
    if (circleText) {
      circleText.innerHTML = circleText.innerText
        .split('')
        .map((char, i) => `<span style="transform:rotate(${i * 8.3}deg)">${char}</span>`)
        .join('');
    }
  }, []); 

  return (
    <>
      <Navbar/>
      <div className='container1'>
        <div className='navbar2'>
          <Navbar2/>
        </div>
        <div className='Business-page d-flex align-items-center justify-content-md-start justify-content-center'>
          <div id='social-medias' className='d-flex align-items-center'>
            
              <div className='social-icons'><FaFacebookF/></div>
              <div className='social-icons'><FaTwitter/></div>
              <div className='social-icons'><FaInstagram/></div>
              <div className='social-icons'><TbLetterP/></div>
              <div className='social-icons'><FaLinkedinIn/></div>
              <div className='social-text'> -- FOLLOW US</div>
          </div>
          <div className='d-flex flex-column align-items-center banner-heding'>
            <div><h6 id='heding1'>WE ARE EXPERT IN THIS FIELD</h6></div>
            <div><h1 id='heding2'>Business Consulting All Solutions</h1></div>
            <div><p id='para'>Agilos Helps You To Convert Your Data Into A Strategic Asset And Get Business Insights Agilos Helps You To Convert Your Data Into Asset And Get Top-Notch Business Insights.</p></div>
            <div><Button className='read-more-btn mt-2'>READ MORE <FaArrowRightLong /></Button></div>
            <img id='banner_shape01' className='right_left_move_img' src='/Images/banner_shape01.png'/>
          </div>
        </div>
      </div>

      {/*-----------------Brands------------------------  */}
      <div className='d-flex flex-wrap align-items-center justify-content-center' id='brands'>
          <a href='#' className='brand-img'><img src='/Images/brand_img01.png'/></a>
          <a href='#' className='brand-img'><img src='/Images/brand_img02.png'/></a>
          <a href='#' className='brand-img'><img src='/Images/brand_img03.png'/></a>
          <a href='#' className='brand-img'><img src='/Images/brand_img04.png'/></a>
          <a href='#' className='brand-img'><img src='/Images/brand_img05.png'/></a>
          <a href='#' className='brand-img'><img src='/Images/brand_img06.png'/></a>
      </div>
      <hr/>
      
      {/* ----------------About section---------------- */}
      <div id='about-section' className='d-flex flex-column flex-lg-row align-items-center justify-content-center'>
        <div id='shape-bg' className='d-flex flex-column align-items-center justify-content-center'>
          <div id='hexagon-shape'> 
          </div>
          <div id='circle-div'>
            <div id='circle_text'>
              <p>25-YEARS OF EXPERIENCE</p>
            </div>
              <div id='trophy-div'>
                <LiaTrophySolid/>
              </div>
          </div>
          
        </div>

        <div id='about-text-container' className='d-flex flex-column w-100 align-items-md-start justify-content-center'>
          <div id='about-heding1' className='m-2'>
            SIMPLY KNOW ABOUT
          </div>
          <div id='about-heding2' className='m-2'>
            We Help Organizations To Make Ultimate Businesses Growth Success.
          </div>
          <div id='two-divs' className='d-flex flex-wrap justify-content-start'>
            <div id='div1' className='d-flex align-items-center justify-content-start mt-3'>
              <div id='two-divs-icon1'>
                <TbTargetArrow/>
              </div>
              <div className='two-divs-text d-flex flex-column justify-content-between'>
                <div className='first'>Business Solutions</div>
                <div className='second'>Semper egetuis tellus urna condi</div>
              </div>
            </div>
            <div id='div2' className='d-flex align-items-center justify-content-around mt-3 mb-3'>
              <div id='two-divs-icon2'>
                <HiOutlinePresentationChartBar/>
              </div>
              <div className='two-divs-text d-flex flex-column justify-content-between'>
                <div className='first'>Quality Services</div>
                <div className='second'>Semper egetuis tellus urna condi</div>
              </div>
            </div>
      
          </div>
          <div id='about-heding3'>
            We successfully cope with tasks of varying complexityprovide longerty term guarantees and regularly master new Practice Area technol ogiesOur portfolio includes dozen
          </div>
          <div id='about_CEO' className='d-flex flex-column flex-sm-row  align-items-start align-items-sm-center justify-content-start justify-content-sm-between mt-2'>
            <div id='author_img' className='m-2'>
              <img src="/Images/author_img.png" alt="" />
            </div>
            <div id='author_sign' className='m-2'>
              <div className='m-2'>
                <img src="/Images/sign.png" alt="" />
                <p id='CEO_name'>Martinaze, CEO</p>
              </div>
            </div>
            <div>
              <Button className='read-more-btn w-auto'>READ MORE <FaArrowRightLong />
              </Button>
            </div>
          </div>
        </div>

      </div>

      {/* -------------Service Section--------------------- */}
      <div id='service-section' className='d-flex flex-column justify-content-center align-items-center'>
        <p id='service-heding1'>WHAT WE OFFER</p>
        <h3 id='service-heding2'>We Offer An Effective Wide Area Business solutions</h3>
        <div id='cards' className='container'>
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 justify-content-center">
            <div className="col service_card">
              <div className="card service-card">
                <img src="/Images/services_img01.jpg" className="card-img-top" alt="..."/>
                <div className='icon-on-img d-flex align-items-center justify-content-center'>
                  <HiOutlinePresentationChartBar/>
                </div>
                <div className="card-body p-4">
                  <h5 className="card-title">Strategic marketing</h5>
                  <p className="card-text">Morem ipsum dolor sittemet consectetur adipiscing.</p>
                  <Button className='service-card-btn'>READ MORE <FaArrowRightLong /></Button>
                </div>
              </div>
            </div>
            <div className="col service_card">
              <div className="card service-card">
                <img src="/Images/services_img02.jpg" className="card-img-top" alt="..."/>
                <div className='icon-on-img d-flex align-items-center justify-content-center'>
                  <LiaFileInvoiceDollarSolid/>
                </div>
                <div className="card-body p-4">
                  <h5 className="card-title">Investment Planning</h5>
                  <p className="card-text">Morem ipsum dolor sittemet consectetur adipiscing.</p>
                  <Button className='service-card-btn'>READ MORE <FaArrowRightLong /></Button>
                </div>
              </div>
            </div>
            <div className="col service_card">
              <div className="card service-card">
                <img src="/Images/services_img03.jpg" className="card-img-top" alt="..."/>
                <div className='icon-on-img d-flex align-items-center justify-content-center'>
                  <PiChartPieSliceDuotone/>
                </div>
                <div className="card-body p-4">
                  <h5 className="card-title">Insights & analytics</h5>
                  <p className="card-text">Morem ipsum dolor sittemet consectetur adipiscing.</p>
                  <Button className='service-card-btn'>READ MORE <FaArrowRightLong /></Button>
                </div>
              </div>
            </div>
            <div className="col service_card">
              <div className="card service-card">
                <img src="/Images/services_img04.jpg" className="card-img-top" alt="..."/>
                <div className='icon-on-img d-flex align-items-center justify-content-center'>
                  <TbBulb />
                </div>
                <div className="card-body p-4">
                  <h5 className="card-title">Business consulting</h5>
                  <p className="card-text">Morem ipsum dolor sittemet consectetur adipiscing.</p>
                  <Button className='service-card-btn'>READ MORE <FaArrowRightLong /></Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id='all-services' className='d-flex align-items-center p-3'>
          <div className='m-3 fs-6'>Empowering Businesses through Strategic Consulting With Us</div>
          <Button className='read-more-btn m-3'>SEE ALL SERVICES <FaArrowRightLong /></Button>
        </div>
      </div>


      {/* --------------------- why we are the best------------------------- */}
        <div className="container-fluid d-flex align-items-center flex-wrap-reverse" id='best-div'>
        <div id='best-div1' className='d-flex flex-column justify-content-between'>
          <p id='best-heding1'>WHY WE ARE THE BEST</p>
          <h1 id='best-heding2'>We Offer Business Insight World Class Consulting</h1>
          <p id='best-heding3'>We successfully cope with tasks of varying complexity provide area longerty guarantees and regularly master new Practice Following gies heur portfolio includes dozen.</p>
          <div className='d-flex align-items-center'>
            <div className='best-div1-icons d-flex align-items-center justify-content-center'><PiChartPieSliceDuotone/></div>
            <div>
              <h2>Business Solutions</h2>
              <p>Semper egetuis kelly for tellus urna area condition.</p>
            </div>
          </div>

          <div className='d-flex align-items-center'>
            <div className='best-div1-icons d-flex align-items-center justify-content-center'><LiaFileInvoiceDollarSolid/></div>
            <div>
              <h2>Business Solutions</h2>
              <p>Semper egetuis kelly for tellus urna area condition.</p>
            </div>
          </div>
        </div>

        <div id='best-div-bg1'>
          <img className='' src='/Images/choose_shape01.png'/>
        </div>

        <div id='best-div2'>
           <div id='best-div2-div1'><img src='/Images/choose_img01.jpg' /></div>
           <div id='best-div2-div2'><img className='right_left_move_img' src='/Images/choose_img02.jpg'/></div>
           <div id='best-div2-div3'><img className='updown_img' src='/Images/choose_img_shape.png'/></div>
        </div>

        <div id='best-div-bg2'>
          <img src='/Images/choose_shape02.png'/>
        </div>
      </div> 

      {/* -----------------counters------------------------ */}
      <div className='cointainer-fluid' id='counters'>
          <div id='counter_ball'>
            <img className='moveDigonally' src='/Images/counter_shape02.png'/>
          </div>
          <div className='d-flex flex-wrap justify-content-center'>
            <div className='counter_coloum'>
              <div className='d-flex align-items-center'>
                <div className='counter_icons d-flex align-items-center justify-content-center'><LiaTrophySolid/></div>
                <div>
                  <h1 className='counter_heding1'>45+</h1>
                  <h3 className='counter_heding2'>Successfully Completed Projects</h3>
                </div>
              </div>
            </div>
            <div className='counter_coloum'>
              <div className='d-flex align-items-center'>
                <div className='counter_icons d-flex align-items-center justify-content-center'><FaRegSmileBeam /></div>
                <div>
                  <h1 className='counter_heding1'>92k</h1>
                  <h3 className='counter_heding2'>Satisfied 100% Our Clients</h3>
                </div>
              </div>
            </div>
            <div className='counter_coloum'>
              <div className='d-flex align-items-center'>
                <div className='counter_icons d-flex align-items-center justify-content-center'><FaGlobeAfrica/></div>
                <div>
                  <h1 className='counter_heding1'>19+</h1>
                  <h3 className='counter_heding2'>All Over The World We Are Available</h3>
                </div>
              </div>
            </div>
            <div className='counter_coloum'>
              <div className='d-flex align-items-center'>
                <div className='counter_icons d-flex align-items-center justify-content-center'><MdAccessTime/></div>
                <div>
                  <h1 className='counter_heding1'>25+</h1>
                  <h3 className='counter_heding2'>Years of Experiences To Run This Company</h3>
                </div>
              </div>
            </div>
          </div>
      </div>


      {/* ------------------projects------------------------------ */}
      <div id='projects' className='d-flex flex-column justify-content-center align-items-center p-4'>
        <h6 id='project_heding1'>OUR PROJECTS</h6>
        <h1 id='project_heding2'>Let's Discover All Our Clients Recent Project</h1>
        <div id='project_cards' className='container-fluid'>
          <div className='row row-cols-1 row-cols-md-2 g-4'>
            <div className="col card project_card p-0">
              <img src="/Images/project01.jpg" className="card-img-top" alt="..."/>
              <div className="card-body d-flex align-items-center justify-content-between">
                <div>
                  <a href='#' className="card-title text-decoration-none m-0 project_card_title">Business Consulting</a>
                  <p className="card-text project_card_text">Business Strategy</p>
                </div>
                <a href="#" className="btn project_card_button d-flex align-items-center justify-content-between"><MdOutlineArrowOutward/></a>
              </div>
            </div>
            <div className="col card project_card p-0">
              <img src="/Images/project02.jpg" className="card-img-top" alt="..."/>
              <div className="card-body d-flex align-items-center justify-content-between">
                <div>
                  <a href='#' className="card-title text-decoration-none m-0 project_card_title">Digital Agency</a>
                  <p className="card-text project_card_text">Business Services</p>
                </div>
                <a href="#" className="btn project_card_button d-flex align-items-center justify-content-between"><MdOutlineArrowOutward/></a>
              </div>
            </div>
            <div className="col card project_card p-0">
              <img src="/Images/project03.jpg" className="card-img-top" alt="..."/>
              <div className="card-body d-flex align-items-center justify-content-between">
                <div>
                  <a href='#' className="card-title text-decoration-none m-0 project_card_title">Inventory Management</a>
                  <p className="card-text project_card_text">Inventory Tracking</p>
                </div>
                <a href="#" className="btn project_card_button d-flex align-items-center justify-content-between"><MdOutlineArrowOutward/></a>
              </div>
            </div>
            <div className="col card project_card p-0">
              <img src="/Images/project04.jpg" className="card-img-top" alt="..."/>
              <div className="card-body d-flex align-items-center justify-content-between">
                <div>
                  <a href='#' className="card-title text-decoration-none m-0 project_card_title">Business Accounting</a>
                  <p className="card-text project_card_text">Financing Management</p>
                </div>
                <a href="#" className="btn project_card_button d-flex align-items-center justify-content-between"><MdOutlineArrowOutward/></a>
              </div>
            </div>
          </div>
        </div>

        <div className='container mt-4'>
          <div className='d-flex text-center flex-wrap align-items-center justify-content-around'>
            <div className='w-auto'>
              <p id='project_para'>We successfully cope with tasks of varying complexity, provide long-term guarantees and regularly</p> 
            </div>
            <div>
              <Button id='project_btn'>SEE ALL PROJECTS <FaArrowRightLong/></Button>
            </div>
          </div>

        </div>
      </div>

      {/* --------------------Make A Request---------------------------- */}
      <div className='container-fluid text-center p-2 w-100 d-flex flex-column align-items-center justify-content-center' id='request_div'>
        <div id='request_div01' className=''>
        </div>
        <div id='request_div02'>
        </div>
        <div className='w-100 d-flex align-items-center justify-content-center'>
          <h2 id='request_heding01' className=''>Offering The Best Experience Of Business Consulting Services</h2>
        </div>
        <div className='d-flex flex-sm-row flex-column align-items-center'>
          <div className=''><Button id='request_call_btn'>REQUEST A FREE CALL <FaArrowRightLong/></Button></div>
          <div className='d-flex text-start align-items-center'>
            <div id='request_call_icon'><BiPhoneCall/></div>
            <div>
              <p className='m-0 text-white'>Toll free call</p>
              <h3 className='m-0 text-white'>+ 88 9600 6002</h3>
            </div>

          </div>
        </div>
      </div>


      {/* -----------------------------Meet Our Team--------------------------- */}
      <div className="container d-flex flex-column align-items-center justify-content-center" id='team_div'>
        <div className='d-flex flex-column flex-md-row align-items-center justify-content-center mb-5'>
          <div id='team_div01_div01'>
            <h6>MEET OUR TEAM</h6>
            <div>
              <h1>Financial Expertise You Can Trust</h1>
            </div>
          </div>
          <div id='team_div01_div02'>
            <p>Our power of choice is untrammelled and when nothing preven tsbeing able to do what we like best every pleasure.</p>
          </div>
        </div>

        <div className='container'>
          <div className='row row-cols-1 row-cols-md-2 row-cols-xl-2 justify-content-center'>
            <div className="col card team_card p-0 m-2 ">
              <Button className='team_card_btn d-flex align-items-center justify-content-center'><MdShare/></Button>
              <img className="card-img-top" src="/Images/team_img01.jpg" alt="Card image cap"/>
              <div className="card-body">
                <a className="card-title text-decoration-none project_card_title">Jone Cooper</a>
                <p className="card-text project_card_text">Finance Advisor</p>
              </div>
            </div>
            <div className="col card team_card p-0 m-2">
              <Button className='team_card_btn d-flex align-items-center justify-content-center'><MdShare/></Button>
              <img className="card-img-top" src="/Images/team_img02.jpg" alt="Card image cap"/>
              <div className="card-body">
                <h5 className="card-title text-decoration-none project_card_title">Eleanor Pena</h5>
                <p className="card-text project_card_text">Business Eng.</p>
              </div>
            </div>
            <div className="col card team_card p-0 m-2">
              <Button className='team_card_btn d-flex align-items-center justify-content-center'><MdShare/></Button>
              <img className="card-img-top" src="/Images/team_img03.jpg" alt="Card image cap"/>
              <div className="card-body">
                <h5 className="card-title text-decoration-none project_card_title">Floyd Miles</h5>
                <p className="card-text project_card_text">Marketing</p>
              </div>
            </div>
            <div className="col card team_card p-0 m-2">
             <Button className='team_card_btn d-flex align-items-center justify-content-center'><MdShare/></Button>
              <img className="card-img-top" src="/Images/team_img04.jpg" alt="Card image cap"/>
              <div className="card-body">
                <h5 className="card-title text-decoration-none project_card_title">Ralph Edwards</h5>
                <p className="card-text project_card_text">Developer</p>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* ----------------------------------consulting--------------------------------------- */}
      <div className="container-fluid">
        <div className='row align-items-center position-relative m-2' id='consulting_div'>
          <div className='col col-md-8' id='consulting_div01'>
            <div className='container d-flex flex-column flex-md-row align-items-center'>
              <div id='consulting_div01_div01' className='d-flex flex-column text-center align-items-center justify-content-center mt-2'>
                <h2 className='m-0'>40+</h2>
                <span className='m-0'>Consulting Farm</span>
              </div>

              <div id='consulting_div01_div02' className='m-2 text-center'>
                <h2>Trusted , Happy & Satisfied Businesses</h2>
                <p>When you work with HR Solutions, you get the best. We provide adaptable solutions that allow you to be a part of the entire process</p>
              </div>
            </div>
          </div>

          <div id='consulting_bg'>
            <img src='/Images/consulting_shape.png'/>
          </div>

          <div className='col-4 p-0' id='consulting_img'>
            <img src='/Images/consulting_img.jpg'/>
          </div>
        </div>
      </div>


      {/* ----------------------------testimonial---------------------------------- */}
      <div className="container-fluid" id='testi_div'>
        <div className='d-flex flex-wrap-reverse justify-content-center align-items-center'>
          <div className='mt-2 d-flex justify-content-center' id='testi_div01'>
            <img id='testi_div01_profile' src='/Images/testimonial_img.png' />
            <img src='/Images/testimonial_shape01.png' id='testi_bg_shape01'/>
            <img src='/Images/testimonial_shape02.png' className='updown_img' id='testi_bg_shape02'/>
            <img src='/Images/testimonial_shape03.png' className='right_left_move_img' id='testi_bg_shape03'/>
          </div>

          <div id='testi_div02' className=''>
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-interval="false">
              <div className="carousel-inner">
                <div className={`carousel-item ${activeIndex === 0 ? 'active':''}`}>
                  <div id='testi_CEOS'>
                    <h4 className='m-0'>Mr. Robey Alexa</h4>
                    <p>CEO, Apexa Agency</p>
                  </div>
                  <div className='mb-3' id='testi_stars'>
                    <span><FaStar /></span>
                    <span><FaStar /></span>
                    <span><FaStar /></span>
                    <span><FaStar /></span>
                    <span><FaStar /></span>
                  </div>
                  <div className='d-flex align-items-center' id='testi_para'>
                    <p className=''>“ Morem ipsum dolor sit amet, consectetur adipisc awing elita florai sum dolor sit amet, consectetur area Borem ipsum dolor sit amet, consectetur.”</p>
                    <span><FaQuoteRight /></span>
                  </div>
                </div>

                <div className={`carousel-item ${activeIndex === 1 ? 'active':''}`}>
                <div id='testi_CEOS'>
                    <h4 className='m-0'>Samue Peters</h4>
                    <p>CEO, Apexa Agency</p>
                  </div>
                  <div className='mb-3' id='testi_stars'>
                    <span><FaStar /></span>
                    <span><FaStar /></span>
                    <span><FaStar /></span>
                    <span><FaStar /></span>
                    <span><FaStar /></span>
                  </div>
                  <div className='d-flex align-items-center' id='testi_para'>
                    <p className=''>“ Morem ipsum dolor sit amet, consectetur adipisc awing elita florai sum dolor sit amet, consectetur area Borem ipsum dolor sit amet, consectetur.”</p>
                    <span><FaQuoteRight /></span>
                  </div>
                </div>

                <div className={`carousel-item ${activeIndex === 2 ? 'active':''}`}>
                  <div id='testi_CEOS'>
                      <h4 className='m-0'>Robert Fox</h4>
                      <p>CEO, Apexa Agency</p>
                    </div>
                    <div className='mb-3' id='testi_stars'>
                      <span><FaStar /></span>
                      <span><FaStar /></span>
                      <span><FaStar /></span>
                      <span><FaStar /></span>
                      <span><FaStar /></span>
                    </div>
                    <div className='d-flex align-items-center' id='testi_para'>
                      <p className=''>“ Morem ipsum dolor sit amet, consectetur adipisc awing elita florai sum dolor sit amet, consectetur area Borem ipsum dolor sit amet, consectetur.”</p>
                      <span><FaQuoteRight /></span>
                    </div>
                </div>

                <div className={`carousel-item ${activeIndex === 3 ? 'active':''}`}>
                  <div id='testi_CEOS'>
                      <h4 className='m-0'>William Son</h4>
                      <p>CEO, Apexa Agency</p>
                    </div>
                    <div className='mb-3' id='testi_stars'>
                      <span><FaStar /></span>
                      <span><FaStar /></span>
                      <span><FaStar /></span>
                      <span><FaStar /></span>
                      <span><FaStar /></span>
                    </div>
                    <div className='d-flex align-items-center' id='testi_para'>
                      <p className=''>“ Morem ipsum dolor sit amet, consectetur adipisc awing elita florai sum dolor sit amet, consectetur area Borem ipsum dolor sit amet, consectetur.”</p>
                      <span><FaQuoteRight /></span>
                    </div>
                </div>
              </div>
              <div id='testi_avatars'>
                    <button onClick={()=>handleTestiCarousel(0)}>
                      <img className={`${activeIndex === 0 ? '':'greyFilter'}`} src='/Images/testi_avatar01.png'/>
                    </button>
                    <button onClick={()=>handleTestiCarousel(1)}>
                      <img className={`${activeIndex === 1 ? '':'greyFilter'}`} src='/Images/testi_avatar02.png'/>
                    </button>
                    <button onClick={()=>handleTestiCarousel(2)}>
                      <img className={`${activeIndex === 2 ? '':'greyFilter'}`} src='/Images/testi_avatar03.png'/>
                    </button>
                    <button onClick={()=>handleTestiCarousel(3)}>
                      <img className={`${activeIndex === 3 ? '':'greyFilter'}`} src='/Images/testi_avatar04.png'/>
                    </button>
              </div>
            </div>
          </div>
        </div>

      </div>



      {/* ------------------------------Blog-------------------------------------- */}
      <div className="container-fluid bg-primary">
        <div className='d-flex flex-column'>
          <div id='blog_div1'>
            <h6>OUR BLOG UPDATE</h6>
            <h1>Featured News And Insights</h1>
          </div>
          <div id='blog_cards' className=''>
            <div className="card">
              <img src="/Images/blog_" className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
            
          </div>
        </div>

        <div id='blog_shape01'>
          <img src='/Images/blog_shape01.png'/>
        </div>
        <div id='blog_shape02'>
          <img src='/Images/blog_shape02.png'/>
        </div>
      </div>

      {/* -----------------Call request form ------------------------- */}
      <div className='container-fluid  call-req-body'>
        <div id='call-req-flex' className='d-flex justify-content-center align-items-center'>
          <div id='call-req-div1' className="">
            <h1 className=''>Request A Call Back</h1>
            <p>Ever find yourself staring at your computer screen a good consulting slogan to come to mind? Oftentimes.</p>
          </div>
          <div id='call-req-div2' className="">
            <div className=''>
              <form className="row row-cols-xxl-2 row-cols-md-1 row-cols-1 needs-validation" novalidate>
                <div className="col position-relative">
                  <input type="text" className="form-control req-call-inputs" id="validationTooltip01" placeholder='Name *' required/>
                  <div className="valid-tooltip">
                    Looks good!
                  </div>
                </div>

                <div className="col position-relative">
                  <input type="text" className="form-control req-call-inputs" id="validationTooltipUsername" aria-describedby="validationTooltipUsernamePrepend" placeholder='Email *' required/>
                  <div className="valid-tooltip">
                    Please choose a unique and valid username.
                  </div>
                </div>
                <div className="col position-relative">
                  <input type="phone" className="form-control req-call-inputs" id="validationTooltipUserNum" aria-describedby="validationTooltipUsernamePrepend" placeholder='Phone *' required/>
                  <div className="valid-tooltip">
                    Please Enter Correct Number.
                  </div>
                </div>
                <div className="col">
                  <button className="btn data-send-btn" type="submit">Send Now</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>




      {/*----------------company details-------------------------  */}
      <div className="container p-5">
        <div id='' className="row row-cols-1 row-cols-sm-1 row-cols-lg-2 row-cols-xl-4 mt-5 mb-5">
          <div className="col mb-2 mb-sm-2">
            <div className=''><img id='details-img' src='/Images/logo.png'/></div>
            <div className='details-para m-3'>
              Felis consquat magnis fames sagittis ultrices plasodales porttitor quisque ultrice tempor turpis.
            </div>
            <div className='d-flex'>
              <div className='details-media-icons'><FaFacebookF/></div>
              <div className='details-media-icons'><FaInstagram/></div>
              <div className='details-media-icons'><FaTwitter/></div>
              <div className='details-media-icons'><FaLinkedinIn/></div>
              <div className='details-media-icons'><TbLetterP/></div>
            </div>
          </div>
          <div className="col mt-2 mt-sm-2">
            <div className='details-heding'>
              <h3>Information</h3>
              <div className="progress" style={{height: '4px',width:'30px'}}>
                <div className="progress-bar" role="progressbar" style={{width: '100%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
            <div id='' className='details-para d-flex align-items-center'>
              <div className='details-contact-icons'><BiPhoneCall/></div>
              <div className='m-2'>+123 456 7899</div>
            </div>
            <div id='' className='details-para d-flex align-items-center'>
              <div className='details-contact-icons'><CiMail/></div>
              <div className='m-2'>info@apexa.com</div>
            </div>
            <div id='' className='details-para d-flex align-items-start'>
              <div className='details-contact-icons'><CiLocationOn/></div>
              <div className='m-2'>Sydney Harbour Bridge Circular City of Sydney, Australia.</div>
            </div>
            
          </div>
          <div className="col mt-2 mt-sm-2">
            <div className='details-heding'>
              <h3>Top Links</h3>
              <div className="progress" style={{height: '4px',width:'30px'}}>
                <div className="progress-bar" role="progressbar" style={{width: '100%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
            <div>
              <div id='' className='details-para top-links-drop'>
                How it’s Work             
              </div>
              <div id='' className='details-para top-links-drop'>
                Partners             
              </div>
              <div id='' className='details-para top-links-drop'>
                Testimonials        
              </div>
              <div id='' className='details-para top-links-drop'>
                Case Studies            
              </div>
              <div id='' className='details-para top-links-drop'>
                Pricing             
              </div>
            </div>
            
            
          </div>

          <div className="col mt-2 mt-sm-2">
            <div className='details-heding'>
              <h3>Instagram Posts</h3>
              <div className="progress" style={{height: '4px',width:'30px'}}>
                <div className="progress-bar" role="progressbar" style={{width: '100%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
            <div className="container">
              <div className="row row-cols-3 row-cols-sm-2 row-cols-md-2 row-cols-lg-3">
                <div className="col insta-posts"><img src='/Images/footer_insta01.jpg'/></div>
                <div className="col insta-posts"><img src='/Images/footer_insta02.jpg'/></div>
                <div className="col insta-posts"><img src='/Images/footer_insta03.jpg'/></div>
                <div className="col insta-posts"><img src='/Images/footer_insta04.jpg'/></div>
                <div className="col insta-posts"><img src='/Images/footer_insta05.jpg'/></div>
                <div className="col insta-posts"><img src='/Images/footer_insta06.jpg'/></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ----------------Footer---------------------- */}
      <div id='footer' className='d-flex justify-content-center flex-wrap-reverse justify-content-md-around'>
        <div id='copyright-txt' className='mt-2 text-center'>
        Copyright © 2023 Apexa | All Right Reserved Recreadted By Neetesh kumar.
        </div>
        <div className='d-flex flex-wrap align-items-center justify-content-center'>
          <div id='footer-heding1' className='m-3'>Newsletter SignUp!</div>
          <div className='d-flex'>
              <input id='footer-mail-inp' type='email' placeholder='Type Email...'/>        
              <Button className='subscribe-btn'>SUBSCRIBE</Button>
          </div>
        </div>
      </div>
    </>
)
}

export default Home
