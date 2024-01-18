import React from 'react'
import '../Css/Navbar.css'
import { FiPhoneCall, FiClock  } from "react-icons/fi";
import { MdOutlineLocationOn, MdOutlineMailOutline } from "react-icons/md";

function Navbar() {
  return (
    <>
       <div id='navbar1' className='navbar-1 d-flex align-items-center justify-content-center flex-wrap'>
           <div className='col-lg-6 d-flex'>
                <ul className='list-group list-group-horizontal p-3 d-flex align-item-center'>
                    <li className='list-group nav-icons '><FiPhoneCall/></li>
                    <li className='list-group'>+123 9898 500</li>
                </ul>
                <ul className='list-group list-group-horizontal p-3 d-flex align-item-center'>
                    <li className='list-group nav-icons '><MdOutlineLocationOn/></li>
                    <li className='list-group'>256 Avenue, Mark Street, Newyork City</li>
                </ul>
           </div>
           <div className='col-lg-6 d-flex justify-content-end'>
                <ul className='list-group list-group-horizontal p-3 d-flex align-item-center'>
                    <li className='list-group nav-icons '><MdOutlineMailOutline /></li>
                    <li className='list-group'>info@apexa.com</li>
                </ul>
                <ul className='list-group list-group-horizontal p-3 d-flex align-item-center'>
                    <li className='list-group nav-icons '><FiClock /></li>
                    <li className='list-group'>Mon-Fri: 10:00am - 09:00pm</li>
                </ul>
           </div>
        </div>
    </>
  )
}

export default Navbar
