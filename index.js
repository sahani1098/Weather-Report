let apiUrl = "https://api.openweathermap.org/data/2.5/weather?appid=a92ca83dc887eb1b20c2873e68f60553&units=metric&q=";

let searchBox = document.querySelector("#search input");
let searchButton = document.querySelector("#search i");
let weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
    let response = await fetch(apiUrl+city);

    if(response.status == 404)
    {
        document.querySelector("#error").style.display = "block";
        document.querySelector("#weather").style.display = "none";
    }
    else
    {
        let data = await response.json();
        
        console.log(data);

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "c";
        document.querySelector(".humidty").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

        if(data.weather[0].main == "Clouds"){
            weatherIcon.src = "./weather-app-img/images/clouds.png"
        }
        else if(data.weather[0].main == "Clear"){
            weatherIcon.src = "./weather-app-img/images/clear.png"
        }
        else if(data.weather[0].main == "Rain"){
            weatherIcon.src = "./weather-app-img/images/rain.png"
        }
        else if(data.weather[0].main == "Drizzle"){
            weatherIcon.src = "./weather-app-img/images/drizzle.png"
        }
        else if(data.weather[0].main == "Mist"){
            weatherIcon.src = "./weather-app-img/images/mist.png"
        }

        document.querySelector("#weather").style.display = "block";
        document.querySelector("#error").style.display = "none";
        
    }

    
}

searchButton.addEventListener("click",()=>{
     checkWeather(searchBox.value);
})

