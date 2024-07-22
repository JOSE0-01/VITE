<template>
  <div class="overview-container">
    <h2>Overview</h2>

    <!-- Search Input and Button -->
    <input v-model="searchId" placeholder="Search by ID" />
    <button @click="search">Search</button>

    <!-- Display Search Results -->
    <div v-if="searchResults.length" class="results-container">
      <h3>Search Results:</h3>
      <ul>
        <li v-for="result in searchResults" :key="result.id">
          <div><strong>ID:</strong> {{ result.id }}</div>
          <!-- Display relevant data fields based on result structure -->
          <div v-if="result.type === 'airport'">
            <strong>Airport:</strong> {{ result.name }} - {{ result.city }},
            {{ result.country }}
          </div>
          <div v-else-if="result.type === 'aircraft'">
            <strong>Aircraft:</strong> {{ result.name }} ({{ result.type }})
          </div>
          <div v-else-if="result.type === 'booking'">
            <strong>Booking:</strong> {{ result.bookingInfo }}
          </div>
          <div v-else-if="result.type === 'ticket'">
            <strong>Ticket:</strong> {{ result.ticketInfo }}
          </div>
          <div v-else-if="result.type === 'passenger'">
            <strong>Passenger:</strong> {{ result.name }} - {{ result.email }}
          </div>
          <div v-else-if="result.type === 'flight'">
            <strong>Flight:</strong> {{ result.flightNumber }} - From:
            {{ result.fromCity }} To: {{ result.toCity }}
          </div>
          <!-- Add more details as per your application's data structure -->
        </li>
      </ul>
    </div>
    <div v-else>
      <p>No results found.</p>
    </div>

    <!-- Buttons for managing different sections -->
    <div class="management-buttons">
      <button @click="loadAirports">Airports</button>
      <button @click="loadAircrafts">Aircrafts</button>
      <button @click="loadBookings">Bookings</button>
      <button @click="loadTickets">Tickets</button>
      <button @click="loadPassengers">Passengers</button>
      <button @click="loadFlights">Flights</button>
    </div>

    <!-- Display section content based on selected section -->
    <div v-if="showAirports">
      <h3>Airports</h3>
      <ul>
        <li v-for="airport in airports" :key="airport.id">
          {{ airport.name }} - {{ airport.city }}, {{ airport.country }}
        </li>
      </ul>
    </div>

    <div v-if="showAircrafts">
      <h3>Aircrafts</h3>
      <ul>
        <li v-for="aircraft in aircrafts" :key="aircraft.id">
          {{ aircraft }} ({{ aircraft }})
        </li>
      </ul>
    </div>

    <div v-if="showBookings">
      <h3>Bookings</h3>
      <ul>
        <li v-for="booking in bookings" :key="booking.id">
          Booking ID: {{ booking.id }} | Passenger:
          {{ booking.passengerName }} | Flight: {{ booking.flightNumber }}
        </li>
      </ul>
    </div>

    <div v-if="showTickets">
      <h3>Tickets</h3>
      <ul>
        <li v-for="ticket in tickets" :key="ticket.id">
          Ticket ID: {{ ticket.id }} | Passenger: {{ ticket.passengerName }} |
          Flight: {{ ticket.flightNumber }}
        </li>
      </ul>
    </div>

    <div v-if="showPassengers">
      <h3>Passengers</h3>
      <ul>
        <li v-for="passenger in passengers" :key="passenger.id">
          {{ passenger.name }} - {{ passenger.email }}
        </li>
      </ul>
    </div>

    <div v-if="showFlights">
      <h3>Flights</h3>
      <ul>
        <li v-for="flight in flights" :key="flight.id">
          Flight : {{ flight }}
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      searchId: "",
      searchResults: [],
      airports: [],
      aircrafts: [], // Ensure this property is defined
      bookings: [],
      tickets: [],
      passengers: [],
      flights: [],
      showAirports: false,
      showAircrafts: false,
      showBookings: false,
      showTickets: false,
      showPassengers: false,
      showFlights: false,
    };
  },
  methods: {
    async search() {
      try {
        const response = await axios.get(
          `https://your-api-endpoint/search/${this.searchId}`
        );
        console.log("Search Response:", response.data); // Add logging
        this.searchResults = response.data;
        this.resetSections();
      } catch (error) {
        console.error("Error fetching search results:", error);
        this.searchResults = [];
      }
    },
    async loadAirports() {
      try {
        this.resetSections();
        this.showAirports = true;
        const response = await axios.get(
          "http://192.168.1.63:8000/api/admin/airport/airports"
        );
        console.log("Airports Response:", response.data); // Add logging
        this.airports = response.data;
      } catch (error) {
        console.error("Error loading airports:", error);
        this.airports = [];
      }
    },
    async loadAircrafts() {
      try {
        this.resetSections();
        this.showAircrafts = true;
        const response = await axios.get(
          "http://192.168.1.63:8000/api/admin/airplane/airplanes"
        );
        console.log("Aircrafts Response:", response.data); // Add logging
        this.aircrafts = response.data;
      } catch (error) {
        console.error("Error loading aircrafts:", error);
        this.aircrafts = [];
      }
    },
    async loadBookings() {
      try {
        this.resetSections();
        this.showBookings = true;
        const response = await axios.get("https://your-api-endpoint/bookings");
        console.log("Bookings Response:", response.data); // Add logging
        this.bookings = response.data;
      } catch (error) {
        console.error("Error loading bookings:", error);
        this.bookings = [];
      }
    },
    async loadTickets() {
      try {
        this.resetSections();
        this.showTickets = true;
        const response = await axios.get("https://your-api-endpoint/tickets");
        console.log("Tickets Response:", response.data); // Add logging
        this.tickets = response.data;
      } catch (error) {
        console.error("Error loading tickets:", error);
        this.tickets = [];
      }
    },
    async loadPassengers() {
      try {
        this.resetSections();
        this.showPassengers = true;
        const response = await axios.get(
          "https://your-api-endpoint/passengers"
        );
        console.log("Passengers Response:", response.data); // Add logging
        this.passengers = response.data;
      } catch (error) {
        console.error("Error loading passengers:", error);
        this.passengers = [];
      }
    },
    async loadFlights() {
      try {
        this.resetSections();
        this.showFlights = true;
        const response = await axios.get(
          "http://192.168.1.63:8000/api/admin/wing/flights"
        );
        console.log("Flights Response:", response.data); // Add logging
        this.flights = response.data;
      } catch (error) {
        console.error("Error loading flights:", error);
        this.flights = [];
      }
    },
    resetSections() {
      this.showAirports = false;
      this.showAircrafts = false;
      this.showBookings = false;
      this.showTickets = false;
      this.showPassengers = false;
      this.showFlights = false;
    },
  },
};
</script>

<style scoped>
.overview-container {
  text-align: center;
  padding: 20px;
}
input {
  width: 80%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
}
button {
  padding: 10px;
  background: lightseagreen;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 10px;
  margin-bottom: 10px;
}
button:hover {
  background: skyblue;
}
.results-container {
  margin-top: 20px;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  background: #f9f9f9;
  padding: 10px;
  margin-bottom: 5px;
  border-radius: 4px;
  border: 1px solid #ddd;
}
.management-buttons {
  margin-top: 20px;
}
</style>

<style scoped>
.overview-container {
  text-align: center;
  padding: 20px;
}
input {
  width: 80%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
}
button {
  padding: 10px;
  background: lightseagreen;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 10px;
  margin-bottom: 10px;
}
button:hover {
  background: skyblue;
}
.results-container {
  margin-top: 20px;
}
ul {
  list-style: none;
  padding: 0;
}
li {
  background: #f9f9f9;
  margin: 5px 0;
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #ddd;
}
.management-buttons {
  margin-top: 20px;
}
</style>
