import React, { useState, useEffect } from 'react';
import './styles/PriceTicker.css'; // Optional: add your CSS styling for the ticker here

const PriceTicker = () => {
  const [price, setPrice] = useState(null);
  const [error, setError] = useState(null);

  const fetchKWEUSDTPrice = async () => {
    try {
      const response = await fetch('https://kwepriceticker.com/api/price');
      const data = await response.json();

      if (data.success) {
        setPrice(data.result.last); // Assuming 'last' is the field with the price
      } else {
        setError('Error fetching price');
      }
    } catch (error) {
      setError(`Error fetching price: ${error.message}`);
    }
  };

  useEffect(() => {
    fetchKWEUSDTPrice(); // Fetch the price on component load
    const interval = setInterval(fetchKWEUSDTPrice, 30000); // Update price every 30 seconds
    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  return (
    <div className="price-ticker">
      {error ? (
        <p className="error">{error}</p>
      ) : price ? (
        <p>KWE/USDT Last Price: ${price}</p>
      ) : (
        <p>Loading price...</p>
      )}
    </div>
  );
};

export default PriceTicker;
