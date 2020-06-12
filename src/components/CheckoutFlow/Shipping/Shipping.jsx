import React, { useState } from 'react';
import PropTypes from 'prop-types';
import FormInput from '../../Forms/FormInput/FormInput';
import FormSelect from '../../Forms/FormSelect/FormSelect';

import { useUserContext } from '../../../state/contexts/userContext';
import { COUNTRIES, REGIONS } from '../../../constants/countriesAndRegions';

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
    console.log(event);
  };

  return (
    <div className="checkout-step sidenav-shipping-container">
      <div className="sidenav-shipping-title">Shipping Info</div>
      <hr />
      <form onSubmit={updateUser}>
        <FormInput
          id="shipping-name"
          label="Name"
          placeholder="Johnny Applseed"
          value={userData.fullname}
          onChange={handleInputChange}
        />
        <FormInput
          id="shipping-email"
          label="Email"
          placeholder="Your Email Address"
          value={userData.email}
          onChange={handleInputChange}
        />
        <FormInput
          id="step2-phone-number"
          label="Phone Number"
          placeholder="555-123-1234"
          value={userData.phone}
          onChange={handleInputChange}
        />
        <FormInput id="step2-city" label="City" placeholder="Toronto" value={userData.city} />
        <FormInput
          id="step2-address1"
          label="Address 1"
          placeholder="123 Anywhere Ave"
          value={userData.address1}
        />
        <FormInput
          id="step2-address2"
          label="Address 2"
          placeholder="Suite 101"
          value={userData.address2}
        />
        <FormSelect
          id="step2-country"
          options={countryOptions}
          label="Country"
          onChange={(e) => setCountry(e.target.value)}
          value={userData.country}
        />
        <FormSelect
          id="step2-province"
          label={country === COUNTRIES[0].id ? 'Province' : 'State'}
          options={regionOptions}
          value={userData.province}
        />
        <FormInput
          id="step2-postal-code"
          label={country === COUNTRIES[0].id ? 'Postal Code' : 'Zip Code'}
          placeholder={country === COUNTRIES[0].id ? 'A0A 0A0 or A0A0A0' : '(12345 or 12345-1234)'}
          value={userData.zip}
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
