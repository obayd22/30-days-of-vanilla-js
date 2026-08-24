# Weather App

A clean, responsive weather application that fetches real-time weather data using the WeatherAPI. Built with vanilla HTML, CSS, and JavaScript.

## Features

- **Real-time weather data** — Get current temperature, humidity, and wind speed for any city worldwide.
- **Search by city** — Type a city name and press Enter or click the search button.
- **Dynamic weather icons** — Icons update based on current weather conditions.
- **Error handling** — Friendly message displayed for invalid city names.
- **Fully responsive** — Optimized for both desktop and mobile devices (screens ≤480px).

## Tech Stack

- HTML5
- CSS3 (with media queries)
- Vanilla JavaScript (Fetch API)

## Getting Started

### Prerequisites

- A modern web browser
- A free API key from [WeatherAPI](https://www.weatherapi.com/)

### Installation

1. Clone or download this repository.
2. Open `script.js` and replace the `apiKey` value with your own WeatherAPI key:

```javascript
const apiKey = "your_api_key_here";
```

3. Open `index.html` in your browser.

## File Structure

```
├── index.html      # Main HTML structure
├── style.css       # Styling and responsive media queries
├── script.js       # Weather fetching and DOM logic
└── images/         # Icons (search, humidity, wind)
```

## API Reference

This app uses the [WeatherAPI Current Weather endpoint](https://www.weatherapi.com/docs/):

```
https://api.weatherapi.com/v1/current.json?key={apiKey}&q={city}
```

## Responsive Design

The app includes a mobile-first responsive layout with a breakpoint at **480px**:

| Element      | Desktop | Mobile (≤480px) |
|--------------|---------|-----------------|
| Card padding | 40px 35px | 25px 20px |
| Search input | 60px tall | 48px tall |
| Temperature  | 80px font | 56px font |
| City name    | 45px font | 32px font |
| Weather icon | 170px     | 130px |

## License

This project is open-source and free to use.
