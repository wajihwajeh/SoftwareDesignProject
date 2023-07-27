"use client";

import { useRouter } from "next/router";
import { useState } from "react";
import styles from "../styles/FuelQuoteForm.module.css";

const FuelQuoteForm = () => {
  const router = useRouter();
  const [gallonsRequested, setGallonsRequested] = useState("");
  const [deliveryDate, setDeliveryDate] = useState("");

  // Client profile details (example)
  const clientProfile = {
    deliveryAddress: "123 Main St, City, State, Zip",
    suggestedPrice: 2.5, // Example suggested price per gallon
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/quote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + localStorage.getItem("token"),
        },
        body: JSON.stringify({
          gallons_requested: +gallonsRequested,
          delivery_address: clientProfile.deliveryAddress,
          delivery_date: deliveryDate,
          suggested_price: clientProfile.suggestedPrice,
          total_amount_due: gallonsRequested * clientProfile.suggestedPrice,
        }),
      }).then((res) => res.json());

      if (res.item) {
        router.push("/quotes");
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className={styles["fuel-quote-container"]}>
      <form onSubmit={handleSubmit}>
        <div className={styles["form-group"]}>
          <label className={styles["label"]} htmlFor="gallonsRequested">
            Gallons Requested:
          </label>
          <input
            className={styles["input"]}
            type="number"
            id="gallonsRequested"
            value={gallonsRequested}
            onChange={(e) => setGallonsRequested(e.target.value)}
            required
          />
        </div>
        <div className={styles["form-group"]}>
          <label className={styles["label"]} htmlFor="deliveryAddress">
            Delivery Address:
          </label>
          <input
            className={styles["input"]}
            type="text"
            id="deliveryAddress"
            value={clientProfile.deliveryAddress}
            readOnly
          />
        </div>
        <div className={styles["form-group"]}>
          <label className={styles["label"]} htmlFor="deliveryDate">
            Delivery Date:
          </label>
          <input
            className={styles["input"]}
            type="date"
            id="deliveryDate"
            value={deliveryDate}
            onChange={(e) => setDeliveryDate(e.target.value)}
            required
          />
        </div>
        <div className={styles["form-group"]}>
          <label className={styles["label"]} htmlFor="suggestedPrice">
            Suggested Price / gallon:
          </label>
          <input
            className={styles["input"]}
            type="number"
            id="suggestedPrice"
            value={clientProfile.suggestedPrice}
            readOnly
          />
        </div>
        <div className={styles["form-group"]}>
          <label className={styles["label"]} htmlFor="totalAmountDue">
            Total Amount Due:
          </label>
          <input
            className={styles["input"]}
            type="number"
            id="totalAmountDue"
            value={gallonsRequested * clientProfile.suggestedPrice}
            readOnly
          />
        </div>
        <div className={styles["form-group"]}>
          <button className={styles["button"]} type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default FuelQuoteForm;
