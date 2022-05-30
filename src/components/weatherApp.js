import axios from 'axios';
import React,{useEffect, useState} from 'react';
import './css/style.css'
const WeatherApp=()=>{

        const [city ,setCity]=useState()
         const [search,setSearch]=useState("Delhi")

         useEffect(()=>{
             const fetchApi = async () => { 
                  const url =`http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=4ebb9418ca605fa1931880e565ec065c`
                  const response = await axios.get(url);
                //   const resJson = response.json();
                //   console.log(resJson)
                //   response.then(data => {
                //     setCity(data.main);
                //     // console.log(city);
                // })
                console.log(response)
                setCity(response.data.main)
                console.log(city)
             }
            fetchApi()
         },[search])

    return(
        <div className='container'>
        <div className='box'>
            <h3>Namaste World!</h3>
            <div className="inputData">
                <input 
                type="search" 
                className='inputField' 
                value={search}
                onChange={e=>{
                    setSearch(e.target.value);
                    // console.log(search)
                    console.log(city)
                }}
                />
            </div>
        </div>
{
    !search ? (
        <p>no data found</p>
    ):(
        <div className="info">
                <h1 className="location">
                <i className="fa-solid fa-street-view"></i>{search}
                
                </h1>
                <h2 className="temp">
                    {city?.temp}°C 
                </h2>
                <h3 className="tempmin_max">Min :{city?.temp_min}°C | Max :{city?.temp_max}°C</h3>
        </div>
    )
}
   
        </div>
    );
}
export default WeatherApp;