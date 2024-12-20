import React from 'react'
import './About.css'
import Logo from '../assets/KukwareLogo.png';
// import Rectangle_30 from './assets/Rectangle-30.png'
import Afordability from '../assets/affordability-white.png'
import Quality from '../assets/Quality-white.png'
import Innovation from '../assets/Innovation-white.png'
import image6 from '../assets/image6.png'
import Rectangle_30 from '../assets/Rectangle-30.png'
import image3 from '../assets/image3.png'
import image4 from '../assets/image4.png'
import linkedin from '../assets/linkedin.png'
import facebook from '../assets/facebook.png'
import insta from '../assets/insta.png'
import {Link} from 'react-router-dom'

const About = () => {
  return (
    <div className='about-maincontainer'>
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

         <div className='about'>
         <div className='about-container1'>
           <div className='about-container1-content1'>
             <h1> About Us</h1>
             <p>Our commitment to excellence and innovation <br/> has enabled us to create cutting-edge<br/> appliances  that seamlessly blend style, <br/>functionality, and convenience.</p>
            </div>  
          <div className='about-rotated-rectangle-container'>
            <div className="about-rotated-rectangle">
              <div className="about-background-image"></div>
            </div>
            <div className="about-pan-image">
              <img id='first' src={image6} alt="Pan" />
              <img id='second' src={image6} alt="Pan" />
              
            </div>
          </div>
          </div>

          <div className='about-container2'>
            <h1> WE ARE THE <span id='about-container2-span'> PREFERRED </span> CHOICE!</h1>
            <p> Vardhaman has been at the forefront of revolutionising culinary experience in <br/>households worldwide for 20 years! Heres Why </p>
          </div>

          <div className='about-container3'>
              <div className='about-circleWrapper'>
              <div className='about-circle'> 
                <img src={Afordability} alt='affordability'/>
              </div>
              <p> Seamlessness in Usage and <br/> Affordability</p>
              </div>
              <div className='about-line'> </div>

              <div className='about-circleWrapper'>
              <div className='about-circle'> 
              <img src={Quality} alt='affordability'/>
              </div>
              <p> Seamlessness in Usage and <br/> Affordability</p>
              </div>
              <div className='about-line'> </div>
              
              <div className='about-circleWrapper'>
              <div className='about-circle'> 
              <img src={Innovation} alt='affordability'/>
              </div>
              <p> Seamlessness in Usage and <br/> Affordability</p>
              </div>  
          </div>

          <div className='about-container4'>
                     <h5> DELIVERING A PREMIUM COOKING EXPERIENCE</h5>
                     <h1> Request More Information</h1>
                     <p> Have we missed anything? Have any other questions?
                     <br/>
                     Feel free to contact us for further support.</p>
                     <button> <Link to="/contact" style={{textDecoration:'none', color:'inherit'}}>Contact Us</Link></button>
                     <h7>© 2024 Vardhaman LLC</h7>
                    </div>
          
                    <div className='about-hline'> </div>
          
                    <footer>
                      <div className='logo'> <img src={Logo} alt=''/></div>
                      <ul className='first'>
                        <li>About</li>
                        <li>Products</li>
                        <li>Home</li>
                      </ul>
                      <ul>
                        <img src={linkedin} alt='' />
                        <img src={facebook} alt='' />
                        <img src={insta} alt='' />
                      </ul>
                    </footer>
         </div>
    </div>
  )
}

export default About