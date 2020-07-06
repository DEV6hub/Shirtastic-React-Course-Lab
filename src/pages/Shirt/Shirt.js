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
const womensShirt = shirts[0];
function Shirt() {
  return (
    <div className="container">
      <div className="shirt-panel">
        <h4>{womensShirt.name}</h4>
        <img
          className="shirt-img"
          alt="womens-shirt"
          src={require(`../../images/shirts/womens/${womensShirt.image}.jpg`)}
        />
        <p
          style={{
            position: 'absolute',
            fontFamily: womensShirt.font,
            color: womensShirt.textColor.color,
          }}
        >
          {womensShirt.text}
        </p>
        <p>{womensShirt.description}</p>
        <p>{womensShirt.price}</p>
      </div>
    </div>
  );
}

export default Shirt;
