import { useState } from "react";

function ListGroup() {
    const city = ['Pasay City', 'Pasig City', 'Taguig City', 'Cebu City', 'Davao City'];
   
    const [currentCity, setCurrentCity] = useState('');
    return (
        <>
           <h1>{currentCity ? `Selected: ${currentCity}` : 'Click a city'}</h1>
            <ul className="list-group">
                {city.map((city) => (
                    <li
                    onClick={() => setCurrentCity(city)} 
                    type="Button" 
                    className="list-group-item list-group-item-action" 
                    key={city}>
                    {city}
                    </li>
                ))}
            </ul>
        </>
    );
}

export default ListGroup;
