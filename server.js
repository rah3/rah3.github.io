const express = require('express');
const path = require('path');

const app = express();
app.disable('x-powered-by');

const PORT = process.env.PORT || 3000;

app.use(
  express.static(
    path.join(__dirname, 'public')
  )
);

app.get('*', (req, res) => {
  res.sendFile(
    path.join(
      __dirname,
      'public',
      'index.html'
    )
  );
});

app.listen(PORT, () => {
  console.log('');
  console.log('====================================');
  console.log('Rahie Datta Portfolio');
  console.log('Node.js + Express');
  console.log('====================================');
  console.log(`Local: http://localhost:${PORT}`);
  console.log(
    'GitHub: https://github.com/rah3'
  );
  console.log('');
});