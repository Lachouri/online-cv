import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import "../style/Menu.css";

function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

export default class Menu extends React.Component {
  render() {
    return (<div className="section-menu">
      <nav className="classicnav">

        <div className="home"><AnchorLink href="#home" className="middle">Home</AnchorLink></div>
        <div className="about"><AnchorLink href="#about" className="middle">About</AnchorLink></div>
        <div className="resume"><AnchorLink href="#resume" className="middle">Resume</AnchorLink></div>
        <div className="projects"><AnchorLink href="#projects" className="middle">Projects</AnchorLink></div>
        <div className="contact"><AnchorLink href="#contact" className="middle">Contact</AnchorLink></div>

      </nav>
      <span className="openbutton" onClick={openNav}>&#9776;</span>
      <div id="myNav" className="overlay">
        <a className="closebtn" onClick={closeNav}>&times;</a>
        <div className="overlay-content">
          <AnchorLink href="#home" className="middle">Home</AnchorLink>
          <AnchorLink href="#about" className="middle">About</AnchorLink>
          <AnchorLink href="#resume" className="middle">Resume</AnchorLink>
          <AnchorLink href="#projects" className="middle">Projects</AnchorLink>
          <AnchorLink href="#contact" className="middle">Contact</AnchorLink>
        </div>
      </div>
    </div>


    )
  }
}
