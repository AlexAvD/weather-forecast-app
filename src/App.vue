<template>
  <div id="app" class="d-flex flex-column justify-content-center">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col col-10 col-md-12 col-lg-9 col-xl-8">
          <div class="content my-5 d-flex flex-column justify-content-center">
            <div class="row justify-content-between">
              <div class="col-md-7">
                <h1 class="content__title content__title--accent mb-1">{{this.city}}</h1>
                <p class="content__subtitle mb-3">
                  Weahter forecast for next
                  <span class="content__subtitle--accent">3</span> days
                </p>
              </div>
              <div class="col d-flex flex-column align-items-end">
                <Search :handleSubmit="handleSubmit" :error="error" />
              </div>
            </div>
            <div class="row" v-if="forecasts.length">
              <div class="col-md-4" :key="index" v-for="(forecast, index) in forecasts">
                <Card
                  :loading="loading"
                  :temperature="forecast.temperature"
                  :name="forecast.name"
                  :description="forecast.description"
                  :image="forecast.image"
                  :date="forecast.date"
                />
              </div>
            </div>
            <div class="row" v-else>
              <div class="col-md-4" :key="n" v-for="n in 3">
                <Card :loading="loading" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template> 

<script>
import Card from "./components/Card";
import Search from "./components/Search";
import "bootstrap/dist/css/bootstrap-grid.min.css";

export default {
  name: "App",
  components: {
    Card,
    Search
  },
  mounted: function() {
    this.getForecasts();
  },

  methods: {
    handleSubmit(search) {
      this.query = search;
      this.getForecasts();
    },
    getForecasts() {
      this.loading = true;

      return fetch(this.getApiLink(this.query))
        .then(res => res.json())
        .then(({ cod, message, list, city }) => {
          if (cod == 200) {
            return {
              city: city.name,
              forecasts: this.processForecasts(list).slice(1, 4)
            };
          } else {
            throw new Error(message);
          }
        })
        .then(({ city, forecasts }) => {
          this.city = city;
          this.forecasts = forecasts;
          this.loading = false;
          this.error = "";
        })
        .catch(e => {
          this.loading = false;
          this.error = e.message;
        });
    },
    processForecasts(forecasts) {
      const result = [];
      const forecastsByDates = forecasts.reduce((acc, curr) => {
        const [date] = curr.dt_txt.split(" ");

        if (date in acc) {
          acc[date].push(curr);
        } else {
          acc[date] = [curr];
        }

        return acc;
      }, {});

      for (const date in forecastsByDates) {
        const { averageTemperature, weatherInfo } = this.processDateForecasts(
          forecastsByDates[date]
        );

        result.push({
          temperature: averageTemperature,
          date: new Date(date),
          name: weatherInfo.name,
          description: weatherInfo.description,
          image: weatherInfo.image
        });
      }

      return result;
    },
    processDateForecasts(forecastsByDate) {
      let temperatures = [];
      let weathersInfo = [];

      for (let i = 0, max = forecastsByDate.length; i < max; i++) {
        temperatures.push(forecastsByDate[i].main.temp);
        weathersInfo.push(...forecastsByDate[i].weather);
      }

      let weathersInfoWithFrequency = weathersInfo.reduce((acc, curr) => {
        if (curr.id in acc) {
          acc[curr.id].frequency++;
        } else {
          acc[curr.id] = {
            frequency: 1,
            weather: {
              name: curr.main,
              description: curr.description,
              image: this.getIconLink(this.getIconId(curr.icon))
            }
          };
        }

        return acc;
      }, {});

      const averageTemperature =
        temperatures.reduce((prev, curr) => prev + curr) / temperatures.length;

      const weatherInfo = Object.entries(weathersInfoWithFrequency).sort(
        (a, b) => b[1].frequency - a[1].frequency
      )[0][1].weather;

      return {
        averageTemperature,
        weatherInfo
      };
    },
    getApiLink(query) {
      return `${this.api.uri}?q=${query}&appid=${this.api.key}&units=metric`;
    },
    getIconLink(iconId) {
      return `${this.icon.src}${iconId}${this.icon.type}@2x.png`;
    },
    getIconId(icon) {
      return icon.replace(/(n|d)$/, "");
    }
  },
  data: () => ({
    loading: false,
    city: "Rostov-on-Don",
    query: "rostov-on-don",
    error: "",
    api: {
      uri: "https://api.openweathermap.org/data/2.5/forecast",
      key: "7084209d6a19d061780e6cadbf38b319"
    },
    icon: {
      type: "d",
      src: "http://openweathermap.org/img/wn/"
    },
    forecasts: []
  })
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Roboto:300,400,700,900&display=swap");

.content {
  padding: 30px 30px 15px 30px;
  border-radius: 5px;
  background-color: #171717;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.3);
}

.content__subtitle {
  color: #e9e9e9;
  font-size: 1.2em;
  font-weight: 300;
  text-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
}

.content__title {
  color: #e9e9e9;
  font-size: 2em;
  font-weight: 900;
}

.content__subtitle--underline {
  position: relative;
}

.content__subtitle--underline:after {
  content: "";
  position: absolute;
  width: 100%;
  height: 0.1em;
  bottom: -0.15625em;
  left: 0;
  background-color: #ec6e4c;
}

.content__subtitle--chip {
  background: #ec6e4c;
  padding: 0.2em 0.5em;
  color: #171717;
  border-radius: 2px;
}

.content__title--accent,
.content__subtitle--accent {
  color: #ec6e4c;
  font-weight: 900;
}
</style>
