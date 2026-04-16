const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello SLSA 🚀');
});

app.listen(5000, () => console.log('Running on 5000'));