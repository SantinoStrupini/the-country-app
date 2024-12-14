
const path = "https://date.nager.at/api/v3/";
async function getData() {
     
    const response = await fetch(path + 'AvailableCountries');
    const data = await response.json();
    return data;
} 

async function getBorderCountries(countryCode) {
     
    const response = await fetch(path + 'CountryInfo/' + countryCode);
    const data = await response.json();
    return data;
} 

async function getPopulationData() {
     
    const response = await fetch('https://countriesnow.space/api/v0.1/countries/population'  );
    const data = await response.json();
    return data;
} 

async function getFlagURL() {
     
    const response = await fetch('https://countriesnow.space/api/v0.1/countries/flag/images');
    const data = await response.json();
    return data;
}


const Countries = {
    findAvailableCountries: () =>{
        return getData()
    },
    findBorderCountries: (countryCode) =>{
        
        return getBorderCountries(countryCode)
    },
    findPopulationData: () => {

        return getPopulationData()
    },
    findFlagURL: () =>{
        return getFlagURL()
    }
}

module.exports = Countries;