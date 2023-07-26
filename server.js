const express = require('express');
const db = require('./config/mongoose');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: true }));

// routes
app.use('/', require('./routes'));

app.listen(PORT, function () {
  console.log(`Server started on port ${PORT}`);
});
