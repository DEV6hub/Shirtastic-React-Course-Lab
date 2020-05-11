import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';
import { createUser } from '../../state/actions/actions';
import { countries, regions } from '../Models/CountriesAndRegions';
import './SidenavShipping.css';
import { useUserContext } from '../../state/contexts/userContext';

const SidenavShipping = ({ openPayment }) => {
  const [userInfo, setUserInfo] = useUserContext();

  // componentWillReceiveProps(nextProps) {
  //   setState({
  //     name: nextProps.user.name,
  //     email: nextProps.user.email,
  //     address1: nextProps.user.address1,
  //     address2: nextProps.user.address2,
  //     phone: nextProps.user.phone,
  //     city: nextProps.user.city,
  //     country: nextProps.user.country,
  //     province: nextProps.user.province,
  //     zip: nextProps.user.zip,
  //   });
  // }

  const handleInputChange = (event) => {
    const { target } = event;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;

    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };

  // const updateShippingInfo = (event) => {
  //   const field = event.currentTarget;
  //   const val = field.value;
  //   setState({
  //     [field.id]: val,
  //   });

  //   if (field.id === 'country') {
  //     setState({ region: '' });
  //   }
  // };

  const updateUser = () => {
    createUser(userInfo);
  };

  // console.log(props.getUser());
  const regionsForSelectedCountry = regions[userInfo.country];

  return (
    <div>
      <div className="sidenav-shipping-container">
        <div className="sidenav-shipping-title">Shipping Info</div>
        <hr />
        <form onSubmit={updateUser}>
          <Row className="row-item">
            <Col className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                defaultValue={userInfo.name}
                className="form-control form-control-sm"
              />
            </Col>
          </Row>
          <Row className="row-item">
            <Col className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                name="email"
                value={userInfo.email}
                className="form-control form-control-sm"
                onChange={handleInputChange}
              />
            </Col>
          </Row>
          <Row className="row-item">
            <Col className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="text"
                name="phone"
                value={userInfo.phone}
                className="form-control form-control-sm"
                onChange={handleInputChange}
              />
            </Col>
          </Row>
          <Row className="row-item">
            <Col className="form-group">
              <label htmlFor="address1">Address 1</label>
              <input
                type="text"
                name="address1"
                value={userInfo.address1}
                className="form-control form-control-sm"
                onChange={handleInputChange}
              />
            </Col>
          </Row>
          <Row>
            <Col className="form-group">
              <label htmlFor="address2">Address 2</label>
              <input
                type="text"
                name="address2"
                value={userInfo.address2}
                className="form-control form-control-sm"
                onChange={handleInputChange}
              />
            </Col>
          </Row>
          <Row className="row-item">
            <Col className="form-group">
              <label htmlFor="city">City</label>
              <input
                type="text"
                name="city"
                value={userInfo.city}
                className="form-control form-control-sm"
                onChange={handleInputChange}
              />
            </Col>
          </Row>
          <Row>
            <Col className="form-group shipping-col">
              <label htmlFor="country">Country</label>
              <br />
              <select
                className="form-control form-control-sm"
                value={userInfo.country}
                name="country"
                onChange={handleInputChange}
                id="country"
              >
                <option value="">Select Option</option>
                {countries.map((country) => (
                  <option key={country.id} value={country.id}>
                    {country.name}
                  </option>
                ))}
              </select>
            </Col>
          </Row>
          <Row className="row-item">
            <Col className="form-group shipping-col">
              <label htmlFor="province">Province</label>
              <br />
              <select
                className="form-control form-control-sm"
                value={userInfo.province}
                name="province"
                onChange={handleInputChange}
                id="region"
              >
                <option value="">Select</option>
                {regionsForSelectedCountry && regionsForSelectedCountry.length > 0
                  ? regionsForSelectedCountry.map((region) => (
                      <option key={region} value={region}>
                        {region}
                      </option>
                    ))
                  : null}
              </select>
            </Col>
            <Col className="form-group shipping-col">
              <label htmlFor="zip">Postal Code</label>
              <input
                type="text"
                className="form-control form-control-sm"
                value={userInfo.zip}
                name="zip"
                onChange={handleInputChange}
              />
            </Col>
          </Row>
          <div>
            <button
              type="button"
              className="primary-btn float-right"
              onClick={() => {
                openPayment();
              }}
            >
              GO TO PAYMENT -&gt;
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

SidenavShipping.propTypes = {
  openPayment: PropTypes.func.isRequired,
};

export default SidenavShipping;
