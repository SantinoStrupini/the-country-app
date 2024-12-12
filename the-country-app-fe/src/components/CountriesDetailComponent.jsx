import {  useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';

export const CountriesDetailComponent = () => {

    /* const { countriesDetail  } = useContext(CountriesDetailContext); */

    const {countryCode } = useParams();
    
    const [countriesDetail, setCountriesDetail] = useState()
    console.log(countriesDetail);
    
    useEffect(() => {
        const fetchCountriesDetail = async () => {

            try {
                const response = await fetch('https://date.nager.at/api/v3/CountryInfo/' + countryCode)
                const data = await response.json()
                setCountriesDetail(data)
            } catch (error) {
                
                console.error(error);
    
            }
    
        }
        fetchCountriesDetail()


    }, [])
    
    

    return (
        <div>
            <h2>Available Countries</h2>
            <ul>
                {   
                    countriesDetail ? countriesDetail.borders.map((country) => (
                    <li key={country.countryCode}>
                        <strong>Name:</strong> {country.name} <br />
                        <strong>Country code:</strong> {country.countryCode} <br />
                        <button type="button" className="btn btn-primary">Country info</button>
                    </li>))
                    : <h2>Loading...</h2>
                    
                } 
            </ul>
        </div>
    );
};
