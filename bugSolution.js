const express = require('express');
const app = express();
// Middleware must be placed before route handlers
app.use(express.json());
app.post('/data', (req, res) => {
  const data = req.body; 
  console.log(data); // Data is now correctly parsed
  res.send('Data received');
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});