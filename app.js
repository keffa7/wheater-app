 
      // Varibles - placeholders
let temperatureDescription = document.querySelector(".temperature-description");
let temperatureDegree = document.querySelector(".temperature-degree");
let locationTimezone = document.querySelector(".location-timezone");
let iconPlaceholder = document.querySelector(".icon");

function getWheater() {
  let api = "https://api.weatherapi.com/v1/current.json?key=";
  let apiKey = "5a51cd4e57c94a81b9564439220802";
  navigator.geolocation.getCurrentPosition(success, error);
 

function success (position) {
  let lat = position.coords.latitude;
  let long = position.coords.longitude;
  let url = `${api}${apiKey}&q=${lat},${long}`;
  console.log(url);

  fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data.current.condition.icon);
    const {temp_c, condition} = data.current;
    const {text, icon} = data.current.condition;
    const {name, region, country} = data.location;

   /* Add wheater data to html */ 
  locationTimezone.textContent = `${name}, ${region}, ${country}`;
  temperatureDegree.textContent = `${temp_c}`;
  temperatureDescription.textContent = `${text}`;
 /*  iconPlaceholder.textContent = `${icon}` */

  /* Set Icons 
   function setIcons(icon, iconID) {
    const currentIcon = icon.replace(/-/g, "_").toUpperCase();
    skycons.play();
    return Skycons.set(iconID, skycons[currentIcon]);
  }
  
  setIcons(icon,iconPlaceholder); */

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

 

console.log(now);

 

let days = ["Pon", "Uto", "Sri", "Čet", "Pet", "Sub", "Ned"]

let day = now.getDay() - 1;
let date = now.getDate()
let month = now.getMonth() + 1;
let year = now.getFullYear();

console.log(day, date, month, year);

let whatDay = function () {
  return days[day]
}

let fullDate = `${whatDay()}, ${date}.${month}.${year}`;
console.log(fullDate);
// Placeholder
const dateHolder = document.querySelector(".date");
dateHolder.textContent = fullDate;
