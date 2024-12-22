import {useEffect, useState} from 'react'
import './About.css'
import Logo from '../assets/KukwareLogo.png';
// import Rectangle_30 from './assets/Rectangle-30.png'
import Afordability_white from '../assets/affordability-white.png'
import Afordability from '../assets/affordability.png'
import Quality from '../assets/Quality.png'
import Quality_white from '../assets/Quality-white.png'
import Innovation from '../assets/Innovation.png'
import Innovation_white from '../assets/Innovation-white.png'
import image6 from '../assets/image6.png'
import Rectangle_30 from '../assets/Rectangle-30.png'
import image3 from '../assets/image3.png'
import image4 from '../assets/image4.png'
import linkedin from '../assets/linkedin.png'
import facebook from '../assets/facebook.png'
import insta from '../assets/insta.png'
import {Link} from 'react-router-dom'
import { NavLink, useNavigate } from 'react-router-dom';


const About = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [activeLink, setActiveLink] = useState("Home");

  const navigate = useNavigate();

  const handleLinkClick = (link, path) => {
    setActiveLink(link); // Highlight the active link
    setIsMenuOpen(false); // Close the dropdown menu
    navigate(path); // Navigate to the desired page
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='about-maincontainer'>
        { isMobile ? (
         
         <nav className="mobile-navbar">
           <div className="logo">
             <img style={{width:'100%', height:'auto'}} src={Logo} alt='Logo' />
           </div>
           <div className="menu-icon" onClick={toggleMenu}>
             <div className="line"></div>
             <div className="line"></div>
             <div className="line"></div>
             <div className="line"></div>
           </div>
           {isMenuOpen && (
             <div className="dropdown-menu">
               <div
                 className={`nav-link ${activeLink === "Home" ? "active" : ""}`}
                 onClick={() => handleLinkClick("Home", "/")}
               >
                 Home
               </div>
               <div
                 className={`nav-link ${activeLink === "About Us" ? "active" : ""}`}
                 onClick={() => handleLinkClick("About Us", "/about")}
               >
                 About Us
               </div>
               <div
                 className={`nav-link ${activeLink === "Our Products" ? "active" : ""}`}
                 onClick={() => handleLinkClick("Our Products", "/products")}
               >
                 Our Products
               </div>
               <div
                 className={`nav-link ${activeLink === "Contact Us" ? "active" : ""}`}
                 onClick={() => handleLinkClick("Contact Us", "/contact")}
               >
                 Contact Us
               </div>
             </div>
           )}
         </nav>
    

   ) :( <header className="header">
       <div className="logo">
         <img src={Logo} alt="My Logo" />
       </div>
       <nav className="nav-bar">
         <ul>
           <li><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
           <li><NavLink to="/about" activeClassName="active">About Us</NavLink></li>
           <li><NavLink to="/products" activeClassName="active">Products</NavLink></li>
           <li><NavLink to="/contact" activeClassName="active">Contact Us</NavLink></li>
         </ul>
       </nav>
     </header>
       
   )

   }

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
          
           {isMobile ? (<div className='about-container2'>
            <h1> WE ARE THE <span id='about-container2-span'> PREFERRED </span> CHOICE!</h1>
            <p> Vardhaman has been at the forefront of<br/> revolutionising culinary experience in households<br/> worldwide for 20 years! Heres Why </p>
          </div>):(<div className='about-container2'>
            <h1> WE ARE THE <span id='about-container2-span'> PREFERRED </span> CHOICE!</h1>
            <p> Vardhaman has been at the forefront of revolutionising culinary experience in <br/>households worldwide for 20 years! Heres Why </p>
          </div>)}

          <div className='about-container3'>
              <div className='about-circleWrapper'>
              <div className='about-circle'> 
                <img src={ isMobile ? Afordability : Afordability_white} alt='affordability'/>
              </div>
              <p> Seamlessness in Usage and <br/> Affordability</p>
              </div>
              <div className='about-line'> </div>

              <div className='about-circleWrapper'>
              <div className='about-circle'> 
              <img src={ isMobile ? Quality : Quality_white} alt='affordability'/>
              </div>
              <p> Uncompromising Quality</p>
              </div>
              <div className='about-line'> </div>
              
              <div className='about-circleWrapper'>
              <div className='about-circle'> 
              <img src={ isMobile ? Innovation : Innovation_white} alt='affordability'/>
              </div>
              <p> Futuristic & Dynamic Innovation</p>
              </div>  
          </div>

          { isMobile ? (<div style={{backgroundColor:'#EF7C00', borderTopRightRadius:'80px'}}>
                    <div className='hline'> </div>
                  <div className='container5'>
                     <h5> DELIVERING A PREMIUM <br/>COOKING EXPERIENCE</h5>
                     
                     <p>Have any other questions?
                     <br/>
                     Feel free to contact us for further support.</p>
                     <button> <Link to="/contact" style={{textDecoration:'none', color:'inherit'}}>Contact Us</Link></button>
                     
                    </div>
          
                    <div className='hline'> </div>
          
                    <footer className='home-footer'>
                     
                      <ul className='first'>
                        <li><Link to='/about' style={{textDecoration:'none', color:'inherit'}}>About </Link></li>
                        <li><Link to='/products' style={{textDecoration:'none', color:'inherit', cursor:'pointer'}}> Products</Link></li>
                        <li><Link to='/' style={{textDecoration:'none', color:'inherit', cursor:'pointer'}}>Home </Link></li>
                      </ul>
                      <ul className='second'>
                        <img style={{cursor:'pointer'}} src={linkedin} alt='' />
                        <img style={{cursor:'pointer'}} src={facebook} alt='' />
                        <img style={{cursor:'pointer'}} src={insta} alt='' />
                      </ul>
                    </footer>
                  </div>):(<div>
                  <div className='about-container4'>
                     <h5> DELIVERING A PREMIUM COOKING EXPERIENCE</h5>
                     <h1> Request More Information</h1>
                     <p> Have we missed anything? Have any other questions?
                     <br/>
                     Feel free to contact us for further support.</p>
                     <button> <Link to="/contact" style={{textDecoration:'none', color:'inherit'}}>Contact Us</Link></button>
                     <h7>© 2024 Vardhaman LLC</h7>
                    </div>
          
                    <div className='hline'> </div>
          
                    <footer className='about-footer'>
                      <div className='logo'> <img src={Logo} alt=''/></div>
                      <ul className='first'>
                        <li><Link to='/about' style={{textDecoration:'none', color:'inherit'}}>About </Link></li>
                        <li><Link to='/products' style={{textDecoration:'none', color:'inherit', cursor:'pointer'}}> Products</Link></li>
                        <li><Link to='/' style={{textDecoration:'none', color:'inherit', cursor:'pointer'}}>Home </Link></li>
                      </ul>
                      <ul className='second'>
                        <img style={{cursor:'pointer'}} src={linkedin} alt='' />
                        <img style={{cursor:'pointer'}} src={facebook} alt='' />
                        <img style={{cursor:'pointer'}} src={insta} alt='' />
                      </ul>
                    </footer>
                  </div>)}
         </div>
    </div>
  )
}

export default About