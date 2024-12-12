require('dotenv').config();

const express = require('express');
const cors = require('cors');
const app = express();

const availableCountriesRouter = require('./routes/availableCountries');

app.use(cors());

app.use('/countries', availableCountriesRouter)

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});