import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './step2.css';
import FormInput from '../../FormInput/FormInput';
import PrimaryButton from '../../../PrimaryButton/primary-button';
import { COUNTRIES, REGIONS } from '../../../../constants/countriesAndRegions';
import FormSelect from '../../FormSelect/FormSelect';

const Step2 = () => {
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
            onChangeFn={(e) => setCountry(e.target.value)}
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
          <Link to="/catalog">
            <PrimaryButton>Do This later</PrimaryButton>
          </Link>
          <PrimaryButton>Save</PrimaryButton>
        </div>
      </form>
    </div>
  );
};

export default Step2;
