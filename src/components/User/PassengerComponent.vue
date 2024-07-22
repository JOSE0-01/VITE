<template>
  <div class="passenger-container">
    <h2>Passenger Information</h2>
    <form @submit.prevent="createPassenger">
      <div class="form-group">
        <label for="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          v-model="passengerData.firstName"
          required
        />
      </div>
      <div class="form-group">
        <label for="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          v-model="passengerData.lastName"
          required
        />
      </div>
      <div class="form-group">
        <label for="dateOfBirth">Date of Birth:</label>
        <input
          type="date"
          id="dateOfBirth"
          v-model="passengerData.dateOfBirth"
          required
        />
      </div>
      <div class="form-group">
        <label for="passportNumber">Passport Number:</label>
        <input
          type="text"
          id="passportNumber"
          v-model="passengerData.passportNumber"
          required
        />
      </div>
      <div class="form-group">
        <label for="nationality">Nationality:</label>
        <input
          type="text"
          id="nationality"
          v-model="passengerData.nationality"
          required
        />
      </div>
      <div class="form-group">
        <label for="seatNumber">Seat Number:</label>
        <input
          type="text"
          id="seatNumber"
          v-model="passengerData.seatNumber"
          required
        />
      </div>
      <div class="form-group">
        <label for="classType">Class Type:</label>
        <select id="classType" v-model="passengerData.classType" required>
          <option value="ECONOMY">Economy</option>
          <option value="BUSINESS">Business</option>
          <option value="FIRST_CLASS">First Class</option>
        </select>
      </div>
      <button type="submit" class="btn">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      passengerData: {
        bookingId: this.$route.params.bookingId,
        firstName: "",
        lastName: "",
        dateOfBirth: "",
        passportNumber: "",
        nationality: "",
        seatNumber: "",
        classType: "ECONOMY",
      },
    };
  },
  methods: {
    async createPassenger() {
      try {
        const response = await fetch(
          "http://192.168.1.23:8087/api/passengers",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(this.passengerData),
          }
        );
        const data = await response.json();
        console.log(data);
        this.$router.push({
          name: "TicketingComponent",
          params: { passengerId: data.id },
        });
      } catch (error) {
        console.error("Error creating passenger:", error);
      }
    },
  },
};
</script>

<style scoped>
.passenger-container {
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
