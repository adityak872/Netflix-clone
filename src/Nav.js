import React, { useState, useEffect } from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

function Navbar() {
  //   const [show, handleShow] = useState(false);

  //   useEffect(() => {
  //     window.addEventListener("scroll", () => {
  //       if (window.scrollY > 80) {
  //         handleShow(true);
  //       } else handleShow(false);
  //     });
  //     return () => {
  //       window.removeEventListener("scroll", useEffect);
  //     };
  //   }, []);

  return (
    <div className="nav">
      <div>
        <img
          id="logo"
          src="https://logos-download.com/wp-content/uploads/2016/03/Netflix_logo.png"
        ></img>
      </div>
      <div className="login">
        <Link to="/">
          <button>Logout</button>
        </Link>

        <img
          id="user"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        ></img>
      </div>
    </div>
  );
}

export default Navbar;
