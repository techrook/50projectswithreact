import React from 'react'

function DisplayWeather(props) {
    const {data} = props;
    const iconUrl = " http://openweathermap.org/img/wn/"+ `${data.weather[0].icon}`+".png"

    var day = new Date();
    var hour = day.getHours();
    
  return (
    <div className=''>
        <span>
            {
                hour >= 0 && hour <12 ?  (
                    <h1 className='font-mono text-2xl p-2 '>
                        Good morning 
                    </h1>
                ) 
                : 
                <h1  className='font-mono text-2xl p-2 '>
                    Good Evening 
                </h1>
            }
            
            
        </span>
        <div className='font-sans space-between text-xl py-2 '>
            {data.name}, {data.sys.country} weather
        </div>
        <h1 className='text-4xl float-left pl-12'>
            {Math.floor(data.main.temp - 273.15)}
            <sup>o</sup>
        </h1>
        <span className='float-right pr-12'>
            {data.weather[0].main}
            <img src={iconUrl}  />
        </span>

        
        
    </div>
  )
}

export default DisplayWeather