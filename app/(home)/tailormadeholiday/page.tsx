
import React from 'react';
import './holiday.css';

const page = () => {
  return (
    <>
      <div className='cont1 container'>
          <div><p>Home | Tailor Made Holiday</p></div>
      </div>
      <div className='holiday'>
        <h1>Tailor Made Holiday</h1>
        <p className='mb-3'>
        Whether you choose our adventure tours or tailor made holidays in Mongolia, our personal service begins with your first enquiry and continues through your whole trip.
        </p>
        <p className='mb-3'>
        Tailor-made tours offer you the flexibility to choose your own path. You can decide how and when to travel, the level of service and the hotel standard. Our operation team offers locally informed, personalised service, stimulating family adventures in accordance with your individual priorities. You tell us your ideas about where you want to go and how you like to travel and we’ll simply piece it together using our firsthand knowledge because we are local operator, offering you advice and working with you every step of the way. This flexibility makes a trip with Jargal Expedition a unique and special experience for you. You no longer need to worry about cancellations due to low numbers as most of our departures in Mongolia, whether joining shared services for excursions or completely going solo, are guaranteed to depart. For our clients convenient, we designed our offers precisely for individuals including seniors and women, couples, groups, families and special interest groups of all ages. You can experience epic journeys through the national parks of the west and northwest and northeast, astonishing dinosaur's home in Mongolian Great Gobi, celebrate national Naadam festival with us, delve into nomadic life on a nomadic family stay, discover in the Western Mongolian mountains or wonder the amazing Gobi dunes or inspire the finest fresh water lake in the Asia.
        </p>
        <h3>You can tailor:</h3>
        <ul className='mb-3'>
          <li>Your Itinerary</li>
          <li>Your Accommodation</li>
          <li>Your Transportation</li>
          <li>Meals</li>
        </ul>
        <h3>
          <b>Tell us where and when you would like to go and what you would like to see in Mongolia.</b>
        </h3>
        <p className='mb-3'>
          <b>Contact us about Tailor Made Holiday</b>
        </p>
        <div className='contract-forms'>
          <label htmlFor="" className='mb-4'>Your Name</label>
          <input type="text" name='name' className='form-control border-secondary-subtle mb-3' placeholder='Enter your name' />
          <label htmlFor="" className='mb-4'>Email</label>
          <input type="email" name='email' className='form-control border-secondary-subtle mb-3' placeholder='Enter your email' />
          <label htmlFor="" className='mb-4'>Your questions & comments</label>
          <div className="form-floating mb-3">
            <textarea className="form-control  border-secondary-subtle textareawidth" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
            <label htmlFor="floatingTextarea">Comments</label>
          </div>
          <button type="button" className="btn btn-primary">Send</button>
        </div>
      </div>
    </>

  )
}
export default page