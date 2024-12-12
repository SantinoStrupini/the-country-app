const express = require('express');

const availableCountriesController = require('../controllers/availableCountries');

const router = express.Router();


router.get('/', availableCountriesController.getCountries);
router.get('/borderCountries/:countryCode', availableCountriesController.getBorderCountries);

module.exports = router