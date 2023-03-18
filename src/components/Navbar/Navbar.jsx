import React from "react";
import "../Navbar/Navbar.css";

function Navbar() {
  return (
    <nav className="nav">
      <div className="menu">
        <div>
          <h1>Sound</h1>
        </div>
        <div className="group_link">
          <img src={require("../../Images/home-alt-2-regular-24.png")} alt="" />
          <a className="link" href="">
            Home
          </a>
        </div>
        <div className="group_link">
          <img src={require("../../Images/search-regular-24.png")} alt="" />
          <a className="link" href="">
            Search
          </a>
        </div>
        <div className="group_link">
          <img src={require("../../Images/library-regular-24.png")} alt="" />
          <a className="link" href="">
            Library
          </a>
        </div>
      </div>

      <div className="playlist">
        <div className="group_link">
          <img src={require("../../Images/list-plus-regular-24.png")} alt="" />
          <a className="link" href="">
            Create Playlists
          </a>
        </div>
        <div className="group_link">
          <img src={require("../../Images/heart-regular-24.png")} alt="" />
          <a className="link" href="">
            Liked Songs
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
