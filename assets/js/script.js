document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper(".mySwiper", {
        loop: true,
        autoplay: {
            delay: 3000, // 3 seconds
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });

    // Fetch Weather Data
    fetchWeather();

    // Fetch News Data
    fetchNews();
});

document.addEventListener("DOMContentLoaded", function () {
    fetchWeather();
});

function fetchWeather() {
    // Simulating API call for weather data
    const weatherData = [
        { city: "Amsterdam", temp: "+6°C", high: "+6°", low: "+1°", humidity: "70%", wind: "N 17 KPH" },
        { city: "New Delhi", temp: "+33°C", high: "+33°", low: "+24°", humidity: "20%", wind: "W 26 KPH" },
        { city: "London", temp: "+5°C", high: "+7°", low: "+2°", humidity: "78%", wind: "N 14 KPH" }
    ];

    const weatherBox = document.getElementById("weather-box");
    weatherBox.innerHTML = ""; // Clear existing content

    weatherData.forEach(weather => {
        let card = document.createElement("div");
        card.classList.add("weather-card");

        card.innerHTML = `
            <h3>${weather.city} Weather</h3>
            <p class="temp">${weather.temp}</p>
            <p>High: ${weather.high} | Low: ${weather.low}</p>
            <p>Humidity: ${weather.humidity}</p>
            <p>Wind: ${weather.wind}</p>
        `;

        weatherBox.appendChild(card);
    });
}

// Function to Fetch News (Dummy Example)
function fetchNews() {
    document.getElementById("news-info").innerText = "Tech industry sees major innovations this year!";
}
