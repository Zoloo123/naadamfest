import React from 'react';
import './header.css';
import Link from 'next/link';
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
          <a href="/" className="logo"><h1>Naadam Festival</h1> <span className='logospan'>Fascinating event of the nomads</span></a>
          <input className="menu-btn" type="checkbox" id="menu-btn" />
          <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>
          <ul className="menu">
            <li>
                <Link href="/">HOME</Link>
            </li>
            <li>
                <Link href="/alltours">NAADAM FESTIVAL TOURS</Link>
            </li>
            <li>
                <Link href="/travelsupport">TRAVEL SUPPORT</Link>
            </li>
            <li>
                <Link href="/tailormadeholiday">TAILOR MADE HOLIDAY</Link>
            </li>
            <li>
                <Link href="/contactus">CONTACT US</Link>
            </li>
            <li>
                <Link href="/aboutus">ABOUT US</Link>
            </li>
            <li>
                <Link href="/requestbrochure">REQUEST BROCHURE</Link>
            </li>
          </ul>
        </header>
  );
};

export default Header;