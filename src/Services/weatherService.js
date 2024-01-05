import { DateTime } from 'luxon';

const BASE_URL = "https://api.openweathermap.org/data/2.5";
const API_KEY = "83a3efca26fd65f341a5e7b578981328";

const getWeatherData = async (infoType, searchParams) => {
    const url = new URL(`${BASE_URL}/${infoType}`);
    url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });

    try {
        const response = await fetch(url);
        const data = await response.json();
            console.log(data); 

        return data;
    } catch (error) {
        console.error("Error fetching weather data:", error);
        throw error;
    }
};

const formatCurrentWeather = (data) => {
    const {
        coord: { lat, lon },
        main: { temp, feels_like, temp_min, temp_max, humidity },
        name,
        dt,
        sys: { country, sunrise, sunset },
        weather,
        wind: { speed },
    } = data;

    const { main: details, icon } = weather[0];

    return { lat, lon, temp, feels_like, temp_min, temp_max, humidity, name, dt, country, sunrise, sunset, details, icon, speed };
};

const formatForecastWeather = (data) => {
    let { timezone, daily, hourly } = data;
        console.log(data); 
    if (daily && daily.length >= 6) {
        daily = daily.slice(1, 6).map(d => {
            return {
                title: formatToLocalTime(d.dt, timezone, "ccc"),
                temp: d.temp.day,
                icon: d.weather[0].icon
            };
        });
    }

    if (hourly && hourly.length >= 6) {
        hourly = hourly.slice(1, 6).map(d => {
            return {
                title: formatToLocalTime(d.dt, timezone, "hh:mm a"),
                temp: d.temp.day,
                icon: d.weather[0].icon
            };
        });
    }

    return { timezone, daily, hourly };
};

const getFormattedWeatherData = async (searchParams) => {
    try {
        const data = await getWeatherData("weather", searchParams);
        

        const { lat, lon } = data;
        console.log(lat,lon)
        const formattedForecastWeather = await getWeatherData('onecall', {
            lat, lon, exclude: 'current,minutely,alert', units: searchParams.units
        }).then(formatForecastWeather);

        return { ...formatCurrentWeather(data), ...formattedForecastWeather };
    } catch (error) {
        console.error("Error in getFormattedWeatherData:", error);
        throw error;
    
};}

const formatToLocalTime = (
    secs,
    zone,
    format = "cccc, dd LLL yyyy' | Local time:'hh:mm a"
) => DateTime.fromSeconds(secs).setZone(zone).toFormat(format);

export default getFormattedWeatherData;
