<template>
  <div class="flights-container">
    <h2>Manage Flights</h2>

    <!-- Add Flight Form -->
    <button @click="toggleForm('showAddFlightForm')">Add Flight</button>
    <div v-if="showAddFlightForm" class="form-container">
      <form @submit.prevent="addFlight">
        <input
          v-model="newFlight.number"
          placeholder="Flight Number"
          required
        />
        <input
          v-model="newFlight.departureTime"
          placeholder="Departure Time"
          required
        />
        <input
          v-model="newFlight.arrivalTime"
          placeholder="Arrival Time"
          required
        />
        <input
          v-model="newFlight.departureAirport"
          placeholder="Departure Airport"
          required
        />
        <input
          v-model="newFlight.arrivalAirport"
          placeholder="Arrival Airport"
          required
        />
        <button type="submit">Add</button>
      </form>
    </div>

    <!-- Delete Flight Form -->
    <button @click="toggleForm('showDeleteFlightForm')">Delete Flight</button>
    <div v-if="showDeleteFlightForm" class="form-container">
      <form @submit.prevent="deleteFlight">
        <input
          v-model="deleteFlightNumber"
          placeholder="Flight Number"
          required
        />
        <button type="submit">Delete</button>
      </form>
    </div>

    <!-- Update Flight Form -->
    <button @click="toggleForm('showUpdateFlightForm')">Update Flight</button>
    <div v-if="showUpdateFlightForm" class="form-container">
      <form @submit.prevent="updateFlight">
        <input
          v-model="updateFlightData.number"
          placeholder="Flight Number"
          required
        />
        <input
          v-model="updateFlightData.departureTime"
          placeholder="Departure Time"
          required
        />
        <input
          v-model="updateFlightData.arrivalTime"
          placeholder="Arrival Time"
          required
        />
        <input
          v-model="updateFlightData.departureAirport"
          placeholder="Departure Airport"
          required
        />
        <input
          v-model="updateFlightData.arrivalAirport"
          placeholder="Arrival Airport"
          required
        />
        <button type="submit">Update</button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      showAddFlightForm: false,
      showDeleteFlightForm: false,
      showUpdateFlightForm: false,
      newFlight: {
        number: "",
        departureTime: "",
        arrivalTime: "",
        departureAirport: "",
        arrivalAirport: "",
      },
      deleteFlightNumber: "",
      updateFlightData: {
        number: "",
        departureTime: "",
        arrivalTime: "",
        departureAirport: "",
        arrivalAirport: "",
      },
    };
  },
  methods: {
    toggleForm(form) {
      // Toggle form visibility
      this[form] = !this[form];
    },
    async addFlight() {
      try {
        const response = await axios.post(
          "http://192.168.1.63:8000/api/admin/wing/create",
          this.newFlight
        );
        console.log("Flight added:", response.data);
        this.toggleForm("showAddFlightForm");
        this.resetForms();
      } catch (error) {
        console.error("Error adding flight:", error);
      }
    },
    async deleteFlight() {
      try {
        const response = await axios.delete(
          `https://your-api-endpoint/flights/${this.deleteFlightNumber}`
        );
        console.log("Flight deleted:", response.data);
        this.toggleForm("showDeleteFlightForm");
        this.resetForms();
      } catch (error) {
        console.error("Error deleting flight:", error);
      }
    },
    async updateFlight() {
      try {
        const response = await axios.put(
          `https://your-api-endpoint/flights/${this.updateFlightData.number}`,
          this.updateFlightData
        );
        console.log("Flight updated:", response.data);
        this.toggleForm("showUpdateFlightForm");
        this.resetForms();
      } catch (error) {
        console.error("Error updating flight:", error);
      }
    },
    resetForms() {
      // Reset form data
      this.newFlight = {
        number: "",
        departureTime: "",
        arrivalTime: "",
        departureAirport: "",
        arrivalAirport: "",
      };
      this.deleteFlightNumber = "";
      this.updateFlightData = {
        number: "",
        departureTime: "",
        arrivalTime: "",
        departureAirport: "",
        arrivalAirport: "",
      };
    },
  },
};
</script>

<style scoped>
.flights-container {
  text-align: center;
  padding: 20px;
}
.form-container {
  margin: 20px 0;
}
input {
  display: block;
  width: 100%;
  margin-bottom: 10px;
  padding: 10px;
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
  display: flex;
  margin-bottom: 10px;
}
button:hover {
  background: skyblue;
}
</style>
