  /* Hamburger menu animation */
const hamburgerMenu = document.querySelector(".hamburger-menu");
const menu = document.querySelectorAll(".line");
const overlay = document.querySelector(".overlay");

menu.forEach(element => {
  hamburgerMenu.addEventListener("click", function() {
    console.log(element);
    element.classList.toggle("anim");
    overlay.classList.toggle("active");
  });
});
      // Varibles - placeholders
/* let temperatureDescription = document.querySelector(".temperature-description");
*/
let locationTimezone = document.querySelector(".location-timezone");
let temperatureDegree = document.querySelector(".degree");
let iconPlaceholder = document.querySelector(".wheater-icon");
let windPlace =document.querySelector("#wind");
let humidityPlace = document.querySelector("#humidity");
let pressurePlace = document.querySelector("#pressure");

    // Variables - placeholders
function getWheater() {
  let forecast = "https://api.weatherapi.com/v1/forecast.json?key="
  let apiKey = "5a51cd4e57c94a81b9564439220802";
  navigator.geolocation.getCurrentPosition(success, error);
 
function success (position) {
  let lat = position.coords.latitude;
  let long = position.coords.longitude;
  let forecastUrl = `${forecast}${apiKey}&q=${lat},${long}&days=3&aqi=yes`;
  console.log(forecastUrl);

  fetch(forecastUrl)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    /* Current  */
    const {temp_c, wind_kph, humidity, pressure_mb,} = data.current;
    const {text, icon, code} = data.current.condition;
    const {name, region, country} = data.location;
    console.log(text);
   /*  
  temperatureDescription.textContent = `${text}`;
   */
    locationTimezone.textContent = `${name}, ${region}, ${country}`;
    iconPlaceholder.src = `${icon}`;
    temperatureDegree.textContent = `${temp_c}`;
    windPlace.textContent = `${wind_kph} kph`;
    humidityPlace.textContent =  `${humidity} %`;
    pressurePlace.textContent = `${pressure_mb} mb`;

    /*  Forecast  */
    const dayOneDegree = document.querySelector(".degree-forecast-one");
    const dayTwoDegree = document.querySelector(".degree-forecast-two");
    const dayThreeDegree = document.querySelector(".degree-forecast-three");
    const {forecastday} = data.forecast;
    const {condition, uv} = data.forecast.forecastday[0].day;
  
    let forecastDayOne = forecastday[0].day.avgtemp_c;
    let forecastDayTwo = forecastday[1].day.avgtemp_c;
    let forecastDayThree = forecastday[2].day.avgtemp_c;
  
   /* Add wheater data to html */ 
   const degreeSymbol = document.querySelector(".degree-symbol");
   dayOneDegree.textContent = Math.round(forecastDayOne) + " C°";
   dayTwoDegree.textContent = Math.round(forecastDayTwo)  + " C°";
   dayThreeDegree.textContent = Math.round(forecastDayThree)  + " C°";
   /* Wheater icons */
   const dayOneIcon = document.querySelector(".forecast-icon-one");
   dayOneIcon.src = condition.icon;
   const dayTwoIcon = document.querySelector(".forecast-icon-two");
   dayTwoIcon.src = data.forecast.forecastday[1].day.condition.icon;
   const dayThreeIcon = document.querySelector(".forecast-icon-three");
   dayThreeIcon.src = data.forecast.forecastday[2].day.condition.icon;
   /* Overlays  */
   const sunrisePlaceholder = document.querySelector(".sunrise");
   const sunsetPlaceholder = document.querySelector(".sunset");
   const moonsetPlaceholder = document.querySelector(".moonset");
   const moonrisePlaceholder = document.querySelector(".moonrise");
   const uvIndex = document.querySelector(".uv-index");

   const {sunrise, sunset, moonrise, moonset} = data.forecast.forecastday[0].astro;
   
   sunrisePlaceholder.textContent = `Sunrise: ${sunrise}`;
   sunsetPlaceholder.textContent = `Sunset: ${sunset}`;
   moonrisePlaceholder.textContent = `Moonrise: ${moonrise}`;
   moonsetPlaceholder.textContent = `Moonset: ${moonset}`;
   uvIndex.textContent = `UV index: ${uv}`;
  }); 
};

function error () {
 alert("No internet conection");
  console.log(error);
}
}
getWheater();

// Get date
const now = new Date();
let days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "June",
  "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
let day = now.getDay();
let date = now.getDate();
let month = now.getMonth();
let year = now.getFullYear();

let whatDay = function () {
  return days[day];
}
let whatMonth = function() {
  return monthNames[month];
}
let fullDate = `${whatDay()}, ${whatMonth()} ${date}`;
console.log(day, fullDate);
// Placeholder
const dateHolder = document.querySelector(".date");
dateHolder.textContent = fullDate; 

     
