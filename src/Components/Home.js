import React from 'react'
import'./style.css'
import icon from './images/iconbig.jpg'
import blue from './images/blueimg.jpg'
const Home = () => {
  return (
   <>
   {/* NAV BAR SECTION: */}
   <div className='navflex'>
      <div>
       <img src="http://salandobservatory.org/wp-content/uploads/2015/09/LANDdOCs-1.jpg" alt=' Not found !!!' style={{height:"100px",width:"120px"}}/>
       </div>
     
       <div className='NavTitles'>
       Home
       </div>

       <div  className='NavTitles'>
       Knowledge Centre

       <i className="fa fa-sort-down" style={{fontSize:"24px",position:"relative",left:"10px",bottom:"2px"}}></i>
       </div>

       <div  className='NavTitles'>
        FAQs
       </div>
       
       <div  className='NavTitles'>
           Gallery
       </div>
       
       <div  className='NavTitles'>
           Ask a Legal Expert
       </div>

       <div  className='NavTitles'>
           Login
       </div>

       <div>
           <button className="btnCreate">
               Create Account
           </button>
       </div> 
   </div>


   <br/> <br/> <br/>
   <br/>


   {/* BEGINNING SECTION */}
   <div className='backgroundpart'>
   <img src="https://static.vecteezy.com/system/resources/thumbnails/002/209/153/small/abstract-polka-dot-background-with-small-dots-free-vector.jpg"
    alt='not found!!' className='dotImg'/>
 
       <img src="https://assets-news.housing.com/news/wp-content/uploads/2020/08/18173633/Telangana-land-and-property-registration-All-you-need-to-know-FB-1200x700-compressed.jpg" alt='not found!!' style={{float:"right", width:"500px",height:"600px"}}/>
  
  
  
       <h1 className='BeginHeading'>
           Single Platform <br/> for land services
       </h1>
       <p className='BeginContent'>
           Creating a single digital platform on land connecting all<br/> the stakeholders
            around the world providing all land services<br/> pertaining to the land across the country at ones doorsteps<br/>
            anywhere on the globe.
       </p>
       <button className='Beginbtn'>
           Register with us
       </button>
    
       <i className="fa fa-angle-left lefticon" style={{fontSize:"36px"}}></i>
       <i className="fa fa-angle-right righticon" style={{fontSize:"36px"}}></i>
       </div>
{/* FEATURES SECTION */}

<br/><br/><br/>
<div className='backgroundpart'>
    <h1 className='Featuretitle'>Our Features</h1>

    <div className='flexrightFeature'>


        <div className='first'>
            
        <i className="fa fa-youtube-play ytube"  style={{fontSize:"36px",position:"relative" , top:"4px"}}></i>
      
        <span className='Featuretext'> Land Knowledge Centre</span>
        <br/>
         <p className='Featurecontent'>
         At vero eos et accusamus et iusto odio ducimus<br/>
          dignissimos ducimus qui blanditiis praesentium<br/>
           voluptatum deleniti atque corrupti quos dolores<br/>
         et quas molestias excepturi sint occaecati.<br/>
         </p>
        </div>



        <div className='second'>
        <i className="fa fa-desktop"  style={{fontSize:"36px",position:"relative" , top:"4px"}}></i>
        <span className='Featuretext'> Property Management</span>
        <p className='Featurecontent'>
        At vero eos et accusamus et iusto odio dignissimos<br/>
         ducimus qui blanditiis praesentium voluptatum <br/>
         deleniti atque corrupti quos dolores et quas<br/>
          molestias excepturi sint occaecati cupiditate<br/>
         </p>
        </div>


        <div className='third'>
        <i className="fa fa-phone"  style={{fontSize:"36px",position:"relative" , top:"4px"}}></i>
        <span className='Featuretext'> Legal Assistance</span>
        <p className='Featurecontent'>
        At vero eos et accusamus et iusto odio dignissimos<br/>
         ducimus qui blanditiis praesentium voluptatum <br/>
         deleniti atque corrupti quos dolores et quas<br/>
          molestias excepturi sint occaecati cupiditate<br/>
         </p>
        </div>

    </div>

<div className='flexleftFeature'>

<div className='first'>
            
            <i className="fa fa-map-marker"  style={{fontSize:"36px",position:"relative" , top:"4px"}}></i>
          
            <span className='Featuretext'> The Land Specialist</span>
            <br/>
             <p className='Featurecontent'>
             At vero eos et accusamus et iusto odio ducimus<br/>
              dignissimos ducimus qui blanditiis praesentium<br/>
               voluptatum deleniti atque corrupti quos dolores<br/>
             et quas molestias excepturi sint occaecati.<br/>
             </p>
            </div>
    
    
    
            <div className='second'>
            <i className="fa fa-arrow-down"  style={{fontSize:"36px",position:"relative" , top:"4px"}}></i>
            <span className='Featuretext'> Land Legal Awareness</span>
            <p className='Featurecontent'>
            At vero eos et accusamus et iusto odio dignissimos<br/>
             ducimus qui blanditiis praesentium voluptatum <br/>
             deleniti atque corrupti quos dolores et quas<br/>
              molestias excepturi sint occaecati cupiditate<br/>
             </p>
            </div>
    
    
            <div className='third'>
            <i className="fa fa-mobile-phone"  style={{fontSize:"36px",position:"relative" , top:"4px"}}></i>
            <span className='Featuretext'> Cost and Time saver</span>
            <p className='Featurecontent'>
            At vero eos et accusamus et iusto odio dignissimos<br/>
             ducimus qui blanditiis praesentium voluptatum <br/>
             deleniti atque corrupti quos dolores et quas<br/>
              molestias excepturi sint occaecati cupiditate<br/>
             </p>
            </div>

</div>
</div>
<br/><br/>
{/* Happy landowners Section */}
<div className='thirdsection'>
{/* <img src="https://static.vecteezy.com/system/resources/thumbnails/002/209/153/small/abstract-polka-dot-background-with-small-dots-free-vector.jpg"
    alt='not found!!' className='dotImg'/> */}
    <br/>
    <p style={{float:"right",fontSize:"58px",color:"#FFFFFF", fontFamily: 'Oswald',position:"relative",right:"4vh"}}>
    Happy landowners with <br/>
    secure land rights and<br/>
     enhanced land value
    </p>
    <img src="https://media.istockphoto.com/photos/real-estate-agent-giving-house-keys-picture-id807295382?k=20&m=807295382&s=612x612&w=0&h=qGk7Tq8O6n4SDMkfPVWvyslPkd6FuNm-Cdl79F0XcX0="
     alt="not found" style={{marginLeft:"40px" ,marginTop:"40px"}}/>

</div>

{/* Our Team Section */}

<h1 className='Featuretitle'> Our Team</h1>
<div className='teamsection'>
<i className="fa fa-angle-left leftadjust" style={{fontSize:"36px",position:"relative",top:"10vh"}}></i>
       <div className='one' style={{textAlign:"center"}}>
     
           <img src={icon} alt="not found!"/>
           <p style={{color:"#282F33",fontFamily: 'Oswald',fontSize:"20px"}}>Peregrin Sandheaver</p>
           <p style={{color:"#999B9D",fontFamily: 'Oswald'}}>
           At vero eos et accusamus et iusto 
           odio dignissimos ducimus qui
           
           </p>

           
       </div>

       <div className='two' style={{textAlign:"center"}}>
       
           <img src={icon} alt="not found!"/>
           <p style={{color:"#282F33",fontFamily: 'Oswald',fontSize:"20px"}}>Selina Brandagamba</p>
           <p style={{color:"#999B9D",fontFamily: 'Oswald'}}>
           At vero eos et accusamus et iusto 
           odio dignissimos ducimus qui
           
           </p>

           
       </div>
       <div className='three' style={{textAlign:"center"}}>
       
       <img src={icon} alt="not found!"/>
       <p style={{color:"#282F33",fontFamily: 'Oswald',fontSize:"20px"}}>Valeriano Hernandes</p>
       <p style={{color:"#999B9D",fontFamily: 'Oswald'}}>
       At vero eos et accusamus et iusto 
       odio dignissimos ducimus qui
       </p>
   

       
   </div>

   <i className="fa fa-angle-right rightadjust" style={{fontSize:"36px" ,position:"relative",top:"10vh"}}></i>

   </div>

{/* Our Values Section */}
<br/><br/><br/>
<div className='ourvalues'>
<img src={blue} alt="not found" style={{float:"right"}}/>

    <h1  className='Valuestitle'>Our Values</h1>
    <ul className='liststyle'>
    <li>We provide efficient services maintaining <br/>
        confidentiality.
        </li>
        <br/>
      <li>   We give highest priority to the needs<br/>
           and requirements of the users.
           </li>
           <br/>
           <li> Minimizing time, reducing cost and improving<br/>
             quality are our key concerns.</li>
    </ul>
    </div>

<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
<br/><br/><br/><br/><br/><br/><br/><br/>
{/* LandDoc Section */}

<div className='ourvalues'>

   <div style={{float:"right"}}>
    <h1  className='Valuestitle'>Why only LandDocs?</h1>
    <ul className='liststyle'>
    <li>Invest in land and leave the rest to LandDocs  <br/>
    for trusted management.
        </li>
        <br/>
      <li>    Highly qualified experts in all land related fields<br/>
      with decades of experience.
           </li>
           <br/>
           <li> Creating cadre of competent land service<br/>
           providers.</li>
    </ul>
    </div>

    <img src={blue} alt="not found"  />

    </div>
    <br/><br/><br/><br/><br/><br/><br/><br/><br/>


  
{/* about landdocs section */}
<div className='ourvalues'>
<img src={blue} alt="not found" style={{float:"right"}}/>

    <h1  className='Valuestitle'>About LandDocs</h1>
    <ul className='liststyle'>
    <li> All land related service available at your <br/>
    doorsteps on a single click or call.
        </li>
        <br/>
      <li>   Monitoring your land rights, records and <br/>
      boundaries from anywhere in the world.
           </li>
           <br/>
           <li>  All land services needs pertaining to land in<br/>
           India - from anywhere in the world.</li>
    </ul>
    </div>
    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
<br/><br/><br/><br/><br/><br/><br/><br/>


{/* Get in Touch Section */}

<div className='touchsection'>
    <h1 className='touchtitle'>Get in touch!</h1>
    <p className="Touchinfoone">Contact us for a quote, help us o join the team.</p>


      <div className='touchdetails'>

          <div className='firstdetail'>
     <i className="fa fa-map-marker"  style={{fontSize:"36px"}}></i>
     <p style={{fontSize:"12px",fontFamily:"Oswald",color:"#FCFCFD"}}>1-24 Vihan Nagar, Alwal</p>
     </div>

     <div className='seconddetail'>
     <i className="fa fa-phone"  style={{fontSize:"36px"}}></i>
     <p style={{fontSize:"12px",fontFamily:"Oswald",color:"#FCFCFD"}}>+91 45689 89012</p>
     </div>

     <div className='thirddetail'>
     <i className="fa fa-paper-plane-o"  style={{fontSize:"36px"}}></i>
     <p style={{fontSize:"12px",fontFamily:"Oswald",color:"#FCFCFD"}}>info@landocs.com</p>
     </div>

     </div>
<br/><br/>
<div className='feedbacksection'>
    <input type="text" placeholder="First Name" style={{width:"300px" ,height:"50px",color:"#FCFCFC",border:"#E0E8EE 2px solid",borderRadius:"4px",backgroundColor:"#E0E8EE"}}/>
    &nbsp;   &nbsp;   &nbsp;
    <input type="text" placeholder="Last Name" style={{width:"300px" ,height:"50px",color:"#FCFCFC",border:"#E0E8EE 2px solid",borderRadius:"4px",backgroundColor:"#E0E8EE"}}/>
    <br/> <br/> <br/>
    
    <input type="text" placeholder="Email Address" style={{width:"300px" ,height:"50px",color:"#FCFCFC",border:"#E0E8EE 2px solid",borderRadius:"4px",backgroundColor:"#E0E8EE"}}/>
    &nbsp;   &nbsp;   &nbsp;
    <input type="text" placeholder="Mobile no." style={{width:"300px" ,height:"50px",color:"#FCFCFC",border:"#E0E8EE 2px solid",borderRadius:"4px",backgroundColor:"#E0E8EE"}}/>
 <br/> <br/> <br/>
 <input type="text" placeholder="Type your message" style={{width:"640px" ,height:"200px",color:"#FCFCFC",border:"#E0E8EE 2px solid",borderRadius:"4px",backgroundColor:"#E0E8EE"}}/>
<br/><br/><br/>
<button style={{width:"650px",height:"50px",color:"#FFFFFF",backgroundColor:"#48B285",border:"none",borderRadius:"7px",fontSize:"16px"}}>
Submit
</button>

  
</div>

</div>
<div className='mainfooter'>
<div className='footersection'>
    <div className='firstfooter'>
       <span style={{fontFamily:"Oswald",fontSize:"40px",color:"#48B285"}}> Land</span> <span style={{fontFamily:"Oswald",fontSize:"40px",color:"#FFFFFF"}}>Docs</span>
       <p style={{fontFamily:"Oswald",color:"#FCFCFD",fontSize:"14px"}}>Plot no. 1-24 Vihan Nagar, Alwal<br/>
            Hyderabad - Telangana Sate<br/>
             500010</p>

    </div>
    <div className='secondfooter'>
        <ul style={{listStyle:"none",color:"#FCFCFD",fontFamily:"Oswald"}}>
        <li>Home</li>
        <br/>
        <li>Knowledge Centre</li>
        <br/>
        <li>Our Mission</li>
        <br/>
        <li>FAQs</li>
        <br/>
        </ul>
    </div>
    <div className='thirdfooter'>
    <ul style={{listStyle:"none",color:"#FCFCFD",fontFamily:"Oswald"}}>
        <li></li>
        <br/>
        <br/>
        <li>Knowledge Centre</li>
        <br/>
        <li>Our Mission</li>
        <br/>
        <li>FAQs</li>
        <br/>
        </ul>


    </div>
    <div className='fourthfooter'>
    <ul style={{listStyle:"none",color:"#FCFCFD",fontFamily:"Oswald"}}>
        <li></li>
        <br/>
        <br/>
        <li>Documents</li>
        <br/>
        <li>FAQs</li>
        <br/>
        <li>Registration</li>
        <br/>
        </ul>

    
    </div>

</div>
<p className='footerpara'>© 2022 Land Docs, India - Hyno Technologies</p>

</div>






   </>

  )
}

export default Home