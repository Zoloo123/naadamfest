import React from 'react';
import './alltours.css'
import card1 from './../../../public/image/cards2.jpg'; 
import card from './../../../public/image/card1.jpg'; 
import logo from './../../../public/image/facebook.png'; 
import logo1 from './../../../public/image/Instagram.png'; 
import logo2 from './../../../public/image/twitter.png'; 
import logo3 from './../../../public/image/youtube.png'; 
import member1 from './../../../public/image/member1.png';
import Image from 'next/image'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faShareNodes } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const page = () => {
  return (
    <>
        <div className='cont1 container'>
          <p>Home | Naadam Festival Tours</p>
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
    </>
  )
}
export default page