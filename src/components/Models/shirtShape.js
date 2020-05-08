import PropTypes from 'prop-types';

const shirtShape = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  subtotal: PropTypes.number.isRequired,
  shirtStyle: PropTypes.string.isRequired,
  shirtColor: PropTypes.shape({
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
  }),
  text: PropTypes.string.isRequired,
  textColor: PropTypes.shape({
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
  }),
  font: PropTypes.string.isRequired,
  graphic: PropTypes.string.isRequired,
  graphicColor: PropTypes.shape({
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
  }),
};

export default shirtShape;
