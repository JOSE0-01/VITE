<template>
  <div class="payment-container">
    <h2>Payment</h2>
    <form @submit.prevent="makePayment">
      <div class="form-group">
        <label for="amount">Amount:</label>
        <input
          type="number"
          id="amount"
          v-model="paymentData.amount"
          required
        />
      </div>
      <div class="form-group">
        <label for="currency">Currency:</label>
        <input
          type="text"
          id="currency"
          v-model="paymentData.currency"
          required
        />
      </div>
      <div class="form-group">
        <label for="paymentMethod">Payment Method:</label>
        <select id="paymentMethod" v-model="paymentData.paymentMethod" required>
          <option value="Mpesa">Mpesa</option>
          <option value="CreditCard">Credit Card</option>
        </select>
      </div>
      <button type="submit" class="btn">Pay</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      paymentData: {
        bookingId: 0,
        userId: 0,
        amount: 0,
        currency: "",
        status: "PAID",
        paymentMethod: "",
      },
    };
  },
  methods: {
    async makePayment() {
      try {
        const response = await fetch("http://192.168.1.23:8087/api/payments", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(this.paymentData),
        });
        const data = await response.json();
        console.log(data);
        this.$router.push({
          name: "Passenger",
          params: { bookingId: data.bookingId },
        });
      } catch (error) {
        console.error("Error making payment:", error);
      }
    },
  },
};
</script>

<style scoped>
.payment-container {
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
