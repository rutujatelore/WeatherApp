import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";
import { useState } from "react";



function WeatherApp(){
    let [weatherInfo,setWeatherInfo]=useState({
        city:"Delhi",
        feelsLike:38.26,
        humidity:27,
        temp:37.86,
        tempMax:37.86,
        tempMin:34.67,
        weather:"clear sky"

    })

    function updateInfo(newInfo){
        setWeatherInfo(newInfo)
    }
    return(
        <div>
            <h2>Weather App</h2>
            <SearchBox updateInfo={updateInfo}/>  
            <InfoBox info={weatherInfo}/>

        </div>
    )
};

export default WeatherApp;