
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



const Countries = {
    findAvailableCountries: () =>{
        return getData()
    },
    findBorderCountries: (countryCode) =>{
        
        return getBorderCountries(countryCode)
    },
    
}

module.exports = Countries;