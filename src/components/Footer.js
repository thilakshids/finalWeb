import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
  
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Accounts</h2>
            <Link to='/deliver'>Deliver Account</Link>
            <Link to='/shop'>Business Account</Link>
            <Link to='/admin'>Admin Account</Link>
           
          </div>
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/contact-us'>Contact</Link>
            <Link to='/contact-us'>Support</Link>
            <Link to='/contact-us'>Destinations</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Get Help</h2>
            <Link to='/services'>Read FAQs</Link>
            <Link to='/services'>View all countries</Link>
            <Link to='/services'>Shops near at me</Link>
           
          </div>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <a href="https://linkedin.com">LinkedIn</a>
            <a href="https://facebook.com">Facebook</a>
            <a href='https://twitter.com/explore'>Twitter</a>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              Team Fix It
              
            </Link>
          </div>
          <small class='website-rights'>Team Fix It© 2021</small>
          <div class='social-icons'>
            <a
              class='social-icon-link facebook'
              href="https://facebook.com"
              target='_blank'
              aria-label='Facebook'
              target="_blank" 
              rel="noreferrer noopener"
            >
              <i class='fab fa-facebook-f' />
            </a>
            <a
              class='social-icon-link instagram'
              href='https://instagram.com'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </a>
            <a
              class='social-icon-link youtube'
              href='https://youtube.com'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </a>
            <a
              class='social-icon-link twitter'
              href='https://twitter.com/explore'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </a>
            <a
              class='social-icon-link twitter'
              href="https://linkedin.com"
              target='_blank'
              aria-label='LinkedIn'
              target="_blank" 
              rel="noreferrer noopener"
            >
              <i class='fab fa-linkedin' />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
