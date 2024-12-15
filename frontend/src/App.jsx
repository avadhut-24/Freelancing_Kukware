
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
            <div className="logo" style={{width:'20%'}}>
             <img src={Logo} alt='My Logo' style={{width:'100%'}} />
            </div>
            <nav className="nav-bar" style={{width:'55%'}}>
              <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Products</li>
                <li>Contact Us</li>
              </ul>
            </nav>
          </header>

          <div className='container1'>
           <div className='container1-content1' style={{ }}>
             <h1 style={{fontSize:'smaller'}}> Premium <br/> Cookware <br/> Solution!</h1>
             <p style={{fontSize:'5px'}}> We are at the forefront of <br/> revolutionizing the culinary <br/> experiences in households worldwide.</p>
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
            <h1 style={{fontSize:'13px'}}> WE ARE THE <span id='container2-span'> PREFERRED </span> CHOICE!</h1>
            <p style={{fontSize:'5px'}}> Vardhaman has been at the forefront of revolutionising culinary experience in <br/>households worldwide for 20 years! Heres Why </p>
          </div>

          <div className='container3'>
              <div style={{display:'flex', flexDirection:'column', alignItems:'center', padding:'0 10px'}}>
              <div className='circle'> 
                <img src={Afordability} alt='affordability'/>
              </div>
              <p style={{fontSize:'6px'}}> Seamlessness in Usage and <br/> Affordability</p>
              </div>
              <div className='line'> </div>
              <div style={{display:'flex', flexDirection:'column', alignItems:'center', padding:'0 10px'}}>
              <div className='circle'> 
              <img src={Quality} alt='affordability'/>
              </div>
              <p style={{fontSize:'6px'}}> Seamlessness in Usage and <br/> Affordability</p>
              </div>

              <div className='line'> </div>
              <div style={{display:'flex', flexDirection:'column', alignItems:'center', padding:'0 10px'}}>
              <div className='circle'> 
              <img src={Innovation} alt='affordability'/>
              </div>
              <p style={{fontSize:'6px'}}> Seamlessness in Usage and <br/> Affordability</p>
              </div>
           
             
          </div>

          <div className='container4'>
             <div className='cont4-sub-cont1'>
               <div style={{color:"white", marginTop:'20px'}}>
                  <p style={{fontSize:'6px'}}> Our Products:</p>
                  <h1 style={{fontSize:'14px'}}> Die Cast <br/>Series</h1>
                  <p style={{fontSize:'6px'}}>Die Cast Technology allows for metal <br/> thickness exactly where it’s needed. So <br/> your pan is strong and heats evenly.</p>
                  <ul style={{padding:'13px', fontSize:'6px'}}>
                    <li>Low Gas Consumption </li>
                    <li>Five Layer Coating </li>
                    <li>Easy to Clean </li>
                    <li>Non Toxic, Non Deformation </li>
                    
                  </ul>
                  <button id='bt' style={{backgroundClip:'white', border:'none', borderRadius:'20px', padding:'5px 10px', fontFamily:'Prompt sans-serif', fontWeight:'400', fontSize:'6px'}}> Know More</button>
               </div>
               <div className='pan_image' style={{ position:'relative', height:'30vh', width:'20vw', display:'flex'}}>
                  <img src={Rectangle_30} alt='' style={{position:'absolute', height:'auto', width:'180%', transform:'rotate(-7.34deg)', border:'2px solid #FFFFFF80', borderRadius:'10px', top:'20%', left:'-20%', opacity:'0.7'}}/>
                  <img src={image2} alt='' style={{position:'absolute', width:'280%', height:'auto', justifyContent:'center', top:'15%', left:'-80%'}} />
               </div>
               
             </div>
             <div className='cont4-sub-cont2' style={{ position:'relative', display:'flex', justifyContent:'space-around', width:'100%', height:'auto', marginTop:'20px'}}>
               <div>
                 <img src={Rectangle_30} alt='' style={{position:'absolute', width:'36%', height:'auto', transform:'rotate(-7.34deg)', border:'2px solid #FFFFFF80', borderRadius:'10px', top:'25%', left:'8%', opacity:'0.7'}}/>
                 <img  src ={image3} alt='' style={{position:'absolute', width:'65%', height:'auto', transform:'rotate(3.4deg)', left:'0%', top:'2%'}} />
                 <img  src ={image4} alt='' style={{position:'absolute', width:'32%', height:'auto',  transform:'rotate(18deg)', top:'43%', left:'13%'}} />
               </div>
               <div style={{marginRight:'-30px', textAlign:'right', color:'white', marginBottom:'50px'}}>
                 <h1 style={{fontSize:'13px'}}> Press <br/> Series</h1>
                 <p style={{fontSize:'6px'}}> Elegantly designed and lightweight cookware <br/>  which ensures faster and nutritious cooking <br/> with even heat distribution.</p>
                 <ul  style={{ paddingLeft: '0', marginLeft: '0', listStylePosition: 'inside', fontSize:'6px', marginTop:'50px'}}>
                    <li>Available in 3 and 5 layer coating  </li>
                    <li>Coating for Uniform Browning </li>
                    <li>Cool Touch  </li>
                    <li>Bakelite Handle </li>
                    
                  </ul>
                  <button style={{marginTop:'5px',backgroundColor:'white', border:'none', borderRadius:'20px', padding:'5px 10px', fontFamily:'Prompt sans-serif', fontWeight:'400', fontSize:'6px', color:'#EF7C00'}}> Know More</button>
               </div>
             </div>
          </div>

          <div className='container5' style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', marginTop:'30px'}}>
           <h5 style={{fontSize:'5px', margin:'2px 0'}}> DELIVERING A PREMIUM COOKING EXPERIENCE</h5>
           <h1 style={{fontSize:'13px', margin:'2px 0'}}> Request More Information</h1>
           <p style={{fontSize:'5px', margin:'2px 0'}}> Have we missed anything? Have any other questions?
           <br/>
           Feel free to contact us for further support.</p>
           <button style={{fontSize:'7px' ,backgroundColor:'white', color:'#EF7C00', border:'none', borderRadius:'20px', padding:'2px 5px', fontFamily:'Prompt, san-serif', fontWeight:'400', marginTop:'5px'}}> Contact Us</button>
           <h7 style={{margin:'16px 0', fontWeight:'400', fontFamily:'"Prompt", san-serif', fontSize:'6px'}}>© 2024 Vardhaman LLC</h7>
          </div>

          <div style={{display:'flex', border:'1px solid #00000040', opacity:'0.5', width:'90%', margin:'auto'}}> </div>

          <footer style={{display: 'flex', justifyContent:'space-evenly'}}>
            <div style={{}} > <img src={Logo} alt='' style={{height:'auto', width:'60%'}}/></div>
            <ul style={{ display: 'flex', justifyContent: 'center', listStyle: 'none', margin: '0', padding: '0', fontSize:'6px'}}>
              <li style={{ padding:'0 2px'}}>About</li>
              <li style={{ padding:'0 2px'}}>Products</li>
              <li style={{ padding:'0 2px'}}>Home</li>
            </ul>
            <ul style={{display: 'flex', justifyContent: 'flex-end', listStyle: 'none', margin: '0', paddingLeft: '15px'}}>
              <img src={linkedin} alt='' style={{ padding:'0 2px', width:'20%', height:'auto'}} />
              <img src={facebook} alt='' style={{ padding:'0 2px', width:'20%', height:'auto'}} />
              <img src={insta} alt='' style={{ padding:'0 2px', width:'20%', height:'auto'}} />
            </ul>
            
          </footer>
      </div>
   
  )
}

export default App
