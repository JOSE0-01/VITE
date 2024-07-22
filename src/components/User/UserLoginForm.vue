<template>
  <div class="login-container">
    <h2>User Login</h2>
    <form @submit.prevent="login">
      <input v-model="email" type="email" placeholder="Email" required />
      <input
        v-model="password"
        type="password"
        placeholder="Password"
        required
      />
      <button type="submit">Login</button>
      <router-link to="/admin/login" class="admin-login-link"
        >Login as Admin</router-link
      >
      <router-link to="/user/signup" class="signup-link"
        >Don't have an account? Signup</router-link
      >
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async login() {
      try {
        const response = await axios.post(
          "http://192.168.1.63:8000/api/auth/login",
          {
            email: this.email,
            password: this.password,
          }
        );
        console.log("Login successful:", response.data);
        this.$router.push({ name: "UserDashboard" });
      } catch (error) {
        console.error("Login failed:", error);
        alert("Login failed. Please check your credentials.");
      }
    },
  },
};
</script>

<style scoped>
.login-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 50px;
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
.admin-login-link,
.signup-link {
  display: block;
  margin-top: 10px;
  color: black;
  text-decoration: none;
}
.admin-login-link:hover,
.signup-link:hover {
  color: #0056b3;
}
</style>
