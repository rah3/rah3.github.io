const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Rahie Datta portfolio — OOP COMP 2406 — http://localhost:${PORT}`);
  console.log(`Repo: https://github.com/rahiedatta.dev/rahiedatta.dev`);
  console.log(`Pages: https://rahiedatta.dev/rahiedatta.dev`);
});
