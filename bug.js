const express = require('express');
const app = express();
app.use(express.json());
app.post('/data', (req, res) => {
  const data = req.body;
  // Process the data
  console.log(data);
  res.send('Data received');
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});