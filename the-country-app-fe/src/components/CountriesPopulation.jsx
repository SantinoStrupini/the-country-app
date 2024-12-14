import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


export const CountriesPopulation = () => {

    const { iso3 } = useParams();
    const [countriesPopulation, setCountriesPopulation] = useState([]);
    const [filteredPopulation, setFilteredPopulation] = useState([]);

    useEffect(() => {
        const fetchPopulation = async () => {
            try {
                const response = await fetch('https://countriesnow.space/api/v0.1/countries/population');
                const data = await response.json()
                console.log(data);
                
                setCountriesPopulation(data.data)


            } catch (error) {
                console.error(error);
            }
        }
        fetchPopulation();
    }, [])
    useEffect(() => {
        console.log('ISO3 recibido:', iso3);
    }, [iso3]);
    useEffect(() => {


        if (countriesPopulation.length > 0 && iso3) {

            const filtered = countriesPopulation.filter(country =>
                country.iso3.trim().toUpperCase() === iso3.trim().toUpperCase()
            );
            console.log('Datos filtrados:', filtered);

            setFilteredPopulation(filtered);
        }
    }, [countriesPopulation, iso3]);

    return (
        <div>
            {countriesPopulation && countriesPopulation.length > 0 ? (
    <table className="table">
        <thead>
            <tr>
                <th scope="col">Country</th>
                <th scope="col">Year</th>
                <th scope="col">Population</th>
            </tr>
        </thead>
        <tbody> 
            {filteredPopulation.length > 0 ? (
                filteredPopulation.map((country) => (
                    country.populationCounts.map((pop) => (
                        <tr key={`${country.country}-${pop.year}`}>
                            <th scope="row">{country.country}</th>
                            <td>{pop.year}</td>
                            <td>{pop.value.toLocaleString()}</td>
                        </tr>
                    ))
                ))
            ) : (
                <tr>
                    <td colSpan="3">No se encontraron datos para el filtro actual.</td>
                </tr>
            )}
        </tbody>
    </table>
) : (
    <h2>Loading...</h2>
)}

        </div>
    )
}
