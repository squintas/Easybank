import './navbar.css';
import '../button/invButton.js'
import InvButton from '../button/invButton.js';
import { useState } from 'react';

function Navbar () {

   // const hamburger = document.querySelector(".hamburger-icon");

   const [ isActive, setActive ] = useState("false");
   
   const handleToggle = () => {
      setActive(!isActive);


      // if(isActive) {
      //    hamburger.src = "../assets/images/icon-close.svg"
         
      // } else { 
      //    hamburger.src = "../assets/images/icon-hamburger.svg"
      // }

   };

   

   
  

    return (
   
        <div>
           <div className="desktopNavbar">
               <nav>
               <img className="logo"src="./assets/images/logo.svg" alt ="easybank"/>
               <ul>
                   <li>
                      <p>Home</p>
                   </li>
                   <li>
                      <p>About</p>
                   </li>
                   <li>
                      <p>Contact</p>
                   </li>
                   <li>
                      <p>Blog</p>
                   </li>
                   <li>
                      <p>Careers</p>
                   </li>
               </ul>
               <InvButton />
               </nav>
           </div>


           <div class="mobileNavbar">
               <nav>
                  <div>
                     <img className="logo" src="./assets/images/logo.svg" alt ="easybank"/>
                  </div>

                  <div>
                     <img onClick = { handleToggle } className="hamburger-icon" src="./assets/images/icon-hamburger.svg" alt=""></img>
                  </div>

               <div className="mobileNavbarPopup" >
                  <div className = {isActive ? "hide" : null}>
                     <div>
                        <img onClick = { handleToggle } className="icon-close" src="./assets/images/icon-close.svg" alt ="easybank"/>
                     </div>
                        <ul>
                           <li>
                              <p>Home</p>
                           </li>
                           <li>
                              <p>About</p>
                           </li>
                           <li>
                              <p>Contact</p>
                           </li>
                           <li>
                              <p>Blog</p>
                           </li>
                           <li>
                              <p>Careers</p>
                           </li>
                        </ul>
                  </div>
               </div>
               </nav>
           </div>
        </div>
        
    );

}

export default Navbar;

