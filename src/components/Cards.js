import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      {/* <h6 className="go">Products</h6> */}
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/pizza.jpg'
              text='All kind of food items are available'
              label='Food'
              path='/food'
            />
            <CardItem
              src='images/gents1.jpg'
              text='All kind of fashions are available'
              label='Fashion '
              path='/fashion'
            />
             <CardItem
              src='images/two.jpg'
              text='All kind of cosmetics are available'
              label='Cosmetics'
              path='/cosmetics'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/four.jpg'
              text='All kind of grocery items are available'
              label='Grocery'
              path='/grocery'
            />
            <CardItem
              src='images/six.jpg'
              text='All kind of stationary items are available'
              label='Stationary'
              path='/sta'
            />
            <CardItem
              src='images/five.jpg'
              text='All kind of Electronic Items are available'
              label='Electronic Devices'
              path='/devices'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;

