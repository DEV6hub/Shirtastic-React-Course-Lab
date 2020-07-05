import React from 'react';
import './Shirt.css';

const shirts = [
  {
    id: 1,
    name: 'Happy Shirt',
    description: 'Womens Fine Jersey Short Sleeve',
    price: 14.99,
    image: 'WomensShirt-blue',
    quantity: 0,
    subtotal: 0,
    graphic: 'graphic12.svg',
    font: "'Orbitron', sans-serif",
    text: 'happy little trees',
    textColor: { name: 'white', color: '#FFFFFF' },
    shirtStyle: 'WomensShirt',
    shirtColor: { name: 'blue', color: '#2674A8' },
    graphicColor: { color: '#444444', name: 'black' },
  },
  {
    id: 2,
    name: '4 Coders',
    description: 'Mens Fine Jersey Short Sleeve',
    price: 14.99,
    image: 'MensShirt-red',
    quantity: 0,
    subtotal: 0,
    graphic: 'graphic1.svg',
    font: "'Montserrat', sans-serif",
    text: 'KEEP CALM AND CODE ON',
    textColor: { name: 'green', color: '#44A265' },
    shirtStyle: 'MensShirt',
    shirtColor: { name: 'red', color: '#A7386B' },
    graphicColor: { color: '#44a264', name: 'green' },
  },
];
function Shirt() {
  return (
    <div>
      {shirts.map((shirt) => {
        return shirt.shirtStyle === 'WomensShirt' ? (
          <div key={shirt.id}>
            <p>{shirt.name}</p>
            <p>{shirt.description}</p>
            <p>{shirt.price}</p>
          </div>
        ) : (
          <></>
        );
      })}
    </div>
  );
}

export default Shirt;
