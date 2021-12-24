import React, { useEffect, useState } from 'react'
import './weather.css';



const Weather = () => {
    const[city,setCity]= useState(null);
    const[search,setSearch]= useState("karachi");

    useEffect(() => {
        const fetchApi = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=1dd952f68802e8a31f5bd06ea20c85e5`
            const response = await fetch(url)
            const resj = await response.json()
            console.log(resj)
            // .then((data) => {
            //     console.log(data);
            // })
            // .catch((err) => {
            //     console.error(err);
            // });
            setCity(resj.main)
        }
        fetchApi()
      },[search] );
      


    return (
       
        <>
            <div className='box' >

                <h1>Local Weather Forecast</h1>
                <div className='inputData'>
                    <input
                    type='search'
                    className='inputField'
                    placeholder='Enter a City name'
                    value={search}
                    onChange={(event) => {
                        setSearch(event.target.value)

                    } } />
                </div>
        {!city? 
            (<h2> No Data Found</h2>) : ( 
                        <div>
                        <div className = 'info'>
                            <h2 className = 'location'><i class="fas fa-map-marker-alt"></i>{search}</h2>
                            <h1 className='temp'>
                                {city.temp}°C
                            </h1>
                            <h2>Min : {city.temp_min}°C | Max : {city.temp_max}°C</h2>
        
                        </div>
                        
                    </div>
        

        )}






            </div>
        </>
        
    )
}


export default  Weather;