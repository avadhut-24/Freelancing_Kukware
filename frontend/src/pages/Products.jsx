import React from 'react'
import './Products.css'
import {Link} from 'react-router-dom'
import Logo from '../assets/KukwareLogo.png';
import Image5 from '../assets/image5.png'
import Image6 from '../assets/image6.png'
import Image7 from '../assets/image7.png'
import Image8 from '../assets/image8.png'
import Rectangle30 from '../assets/Rectangle-30.png'
import Circle from '../assets/Ellipse.png'
import { products } from '../data/ProductsData';
import ProductCard from '../components/ProductCard';
import SearchBar from '../components/SearchBar';
import CategoryFilter from '../components/CategoryFilter';
import { useState } from 'react';
import linkedin from '../assets/linkedin.png'
import facebook from '../assets/facebook.png'
import insta from '../assets/insta.png'
import ProductModal from '../components/ProductModal';
import CarouselData from '../data/CarousalData'
import { NavLink, useNavigate } from 'react-router-dom';
import { useEffect} from 'react';


const Products = () => {

    const [searchQuery, setSearchQuery] = useState("");
    const [activeCategory, setActiveCategory] = useState("All");

    const [showModal, setShowModal] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState(null);

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


  
    const categories = [...new Set(products.map((product) => product.category))];
  
    const filteredProducts = products.filter((product) => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = activeCategory === "All" || product.category === activeCategory;
      return matchesSearch && matchesCategory;
    });

    const openModal = (productName, category) => {
      setSelectedProduct(productName);
      setShowModal(true);
      setSelectedCategory(category)
      console.log(category)
      console.log("triggered")
    };
  
    const closeModal = () => {
      setSelectedProduct(null);
      setShowModal(false); 
    };

  return (
    <div className='MainContainer'>

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
         {/* <header className="header">
            <div className="logo">
             <img src={Logo} alt='My Logo' />
            </div>
            <nav className="nav-bar">
              <ul>
              <li><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
              <li><NavLink to="/about" activeClassName="active">About Us</NavLink></li>
              <li><NavLink to="/products" activeClassName="active">Products</NavLink></li>
              <li><NavLink to="/contact" activeClassName="active">Contact Us</NavLink></li>
              </ul>
            </nav>
          </header> */}

           <div className='products-container1'>
                       <div className='cont1-sub-cont1'>
                         {isMobile ? (<div className='left'>
                            <h1> Our Products</h1>
                            <p> Explore our two exceptional cookware lines: Die Cast  <br/>Technology 
                            for precise metal thickness, creating strong, <br/>even-heating, 
                            lightweight pans, and the Press Series<br/> for elegantly designed, lightweight
                            cookware ensuring <br/>faster, nutritious cooking. Elevate your cooking today.
                            </p>
                            <div className='right'>
                            <div> <img  className='first' src={Rectangle30} alt='' /> </div>
                            <div> <img  className='second' src={Image5} alt='' /> </div>
                            <div> <img  className='third'src={Image6} alt='' /> </div>
                         </div>
                            <button> See Products</button>
                         </div>):(<div className='left'>
                            <div>
                            <h1> Our Products</h1>
                            <p> Explore our two exceptional cookware lines: Die Cast <br/> Technology 
                            for precise metal thickness, creating strong, <br/> even-heating, 
                            lightweight pans, and the Press Series for <br/>elegantly designed, lightweight 
                            cookware ensuring faster, <br/>nutritious cooking. Elevate your cooking today.
                            </p>
                            <button> See Products</button>
                            </div>
                            <div className='right'>
                            <div> <img  className='first' src={Rectangle30} alt='' /> </div>
                            <div> <img  className='second' src={Image5} alt='' /> </div>
                            <div> <img  className='third'src={Image6} alt='' /> </div>
                         </div>
                         </div>)}
                        
                         
                       </div>
                       {isMobile ? (<div className='cont1-sub-cont2'>
                         
                        <div className='right'>
                         <h1> Die Cast Series</h1>
                            <p> Die Cast Technology allows  for metal <br/>thickness exactly  where it’s needed. <br/> So your pan is strong and heats evenly.</p>
                            <div className='left'>
                            <div> <img  className='first' src={Rectangle30} alt='' /> </div>
                            <div> <img  className='second' src={Image7} alt='' /> </div>
                        </div>
                            <ul>
                                <li>Die Cast Body </li>
                                <li>Super Conductive Bottom </li>
                                <li>No Deformation </li>
                                <li>Even Heat Distribution </li>
                                <li>Available in 3 and 5 layer Coating </li>
                                <li>Cool Touch Bakelite Handle</li>
                                <li>PFOA Free</li> 
                            </ul>
                        </div>
                       </div>): (<div className='cont1-sub-cont2'>
                         <div className='left'>
                            <div> <img  className='first' src={Rectangle30} alt='' /> </div>
                            <div> <img  className='second' src={Image7} alt='' /> </div>
                        </div>
                        <div className='right'>
                         <h1> Die Cast <br/> Series</h1>
                            <p> Die Cast Technology allows  for metal <br/>thickness exactly  where it’s needed. <br/> So your pan is strong and heats evenly.</p>
                            <ul>
                                <li>Die Cast Body </li>
                                <li>Super Conductive Bottom </li>
                                <li>No Deformation </li>
                                <li>Even Heat Distribution </li>
                                <li>Available in 3 and 5 layer Coating </li>
                                <li>Cool Touch Bakelite Handle</li>
                                <li>PFOA Free</li> 
                            </ul>
                        </div>
                       </div>)}
           </div>

          {isMobile ? ( <div className='products-container2'>
             <div className='left'>
             <h1> Press Series</h1>
                <p> Elegantly designed and lightweight <br/>cookware which ensures faster and <br/> nutritious cooking with even heat distribution.</p>
                <div className='right'>
                <div> <img className='first' src={Rectangle30} alt='' /></div>
                <div> <img className='second' src={Image8} alt='' /></div>
             </div>
                <ul>
                    <li> PFOA Free</li>
                    <li>No Harmful Fumes </li>
                    <li>Even Heat Distribution </li>
                    <li>Oven Safe </li>
                    <li>Dishwasher Safe </li>
                    <li>Gas and Induction Compatible </li>
                    <li>Available in 3 and 5 layer Coating</li>
                    <li>Warranty: 1 Year</li> 
                </ul>
             </div>
             
           </div>):(  <div>
            <div className='hbar'> 
             <h6>Retains Nutrients </h6>
             <img src={Circle} alt='' />
             <h6>Easy Food Release</h6>
             <img src={Circle} alt='' />
             <h6>Easy to Clean</h6>
             <img src={Circle} alt='' />
             <h6>Less Oil Cooking</h6>
             <img src={Circle} alt='' />
             <h6>Low Gas Consumption</h6>
             <img src={Circle} alt='' />
             <h6>20 Years of Excellence</h6>
           </div>
           <div className='products-container2'>
             <div className='left'>
             <h1> Press <br/> Series</h1>
                <p> Elegantly designed and lightweight <br/>cookware which ensures faster and <br/> nutritious cooking with even heat distribution.</p>
                <ul>
                    <li> PFOA Free</li>
                    <li>No Harmful Fumes </li>
                    <li>Even Heat Distribution </li>
                    <li>Oven Safe </li>
                    <li>Dishwasher Safe </li>
                    <li>Gas and Induction Compatible </li>
                    <li>Available in 3 and 5 layer Coating</li>
                    <li>Warranty: 1 Year</li> 
                </ul>
             </div>
             <div className='right'>
                <div> <img className='first' src={Rectangle30} alt='' /></div>
                <div> <img className='second' src={Image8} alt='' /></div>
             </div>
           </div>
           <div className='hbar'> 
             <h6>Retains Nutrients </h6>
             <img src={Circle} alt='' />
             <h6>Easy Food Release</h6>
             <img src={Circle} alt='' />
             <h6>Easy to Clean</h6>
             <img src={Circle} alt='' />
             <h6>Less Oil Cooking</h6>
             <img src={Circle} alt='' />
             <h6>Low Gas Consumption</h6>
             <img src={Circle} alt='' />
             <h6>20 Years of Excellence</h6>
           </div>
            </div>
           
           )}

          

           

           <div className="product-listing">
               <div style={{height:'170px', backgroundColor:'#EF7C00'}}>
                 
               </div>
                <h1>Product Listing</h1>
                <CategoryFilter
                    categories={categories}
                    activeCategory={activeCategory}
                    setActiveCategory={setActiveCategory}
                />
                {isMobile ? (<div> </div>):(<SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />)}
                
                <div className="product-grid">
                    {filteredProducts.map((product) => (
                    <ProductCard
                        key={product.id}
                        name={product.name}
                        category={product.category}
                        image={product.image}
                        onClick={() => openModal(product.name, product.category)}
                    />
                    ))}
                </div>
                 
                {selectedProduct && (
                      <ProductModal
                        showModal={showModal}
                        onClose={closeModal}
                        productName={selectedProduct}
                        carouselImages={CarouselData[selectedCategory][selectedProduct]?.images || []}
                        tableData={CarouselData[selectedCategory][selectedProduct]?.tableData || []}
                        category={selectedCategory}
                        
                      />
                    )}
           </div>

           {isMobile ? (<div style={{backgroundColor:'#EF7C00'}}>
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
                   </div>):(<div style={{backgroundColor:'#EF7C00'}}>
           <div className='products-container5'>
           <h5 style={{marginTop:'20px'}}> DELIVERING A PREMIUM COOKING EXPERIENCE</h5>
           <h1> Request More Information</h1>
           <p> Have we missed anything? Have any other questions?
           <br/>
           Feel free to contact us for further support.</p>
           <button> <Link to="/contact" style={{textDecoration:'none', color:'inherit'}}>Contact Us</Link></button>
           <h7>© 2024 Vardhaman LLC</h7>
          </div>

          <div className='hline'> </div>

          <footer className='products-footer'  style={{marginBottom:'0px'}}>
            <div className='logo'> <img src={Logo} alt=''/></div>
            <ul className='first'>
             <li > <Link to='/about' style={{textDecoration:'none', color:'inherit'}}>About </Link></li>
                                  <li><Link to='/products' style={{textDecoration:'none', color:'inherit'}}> Products</Link></li>
                                   <li><Link to='/' style={{textDecoration:'none', color:'inherit'}}>Home </Link></li>
            </ul>
            <ul>
              <img style={{cursor:'pointer'}} src={linkedin} alt='' />
              <img style={{cursor:'pointer'}} src={facebook} alt='' />
               <img style={{cursor:'pointer'}} src={insta} alt='' />
            </ul>
          </footer>
           </div>)}
    </div>
  )
}

export default Products