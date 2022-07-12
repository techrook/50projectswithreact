import React, {  useState } from "react";
import DisplayWeather from "./DisplayWeather";

function Weather() {


    const APIKEY = "273fe657798cb8b09a7c3bbccdc13a1b";

    const [form, setForm] = useState({
        city :"",
        country: ""
      })
      const [weather, setWeather] = useState([

      ])

      async function weatherData(e) {
        e.preventDefault();

        if(form.city ==""){
            alert("Enter a city");
        }else{
            const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${form.city},${form.country}&APPID=${APIKEY}`
            )
            .then((res) => res.json())
            .then(data => (data));

            setWeather({
                data: data
            })
        }
      }
    
      const handleChange = (e) =>{
        let name = e.target.name;
        let value = e.target.value;
    
        if (name == "city"){
          setForm({ ...form, city:value})
        }
        if (name == "country"){
          setForm({  ...form, country:value})
        }
        console.log(form.city, form.country)
      }

  return (
    <div>
        <h3>WEATHER APP</h3>

        <div>
        <form>
            <input type="text" name='city' placeholder='city' onChange={e => handleChange(e)} />
            <input type="text" name='country' placeholder='country' onChange={e => handleChange(e)} />

            <button onClick={e => weatherData(e)}>submit</button>
        </form>
        </div>

        {
            weather.data != undefined ?

            <div>
                <DisplayWeather data ={weather.data} />
                </div>
                :null

        }
    </div>
  )
}

export default Weather