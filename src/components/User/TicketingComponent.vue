<template>
  <div class="ticket-container">
    <h2>Ticket</h2>
    <div v-if="ticket">
      <p><strong>Passenger ID:</strong> {{ ticket.passengerId }}</p>
      <p><strong>Booking ID:</strong> {{ ticket.bookingId }}</p>
      <p><strong>Ticket Number:</strong> {{ ticket.ticketNumber }}</p>
      <p><strong>QR Code:</strong></p>
      <img :src="ticket.qrCode[0]" alt="QR Code" class="qr-code" />
      <p><strong>Flight ID:</strong> {{ ticket.flightId }}</p>
      <p><strong>Seat Number:</strong> {{ ticket.seatNumber }}</p>
      <p><strong>Class Type:</strong> {{ ticket.classType }}</p>
      <p>
        <strong>Issue Date:</strong>
        {{ new Date(ticket.issueDate).toLocaleString() }}
      </p>
      <p><strong>Status:</strong> {{ ticket.status }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ticket: null,
    };
  },
  async created() {
    const passengerId = this.$route.params.passengerId;
    try {
      const response = await fetch(
        `http://192.168.1.23:8087/api/tickets/${passengerId}`
      );
      const data = await response.json();
      this.ticket = data;
    } catch (error) {
      console.error("Error fetching ticket:", error);
    }
  },
};
</script>

<style scoped>
.ticket-container {
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

p {
  margin: 5px 0;
  padding: 10px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.strong {
  font-weight: bold;
}

.qr-code {
  display: block;
  margin: 10px auto;
  max-width: 200px;
  max-height: 200px;
  border: 1px solid #ddd;
}
</style>
