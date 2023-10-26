/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Footer from './../(components)/footer/footer';
import Header  from './../(components)/header/header';
import bannerImage from './../../public/image/banner3.jpg'; 
import bannerImage1 from './../../public/image/banner4.jpg'; 
import bannerImage2 from './../../public/image/banner5.jpg'; 
import card1 from './../../public/image/cards2.jpg'; 
import card from './../../public/image/card1.jpg'; 
import logo from './../../public/image/facebook.png'; 
import logo1 from './../../public/image/Instagram.png'; 
import logo2 from './../../public/image/twitter.png'; 
import logo3 from './../../public/image/youtube.png'; 
import member1 from './../../public/image/member1.png'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image'; 
import './../styles.css';
const Home: React.FC = () => {

  return (
    <div>
      <main>
        <div className='cont'>
          <div className='top-margin'></div>
          <div className='banner'>
            <div className='banner-top'></div>
            <Image
              src={bannerImage}
              alt="Mongolia Banner"
              className='image-banner'
            />
            <div className='banner-text'>
              <h1>
                There is nowhere else like it <br />
                <span>Mongolia is an unexplored beauty</span>
              </h1>
            </div>
            <div className='Home_bottom_text__JNvpT'>
              <p>
                Creating extraordinary tailor-made Naadam Festival journeys across Mongolia
              </p>
            </div>
          </div>
        </div>
        <div className='Home_why_travel__qUqit'>
          <h1>WHY TRAVEL WITH US</h1>
        </div>
        <div className='container-fluid m-0 p-0'>
          <div className='d-flex justify-content-around flex-wrap  mb-3'>
            <div className='Home_travel_text__ND7WF'>
              <h1>We are locals</h1>
              <p>
                We are truly enthusiastic about representing you the many features of our amazing country. We believe ourselves as generation of nomadic peoplse and proud so that as imperatively, we are honour of operating adventure tours for guests and giving them opportunity to experience about our culture and tradition through our selected discovey destinations in our country.
              </p>
            </div>
            <div className='Home_travel_text__ND7WF'>
              <h1>Guaranteed route & Real adventure</h1>
               <p>We don't offer overpriced luxury but tightly scripted both guaranteed route and real adventure. With assistance of our dedicated team and comfortable accommodation arrangement in the backcountry, we will provide you an authentic and real-life adventure in Mongolia.1</p>
            </div>
            <div className='Home_travel_text__ND7WF'>
              <h1>Personal service</h1>
              <p>
                Our personal service begins with your first enquiry and extends through your whole trip. For years we've been arranging distinctive adventure holidays throughout Mongolia. Each is personally designed to suit you to perfection. We keenly understand that your vacation is the most valuable time of the year and we are committed to make it the most memorable time of your life.
              </p>
            </div>
          </div>
        </div>
        <div className='banner2'>
          <div className='bannerimage2'>
            <div className='bannerimagetop2'></div>
            <Image
              src={bannerImage1}
              alt="Mongolia Banner"
              className='image-banner'
            />
            <div className='Home_naadam_div__2z_bi'>
              <p>WHY MONGOLIA</p> <br />
              <a href="">Learn more</a>
            </div>
          </div>
        </div>
        <div className='container-fluid m-0 p-0'>
          <div className='cards-main'>
            <div className='row'>
              <div className='cards_card_first col-md-3'>
                <div className='cards_cart_fff'>
                  <div className='cardsinner'>
                    <div className='cardstop'></div>
                    <Image
                    src={card}
                    alt='card'
                    className='image-banner'
                    />
                  </div>
                  <div className='cards-title'>
                    <a href="">
                      <h1>SAVE NOW</h1>
                    </a>
                    <p>
                      Special offers valid until 20 April 2022. Don't miss out!
                    </p>
                    <a href="">
                      <h1>UP TO 15%</h1>
                    </a>
                    <p>On Naadam Festival event </p>
                    <div className='cards-button'>
                      <a href="">
                        <button type='button' className='cards_button btn '>Learn more</button>
                      </a>
                    </div>
                  </div>

                </div>

              </div>
              <div className='col-md-9'>
                <div className='row'>
                  <div className='col-md-4 col-6'>
                    <div className='Cards_card_second'>
                      <a href="#">
                        <div className='cardsinner2'>
                          <div className='cardstop2'></div>
                          <Image
                            src={card1}
                            alt=''
                            className='image-banner'
                          />
                        </div>
                      </a>
                      <div className='cards-title2'>
                        <p>Trip Style: Classic, Short Break</p>
                        <a href="">
                          <p>NAADAM FESTIVAL AND ANCIENT CAPITAL CITY</p>
                        </a>
                        <p className='cards-date'>
                          7 Days
                        </p>
                        <hr />
                        <div className='d-flex justify-content-between align-items-center'>
                          <div>
                            <p>starting at:</p>
                            <p className='cards-date'>$1,320</p>
                          </div>
                          <div>
                            <button className='cards_button btn'>
                              View package
                            </button>
                          </div>
                        </div>

                      </div>
                      
                    </div>
                  </div>
                  <div className='col-md-4 col-6'>
                    <div className='Cards_card_second'>
                      <a href="#">
                        <div className='cardsinner2'>
                          <div className='cardstop2'></div>
                          <Image
                            src={card1}
                            alt=''
                            className='image-banner'
                          />
                        </div>
                      </a>
                      <div className='cards-title2'>
                        <p>Trip Style: Classic, Short Break</p>
                        <a href="">
                          <p>NAADAM FESTIVAL AND ANCIENT CAPITAL CITY</p>
                        </a>
                        <p className='cards-date'>
                          7 Days
                        </p>
                        <hr />
                        <div className='d-flex justify-content-between align-items-center'>
                          <div>
                            <p>starting at:</p>
                            <p className='cards-date'>$1,320</p>
                          </div>
                          <div>
                            <button className='cards_button btn'>
                              View package
                            </button>
                          </div>
                        </div>

                      </div>
                      
                    </div>
                  </div>
                  <div className='col-md-4 col-6'>
                    <div className='Cards_card_second'>
                      <a href="#">
                        <div className='cardsinner2'>
                          <div className='cardstop2'></div>
                          <Image
                            src={card1}
                            alt=''
                            className='image-banner'
                          />
                        </div>
                      </a>
                      <div className='cards-title2'>
                        <p>Trip Style: Classic, Short Break</p>
                        <a href="">
                          <p>NAADAM FESTIVAL AND ANCIENT CAPITAL CITY</p>
                        </a>
                        <p className='cards-date'>
                          7 Days
                        </p>
                        <hr />
                        <div className='d-flex justify-content-between align-items-center'>
                          <div>
                            <p>starting at:</p>
                            <p className='cards-date'>$1,320</p>
                          </div>
                          <div>
                            <button className='cards_button btn'>
                              View package
                            </button>
                          </div>
                        </div>

                      </div>
                      
                    </div>
                  </div>
                  <div className='col-md-4 col-6'>
                    <div className='Cards_card_second'>
                      <a href="#">
                        <div className='cardsinner2'>
                          <div className='cardstop2'></div>
                          <Image
                            src={card1}
                            alt=''
                            className='image-banner'
                          />
                        </div>
                      </a>
                      <div className='cards-title2'>
                        <p>Trip Style: Classic, Short Break</p>
                        <a href="">
                          <p>NAADAM FESTIVAL AND ANCIENT CAPITAL CITY</p>
                        </a>
                        <p className='cards-date'>
                          7 Days
                        </p>
                        <hr />
                        <div className='d-flex justify-content-between align-items-center'>
                          <div>
                            <p>starting at:</p>
                            <p className='cards-date'>$1,320</p>
                          </div>
                          <div>
                            <button className='cards_button btn'>
                              View package
                            </button>
                          </div>
                        </div>

                      </div>
                      
                    </div>
                  </div>
                  <div className='col-md-4 col-6'>
                    <div className='Cards_card_second'>
                      <a href="#">
                        <div className='cardsinner2'>
                          <div className='cardstop2'></div>
                          <Image
                            src={card1}
                            alt=''
                            className='image-banner'
                          />
                        </div>
                      </a>
                      <div className='cards-title2'>
                        <p>Trip Style: Classic, Short Break</p>
                        <a href="">
                          <p>NAADAM FESTIVAL AND ANCIENT CAPITAL CITY</p>
                        </a>
                        <p className='cards-date'>
                          7 Days
                        </p>
                        <hr />
                        <div className='d-flex justify-content-between align-items-center'>
                          <div>
                            <p>starting at:</p>
                            <p className='cards-date'>$1,320</p>
                          </div>
                          <div>
                            <button className='cards_button btn'>
                              View package
                            </button>
                          </div>
                        </div>

                      </div>
                      
                    </div>
                  </div>
                  <div className='col-md-4 col-6'>
                    <div className='Cards_card_second'>
                      <a href="#">
                        <div className='cardsinner2'>
                          <div className='cardstop2'></div>
                          <Image
                            src={card1}
                            alt=''
                            className='image-banner'
                          />
                        </div>
                      </a>
                      <div className='cards-title2'>
                        <p>Trip Style: Classic, Short Break</p>
                        <a href="">
                          <p>NAADAM FESTIVAL AND ANCIENT CAPITAL CITY</p>
                        </a>
                        <p className='cards-date'>
                          7 Days
                        </p>
                        <hr />
                        <div className='d-flex justify-content-between align-items-center'>
                          <div>
                            <p>starting at:</p>
                            <p className='cards-date'>$1,320</p>
                          </div>
                          <div>
                            <button className='cards_button btn'>
                              View package
                            </button>
                          </div>
                        </div>

                      </div>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='banner2'>
          <div className='bannerimage2'>
            <div className='bannerimagetop3'></div>
            <Image
              src={bannerImage2}
              alt="Mongolia Banner"
              className='image-banner'
            />
            <div className='Home_naadam_div__2z_bi'>
              <p>TAILORED JUST FOR YOU.</p> <br />
              <a href="">Learn more</a>
            </div>
          </div>
        </div>
        <div className='container-fluid  address'>
          <div className='row address-title'>
            <h1 className='text-center'>WE ARE HERE TO HELP</h1>
            <p className='text-center'>
              Whether you have a single question or a special request, we're here for you.
            </p>
            <div className='col col-md-6 col-12'>
              <h1>Contact</h1>
              <div className='contract'>
                <p className='text-center contract-text  mb-3'>
                  We will be happy to answer your questions about the Naadam Festival tours. Kindly provide the details below to know more about joining our extraordinary Naadam Festival exclusive tours.
                </p>
                <div className="input-group mb-3">
                  <input type="text" className="form-control border-secondary-subtle"  placeholder="Your name" aria-label="Amount (to the nearest dollar)"/>
                </div>

                <div className="input-group mb-3">
                  <input type="email" className="form-control border-secondary-subtle" placeholder="Your email" aria-label="email"/>
                </div>

                <div className="input-group">
                  <textarea className="form-control customtextarea border-secondary-subtle" aria-label="With textarea" placeholder='Your message'></textarea>
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
      </main>
    </div>
  );
};

export default Home;

