import React from 'react';
import './header.css';
const Header: React.FC = () => {
  return (
        // <header className="header-fixed">
        //   <nav>
        //   <div className="logo">Naadam Festival</div>
        //   <div className="navbar">
        //     <ul className="nav-menu">
        //       <li className="nav-item"><a href="#" className="nav-link">HOME</a></li>
        //       <li className="nav-item"><a href="#" className="nav-link">NAADAM FESTIVAL TOURS</a></li>
        //       <li className="nav-item"><a href="#" className="nav-link">TRAVEL SUPPORT</a></li>
        //       <li className="nav-item"><a href="#" className="nav-link">TAILOR MADE HOLIDAY</a></li>
        //       <li className="nav-item"><a href="#" className="nav-link">CONTACT US</a></li>
        //       <li className="nav-item"><a href="#" className="nav-link">ABOUT US</a></li>
        //       <li className="nav-item"><a href="#" className="nav-link">REQUEST BROCHURE</a></li>
        //     </ul>
        //   </div>
        //   <div className="hamburger">
        //     <span className="bar"></span>
        //     <span className="bar"></span>
        //     <span className="bar"></span>
        //   </div>
        // </nav>

        // </header>
        <header className="header">
          <a href="" className="logo"><p>Naadam Festival</p> <span className='logospan'>Fascinating event of the nomads</span></a>
          <input className="menu-btn" type="checkbox" id="menu-btn" />
          <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>
          <ul className="menu">
            <li><a href="#work">HOME</a></li>
            <li><a href="#about">NAADAM FESTIVAL TOURS</a></li>
            <li><a href="#careers">TRAVEL SUPPORT</a></li>
            <li><a href="#contact">TAILOR MADE HOLIDAY</a></li>
            <li><a href="#contact">CONTACT US</a></li>
            <li><a href="#contact">ABOUT US</a></li>
            <li><a href="#contact">REQUEST BROCHURE</a></li>
          </ul>
        </header>
  );
};

export default Header;