<template>
  <div class="search my-2 my-ms-0">
    <div class="search__field">
      <input
        type="text"
        v-model.trim="search"
        @change="onSubmit"
        class="search__input"
        placeholder="Enter your city"
      />
      <button @click="onSubmit" class="search__button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="search__icon"
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      </button>
    </div>
    <p class="search__error-box">{{error}}</p>
  </div>
</template>

<script>
export default {
  name: "Search",
  props: {
    handleSubmit: Function,
    error: String
  },

  data: function() {
    return {
      search: ""
    };
  },
  methods: {
    onSubmit() {
      this.handleSubmit(this.search);
    }
  }
};
</script>

<style>
.search {
  width: 100%;
}

.search__error-box {
  color: #ec6e4c;
  font-size: 0.875em;
  text-align: right;
}

.search__error-box::first-letter {
  text-transform: uppercase;
}

.search__field {
  position: relative;
  margin-bottom: 5px;
}

.search__input {
  width: 100%;
  background-color: transparent;
  border: 1px solid #ec6e4c;
  left: 0;
  top: 0;
  border-radius: 5px;
  font-size: 0.875em;
  padding: 0.6em calc(1em + 20px) 0.6em 1em;
  color: #ec6e4c;
  transition: 0.2s box-shadow;
}

.search__input::placeholder {
  color: #754639;
}

.search__input:focus {
  outline: none;
  box-shadow: 0 0 10px rgba(236, 110, 76, 0.2);
}

.search__button {
  border: 0;
  background-color: transparent;
  cursor: pointer;
}

.search__icon {
  color: #ec6e4c;
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  margin-right: 1em;
}
</style>