import React from "react";
import { NavLink } from "react-router-dom";
import "../index.css";

function Navbar() {
  return (
    <div>
      <nav>
        <NavLink to="/" exact >
          <img src={require("../Images/7 bridges logo 2.png")} alt="Logo" className="logoimage" />
        </NavLink>


        <NavLink to="/" exact >
          <footer className="bridgesfooter">
            Dream | Plan | Discover
          </footer>
        </NavLink>


        <NavLink to="/" exact >
          <h1 style={{ margin: '0 auto', color: 'rgb(17, 15, 15)', fontSize: '60px', fontWeight: 900, fontFamily: 'Didot, serif', padding: '1px', marginLeft: '-620px', marginTop: '1px' }}>
            7<b>Bridges</b>
          </h1>
        </NavLink>

        {/* Use NavLink for internal navigation */}
        <NavLink to="/" exact activeClassName="active-link"><h4>HOME</h4></NavLink>
        <NavLink to="/About" activeClassName="active-link"><h4>ABOUT</h4></NavLink>
        <a href="https://medium.com"><h4>BLOG</h4></a>
        <NavLink to="/contact" activeClassName="active-link"><h4>CONTACT</h4></NavLink>




      </nav>
      <div>
        <footer className="copyrightfooter">
          Copyright © 7Bridges. All Rights Reserved.
        </footer>
      </div>


    </div>
  );
};

export default Navbar;