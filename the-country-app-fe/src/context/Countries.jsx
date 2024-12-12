import { useEffect, useState } from "react"
import { CountriesContext } from "./CountriesContext"

export const CountriesProvider = ({ children }) => {

    const [countries, setCountries] = useState([])

    const fetchCountries = async () => {

        try {
            const response = await fetch('http://localhost:3000/countries')
            const data = await response.json()
            setCountries(data)
        } catch (error) {
            
            console.error(error);

        }

    }

    useEffect(() => {
        fetchCountries()


    }, [])

    return (
        <>
            <CountriesContext.Provider value={{ countries }}>
                {children}
            </CountriesContext.Provider>

        </>
    )
}