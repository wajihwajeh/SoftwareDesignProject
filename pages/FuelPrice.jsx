import { useRouter } from "next/router";
import { useState } from "react";
import styles from "../styles/FuelQuoteForm.module.css";

const FuelQuoteForm = () => {
  const router = useRouter();
  const [gallonsRequested, setGallonsRequested] = useState("");
  const [address, setAddress] = useState("");
  const [state, setState] = useState("");
  const [deliveryDate, setDeliveryDate] = useState("");
  const [suggestedPrice, setSuggestedPrice] = useState(0);
  const [totalAmountDue, setTotalAmountDue] = useState(0);

  const handleGetQuote = () => {
    // Constants
    const CURRENT_PRICE_PER_GALLON = 1.50;
    const COMPANY_PROFIT_FACTOR = 0.10;

    // Pricing function
    const calculatePricing = (gallonsRequested, location, hasRateHistory) => {
      const locationFactor = location === 'TX' ? 0.02 : 0.04;
      const rateHistoryFactor = hasRateHistory ? 0.01 : 0;
      const gallonsRequestedFactor = gallonsRequested > 1000 ? 0.02 : 0.03;

      const margin =
        (locationFactor - rateHistoryFactor + gallonsRequestedFactor + COMPANY_PROFIT_FACTOR) *
        CURRENT_PRICE_PER_GALLON;

      const suggestedPrice = CURRENT_PRICE_PER_GALLON + margin;
      const totalAmountDue = gallonsRequested * suggestedPrice;

      return { suggestedPrice, totalAmountDue };
    };

    const { suggestedPrice, totalAmountDue } = calculatePricing(
      +gallonsRequested,
      state,
      true // Replace with the actual value based on client's rate history
    );

    setSuggestedPrice(suggestedPrice);
    setTotalAmountDue(totalAmountDue);
  };
  const resetFields = () => {
    setGallonsRequested("");
    setAddress("");
    setState("");
    setDeliveryDate("");
    setSuggestedPrice(0);
    setTotalAmountDue(0);
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
          delivery_address: address + state,
          delivery_date: deliveryDate,
          suggested_price: suggestedPrice,
          total_amount_due: totalAmountDue,
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
            value={address} // Replace with the actual address
            onChange={(e) => setAddress(e.target.value)}
            required
          />
          <label className={styles["label"]} htmlFor="deliveryAddress">
            State:
          </label>
          <input
            className={styles["input"]}
            type="text"
            id="state"
            maxLength={2}
            value={state} // Replace with the actual address
            onChange={(e) => setState(e.target.value)}
            required
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
            value={suggestedPrice}
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
            value={totalAmountDue}
            readOnly
          />
        </div>
        <div className={styles["form-group"]}>
          <button
            className={styles["button"]}
            type="button"
            onClick={handleGetQuote}
            disabled={!gallonsRequested || !deliveryDate}
          >
            Get Quote
          </button>
          <button
            className={styles["button"]}
            type="button"
            onClick={resetFields}
            // disabled={!gallonsRequested || !deliveryDate || !suggestedPrice || !totalAmountDue}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default FuelQuoteForm;
