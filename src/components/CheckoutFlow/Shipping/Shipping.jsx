import React, { useState } from 'react';
import PropTypes from 'prop-types';
import FormInput from '../../Forms/FormInput/FormInput';
import FormSelect from '../../Forms/FormSelect/FormSelect';
import { createUser } from '../../../state/actions/actions';

import { useUserContext } from '../../../state/contexts/userContext';
import { COUNTRIES, REGIONS } from '../../../constants/countriesAndRegions';

import './shipping.css';

const Shipping = ({ onShippingComplete }) => {
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
  // const regionsForSelectedCountry = regions[userInfo.country];

  return (
    <div className="checkout-step sidenav-shipping-container">
      <div className="sidenav-shipping-title">Shipping Info</div>
      <hr />
      <form onSubmit={updateUser}>
        <FormInput id="shipping-name" label="Name" placeholder="Johnny Applseed" />
        <FormInput id="shipping-email" label="Email" placeholder="Your Email Address" />
        <FormInput id="step2-phone-number" label="Phone Number" placeholder="555-123-1234" />
        <FormInput id="step2-city" label="City" placeholder="Toronto" />
        <FormInput id="step2-address1" label="Address 1" placeholder="123 Anywhere Ave" />
        <FormInput id="step2-address2" label="Address 2" placeholder="Suite 101" />
        <FormSelect
          id="step2-country"
          options={countryOptions}
          label="Country"
          onChange={(e) => setCountry(e.target.value)}
          value={country}
        />
        <FormSelect
          id="step2-province"
          label={country === COUNTRIES[0].id ? 'Province' : 'State'}
          options={regionOptions}
        />
        <FormInput
          id="step2-postal-code"
          label={country === COUNTRIES[0].id ? 'Postal Code' : 'Zip Code'}
          placeholder={country === COUNTRIES[0].id ? 'A0A 0A0 or A0A0A0' : '(12345 or 12345-1234)'}
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
