const express = require('express');
const path = require('path');

const app = express();
app.use(express.static(path.join(__dirname, 'html')));
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'html', 'index.html'));
});

app.listen(4002, () => {
  console.log('Listening port 4002');
});
