const container = document.getElementById("container");
const nameC = document.getElementById("nameC");
const temp = document.getElementById("temp");
const feels = document.getElementById("feels");
const mainW = document.getElementById("mainW");
const apiLink = "https://api.openweathermap.org/data/2.5/weather?q=";
let city = "London";
const apiKey = "&units=metric&APPID=d38eccaff6e5a5c1270a84b75679fdfc";
const searchBox = document.getElementById("search");
const searchBtn = document.getElementById("searchBtn");
searchBtn.addEventListener("click", getWeather);
searchBox.addEventListener("keydown", function(e){
    if (e.key === "Enter") {  
        getWeather();
      }
});

async function getWeather() {
    
  try {

    city = searchBox.value;

    const response = await fetch(apiLink + city + apiKey, { mode: "cors" });
    const weatherData = await response.json();

    nameC.textContent = weatherData.name;
    temp.textContent = weatherData.main.temp + "°";
    feels.textContent = "Feels like: " + weatherData.main.feels_like + "°";
    mainW.textContent = weatherData.weather[0].main;

    container.style.visibility = "visible";
    container.style.opacity='1'
    container.style.transition='opacity 500ms'
    searchBox.value = "";
  
  } catch (e) {
    console.error(e);
    container.style.display = "none";
    alert("ERROR!!! what's with the typos today???");
    searchBox.value = "";
  }
}
