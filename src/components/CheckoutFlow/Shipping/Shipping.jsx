import React, { useState } from 'react';
import PropTypes from 'prop-types';
import FormInput from '../../Forms/FormInput/FormInput';
import FormSelect from '../../Forms/FormSelect/FormSelect';

import { useUserContext } from '../../../state/contexts/userContext';
import { COUNTRIES, REGIONS } from '../../../constants/countriesAndRegions';
import { CREATE_USER } from '../../../constants/ActionTypes';

import './shipping.css';

const Shipping = ({ onShippingComplete }) => {
  const [userData, updateUser] = useUserContext();

  const [country, setCountry] = useState('');
  const countryOptions = COUNTRIES.map((item) => ({ text: item.name, value: item.id }));
  countryOptions.unshift({ text: 'Select a country', value: '' });

  let regionOptions = [];

  if (country) {
    regionOptions = REGIONS[country].map((item) => ({ text: item, value: item }));
    regionOptions.unshift({
      text: country === COUNTRIES[0].id ? 'Select a province' : 'Select a state',
      value: '',
    });
  }

  const handleInputChange = (event) => {
    const { target } = event;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;
    const newData = { ...userData };
    newData[name] = value;

    updateUser({ type: CREATE_USER, response: newData });
  };

  return (
    <div className="checkout-step sidenav-shipping-container">
      <div className="sidenav-shipping-title">Shipping Info</div>
      <hr />
      <form onSubmit={updateUser}>
        <FormInput
          id="fullname"
          label="Name"
          name="fullname"
          placeholder="Johnny Applseed"
          value={userData.fullname}
          onChange={handleInputChange}
        />
        <FormInput
          id="email"
          label="Email"
          name="email"
          placeholder="Your Email Address"
          value={userData.email}
          onChange={handleInputChange}
        />
        <FormInput
          id="phone"
          name="phone"
          label="Phone Number"
          placeholder="555-123-1234"
          value={userData.phone}
          onChange={handleInputChange}
        />
        <FormInput id="step2-city" label="City" placeholder="Toronto" value={userData.city} />
        <FormInput
          id="address1"
          name="address1"
          label="Address 1"
          placeholder="123 Anywhere Ave"
          value={userData.address1}
          onChange={handleInputChange}
        />
        <FormInput
          id="address2"
          name="address2"
          label="Address 2"
          placeholder="Suite 101"
          value={userData.address2}
          onChange={handleInputChange}
        />
        <FormSelect
          id="country"
          name="country"
          options={countryOptions}
          label="Country"
          onChange={(e) => {
            handleInputChange(e);
            setCountry(e.target.value);
          }}
          value={userData.country}
        />
        <FormSelect
          id="province"
          name="province"
          label={country === COUNTRIES[0].id ? 'Province' : 'State'}
          options={regionOptions}
          value={userData.province}
          onChange={handleInputChange}
        />
        <FormInput
          id="zip"
          name="zip"
          label={country === COUNTRIES[0].id ? 'Postal Code' : 'Zip Code'}
          placeholder={country === COUNTRIES[0].id ? 'A0A 0A0 or A0A0A0' : '(12345 or 12345-1234)'}
          value={userData.zip}
          onChange={handleInputChange}
        />
        <div>
          <button type="button" className="primary" onClick={onShippingComplete}>
            GO TO PAYMENT -&gt;
          </button>
        </div>
      </form>
    </div>
  );
};

Shipping.propTypes = {
  onShippingComplete: PropTypes.func.isRequired,
};

export default Shipping;
