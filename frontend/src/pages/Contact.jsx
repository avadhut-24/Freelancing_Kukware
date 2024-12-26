import { useState, useEffect } from 'react'
import './Contact.css'
import Logo from '../assets/KukwareLogo.png';
import image from '../assets/image4.png'
import { NavLink, useNavigate } from 'react-router-dom';

const Contact = () => {

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
    <div className='contact-maincontainer'>
      {isMobile ? (

        <nav className="mobile-navbar">
          <div className="logo">
            <img style={{ width: '100%', height: 'auto' }} src={Logo} alt='Logo' />
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


      ) : (<header className="header">
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

      {isMobile ? (<div className='contact-cont1'>
        <h1> Making every<br /> kitchen<span style={{ color: '#EF7C00' }}> stylish! </span> </h1>
      </div>) : (<div className='contact-cont1'>
        <h1> MAKING EVERY<br /> KITCHEN <span style={{ color: '#EF7C00' }}> STYLISH! </span> </h1>
      </div>)}

      <div className='contact-cont2'>
        <div className='l'>
          <img id='first' src={image} alt='' />
          <img id='second' src={image} alt='' />
        </div>
        <div className='r'>
          <div className="r-cont1">
            <h7> Manufactured and Marketed by:</h7>
            <h1> VARDHAMAN MARKETING</h1>
          </div>


          <div className="contact-info">
            <div className="contact-item">
              <span className="label">Address:</span>
              <span className="value">Ground, CP-19, CP-20, DP-21, DP-22, Ambedakar <br />Industrial Estate, KSSIDC, Jigani, Bengaluru, Karnataka, 560105</span>
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