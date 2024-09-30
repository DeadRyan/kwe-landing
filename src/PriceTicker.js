import React, { useState, useEffect } from 'react';

const PriceTicker = () => {
  const [price, setPrice] = useState('Fetching price...');
  const [error, setError] = useState('');

  const fetchPrice = async () => {
    try {
      // Fetch from the proxy route created in server.js
      const response = await fetch('/api/price');
      const data = await response.json();

      if (data.success) {
        setPrice(data.result.last);
      } else {
        throw new Error(data.message || 'Unknown API error');
      }
    } catch (err) {
      setError(`Error fetching price: ${err.message}`);
    }
  };

  useEffect(() => {
    fetchPrice();
    const interval = setInterval(fetchPrice, 30000); // Optionally, refresh the price every 30 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="price-ticker">
      <h2>KWE/USDT Price</h2>
      <p>{error ? error : `Last Price: ${price}`}</p>
    </div>
  );
};

export default PriceTicker;
