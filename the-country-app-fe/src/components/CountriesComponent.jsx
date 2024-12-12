import { useContext } from 'react';
import { CountriesContext } from '../context/CountriesContext';

import { CountriesDetailPage } from '../pages/CountriesDetailPage';
import { Link, NavLink } from 'react-router-dom';

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
                        <NavLink to={`/countries/${country.countryCode}`}>Country detail</NavLink>
                    </li>
                ))}
            </ul>
        </div>
    );
};
