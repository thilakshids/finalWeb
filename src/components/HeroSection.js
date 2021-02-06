import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='arr'>
      <video src='/videos/Black.mp4' autoPlay loop muted />
      <div>
        <h1 className="crr">Use Me</h1>
      </div>
      <div className='drr'>
        <h1>Delivery Service</h1>
      </div>
      <p className="err">Ultimate Shopping Experience</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Order Now
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
