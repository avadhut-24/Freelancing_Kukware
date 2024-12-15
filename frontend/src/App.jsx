
import './App.css'; 
import Logo from './assets/KukwareLogo.png';
// import Rectangle_30 from './assets/Rectangle-30.png'
import Image1 from './assets/image1.png' 
import Afordability from './assets/affordability.png'
import Quality from './assets/Quality.png'
import Innovation from './assets/Innovation.png'
import image2 from './assets/image2.png'
import Rectangle_30 from './assets/Rectangle-30.png'
import image3 from './assets/image3.png'
import image4 from './assets/image4.png'
import linkedin from './assets/linkedin.png'
import facebook from './assets/facebook.png'
import insta from './assets/insta.png'




function App() {
  

  return (
    
      <div className="MainContainer">
          <header className="header">
            <div className="logo">
             <img src={Logo} alt='My Logo' />
            </div>
            <nav className="nav-bar">
              <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Products</li>
                <li>Contact Us</li>
              </ul>
            </nav>
          </header>

          <div className='container1'>
           <div className='container1-content1'>
             <h1> Premium <br/> Cookware <br/> Solution!</h1>
             <p> We are at the forefront of <br/> revolutionizing the culinary <br/> experiences in households worldwide.</p>
            </div>  
          <div className='rotated-rectangle-container'>
            <div className="rotated-rectangle">
              <div className="background-image"></div>
            </div>
            <div className="pan-image">
              <img src={Image1} alt="Pan" />
            </div>
          </div>
          </div>

          <div className='container2'>
            <h1> WE ARE THE <span id='container2-span'> PREFERRED </span> CHOICE!</h1>
            <p> Vardhaman has been at the forefront of revolutionising culinary experience in <br/>households worldwide for 20 years! Heres Why </p>
          </div>

          <div className='container3'>
              <div className='circleWrapper'>
              <div className='circle'> 
                <img src={Afordability} alt='affordability'/>
              </div>
              <p> Seamlessness in Usage and <br/> Affordability</p>
              </div>
              <div className='line'> </div>

              <div className='circleWrapper'>
              <div className='circle'> 
              <img src={Quality} alt='affordability'/>
              </div>
              <p> Seamlessness in Usage and <br/> Affordability</p>
              </div>
              <div className='line'> </div>
              
              <div className='circleWrapper'>
              <div className='circle'> 
              <img src={Innovation} alt='affordability'/>
              </div>
              <p> Seamlessness in Usage and <br/> Affordability</p>
              </div>  
          </div>

          <div className='container4'>
             <div className='cont4-sub-cont1'>
               <div className='left'>
                  <p> Our Products:</p>
                  <h1> Die Cast <br/>Series</h1>
                  <p>Die Cast Technology allows for metal <br/> thickness exactly where it’s needed. So <br/> your pan is strong and heats evenly.</p>
                  <ul>
                    <li>Low Gas Consumption </li>
                    <li>Five Layer Coating </li>
                    <li>Easy to Clean </li>
                    <li>Non Toxic, Non Deformation </li>
                  </ul>
                  <button> Know More</button>
               </div>
               <div className='pan_image'>
                  <img className='first' src={Rectangle_30} alt=''/>
                  <img className='second' src={image2} alt='' />
               </div>
               
             </div>
             <div className='cont4-sub-cont2'>
               <div>
                 <img className='first' src={Rectangle_30} alt=''/>
                 <img className='second' src ={image3} alt=''/>
                 <img className='third' src ={image4} alt='' />
               </div>
               <div className='content'>
                 <h1> Press <br/> Series</h1>
                 <p> Elegantly designed and lightweight cookware <br/>  which ensures faster and nutritious cooking <br/> with even heat distribution.</p>
                 <ul style={{ paddingLeft: '0', marginLeft: '0', listStylePosition: 'inside', fontSize:'6px', marginTop:'50px'}}>
                    <li>Available in 3 and 5 layer coating </li>
                    <li>Coating for Uniform Browning </li>
                    <li>Cool Touch  </li>
                    <li>Bakelite Handle </li> 
                  </ul>
                  <button> Know More</button>
               </div>
             </div>
          </div>

          <div className='container5'>
           <h5> DELIVERING A PREMIUM COOKING EXPERIENCE</h5>
           <h1> Request More Information</h1>
           <p> Have we missed anything? Have any other questions?
           <br/>
           Feel free to contact us for further support.</p>
           <button> Contact Us</button>
           <h7>© 2024 Vardhaman LLC</h7>
          </div>

          <div className='hline'> </div>

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
   
  )
}

export default App
