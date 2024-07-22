<template>
  <div class="component-container">
    <h2>Search Flight</h2>
    <form @submit.prevent="submitSearch">
      <div class="form-group">
        <label for="toCity">To (City):</label>
        <input
          type="text"
          id="toCity"
          v-model="searchData.to"
          placeholder="Enter destination city"
          required
        />
      </div>

      <div class="form-group">
        <label for="fromCity">From (City):</label>
        <input
          type="text"
          id="fromCity"
          v-model="searchData.from"
          placeholder="Enter departure city"
          required
        />
      </div>

      <button type="submit">Search</button>
    </form>

    <div v-if="flights.length > 0" class="flights-list">
      <h3>Available Flights:</h3>
      <ul>
        <li v-for="flight in flights" :key="flight.FlightID">
          <div class="flight-details">
            <p><strong>Flight:</strong> {{ flight }}</p>
          </div>
        </li>
      </ul>
    </div>

    <p v-if="flights.length === 0 && searched">No flights found.</p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "SearchFlightComponent",
  data() {
    return {
      searchData: {
        to: "",
        from: "",
      },
      flights: [],
      searched: false,
    };
  },
  methods: {
    async submitSearch() {
      try {
        const response = await axios.get(
          "http://192.168.1.63:8000/api/flights/filter",
          {
            params: {
              to: this.searchData.to,
              from: this.searchData.from,
            },
          }
        );

        if (!response.data || response.data.length === 0) {
          this.flights = [];
          this.searched = true;
          return;
        }

        // Populate flights array with response data
        this.flights = response.data;
        this.searched = true;
      } catch (error) {
        console.error("Error searching flights:", error.message);
        this.flights = [];
        this.searched = true;
      }
    },
    formatDate(dateTime) {
      const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      };
      return new Date(dateTime).toLocaleDateString(undefined, options);
    },
  },
};
</script>

<style scoped>
.component-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
}

h2 {
  text-align: center;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
}

input {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

.flights-list {
  margin-top: 20px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  padding: 10px;
  border: 1px solid #ddd;
  margin-bottom: 5px;
  border-radius: 4px;
  background-color: #fff;
}

.flight-details p {
  margin: 5px 0;
}
</style>
