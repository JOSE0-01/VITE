<template>
  <div class="booking-container">
    <h2>Book a Flight</h2>
    <form @submit.prevent="bookFlight">
      <div class="form-group">
        <label for="flightId">Flight ID:</label>
        <input
          type="text"
          id="flightId"
          v-model="bookingData.flightId"
          required
        />
      </div>
      <div class="form-group">
        <label for="classType">Class Type:</label>
        <select id="classType" v-model="bookingData.classType" required>
          <option value="ECONOMY">Economy</option>
          <option value="BUSINESS">Business</option>
          <option value="FIRST_CLASS">First Class</option>
        </select>
      </div>
      <button type="submit" class="btn">Book Flight</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bookingData: {
        flightId: "",
        classType: "ECONOMY",
      },
    };
  },
  methods: {
    async bookFlight() {
      try {
        const response = await fetch("http://192.168.1.23:8087/api/bookings", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(this.bookingData),
        });
        const data = await response.json();
        console.log(data);
        this.$router.push({
          name: "AvailableSeatsComponent",
          params: { flightId: data.flightId },
        });
      } catch (error) {
        console.error("Error booking flight:", error);
      }
    },
  },
};
</script>

<style scoped>
.booking-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
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
  margin-bottom: 5px;
}

input,
select {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
}

.btn {
  display: block;
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.btn:hover {
  background-color: #0056b3;
}
</style>
