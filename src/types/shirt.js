import { shape, number, string } from 'prop-types';

const shirtType = shape({
  id: number,
  name: string,
  description: string,
  price: number,
  image: string,
  gender: string,
  quantity: number,
  subtotal: number,
  graphic: string,
  font: string,
  text: string,
  textColor: shape({
    name: string,
    color: string,
  }),
  shirtStyle: string,
  shirtColor: shape({
    name: string,
    color: string,
  }),
  graphicColor: shape({
    name: string,
    color: string,
  }),
});

export default shirtType;
