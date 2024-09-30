import React, { useState, useEffect } from 'react';

const PriceTicker = () => {
  const [price, setPrice] = useState('Fetching price...');
  const [error, setError] = useState('');

  // Function to fetch the KWE/USDT price from the VPS API
  const fetchPrice = async () => {
    try {
      const response = await fetch('http://154.38.178.214/api/price'); // Replace with your VPS IP address
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

    // Optionally refresh the price every 30 seconds
    const interval = setInterval(fetchPrice, 30000);
    return () => clearInterval(interval); // Clean up interval on component unmount
  }, []);

  return (
    <div className="price-ticker">
      <h2>KWE/USDT Price</h2>
      <p>{error ? error : `Last Price: ${price}`}</p>
    </div>
  );
};

export default PriceTicker;
