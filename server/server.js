const express = require('express');
const app = express();

// Serve your static files (React app)
app.use(express.static('build'));

// Remove X-Frame-Options header
app.use((req, res, next) => {
  res.removeHeader('X-Frame-Options');
  next();
});

// Set Content-Security-Policy header
app.use((req, res, next) => {
  res.setHeader('Content-Security-Policy', "frame-ancestors *");
  console.log("hi")
  next();
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});