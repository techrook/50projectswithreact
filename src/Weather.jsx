import React, {  useState } from "react";
import DisplayWeather from "./DisplayWeather";
import "./App.css"

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
        <h3 className="text-2xl p-6 ">WEATHER APP</h3>

        <div>
        <form   className=" grid grid-rows-2 ">
            <input className="w-2/4 p-1 ml-12 my-2 text-center" type="text" name='city' placeholder='city' onChange={e => handleChange(e)} />
            <input className="w-1/2 ml-12 p-1 my-2 text-center" type="text" name='country' placeholder='country' onChange={e => handleChange(e)} />

            <button className="rounded-full bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-200 border border-gray-200 w-24 text-center justify-self-center " onClick={e => weatherData(e)}>submit</button>
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