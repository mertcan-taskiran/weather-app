import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const WeatherContext = createContext()

export const WeatherProvider = ({children}) => {
    const [city, setCity] = useState("Ankara")
    const [weatherInfo, setWeatherInfo] = useState()
    
    useEffect(() => {
        const api = "api_key"
        const baseURL =`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&lang=en&appid=${api}&cnt=40` 
        if (city) {
        axios(baseURL)
        .then(res => {
            const dailyWeatherData = res.data.list.filter((data, index) => index % 8 === 0);
            setWeatherInfo(dailyWeatherData);
          })
          .catch((e) => alert("Hata !"))
        }
    },[city])
    
    const values = {
        city,
        setCity,
        weatherInfo,
        setWeatherInfo,      
    }

    return <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>
}

export const useWeather = () => useContext(WeatherContext);