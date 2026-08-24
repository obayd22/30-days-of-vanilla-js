const apiKey = "30629abfe0e94943a64134421262408";

const searchBox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")
const weatherIcon = document.querySelector(".weather-icon")
const errorBox = document.querySelector(".error")
const weatherBox = document.querySelector(".weather")

async function checkWeather(city) {

    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

    const response = await fetch(apiUrl);

    if(response.status == 400) {
        errorBox.style.display = "block";
        weatherBox.style.display = "none";
    } else {
        const data = await response.json();

            document.querySelector(".city").innerHTML = data.location.name;
            document.querySelector(".temp").innerHTML = Math.round(data.current.temp_c) + "°c";
            document.querySelector(".humidity").innerHTML = data.current.humidity + "%";
            document.querySelector(".wind").innerHTML = data.current.wind_kph + " km/h";

            // this adds the picture that (weatherapi.com) provides
            weatherIcon.src = "https:" + data.current.condition.icon;
            
            errorBox.style.display = "none";
            weatherBox.style.display = "block";
        }
    }

searchBox.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      checkWeather(searchBox.value);
    }
});

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
})