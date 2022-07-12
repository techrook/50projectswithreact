import React from 'react'

function DisplayWeather(props) {
    const {data} = props;
    const iconUrl = " http://openweathermap.org/img/wn/"+ `${data.weather[0].icon}`+".png"
    
  return (
    <div className=''>
        <span className=''>
            {data.name}, {data.sys.country} weather
        </span>
        <span>
            As of {new Date().toLocaleTimeString()}
        </span>
        <h1>
            {Math.floor(data.main.temp - 273.15)}
            <sup>o</sup>
        </h1>

        <span>
            {data.weather[0].main}
            <img src={iconUrl}  />
        </span>
        <span>
            {data.weather[0].description}
        </span>

        
        
    </div>
  )
}

export default DisplayWeather