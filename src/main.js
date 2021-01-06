require('dotenv').config();

// Foursquare API Info
const clientId = process.env.REACT_APP_FOURSQUARE_CLIENT_ID;
const clientSecret = process.env.REACT_APP_FOURSQUARE_CLIENTSECRET;
const url = 'https://api.foursquare.com/v2/venues/explore?near=';

// OpenWeather Info
const openWeatherKey = process.env.REACT_APP_OPENWEATHER_KEY;
const weatherUrl = 'https://api.openweathermap.org/data/2.5/weather';

const Main = {
  async getVenues(city) {
    //const city = $input.val();
    const urlToFetch = `${url}${city}&limit=10&client_id=${clientId}&client_secret=${clientSecret}&v=20201230`;

    try {
      const response = await fetch(urlToFetch);

      if (response.ok) {
        const jsonResponse = await response.json();
        console.log(jsonResponse);
        let venues = jsonResponse.response.groups[0].items;
        venues = venues.map((item) => item.venue);
        return venues;
      }
    } catch (error) {
      console.log(error);
    }
  },

  async getForecast(city) {
    const urlToFetch = `${weatherUrl}?&q=${city}&APPID=${openWeatherKey}`;
    try {
      const response = await fetch(urlToFetch);

      if (response.ok) {
        const jsonResponse = await response.json();
        return jsonResponse;
      }
    } catch (error) {
      console.log(error);
    }
  },
};

export default Main;
