import React from 'react';
import './Shirt.css';

const shirt = {
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
  textColor: {
    name: 'white',
    color: '#FFFFFF',
  },
  shirtStyle: 'WomensShirt',
  shirtColor: {
    name: 'blue',
    color: '#2674A8',
  },
  graphicColor: {
    color: '#444444',
    name: 'black',
  },
};
function Shirt() {
  // const elt = React.createElement(
  //   'div',
  //   null,
  //   React.createElement('p', null, shirt.name),
  //   React.createElement('p', null, shirt.description),
  //   React.createElement('p', null, shirt.price),
  // );
  // return elt;
  return (
    <div>
      <p>{shirt.name}</p>
      <p>{shirt.description}</p>
      <p>{shirt.price}</p>
    </div>
  );
}

export default Shirt;
