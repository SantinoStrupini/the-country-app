import { useEffect, useState } from 'react';

import {  useParams } from 'react-router-dom';
import { CountriesImagesCompnent } from './CountriesImagesCompnent';


export const CountriesDetailComponent = () => {

    const { countryCode } = useParams();

    const [countriesDetail, setCountriesDetail] = useState()


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


    }, []);



    return (
        <div>
            <h2>Country detail</h2>
            {countriesDetail && (
                <ul>
                    <li key={countriesDetail.countryCode}>
                        <h2>
                            <strong>Name:</strong> {countriesDetail.commonName} <CountriesImagesCompnent/>
                        </h2>
                        
                    </li>
                </ul>
            )}



            <ul>
                {
                    countriesDetail ? countriesDetail.borders.map((country) => (
                        <li key={country.countryCode}>
                            <strong>Name:</strong> {country.commonName} <br />
                            <strong>Country code:</strong> {country.countryCode} <br />
                            <a href={`/countries/${country.countryCode}`}><button type="button" className="btn btn-primary">Country info</button></a>
                            
                        </li>))
                        : <h2>Loading...</h2>

                }
            </ul>
           
        </div>
    );
};
