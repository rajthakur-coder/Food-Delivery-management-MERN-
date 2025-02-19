import React from 'react'
import "./Footer.css"
import { assets } from '../../assets/assets'

function Footer() {
  return (
    <div className='footer' id="footer">
     <div className="footer-content">
     <div className="footer-content-left">
        <img src={assets.logo} alt=''/>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos, neque omnis dolorum vero consequatur tempora nesciunt. Eos saepe dolorem, praesentium iste temporibus cumque nesciunt eveniet sint eligendi ipsa. Non, praesentium!</p>
         <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt=''/>
            <img src={assets.twitter_icon} alt=''/>
            <img src={assets.linkedin_icon} alt=''/>
         </div>
        </div>
        <div className="footer-content-center">
            <h2>COPMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+91 8820778804</li>
                <li>contact@tomato.com</li>
            </ul>
        </div>
        
     </div>
     <hr/>
     <p className='footer-copyright'>By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 2008-2025 © Tomato™ Ltd. All rights reserved. </p>
    </div>
  )
}

export default Footer