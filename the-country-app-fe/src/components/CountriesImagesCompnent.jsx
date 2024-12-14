import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";


export const CountriesImagesCompnent = () => {


    const { countryCode } = useParams();
    const [countriesImages, setCountriesImages] = useState([]);
    const [filteredImages, setFilteredImages] = useState([]);

    useEffect(() => {
        const fetchImages = async () =>{
            const response = await fetch('https://countriesnow.space/api/v0.1/countries/flag/images');
            
            const data = await response.json();
            console.log('Datos de la API:', data.data);
            setCountriesImages(data.data);
        }
        fetchImages()
    }, []);
    
    useEffect(() => {
         
       
        if (countriesImages.length > 0 && countryCode) {
            
            const filtered = countriesImages.filter(country => 
                country.iso2.trim().toUpperCase() === countryCode.trim().toUpperCase()
            );
             
            setFilteredImages(filtered);
        }
    }, [countriesImages, countryCode]);
    
  return (
    <div>
            {filteredImages.length > 0 ? (
                filteredImages.map((url) => (
                    <img 
                        key={url.iso2} 
                        src={url.flag} 
                        alt={`Flag of ${url.name}`} 
                        style={{ width: '100px', height: 'auto', margin: '10px' }} 
                    />
                ))
            ) : (
                <h2>Loading images...</h2>
            )}
    </div>
  )
}
