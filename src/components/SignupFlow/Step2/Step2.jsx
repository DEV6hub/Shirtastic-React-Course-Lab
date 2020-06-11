import React, { useState, useRef } from 'react';
import { FormWithConstraints, FieldFeedbacks, FieldFeedback } from 'react-form-with-constraints';
import PropTypes from 'prop-types';
import FormInput from '../../Forms/FormInput/FormInput';
import PrimaryButton from '../../PrimaryButton/PrimaryButton';
import { COUNTRIES, REGIONS } from '../../../constants/countriesAndRegions';
import FormSelect from '../../Forms/FormSelect/FormSelect';
import './step2.css';

const Step2 = ({ onComplete }) => {
  const signupForm = useRef(null);
  const [name, setName] = useState('');
  const [address1, setAddress1] = useState('');
  const [address2, setAddress2] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [province, setProvince] = useState('');
  const [zip, setZip] = useState('');

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

  const fieldToSetStateMap = {
    name: setName,
    address1: setAddress1,
    address2: setAddress2,
    phone: setPhone,
    city: setCity,
    country: setCountry,
    province: setProvince,
    zip: setZip,
  };

  const info = {
    name,
    address1,
    address2,
    phone,
    city,
    country,
    province,
    zip,
  };

  const handleSignup = ($event) => {
    $event.preventDefault();
    onComplete($event, 1);
  };

  async function handleInputChange({ target }) {
    console.log(target);
  }

  return (
    <div className="step2-component">
      <h2>Awesome!</h2>
      <p>
        Welcome to the club, where can we ship your shirts to? You can always provide this
        information at checkout.
      </p>
      {/* <form className="step2-address"> */}
      <FormWithConstraints onSubmit={handleSignup} ref={signupForm} className="step2-address">
        <FormInput
          id="step2-name"
          label="Name"
          value={name}
          required
          placeholder="Johnny Applseed"
          onChange={handleInputChange}
        />
        <div className="step2-row">
          <FormInput
            id="address1"
            name="address1"
            label="Address 1"
            value={address1}
            required
            placeholder="123 Anywhere Ave"
            onChange={handleInputChange}
          />
          <FormInput
            id="address2"
            label="Address 2"
            placeholder="Suite 101"
            value={address2}
            onChange={handleInputChange}
          />
        </div>
        <div className="step2-row">
          <FormInput
            id="step2-phone-number"
            label="Phone Number"
            placeholder="555-123-1234"
            value={phone}
            onChange={handleInputChange}
          />
          <FormInput
            id="step2-city"
            label="City"
            placeholder="Toronto"
            value={city}
            required
            onChange={handleInputChange}
          />
        </div>
        <div className="step2-row">
          <FormSelect
            id="step2-country"
            options={countryOptions}
            label="Country"
            onChange={(e) => setCountry(e.target.value)}
            value={country}
          />
          <div className="step2-row">
            <FormSelect
              id="step2-province"
              label={country === COUNTRIES[0].id ? 'Province' : 'State'}
              options={regionOptions}
              value={province}
              onChange={(e) => setProvince(e.target.value)}
            />
            <FormInput
              id="step2-postal-code"
              label={country === COUNTRIES[0].id ? 'Postal Code' : 'Zip Code'}
              placeholder={
                country === COUNTRIES[0].id ? 'A0A 0A0 or A0A0A0' : '(12345 or 12345-1234)'
              }
              value={zip}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="actions">
          <PrimaryButton onClick={handleSignup}>Do This later</PrimaryButton>
          <PrimaryButton onClick={handleSignup}>Save</PrimaryButton>
        </div>
      </FormWithConstraints>
    </div>
  );
};

Step2.propTypes = {
  onComplete: PropTypes.func.isRequired,
};

export default Step2;
