<template>
  <div class="card" :class="{'card--loading': loading}">
    <div class="card__inner">
      <div class="card__header d-flex justify-content-between align-items-center">
        <div class="card__heading">{{humanizedDate}}</div>
        <div class="card__chip">{{humanizeTemperature}}</div>
      </div>
      <div class="card__body d-flex my-3 justify-content-center">
        <img class="card__image" :src="image" />
      </div>
      <div class="card__footer">
        <div class="card__title">{{name}}</div>
        <div class="card__subtitle">{{description}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import imagePlaceholder from "../assets/placeholder.png";
export default {
  name: "Card",
  props: {
    temperature: {
      type: Number,
      default: 0
    },
    name: {
      type: String,
      default: ""
    },
    description: {
      type: String,
      default: ""
    },
    image: {
      type: String,
      default: imagePlaceholder
    },
    date: {
      type: Date,
      default: function() {
        return undefined;
      }
    },
    loading: Boolean
  },

  computed: {
    humanizeTemperature: function() {
      return `${Math.round(this.temperature)} °C`;
    },
    humanizedDate: function() {
      return this.date !== undefined
        ? new Date(this.date).toLocaleDateString("en-Us", {
            month: "long",
            day: "numeric"
          })
        : "";
    }
  }
};
</script>

<style>
.card {
  margin: 15px 0;
  border: 1px solid #ec6e4c;
  background-color: #141414;
  border-radius: 0.3125em;
  padding: 1em;
  transform: scale(1);
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.3);
  transition: all 0.4s;
  will-change: transform, box-shadow;
}

.card:hover {
  transform: scale(1.1), perspective(1px);
  box-shadow: 0 10px 15px -2px rgba(0, 0, 0, 0.3);
}

.card__heading {
  color: #ec6e4c;
  font-size: 0.875em;
  margin-right: 15px;
}

.card__chip {
  font-weight: 900;
  font-size: 1em;
  padding: 0.2em 0.5em;
  color: #202020;
  background-color: #ec6e4c;
  border-radius: 0.1875em;
  user-select: none;
  white-space: nowrap;
}

.card__title {
  font-size: 1em;
  color: #e9e9e9;
  margin-bottom: 0.5em;
}

.card__subtitle {
  font-size: 0.875em;
  color: #878787;
}

.card__image {
  height: 100px;
  user-select: none;
  -webkit-user-drag: none;
}

.card__title:empty,
.card__subtitle:empty,
.card__heading:empty,
.card--loading .card__title,
.card--loading .card__subtitle,
.card--loading .card__heading {
  color: transparent;
  position: relative;
  border-radius: 0.125em;
  overflow: hidden;
  background-color: #222;
}

.card__title:empty::before,
.card__subtitle:empty::before,
.card__heading:empty::before {
  content: "empty";
}

.card--loading .card__heading:after,
.card--loading .card__title:after,
.card--loading .card__subtitle:after {
  content: "";
  position: absolute;
  width: 30px;
  height: 100%;
  left: 0;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.1),
    transparent
  );
  animation-name: glitter;
  animation-duration: 1.5s;
  animation-timing-function: ease;
  animation-iteration-count: infinite;
}

.card__title:empty,
.card--loading .card__title {
  width: 50%;
}

.card__heading:empty,
.card--loading .card__heading {
  width: 40%;
}

.card__subtitle:empty,
.card--loading .card__subtitle {
  width: 80%;
}

@keyframes glitter {
  from {
    left: -100%;
  }

  to {
    left: 200%;
  }
}
</style>
