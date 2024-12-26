import React from 'react'
import './Footer.css'
import {Link} from 'react-router-dom'
import Logo from '../assets/KukwareLogo.png';
import linkedin from '../assets/linkedin.png'
import whiteLinkedin from '../assets/whiteLinkedin.png'
import facebook from '../assets/facebook.png'
import whitefacebook from '../assets/whiteFacebook.png'
import insta from '../assets/insta.png'
import whiteinsta from '../assets/whiteInsta.png'
import { useLocation } from 'react-router-dom';

const Footer = (props) => {
  return (
    <div className='cmn-footer' style={{color: props.color, backgroundColor:props.backgroundColor}}>
           <h5 style={{color:props.color1}}> DELIVERING A PREMIUM COOKING EXPERIENCE</h5>
           <h1> Request More Information</h1>
           <p> Have we missed anything? Have any other questions?
           <br/>
           Feel free to contact us for further support.</p>
           <button> <Link to="/contact" style={{textDecoration:'none', color:'inherit'}}>Contact Us</Link></button>
           <h7>© 2024 Vardhaman LLC</h7>
            
           <div className='hline'> </div>

        <div className='cmn-logo' style={{ color: props.color}}>
        <div > <img src={Logo} alt=''/></div>
            <ul className='first'>
                <li><Link to='/about' style={{textDecoration:'none', color:'inherit'}}>About </Link></li>
                <li><Link to='/products' style={{textDecoration:'none', color:'inherit', cursor:'pointer'}}> Products</Link></li>
                <li><Link to='/' style={{textDecoration:'none', color:'inherit', cursor:'pointer'}}>Home </Link></li>
            </ul>
            <ul>
                <img style={{cursor:'pointer'}}  src={props.linkedin} alt='' />
                <img style={{cursor:'pointer'}} src={props.facebook} alt='' />
                <img style={{cursor:'pointer'}} src={props.insta} alt='' />
            </ul>
        </div>
            
    </div>
  )
}

export default Footer