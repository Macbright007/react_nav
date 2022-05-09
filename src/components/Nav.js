import React, { useEffect, useState } from "react";
import { Navigation, NavItems } from "./styles";

const Nav = () => {
  const [hideMobileMenu, setHideMobileMenu] = useState(true);

  const ToggleHamburger = () => {
    setHideMobileMenu(!hideMobileMenu);
  };

  useEffect(() => {
    if(window.innerWidth > 650) {
      setHideMobileMenu(false)
    }
  },[])

  return (
    <Navigation>
      <h1>
        <span>Be.</span>blog
      </h1>

      {hideMobileMenu ? (
        <label for="toggle" onClick={ToggleHamburger}>
          &#9776;
        </label>
      ) : (
        <label for="toggle" onClick={ToggleHamburger}>
          &#9747;
        </label>
      )}
      <input type="checkbox" id="toggle" />
      {hideMobileMenu ? null : (
        <div className="navContent">
          <a>Home</a>
          <a>About</a>
          <a>Blog</a>
        </div>
      )}
      {/* <NavItems>
        <button>LogIn</button>
      </NavItems> */}
    </Navigation>
  );
};

export default Nav;
