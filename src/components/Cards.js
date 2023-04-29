import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Know our directors!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-10.jpg'
              text='Mohit Singhal is registered with Ministry of Corporate Affairs (MCA). Their DIN is 09814564.'
              label='MOHIT SINGHAL'
              path='/services'
            />
            <CardItem
              src='images/img-10.jpg'
              text='Vivek Goel is registered with Ministry of Corporate Affairs (MCA). Past works-PENPENCIL TECHNOLOGIES PRIVATE LIMITED
               as Director'
              label='VIVEK GOEL'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-10.jpg'
              text='Bharat Goyal is registered with Ministry of Corporate Affairs (MCA). Past works-
TENACIOUS CONSULTANCY SERVICES LLP
as Designated Partner
EDSCIENCE KNOWLEDGE SOLUTIONS PRIVATELIMITED
as Director'
              label='Bharat Goel'
              path='/services'
            />
            <CardItem
              src='images/img-10.jpg'
              text='Himanshu Singhal is registered with Ministry of Corporate Affairs (MCA). past works - TENACIOUS CONSULTANCY SERVICES LLP
              as Individual Partner , EDSCIENCE KNOWLEDGE SOLUTIONS PRIVATELIMITED as director'
              label='HIMANSHU SINGHAL'
              path='/services'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
