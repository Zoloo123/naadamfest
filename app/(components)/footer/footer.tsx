import React from 'react';
import './../../styles.css';
import './footer.css';
import logo from './../../../public/image/facebook.png'; 
import logo1 from './../../../public/image/Instagram.png'; 
import logo2 from './../../../public/image/twitter.png'; 
import logo3 from './../../../public/image/youtube.png'; 
import member1 from './../../../public/image/member1.png';
import Image from 'next/image'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';


const Footer: React.FC = () => {
  return (
    <footer>
      <div className='container-fluid  address'>
          <div className='row address-title'>
            <h1 className='text-center'>WE ARE HERE TO HELP</h1>
            <p className='text-center mb-3'>
              Whether you have a single question or a special request, we're here for you.
            </p>
            <div className='col col-md-6 col-12'>
              <h1>Contact</h1>
              <div className='contract'>
                <p className='text-center contract-text  mb-3'>
                  We will be happy to answer your questions about the Naadam Festival tours. Kindly provide the details below to know more about joining our extraordinary Naadam Festival exclusive tours.
                </p>
                {/* <div className="input-group mb-3">
                  <input type="text" className="form-control border-secondary-subtle"  placeholder="Your name" aria-label="Amount (to the nearest dollar)"/>
                </div>

                <div className="input-group mb-3">
                  <input type="email" className="form-control border-secondary-subtle" placeholder="Your email" aria-label="email"/>
                </div> */}

                {/* <div className="input-group">
                  <textarea className="form-control customtextarea border-secondary-subtle" aria-label="With textarea" placeholder='Your message'></textarea>
                </div> */}
                <div className="form-floating mb-3">
                  <input type="text" className="form-control" id="floatingName" placeholder="Your name"/>
                  <label htmlFor="floatingInput">Your name</label>
                </div>
                <div className="form-floating mb-3">
                  <input type="email" className="form-control" id="floatingEmail" placeholder="email"/>
                  <label htmlFor="floatingPassword">Your email</label>
                </div>
                <div className="form-floating">
                  <textarea className="form-control customtextarea" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                  <label htmlFor="floatingTextarea">Your message</label>
                </div>
                
                <button className="btn btn-primary mt-3 " type="submit">Send</button>
              </div>
            </div>
            <div className='col col-md-6 col-12'>
              <h1>Address</h1>
              <div className='socail'>
                <div className='d-flex align-items-center  social-content mb-4'>
                  <FontAwesomeIcon icon={faLocationDot} className='address-image1' />
                  <p>
                    Jargal Expedition LLC. Khan Uul District, 2 nd khoroo, Chingis Khaan Avenue, Ulaanbaatar, Mongolia
                  </p>
                </div>
                <div className='d-flex align-items-center social-content mb-4'>
                  <FontAwesomeIcon icon={faPhone}  className='address-image' />
                  <p>
                    976(1)-750-50-999
                  </p>
                </div>
                <div className='d-flex align-items-center  social-content mb-4'>
                  <a href="mailto:info@naadamfest.com">
                    <FontAwesomeIcon icon={faEnvelope}  className='address-image' />
                  </a>
                  <a href="mailto:info@naadamfest.com"><p> info@naadamfest.com </p></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      <div className='connect-us'>
        <div className='connect-top'>
          <hr/>
        </div>
        <div className='media-main d-flex row align-items-center justify-content-around'>
          <div className='media-title col-sm-6 col-12 mb-3'>
            <h1 className='text-center'> CONNECT WITH US</h1>
            <p className='text-center m-0'>Follow us around the world</p>
          </div>
          <div className='media-social col-sm-6 col-12'>
            <div className='d-flex logos justify-content-center'>
              <div>
                <a href="https://www.facebook.com/Naadam-Festival-103432442049755"><Image src={logo} alt="logo"/></a>
                <a href="https://www.instagram.com/naadamfestival/?fbclid=IwAR1UINf6SxN5dx4OjU7nylcWukrg1oBckEodI58vOKs4skKkokdeHrfqI0E"><Image src={logo1} alt="logo"/></a>
                <a href="https://twitter.com/NaadamF?fbclid=IwAR063lmtFuuu4bLKciMQX2Iwb4DSATSCRPQWUoB9kBoykRUT3QqjAT2KF8w"><Image src={logo2} alt="logo"/></a>
                <a href="#"><Image src={logo3} alt="Mongolia Banner"/></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='members row  d-flex align-items-center justify-content-center container mb-5'>
        <div className='col-6 col-md-3 col-lg-2  member-content'><h1>We Are <br />Member</h1></div>
        <div className='col-6 col-md-3 col-lg-2 member-content'>
          <a href="#"><Image src={member1} alt="members"/></a>
        </div>
        <div className='col-6 col-md-3  col-lg-2 member-content'>
          <a href="#"><Image src={member1} alt="members"/></a>
        </div>
        <div className='col-6 col-md-3  col-lg-2 member-content'>
          <a href="#"><Image src={member1} alt="members"/></a>
        </div>
        <div className='col-6 col-md-12 col-lg-2 member-content'>
          <a href="#"><Image src={member1} alt="members"/></a>
        </div>
      </div>
      <div className='container'>
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
      </div>
    
    </footer>
  );
};

export default Footer;