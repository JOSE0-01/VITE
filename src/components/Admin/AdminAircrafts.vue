<template>
  <div class="aircrafts-container">
    <h2>Manage Aircrafts</h2>

    <!-- Add Aircraft Form -->
    <div class="form-container">
      <button @click="toggleForm('showAddAircraftForm')">Add Aircraft</button>
      <form v-if="showAddAircraftForm" @submit.prevent="addAircraft">
        <input
          v-model="newAircraft.registrationNumber"
          placeholder="Registration Number"
          required
        />
        <input
          v-model="newAircraft.totalSeats"
          type="number"
          placeholder="Total Seats"
          required
        />
        <input
          v-model="newAircraft.economySeats"
          type="number"
          placeholder="Economy Seats"
          required
        />
        <input
          v-model="newAircraft.businessSeats"
          type="number"
          placeholder="Business Seats"
          required
        />
        <input
          v-model="newAircraft.firstClassSeats"
          type="number"
          placeholder="First Class Seats"
          required
        />
        <button type="submit">Add Aircraft</button>
      </form>
    </div>

    <!-- Delete Aircraft Form -->
    <div class="form-container">
      <button @click="toggleForm('showDeleteAircraftForm')">
        Delete Aircraft
      </button>
      <form v-if="showDeleteAircraftForm" @submit.prevent="deleteAircraft">
        <input
          v-model="deleteAircraftId"
          placeholder="Registration Number"
          required
        />
        <button type="submit">Delete Aircraft</button>
      </form>
    </div>

    <!-- Update Aircraft Form -->
    <div class="form-container">
      <button @click="toggleForm('showUpdateAircraftForm')">
        Update Aircraft
      </button>
      <form v-if="showUpdateAircraftForm" @submit.prevent="updateAircraft">
        <input
          v-model="updateAircraftDetails.registrationNumber"
          placeholder="Registration Number"
          required
        />
        <input
          v-model="updateAircraftDetails.totalSeats"
          type="number"
          placeholder="Total Seats"
          required
        />
        <input
          v-model="updateAircraftDetails.economySeats"
          type="number"
          placeholder="Economy Seats"
          required
        />
        <input
          v-model="updateAircraftDetails.businessSeats"
          type="number"
          placeholder="Business Seats"
          required
        />
        <input
          v-model="updateAircraftDetails.firstClassSeats"
          type="number"
          placeholder="First Class Seats"
          required
        />
        <button type="submit">Update Aircraft</button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      showAddAircraftForm: false,
      showDeleteAircraftForm: false,
      showUpdateAircraftForm: false,
      newAircraft: {
        registrationNumber: "",
        totalSeats: 0,
        economySeats: 0,
        businessSeats: 0,
        firstClassSeats: 0,
      },
      deleteAircraftId: "",
      updateAircraftDetails: {
        registrationNumber: "",
        totalSeats: 0,
        economySeats: 0,
        businessSeats: 0,
        firstClassSeats: 0,
      },
    };
  },
  methods: {
    toggleForm(form) {
      this[form] = !this[form];
    },
    async addAircraft() {
      try {
        const response = await axios.post(
          "http://192.168.1.63:8000/api/admin/airplane/create",
          this.newAircraft
        );
        console.log("Aircraft added:", response.data);
        this.toggleForm("showAddAircraftForm");
      } catch (error) {
        console.error("Error adding aircraft:", error);
      }
    },
    async deleteAircraft() {
      try {
        const response = await axios.delete(
          `https://your-api-endpoint/aircrafts/${this.deleteAircraftId}`
        );
        console.log("Aircraft deleted:", response.data);
        this.toggleForm("showDeleteAircraftForm");
      } catch (error) {
        console.error("Error deleting aircraft:", error);
      }
    },
    async updateAircraft() {
      try {
        const response = await axios.put(
          `https://your-api-endpoint/aircrafts/${this.updateAircraftDetails.registrationNumber}`,
          this.updateAircraftDetails
        );
        console.log("Aircraft updated:", response.data);
        this.toggleForm("showUpdateAircraftForm");
      } catch (error) {
        console.error("Error updating aircraft:", error);
      }
    },
  },
};
</script>

<style scoped>
.aircrafts-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background: #f5f5f5;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

h2 {
  text-align: center;
  color: #333;
  margin-bottom: 20px;
}

.form-container {
  margin: 10px 0;
  background: #fff;
  padding: 5px;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

button {
  display: inline-block;
  margin: 10px 0;
  padding: 10px 10px;
  background: lightseagreen;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.3s ease;
}

button:hover {
  background: skyblue;
}

input {
  display: block;
  width: calc(100% - 22px);
  margin: 10px auto;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-sizing: border-box;
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
