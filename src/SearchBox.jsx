import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from "react";
import { colors } from '@mui/material';
import { red } from '@mui/material/colors';

function SearchBox({updateInfo}){
    let [city,setCity]=useState("");
    let [error,setError] = useState(false);
    const API_URL="https://api.openweathermap.org/data/2.5/weather"
    const API_KEY="fb91117b76205d81d734b339593cd21f";

    async function getWeatherInfo(){
        try{
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse = await response.json();
        console.log(jsonResponse);
        let result={
            city:city,
            temp:jsonResponse.main.temp,
            tempMin:jsonResponse.main.temp_min,
            tempMax:jsonResponse.main.temp_max,
            humidity:jsonResponse.main.humidity,
            feelsLike:jsonResponse.main.feels_like,
            weather:jsonResponse.weather[0].description,
        }
        console.log(result);
        return result;


        }catch(err){
            throw err;
        }
        

    };

    
     function handlechange(event){
        setCity(event.target.value);
     } 

     async function handleSubmit(event){
        try{
            event.preventDefault();
        console.log(city);
        setCity("");
        let newInfo = await getWeatherInfo();
        updateInfo(newInfo)

        }catch(err){
            setError(true)
        }
        

     }

    return(
        <div className="SearchBox">
        
        <form onSubmit={handleSubmit}>
            <TextField id="city" label="City name" variant="outlined" value={city} onChange={handlechange} required/>
            <br></br><br></br>
            <Button variant="contained" type="submit">Search</Button>
        {error && <b><p style={{color:"red"}}>No such a place exists!</p></b>}
        </form>
        </div>
    )
};

export default SearchBox;