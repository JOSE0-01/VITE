<template>
  <div class="dashboard-container">
    <h2>User Dashboard</h2>
    <div class="menu">
      <button @click="navigateTo('about')">About Us</button>
      <button @click="navigateTo('contact')">Contact Us</button>
    </div>
    <div class="actions">
      <button @click="showComponent('SearchFlight')">Search Flight</button>
      <button @click="showComponent('Booking')">Booking</button>
      <button @click="showComponent('AvailableSeats')">Available Seats</button>
      <button @click="showComponent('Payment')">Payment</button>
      <button @click="showComponent('Passenger')">Passenger</button>
      <button @click="showComponent('Ticketing')">Ticketing</button>
    </div>
    <SearchFlightComponent v-if="currentComponent === 'SearchFlight'" />
    <BookingComponent v-if="currentComponent === 'Booking'" />
    <AvailableSeatsComponent v-if="currentComponent === 'AvailableSeats'" />
    <PaymentComponent v-if="currentComponent === 'Payment'" />
    <PassengerComponent v-if="currentComponent === 'Passenger'" />
    <TicketingComponent v-if="currentComponent === 'Ticketing'" />
  </div>
</template>

<script>
import SearchFlightComponent from "./SearchFlightComponent.vue";
import BookingComponent from "./BookingComponent.vue";
import AvailableSeatsComponent from "./AvailableSeatsComponent.vue";
import PaymentComponent from "./PaymentComponent.vue";
import PassengerComponent from "./PassengerComponent.vue";
import TicketingComponent from "./TicketingComponent.vue";

export default {
  components: {
    SearchFlightComponent,
    BookingComponent,
    AvailableSeatsComponent,
    PaymentComponent,
    PassengerComponent,
    TicketingComponent,
  },
  methods: {
    navigateTo(page) {
      this.$router.push({ name: page });
    },
    showComponent(componentName) {
      this.currentComponent = componentName;
    },
  },
  data() {
    return {
      currentComponent: null,
    };
  },
};
</script>

<style scoped>
.dashboard-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 100px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.menu {
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
}

.actions {
  display: block;
  justify-content: space-between;
  margin-bottom: 20px;
}

button {
  padding: 15px;
  margin-bottom: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  display: block;
}

button:hover {
  background-color: #0056b3;
}
</style>
