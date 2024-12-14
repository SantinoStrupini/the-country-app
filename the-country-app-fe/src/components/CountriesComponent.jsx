import { useContext } from 'react';
import { CountriesContext } from '../context/CountriesContext';


import {  NavLink } from 'react-router-dom';

export const CountriesComponent = () => {
    const { countries  } = useContext(CountriesContext);

    

    return (
        <div>
            <h2>Available Countries</h2>
            <ul>
                {countries.map((country) => (
                    <li key={country.countryCode}>
                        <strong>Name:</strong> {country.name} <br />
                        <strong>Country code:</strong> {country.countryCode} <br />
                        <NavLink to={`/countries/${country.countryCode}`}><button type="button" className="btn btn-primary">Country info</button></NavLink>
                    </li>
                ))}
            </ul>
        </div>
    );
};
