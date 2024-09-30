const express = require('express');
const fetch = require('node-fetch');
const path = require('path');
const app = express();

// Serve static files from the React app build
app.use(express.static(path.join(__dirname, 'build')));

// Proxy route to fetch data from VPS
app.get('/api/price', async (req, res) => {
  try {
    const response = await fetch('http://154.38.178.214/api/price');
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch price data' });
  }
});

// Serve the React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
