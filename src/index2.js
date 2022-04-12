function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-city-input");
  let h2 = document.querySelector("h2");
  h2.innerHTML = searchInput.value;

  let apiKey = "dfb7d1f03e3eb9184605492c12826c7d";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput.value}&appid=${apiKey}&units=metric`;

  function displayTemp(response) {
    let temp = Math.round(response.data.main.temp);
    let currentTemp = document.querySelector("#currentTemp");
    currentTemp.innerHTML = `${temp}°C`;
  }

  axios.get(apiUrl).then(displayTemp);
}

let form = document.querySelector("#search-city-form");
form.addEventListener("submit", search);

let tempElement = document.querySelector("#temperature");
