const express = require('express');
const mongoose = require('mongoose');
const config = require('./config');

const publicApiRoutes = require('./routes/apiRoutes');

const app = express();
app.use(express.json());

app.use('/api/public', publicApiRoutes);

app.listen(config.PORT, () => {
  console.log(`Public API Service is running on port ${config.PORT}`);
});