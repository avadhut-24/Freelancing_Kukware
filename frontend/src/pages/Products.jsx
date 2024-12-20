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


const Products = () => {

    const [searchQuery, setSearchQuery] = useState("");
    const [activeCategory, setActiveCategory] = useState("All");

    const [showModal, setShowModal] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState(null);


  
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
      console.log("triggered")
    };
  
    const closeModal = () => {
      setSelectedProduct(null);
      setShowModal(false); 
    };

  return (
    <div className='MainContainer'>
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

           <div className='products-container1'>
                       <div className='cont1-sub-cont1'>
                         <div className='left'>
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
                         
                       </div>
                       <div className='cont1-sub-cont2'>
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

           <div className="product-listing">
                <h1>Product Listing</h1>
                <CategoryFilter
                    categories={categories}
                    activeCategory={activeCategory}
                    setActiveCategory={setActiveCategory}
                />
                <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
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
                        carouselImages={CarouselData[selectedProduct]?.images || []}
                        tableData={CarouselData[selectedProduct]?.tableData || []}
                        category={selectedCategory}
                        
                      />
                    )}
           </div>

           <div style={{backgroundColor:'#EF7C00'}}>
           <div className='container5'>
           <h5 style={{marginTop:'20px'}}> DELIVERING A PREMIUM COOKING EXPERIENCE</h5>
           <h1> Request More Information</h1>
           <p> Have we missed anything? Have any other questions?
           <br/>
           Feel free to contact us for further support.</p>
           <button> <Link to="/contact" style={{textDecoration:'none'}}>Contact Us</Link></button>
           <h7>© 2024 Vardhaman LLC</h7>
          </div>

          <div className='hline'> </div>

          <footer  style={{marginBottom:'0px'}}>
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

export default Products