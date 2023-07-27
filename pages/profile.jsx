"use client";

import { useRouter } from "next/router";
import { useState } from "react";
import styles from "../styles/FuelQuoteForm.module.css";

const ProfilePage = () => {
  const router = useRouter();

  const [fullName, setFullName] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipcode, setZipcode] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = fetch(process.env.NEXT_PUBLIC_API_URL + "/profile", {
        method: "POST",
        body: JSON.stringify({
          fullName,
          address1,
          address2,
          city,
          state,
          zipcode,
        }),
      });

      if (res.data && res.status === 200) {
        router.push("/New-Galon");
      } else {
        router.push("/New-Galon");
      }
    } catch (e) {}
  };

  return (
    <div className={styles["fuel-quote-container"]}>
      <form onSubmit={handleSubmit} className="py-20">
        <div className={styles["form-group"]}>
          <label htmlFor="fullName">Full Name</label>
          <br />
          <input
            type="text"
            id="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
            maxLength={50}
          />
          {fullName.length === 50 && (
            <p className={styles["character-limit"]}>
              Maximum characters reached (50).
            </p>
          )}
        </div>
        <div className={styles["form-group"]}>
          <label htmlFor="address1">Address 1</label>
          <br />
          <input
            type="text"
            id="address1"
            value={address1}
            onChange={(e) => setAddress1(e.target.value)}
            required
            maxLength={100}
          />
          {address1.length === 100 && (
            <p className={styles["character-limit"]}>
              Maximum characters reached (100).
            </p>
          )}
        </div>
        <div className={styles["form-group"]}>
          <label htmlFor="address2">Address 2</label>
          <br />
          <input
            type="text"
            id="address2"
            value={address2}
            onChange={(e) => setAddress2(e.target.value)}
            maxLength={100}
          />
        </div>
        <div className={styles["form-group"]}>
          <label htmlFor="city">City</label>
          <br />
          <input
            type="text"
            id="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
            maxLength={100}
          />
          {city.length === 100 && (
            <p className={styles["character-limit"]}>
              Maximum characters reached (100).
            </p>
          )}
        </div>
        <div className={styles["form-group"]}>
          <label htmlFor="state">State</label>
          <br />
          <select
            id="state"
            value={state}
            onChange={(e) => setState(e.target.value)}
            required
          >
            <option value="">Select a state</option>
            <option value="AL">Alabama</option>
            <option value="AK">Alaska</option>
            <option value="AZ">Arizona</option>
            <option value="AR">Arkansas</option>
            <option value="CA">California</option>
            <option value="CO">Colorado</option>
            <option value="CT">Connecticut</option>
            <option value="DE">Delaware</option>
            <option value="FL">Florida</option>
            <option value="GA">Georgia</option>
            <option value="HI">Hawaii</option>
            <option value="ID">Idaho</option>
            <option value="IL">Illinois</option>
            <option value="IN">Indiana</option>
            <option value="IA">Iowa</option>
            <option value="KS">Kansas</option>
            <option value="KY">Kentucky</option>
            <option value="LA">Louisiana</option>
            <option value="ME">Maine</option>
            <option value="MD">Maryland</option>
            <option value="MA">Massachusetts</option>
            <option value="MI">Michigan</option>
            <option value="MN">Minnesota</option>
            <option value="MS">Mississippi</option>
            <option value="MO">Missouri</option>
            <option value="MT">Montana</option>
            <option value="NE">Nebraska</option>
            <option value="NV">Nevada</option>
            <option value="NH">New Hampshire</option>
            <option value="NJ">New Jersey</option>
            <option value="NM">New Mexico</option>
            <option value="NY">New York</option>
            <option value="NC">North Carolina</option>
            <option value="ND">North Dakota</option>
            <option value="OH">Ohio</option>
            <option value="OK">Oklahoma</option>
            <option value="OR">Oregon</option>
            <option value="PA">Pennsylvania</option>
            <option value="RI">Rhode Island</option>
            <option value="SC">South Carolina</option>
            <option value="SD">South Dakota</option>
            <option value="TN">Tennessee</option>
            <option value="TX">Texas</option>
            <option value="UT">Utah</option>
            <option value="VT">Vermont</option>
            <option value="VA">Virginia</option>
            <option value="WA">Washington</option>
            <option value="WV">West Virginia</option>
            <option value="WI">Wisconsin</option>
            <option value="WY">Wyoming</option>
          </select>
          <br />
        </div>
        <div className={styles["form-group"]}>
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
        <button className={styles["button"]} type="submit">
          Save
        </button>
      </form>
    </div>
  );
};

export default ProfilePage;
