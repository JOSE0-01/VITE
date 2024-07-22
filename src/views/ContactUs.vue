<template>
  <div class="contact-us">
    <h2>Contact Us</h2>
    <p>
      Have questions or feedback? Reach out to us using the information below or
      fill out the form.
    </p>
    <div class="contact-info">
      <p>Email: josephirungu6100@gmail.com</p>
      <p>Phone: +254112966851</p>
      <p>Address: 123 Kimbo, Kiambu, Kenya</p>
    </div>
    <form @submit.prevent="submitForm">
      <h3>Send us a Message</h3>
      <input type="text" v-model="name" placeholder="Your Name" required />
      <input type="email" v-model="email" placeholder="Your Email" required />
      <textarea
        v-model="message"
        placeholder="Your Message"
        rows="4"
        required
      ></textarea>
      <button type="submit">Send</button>
    </form>

    <!-- Back to Dashboard Button -->
    <router-link :to="{ name: 'UserDashboard' }">
      <button class="back-button">Back to Dashboard</button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "ContactUs",
  data() {
    return {
      name: "",
      email: "",
      message: "",
    };
  },
  methods: {
    submitForm() {
      // Logic to submit the form (e.g., send email or save to database)
      console.log("Form submitted with:", this.name, this.email, this.message);
      // Reset form fields after submission (optional)
      this.name = "";
      this.email = "";
      this.message = "";
    },
  },
};
</script>

<style scoped>
.contact-us {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.contact-us h2 {
  margin-bottom: 10px;
}

.contact-us p {
  margin-bottom: 15px;
}

.contact-info {
  margin-bottom: 15px;
}

.contact-info p {
  margin-bottom: 5px;
}

form {
  margin-top: 20px;
}

form input,
form textarea,
form button {
  display: block;
  width: 100%;
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

form button {
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 10px 15px;
  cursor: pointer;
}

form button:hover {
  background-color: #0056b3;
}

.back-button {
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 10px 15px;
  cursor: pointer;
  margin-top: 20px;
}

.back-button:hover {
  background-color: #0056b3;
}
</style>
