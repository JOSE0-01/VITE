<template>
  <div class="login-container">
    <h2>Admin Login</h2>
    <form @submit.prevent="login">
      <input v-model="email" type="email" placeholder="Email" required />
      <input
        v-model="password"
        type="password"
        placeholder="Password"
        required
      />
      <button type="submit">Login</button>
      <router-link to="/user/login" class="user-login-link"
        >Login as User</router-link
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
        console.log("Submitting login data:", {
          email: this.email,
          password: this.password,
        });
        const response = await axios.post(
          "http://192.168.1.63:8000/api/admin/login",
          {
            email: this.email,
            password: this.password,
          }
        );
        console.log("Login successful:", response.data);
        this.$router.push({ name: "AdminDashboard" });
      } catch (error) {
        console.error("Login failed:", error);
        alert("Login failed. Please try again.");
      }
    },
  },
};
</script>

<style scoped>
.login-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 70px;
  background: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
}
input {
  display: block;
  width: 115%;
  margin-bottom: 10px;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 4px;
}
button {
  padding: 10px;
  background: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
button:hover {
  background: #0056b3;
}
.user-login-link,
.register-link {
  display: block;
  margin-top: 10px;
  color: black;
  text-decoration: none;
}
.user-login-link:hover,
.register-link:hover {
  color: #0056b3;
}
</style>
