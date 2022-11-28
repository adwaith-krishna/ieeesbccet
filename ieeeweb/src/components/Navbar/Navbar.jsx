
import React, {useState} from 'react'
import './Navbar.css'


function Navbar() {
  const [click, setClick] = useState(false)



  return (
    
      
    <>
     <nav>

      
        <div>
       <ul id="navbar">
           <li><a className='active' href='/home.html'>Home</a></li>
             <li><a href='/home.html'>About</a></li>
             <li><a href='/home'>Execom</a></li>
             <li><a href='/home'>Events</a></li>
             <li><a href='/home'>Achievements</a></li>
             <li><a href='/home'>Chapters</a></li>
             <li><a href='/home'>Gallery</a></li>
        
             </ul>
             </div>

             <div id='mobile' onClick={()=>setClick(!click)}>
              <i 
              id="bar"
              className={click==0 ? "fas fa-bars":"fas fa-times"}></i>
             

             </div>
         </nav>
    </>
  )
}

export default Navbar