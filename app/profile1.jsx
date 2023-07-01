import { useState } from 'react';

import styles from '../styles/FuelQuoteForm.module.css';

const ProfilePage = () => {
  const [fullName, setFullName] = useState('');
  const [address1, setAddress1] = useState('');
  const [address2, setAddress2] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipcode, setZipcode] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form validation and handle form submission
    console.log('Submitted!', {
      fullName,
      address1,
      address2,
      city,
      state,
      zipcode,
    });
  };

  return (
    <div className={styles['fuel-quote-container']}>
      <h1>Profile</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles['form-group']}>
          <label htmlFor="fullName">Full Name</label><br />
          <input
            type="text"
            id="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
            maxLength={50}
          />
          {fullName.length === 50 && <p className={styles['character-limit']}>Maximum characters reached (50).</p>}
        </div>
        <div className={styles['form-group']}>
          <label htmlFor="address1">Address 1</label><br />
          <input
            type="text"
            id="address1"
            value={address1}
            onChange={(e) => setAddress1(e.target.value)}
            required
            maxLength={100}
          />
          {address1.length === 100 && <p className={styles['character-limit']}>Maximum characters reached (100).</p>}
        </div>
        <div className={styles['form-group']}>
          <label htmlFor="address2">Address 2</label><br />
          <input
            type="text"
            id="address2"
            value={address2}
            onChange={(e) => setAddress2(e.target.value)}
            maxLength={100}
          />
        </div>
        <div className={styles['form-group']}>
          <label htmlFor="city">City</label><br />
          <input
            type="text"
            id="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
            maxLength={100}
          />
          {city.length === 100 && <p className={styles['character-limit']}>Maximum characters reached (100).</p>}
        </div>
        <div className={styles['form-group']}>
          <label htmlFor="state">State</label><br />
          <select
            id="state"
            value={state}
            onChange={(e) => setState(e.target.value)}
            required
          >
            <option value="">Select a state</option>
            <option value="AL">Alabama</option>
            <option value="AK">Alaska</option>
            {/* Add other states */}
          </select><br /><br /><br />
        </div>
        <div className={styles['form-group']}>
          <label htmlFor="zipcode">Zipcode</label> <br />
          <input
            type="text"
            id="zipcode"
            value={zipcode}
            onChange={(e) => setZipcode(e.target.value)}
            required
            minLength={5}
            maxLength={9}
          />
          

        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default ProfilePage;
