const apiKey = "b28e8e3aa5bb95cdd1f4244490164260";

var state = document.querySelector(".search-box");
function toggleSearch() {
    document.querySelector(".call-btn").style.display = "none";

    const search = document.querySelector(".search");
    search.style.display = "block";
    // search.scrollIntoView({ behavior: "smooth" });
}

async function getWeather() {
    const city = document.getElementById("city").value;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        document.getElementById("result").innerHTML = `
            <h2>${data.name}</h2>
            <p>Temperature: ${data.main.temp}°C</p>
            <p>Weather: ${data.weather[0].main}</p>
            <p>Humidity: ${data.main.humidity}%</p>
        `;
    } catch (error) {
        document.getElementById("result").innerHTML =
            "City not found!";
    }
}