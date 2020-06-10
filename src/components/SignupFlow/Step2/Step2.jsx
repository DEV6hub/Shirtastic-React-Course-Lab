import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './step2.css';
import FormInput from '../../Forms/FormInput/FormInput';
import PrimaryButton from '../../PrimaryButton/PrimaryButton';
import { COUNTRIES, REGIONS } from '../../../constants/countriesAndRegions';
import FormSelect from '../../Forms/FormSelect/FormSelect';

const Step2 = ({ onComplete }) => {
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

  const handleSignup = ($event) => {
    $event.preventDefault();
    onComplete($event, 1);
  };

  return (
    <div className="step2-component">
      <h2>Awesome!</h2>
      <p>
        Welcome to the club, where can we ship your shirts to? You can always provide this
        information at checkout.
      </p>
      <form className="step2-address">
        <FormInput id="step2-name" label="Name" placeholder="Johnny Applseed" />
        <div className="step2-row">
          <FormInput id="step2-address1" label="Address 1" placeholder="123 Anywhere Ave" />
          <FormInput id="step2-address2" label="Address 2" placeholder="Suite 101" />
        </div>
        <div className="step2-row">
          <FormInput id="step2-phone-number" label="Phone Number" placeholder="555-123-1234" />
          <FormInput id="step2-city" label="City" placeholder="Toronto" />
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
            />
            <FormInput
              id="step2-postal-code"
              label={country === COUNTRIES[0].id ? 'Postal Code' : 'Zip Code'}
              placeholder={
                country === COUNTRIES[0].id ? 'A0A 0A0 or A0A0A0' : '(12345 or 12345-1234)'
              }
            />
          </div>
        </div>
        <div className="actions">
          <PrimaryButton onClick={handleSignup}>Do This later</PrimaryButton>
          <PrimaryButton onClick={handleSignup}>Save</PrimaryButton>
        </div>
      </form>
    </div>
  );
};

Step2.propTypes = {
  onComplete: PropTypes.func.isRequired,
};

export default Step2;
