import { useState } from 'react';

const FuelQuoteForm = () => {
  const [gallonsRequested, setGallonsRequested] = useState('');
  const [state, setState] = useState('Texas');
  const [hasQuoteHistory, setHasQuoteHistory] = useState(false);
  const [suggestedPrice, setSuggestedPrice] = useState('');
  const [totalAmountDue, setTotalAmountDue] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Save the quote to the database
  };

  const handleGetQuote = () => {
    // Calculate pricing using the provided formula and factors
    const currentPricePerGallon = 1.50;
    const locationFactor = state === 'Texas' ? 0.02 : 0.04;
    const rateHistoryFactor = hasQuoteHistory ? 0.01 : 0;
    const gallonsRequestedFactor = gallonsRequested > 1000 ? 0.02 : 0.03;
    const companyProfitFactor = 0.1;

    const margin =
      (locationFactor - rateHistoryFactor + gallonsRequestedFactor + companyProfitFactor) *
      currentPricePerGallon;
    const suggestedPricePerGallon = currentPricePerGallon + margin;
    const totalAmount = gallonsRequested * suggestedPricePerGallon;

    setSuggestedPrice(suggestedPricePerGallon.toFixed(3));
    setTotalAmountDue(totalAmount.toFixed(2));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Gallons Requested:</label>
        <input
          type="number"
          value={gallonsRequested}
          onChange={(e) => setGallonsRequested(e.target.value)}
        />
      </div>
      <div>
        <label>State:</label>
        <select value={state} onChange={(e) => setState(e.target.value)}>
          <option value="Texas">Texas</option>
          <option value="Out of state">Out of state</option>
        </select>
      </div>
      <div>
        <label>Quote History:</label>
        <input
          type="checkbox"
          checked={hasQuoteHistory}
          onChange={() => setHasQuoteHistory(!hasQuoteHistory)}
        />
      </div>
      <div>
        <label>Suggested Price/gallon:</label>
        <input type="text" readOnly value={suggestedPrice} />
      </div>
      <div>
        <label>Total Amount Due:</label>
        <input type="text" readOnly value={totalAmountDue} />
      </div>
      <div>
        <button type="button" onClick={handleGetQuote}>
          Get Quote
        </button>
        <button type="submit" disabled={!gallonsRequested || !state}>
          Submit Quote
        </button>
      </div>
    </form>
  );
};

export default FuelQuoteForm;
