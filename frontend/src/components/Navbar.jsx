import React from 'react'
import "./../assets/styles/style.scss"
import {Link} from "react-router-dom"
const Navbar = () => {
  return (
   <>
   <header>

       <div className="conatiner">
           <div className="left-sect">Pulse <span>.</span></div>
           <div className="right-sect">
               <ul >
                 <Link to="/">  <li>Home</li></Link>
             
               <li>About us</li>
               <li>Restaurant </li>
               <li>News </li>
               <li>Contact</li>
               <Link to="/wishlist"> <li>Wishlist</li></Link>
               <Link to="/basket"> <li>Baket</li></Link>
              
              
               </ul></div>
       </div>
   </header>
   </>
  )
}

export default Navbar