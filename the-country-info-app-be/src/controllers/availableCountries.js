const getCountriesModel = require('../models/getCountries');


const availableCountries = {
    getCountries: async (req, res) => {
        try {
            const countries = await getCountriesModel.findAvailableCountries();
            const response = await countries
            res.json(response);

        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Error getting countries', error });
        }



    },
    getBorderCountries: async (req, res) => {
        try {
            const borderCountries = await getCountriesModel.findBorderCountries(req.params.countryCode);
            const response = await borderCountries
            res.json(response);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Error getting border countries', error });
            
        }
        
    },
    

}

module.exports = availableCountries