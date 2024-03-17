let cityName = document.querySelector(".weather_city");
let dateTime = document.querySelector(".weather_date_time");
let w_forecast = document.querySelector(".weather_forecast");
let w_icon = document.querySelector(".weather_icon");
let w_temperature = document.querySelector(".weather_temperature");
let w_minTemp = document.querySelector(".weather_min");
let w_maxTemp = document.querySelector(".weather_max");

let w_feelsLike = document.querySelector(".weather_feelsLike");
let w_humidity = document.querySelector(".weather_humidity");
let w_wind = document.querySelector(".weather_wind");
let w_pressure = document.querySelector(".weather_pressure");

let citySearch = document.querySelector(".weather_search");
let citySearchName = document.querySelector(".city_name");

// api key chandan => 6ebc4d6b4779687663977f204c75f948
// api key thapa   => a0b06669a793506ae54060f7df8a5fb6

let city = "bokaro";

//================================================================
// getCountryName => to get the actual country name(IN => India), for more details, visit: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DisplayNames
//================================================================

const getCountryName = (code) => {
    return new Intl.DisplayNames([code], { type: 'region' }).of(code);
};

//================================================================
// getdateTime => to display the readable date and time, for more details, visit:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat
//================================================================

const getdateTime = (dt) => {
    const curDate = new Date(dt * 1000);
    const option = {
        weekday:"long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric"
    };
    const formatter = new Intl.DateTimeFormat('en-US', option).format(curDate);
    return formatter;
};

// Fetch and Display Data
const getWeatherData = async (city) => {
    const weatherAPI_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a0b06669a793506ae54060f7df8a5fb6`;
    try {
        const res = await fetch(weatherAPI_URL);
        const data = await res.json();
        console.log(data);

        const {main, name, weather, wind, sys, dt} = data;

        cityName.innerHTML = `${name}, ${getCountryName(sys.country)}`;
        dateTime.innerHTML = getdateTime(dt);

        w_forecast.innerHTML = weather[0].main;
        w_icon.innerHTML = `<img src= "http://openweathermap.org/img/wn/${weather[0].icon}@4x.png" />`;

        w_temperature.innerHTML = `${(main.temp - 273.15).toFixed(1)}&#176C`; // min.temp is in kelvin, converting into Celsius
        w_minTemp.innerHTML = `Min: ${(main.temp_min - 273.15).toFixed(1)}&#176C`;
        w_maxTemp.innerHTML = `Max: ${(main.temp_max - 273.15).toFixed(1)}&#176C`;

        w_feelsLike.innerHTML = `${(main.feels_like - 273.15).toFixed(1)}&#176C`;
        w_humidity.innerHTML = `${main.humidity}%`;
        w_wind.innerHTML = `${wind.speed} m/s`;
        w_pressure.innerHTML = `${main.pressure} hPa`;
        
    } catch (error) {
        alert("City Not Found....");
    }
};

// Search Functionality
const getSearchResult = (e) => {
    e.preventDefault();
    city = citySearchName.value;
    getWeatherData(city);
    citySearchName.value = "";
};
citySearch.addEventListener("submit", getSearchResult);

document.body.addEventListener("load", getWeatherData(city));
