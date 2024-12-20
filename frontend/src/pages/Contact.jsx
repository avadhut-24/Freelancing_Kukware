import React from 'react'
import './Contact.css'
import {Link} from 'react-router-dom'
import Logo from '../assets/KukwareLogo.png';
import linkedin from '../assets/linkedin.png'
import facebook from '../assets/facebook.png'
import insta from '../assets/insta.png'
import image from '../assets/image4.png'

const Contact = () => {
  return (
    <div className='contact-maincontainer'>
     <header className="header">
            <div className="logo">
             <img src={Logo} alt='My Logo' />
            </div>
            <nav className="nav-bar">
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/products">Products</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
              </ul>
            </nav>
     </header>
    
     <div className='contact-cont1'>
      <h1> MAKING EVERY<br/> KITCHEN <span style={{color:'#EF7C00'}}> STYLISH! </span> </h1>
     </div>

     <div className='contact-cont2'>
       <div className='l'>
         <img id='first' src={image}  alt=''/>
         <img id='second' src={image}  alt=''/> 
       </div>
       <div className='r'>
       <h7> Manufactured and Marketed by:</h7>
        <h1> VARDHAMAN MARKETING</h1>
        
        {/* <div style={{display:'flex'}}>
        <h7> Address</h7>
        <p >Ground, CP-19, CP-20, DP-21, DP-22, Ambedakar Industrial Estate, KSSIDC, Jigani, Bengaluru, Karnataka, 560105</p>
        </div>
        <div style={{display:'flex'}}>
        <h7> Email</h7>
        <p>vardhmkt@gmail.com</p>
        </div>
        <div style={{display:'flex'}}>
        <h7> Mobile No.s</h7>
        <p>+91 9731391396 | +91 9353906189</p>
        </div> */}

        <div className="contact-info">
        <div className="contact-item">
            <span className="label">Address:</span>
            <span className="value">Ground, CP-19, CP-20, DP-21, DP-22, Ambedakar <br/>Industrial Estate, KSSIDC, Jigani, Bengaluru, Karnataka, 560105</span>
        </div>
        <div className="contact-item">
            <span className="label">Email:</span>
            <span className="value">vardhmkt@gmail.com</span>
        </div>
        <div className="contact-item">
            <span className="label">Mobile No:</span>
            <span className="value">+91 9731391396 | +91 9353906189</span>
        </div>
</div>
       </div>
       
     </div>
     

    </div>
  )
}

export default Contact