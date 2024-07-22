<template>
  <div class="signup-container">
    <h2>User Signup</h2>
    <form @submit.prevent="signup">
      <input
        v-model="signupData.name"
        type="text"
        placeholder="Name"
        required
      />
      <input
        v-model="signupData.username"
        type="text"
        placeholder="Username"
        required
      />
      <input
        v-model="signupData.email"
        type="email"
        placeholder="Email"
        required
      />
      <input
        v-model="signupData.phone_number"
        type="tel"
        placeholder="phone_number"
        required
      />
      <input
        v-model="signupData.address"
        type="text"
        placeholder="Address"
        required
      />
      <input
        v-model="signupData.password"
        type="password"
        placeholder="Password"
        required
      />
      <button type="submit">Signup</button>
      <router-link to="/user/login" class="login-link"
        >Already have an account? Login</router-link
      >
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      signupData: {
        // name: "",
        username: "",
        email: "",
        phone_number: "",
        address: "",
        password: "",
      },
    };
  },
  methods: {
    async signup() {
      try {
        console.log("Submitting signup data:", this.signupData);
        const response = await axios.post(
          "http://192.168.1.63:8000/api/auth/register",
          this.signupData
        );
        console.log("Signup successful:", response.data);
        this.$router.push({ name: "UserLogin" });
      } catch (error) {
        console.error("Signup failed:", error);
        alert("Signup failed. Please try again.");
      }
    },
  },
};
</script>

<style scoped>
.signup-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
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
  background: #007bff;
  color: black;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
button:hover {
  background: #0056b3;
}
.login-link {
  display: block;
  margin-top: 10px;
  color: black;
  text-underline-offset: initial;
  text-decoration: none;
}
.login-link:hover {
  color: #0056b3;
}
</style>
