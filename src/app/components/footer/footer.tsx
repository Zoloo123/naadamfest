import React from 'react';
import './footer.css'

const Footer: React.FC = () => {
  return (
    <footer className='container'>
      <div className='row footer mt-3 mb-3'>
        <div className='col-12 col-md-4 mb-3'>
          <p className='mt-4'>
          Naadam Fest is a trade mark of Jargal Expedition Ltd. <br />
          Registered in Mongolia. Company Registration Number: 6497969. <br />
          Registered Office: Khan-Uul District, Chingis Khan Avenue-20/1, Ulaanbaatar, Mongolia
          </p>
        </div>
        <div className='col-12 col-md-4 garegories mb-3'>
          <p className='title'>
            CATEGORIES
          </p>
          <a href=""><p>ABOUT US</p></a>
          <a href=""><p>BOOKING TERMS AND CONDITIONS</p></a>
          <a href=""><p>FOR TRAVEL AGENT</p></a>
          <a href=""><p>PRIVACY POLICY</p></a>
        </div>
        <div className='col-12 col-md-4 mb-3 garegories'>
          <p className='title'>FESTIVAL TOURS</p>
          <a href=""><p>
            NAADAM FESTIVAL AND ANCIENT CAPITAL CITY
          </p></a>
          <a href="">
            <p>
              NAADAM FESTIVAL AND CENTRAL REGION OF MONGOLIA
            </p>
          </a>
          <a href="">
            <p>
              NAADAM FESTIVAL AND EPIC MONGOLIAN OVERLORD
            </p>
          </a>
          <a href="">
            <p>
              NAADAM FESTIVAL AND IMPRESSIONS OF THE GREAT GOBI DESERT
            </p>
          </a>
         <a href="">
          <p>
            NAADAM FESTIVAL AND MONGOLIAN BLUE PEARL
          </p>
         </a>
          <a href="">
            <p>
              NAADAM FESTIVAL AND ULTIMATE WEST
            </p>
          </a>
          
        
        </div>
      </div>
    </footer>
  );
};

export default Footer;