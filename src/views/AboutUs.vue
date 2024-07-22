<template>
  <div class="about-us">
    <h2>About Us</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis
      libero et dolor porttitor, eget convallis risus gravida. Mauris eget magna
      quis ligula fermentum congue.
    </p>
    <p>
      Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
      cubilia Curae; Integer volutpat nisi eu tortor venenatis, vel sodales
      justo sollicitudin.
    </p>
    <p>
      Nam eleifend dapibus augue, eget bibendum nunc. Proin at tortor risus.
      Donec sed venenatis lorem. In hac habitasse platea dictumst. Sed nec
      laoreet urna.
    </p>

    <!-- Back to Dashboard Button -->
    <router-link :to="{ name: 'UserDashboard' }">
      <button class="back-button">Back to Dashboard</button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "AboutUs",
};
</script>

<style scoped>
.about-us {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.about-us h2 {
  margin-bottom: 10px;
}

.about-us p {
  line-height: 1.6;
  margin-bottom: 15px;
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
