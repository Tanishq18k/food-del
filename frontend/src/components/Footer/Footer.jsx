import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className='footer-content'>

        <div className='footer-content-left'>
          <img src={assets.logo} alt="" />
          <p>
            <p>
  Tomato is your trusted food delivery platform, bringing delicious meals
  from your favorite restaurants straight to your doorstep. Fast delivery,
  fresh food, and a seamless ordering experience.
</p>
          </p>

          <div className='footer-social-icons'>
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>

        <div className='footer-content-center'>
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div className='footer-content-right'>
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+9845-368-446</li>
            <li>tomato18@gmail.com</li>
          </ul>
        </div>

      </div>

      <hr />

      <p className='footer-copyright'>
  © 2026 Tomato. All Rights Reserved. Designed & Developed by Tanishq.
</p>
    </div>
  )
}

export default Footer