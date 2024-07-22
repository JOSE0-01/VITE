<template>
  <div class="airports-container">
    <h2>Manage Airports</h2>

    <!-- Add Airport Form -->
    <button @click="toggleForm('showAddAirportForm')">Add Airport</button>
    <div v-if="showAddAirportForm" class="form-container">
      <form @submit.prevent="addAirport">
        <input
          v-model="newAirport.airport_name"
          placeholder="Airport Name"
          required
        />
        <input v-model="newAirport.country" placeholder="Country" required />
        <input v-model="newAirport.city" placeholder="City" required />
        <button type="submit">Add</button>
      </form>
    </div>

    <!-- Delete Airport Form -->
    <button @click="toggleForm('showDeleteAirportForm')">Delete Airport</button>
    <div v-if="showDeleteAirportForm" class="form-container">
      <form @submit.prevent="deleteAirport">
        <input v-model="deleteAirportId" placeholder="Airport ID" required />
        <button type="submit">Delete</button>
      </form>
    </div>

    <!-- Update Airport Form -->
    <button @click="toggleForm('showUpdateAirportForm')">Update Airport</button>
    <div v-if="showUpdateAirportForm" class="form-container">
      <form @submit.prevent="updateAirport">
        <input
          v-model="updateAirportData.id"
          placeholder="Airport ID"
          required
        />
        <input
          v-model="updateAirportData.name"
          placeholder="Airport Name"
          required
        />
        <input
          v-model="updateAirportData.country"
          placeholder="Country"
          required
        />
        <input v-model="updateAirportData.city" placeholder="City" required />
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
      showAddAirportForm: false,
      showDeleteAirportForm: false,
      showUpdateAirportForm: false,
      newAirport: {
        airport_name: "",
        country: "",
        city: "",
      },
      deleteAirportId: "",
      updateAirportData: {
        id: "",
        name: "",
        country: "",
        city: "",
      },
    };
  },
  methods: {
    toggleForm(form) {
      // Toggle form visibility
      this[form] = !this[form];
    },
    async addAirport() {
      try {
        const response = await axios.post(
          "http://192.168.1.63:8000/api/admin/airport/create",
          this.newAirport
        );
        console.log("Airport added:", response.data);
        this.toggleForm("showAddAirportForm");
        this.resetForms();
      } catch (error) {
        console.error("Error adding airport:", error);
      }
    },
    async deleteAirport() {
      try {
        const response = await axios.delete(
          `http://192.168.1.63:8000/api/admin/airport/${this.deleteAirportId}`
        );
        console.log("Airport deleted:", response.data);
        this.toggleForm("showDeleteAirportForm");
        this.resetForms();
      } catch (error) {
        console.error("Error deleting airport:", error);
      }
    },
    async updateAirport() {
      try {
        const response = await axios.put(
          `http://192.168.1.63:8000/api/admin/airport/${this.updateAirportData.id}`,
          this.updateAirportData
        );
        console.log("Airport updated:", response.data);
        this.toggleForm("showUpdateAirportForm");
        this.resetForms();
      } catch (error) {
        console.error("Error updating airport:", error);
      }
    },
    resetForms() {
      // Reset form data
      this.newAirport = {
        id: "",
        name: "",
        country: "",
        city: "",
      };
      this.deleteAirportId = "";
      this.updateAirportData = {
        id: "",
        name: "",
        country: "",
        city: "",
      };
    },
  },
};
</script>

<style scoped>
.airports-container {
  text-align: center;
  padding: 20px;
}
.form-container {
  margin: 20px 0;
}
input {
  display: flex;
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
  margin-bottom: 10px;
  display: flex;
}
button:hover {
  background: skyblue;
}
</style>
