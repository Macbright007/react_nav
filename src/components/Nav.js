import React from "react";
import { Navigation, NavItems } from "./styles";

const Nav = () => {
  return (
    <Navigation>
      <h1>
        <span>Be.</span>blog
      </h1>

       
      
      <label for="toggle">&#9776;</label>
      <input type="checkbox" id="toggle" />
      <div className="navContent">
        <a>Home</a>
        <a>About</a>
        <a>Blog</a>
      </div>
      {/* <NavItems>
        <button>LogIn</button>
      </NavItems> */}
      
    </Navigation>
  );
};

export default Nav;
