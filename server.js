const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Tell Express to serve your static files (HTML, CSS, JS) from the current folder
app.use(express.static(__dirname));

// Route to serve your index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Portfolio running at http://localhost:${PORT}`);
});