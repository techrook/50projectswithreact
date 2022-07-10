import React from 'react'
import "./App.css"

const Weather = ({description, city, country, error, temperature}) => {
    return (
        <div className="">
            {city && country && <p className='row-span-3 text-black'>{city}, {country}</p>}
            {temperature && <p className='row-span-3 font-serif text-2xl '>the temperature is {temperature}  Fahrenheit,</p>}
            {description && <p className='col-span-2 font-serif text-2xl '> that's {description}</p>}
            {error && <p>{error}</p>}
        </div>
    )
}

export default Weather; 