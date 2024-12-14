const express = require('express');

const availableCountriesController = require('../controllers/availableCountries');

const router = express.Router();


router.get('/', availableCountriesController.getCountries);
router.get('/borderCountries/:countryCode', availableCountriesController.getBorderCountries);
router.get('/population', availableCountriesController.getPopulationData);
router.get('/flags', availableCountriesController.getFlagURL);
module.exports = router