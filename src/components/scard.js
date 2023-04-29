import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Scards() {
  return (
    <div className='cards'>
      <h1>What we do!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-11.jpg'
              text='E-waste recycling is the process of extracting valuable materials after shredding the e-waste into tiny pieces that could be reused in a new electronic appliance.'
              label='E-waste Recycling'
              path='/services'
            />
            <CardItem
              src='images/img-12.png'
              text='Li-ion batteries are made of materials such as cobalt, graphite and lithium which are considered critical minerals.When these batteries are disposed of in the trash, we lose these critical resources outright. '
              label='Li-battery Recycling'
              path='/services'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Scards;
