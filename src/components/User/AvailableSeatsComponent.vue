<template>
  <div class="available-seats-container">
    <h2>Available Seats</h2>
    <div v-if="seats.length > 0" class="seats-list">
      <div v-for="seat in seats" :key="seat.id" class="seat">
        <p>Seat Number: {{ seat.seatNumber }}</p>
        <p>Class: {{ seat.classType }}</p>
        <p v-if="seat.availability">Available</p>
        <p v-else>Booked</p>
        <button v-if="seat.availability" @click="bookSeat(seat.id)">
          Book Seat
        </button>
      </div>
    </div>
    <div v-else>
      <p>No seats available</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      seats: [],
    };
  },
  created() {
    this.fetchAvailableSeats();
  },
  methods: {
    async fetchAvailableSeats() {
      try {
        const response = await fetch(
          "https://api.example.com/flights/available-seats",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        this.seats = await response.json();
      } catch (error) {
        console.error("Error fetching available seats:", error);
      }
    },
    async bookSeat(seatId) {
      try {
        const response = await fetch(
          `https://api.example.com/seats/${seatId}/book`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const data = await response.json();
        console.log(data);
        this.fetchAvailableSeats(); // Refresh the seats list
      } catch (error) {
        console.error("Error booking seat:", error);
      }
    },
  },
};
</script>

<style scoped>
.available-seats-container {
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

.seats-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.seat {
  padding: 10px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
}

p {
  margin: 5px 0;
}

button {
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
</style>
