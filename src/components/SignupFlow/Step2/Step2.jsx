import React, { useState, useRef } from 'react';
import { FormWithConstraints, FieldFeedbacks, FieldFeedback } from 'react-form-with-constraints';
import PropTypes from 'prop-types';
import FormInput from '../../Forms/FormInput/FormInput';
import PrimaryButton from '../../PrimaryButton/PrimaryButton';
import { COUNTRIES, REGIONS } from '../../../constants/countriesAndRegions';
import FormSelect from '../../Forms/FormSelect/FormSelect';
import './step2.css';

const Step2 = ({ onSkipShipping, onComplete }) => {
  const signupForm = useRef(null);
  const [fullname, setFullname] = useState('');
  const [address1, setAddress1] = useState('');
  const [address2, setAddress2] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [province, setProvince] = useState('');
  const [zip, setZip] = useState('');

  const [isValidForm, setVaidForm] = useState(false);

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
    fullname: setFullname,
    address1: setAddress1,
    address2: setAddress2,
    phone: setPhone,
    city: setCity,
    country: setCountry,
    province: setProvince,
    zip: setZip,
  };

  const info = {
    fullname,
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
    onComplete({ shippingInfo: info });
  };

  async function handleInputChange({ target }) {
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;
    const setStateCallback = fieldToSetStateMap[name];
    setStateCallback(value);
    await signupForm.current.validateForm();
    await signupForm.current.validateFields(target);

    if (signupForm.current.isValid()) {
      setVaidForm(true);
    } else {
      setVaidForm(false);
    }
  }

  return (
    <div className="step2-component">
      <h2>Awesome!</h2>
      <p>
        Welcome to the club, where can we ship your shirts to? You can always provide this
        information at checkout.
      </p>
      <FormWithConstraints onSubmit={handleSignup} ref={signupForm} className="step2-form">
        <div className="form-row">
          <FormInput
            id="fullname"
            label="Name"
            name="fullname"
            value={fullname}
            required
            placeholder="Johnny Applseed"
            onChange={handleInputChange}
          />
          <FieldFeedbacks for="fullname">
            <FieldFeedback when="valueMissing" />
          </FieldFeedbacks>
        </div>
        <div className="form-row">
          <div className="form-column">
            <FormInput
              id="address1"
              name="address1"
              label="Address 1"
              value={address1}
              required
              placeholder="123 Anywhere Ave"
              onChange={handleInputChange}
            />
            <FieldFeedbacks for="address1">
              <FieldFeedback when="valueMissing" />
            </FieldFeedbacks>
          </div>

          <div className="form-column">
            <FormInput
              id="address2"
              name="address2"
              label="Address 2"
              placeholder="Suite 101"
              value={address2}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-column">
            <FormInput
              id="phone"
              name="phone"
              label="Phone Number"
              placeholder="555-123-1234"
              value={phone}
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              onChange={handleInputChange}
            />
            <FieldFeedbacks for="phone">
              <FieldFeedback when="valueMissing" />
              <FieldFeedback when="patternMismatch">Provide Phone</FieldFeedback>
            </FieldFeedbacks>
          </div>
          <div className="form-column">
            <FormInput
              id="city"
              name="city"
              label="City"
              placeholder="Toronto"
              value={city}
              required
              onChange={handleInputChange}
            />
            <FieldFeedbacks for="city">
              <FieldFeedback when="valueMissing" />
            </FieldFeedbacks>
          </div>
        </div>

        <div className="form-row">
          <div className="form-column">
            <FormSelect
              id="country"
              name="country"
              options={countryOptions}
              label="Country"
              onChange={(e) => setCountry(e.target.value)}
              value={country}
            />
          </div>

          <div className="form-column">
            <div className="form-row">
              <div className="form-column">
                <FormSelect
                  id="province"
                  name="province"
                  label={country === COUNTRIES[0].id ? 'Province' : 'State'}
                  options={regionOptions}
                  value={province}
                  onChange={(e) => setProvince(e.target.value)}
                />
              </div>

              <div className="form-column">
                <FormInput
                  id="zip"
                  name="zip"
                  label={country === COUNTRIES[0].id ? 'Postal Code' : 'Zip Code'}
                  placeholder={
                    country === COUNTRIES[0].id ? 'A0A 0A0 or A0A0A0' : '(12345 or 12345-1234)'
                  }
                  value={zip}
                  onChange={handleInputChange}
                />
                <FieldFeedbacks for="zip">
                  <FieldFeedback when="valueMissing" />
                </FieldFeedbacks>
              </div>
            </div>
          </div>
        </div>
        <div className="actions">
          <PrimaryButton
            onClick={($event) => {
              $event.preventDefault();
              onSkipShipping();
            }}
          >
            Do This later
          </PrimaryButton>
          <PrimaryButton onClick={handleSignup} isDisabled={!isValidForm}>
            Save
          </PrimaryButton>
        </div>
      </FormWithConstraints>
    </div>
  );
};

Step2.propTypes = {
  onComplete: PropTypes.func.isRequired,
  onSkipShipping: PropTypes.func,
};

Step2.defaultProps = {
  onSkipShipping: ($event) => console.log('Not implemented: ', $event),
};

export default Step2;
