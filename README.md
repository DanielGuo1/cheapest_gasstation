<!-- PROJECT LOGO -->
[![JavaScript](https://img.shields.io/badge/Language-JavaScript-yellowgreen.svg?style=flat-square&logo=Javascript&logoColor=white)](https://developer.mozilla.org/de/docs/Web/JavaScript) 
[![Mapbox](https://img.shields.io/badge/map-Mapbox-blue.svg?style=flat-square&logo=mapbox&logoColor=white)](https://docs.mapbox.com/api/overview/) 
[![Tankerkönig](https://img.shields.io/badge/API-Tankerkönig-green.svg?style=flat-square)](https://www.tankerkoenig.de/) 


<h1 align="center">Cheapest gas station</h1>
<p align="center">
  <a href="![image](https://github.com/DanielGuo1/cheapest_gasstation/blob/main/images/gas_station.png)">
    <img src="https://github.com/DanielGuo1/cheapest_gasstation/blob/main/images/gas_station.png" alt="Logo" width="220" height="220">
  </a>
  <p align="center">
    Find the cheapest gas station in your area
  </p>
</p>


## About The Project


![front_end](https://raw.githubusercontent.com/DanielGuo1/cheapest_gasstation/main/images/frontend.png)

In this project I created a Map that shows which gas station is the cheapest (and the most expensive) one, based on your location and the range you want to consider. 
I consumed the real-time gas station prices via this [API Endpoint](https://creativecommons.tankerkoenig.de/) 
(API only available for Germany).

### Built With

* [JavaScript](https://developer.mozilla.org/de/docs/Web/JavaScript)
* [Mapbox](https://docs.mapbox.com/api/overview/)
* [Tankerkönig](https://www.tankerkoenig.de/)



<!-- GETTING STARTED -->
## Getting Started

If you want to run this code locally, get a copy and follow these simple steps.

### Installation

1. Get a free API Key at [https://creativecommons.tankerkoenig.de](https://creativecommons.tankerkoenig.de/)
2. Get a Access Token at [https://docs.mapbox.com/help/getting-started/access-tokens](https://docs.mapbox.com/help/getting-started/access-tokens/)
3. Clone the repo
   ```sh
   git clone https://github.com/your_username_/cheapest_gasstation.git
   ```
3. Enter your API in `main.js`
   ```JS
   let apiKey = 'your_api_key'
   ```
4. Enter your Access Token in `main.js`
   ```url
   https://api.mapbox.com/{endpoint}?access_token={your_access_token}
   ```
   
### Setup

Choose your location in `main.js`
   ```JS
   let lat = 48.783333
   let long = 9.183333
   ```
Adjust your range and fuel in `main.js`
   ```JS
   $.ajax({
      url: "https://creativecommons.tankerkoenig.de/json/list.php",
      data: {
          lat: lat,
          lng: long,
          rad: 10,
          sort: "price",
          type: "e5",
          apikey: apiKey
      },
   ```
Change the range in kilometers in `main.js`
   ```JS
      data: {
          rad: 10,
      },
   ```
Change Fuel between: `E10`, `E5` or `Diesel` in `main.js`
   ```JS
      data: {
          type: "e5",
      },
   ```
