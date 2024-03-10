import React from "react"
import "../index.css"
function Navbar() {
   return( 
    <nav>
        <img src={require("../Images/7 bridges logo 2.png")}  />
        <h1>7<b>Bridges</b> </h1>
        <h4>HOME</h4>
        <h4>BLOG</h4>
        <h4>ABOUT</h4>
        <h4>CONTACT</h4>
    
    </nav>
   )
}

export default Navbar