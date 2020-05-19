import React from 'react';
import PropTypes from 'prop-types';
import './Shirt.css';
import { Container, Row, Col, Card } from 'reactstrap';
import { Link } from 'react-router-dom';
import shirtShape from '../Models/shirtShape';
import { useShoppingCartContext } from '../../state/contexts/shoppingCartContext';

const Shirt = ({ shirt }) => {
  const { addToCart } = useShoppingCartContext();
  const genderFolder = shirt.gender === 'M' ? 'mens' : 'womens';

  return (
    <Card className="text-center">
      {/* {shirt.graphic ? (
        <Link to={`/graphic/${shirt.graphic}`}>
          <img
            className="img-fluid shirt-graphic-img"
            src={shirt.graphic ? require(`../../images/shirt-graphics/${shirt.graphic}`) : ''}
            alt="shirt graphic"
          />
        </Link>
      ) : null} */}
      {/* {shirt.text ? (
        <div
          className="shirt-text-final"
          style={{ color: shirt.textColor.color, fontFamily: shirt.font }}
        >
          {shirt.text}
        </div>
      ) : null} */}
      {/* {console.log(`../../images/shirts/${genderFolder}/${shirt.image}.jpg`)} */}
      <img
        className="img-fluid"
        src={require(`../../images/shirts/${genderFolder}/${shirt.image}.jpg`)}
        alt="Shirt"
      />

      <h4 className="card-title">{shirt.name}</h4>
      <p>{`../../images/shirts/${genderFolder}/${shirt.image}.jpg`}</p>
      {/* <p className="description">{shirt.description}</p> */}
      {/* <Container>
        <Row className="btn-row">
          <Col className="icon-basket" xs="2" onClick={() => addToCart(shirt)} />
          <Col className="text" xs="8">
            <strong>${shirt.price}</strong>
          </Col>
          <Col xs="2">
            <Link to={`/design/${shirt.id}`} className="icon-edit" />
          </Col>
        </Row>
      </Container> */}
    </Card>
  );
};

Shirt.propTypes = {
  shirt: PropTypes.shape(shirtShape).isRequired,
};

export default Shirt;
