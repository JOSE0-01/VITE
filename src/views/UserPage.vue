<template>
  <div class="user-page-container">
    <router-view></router-view>

    <footer>
      <p>&copy; 2024 Your Company. All rights reserved.</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: "UserPage",
};
</script>

<style scoped>
.user-page-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-size: cover;
  background-position: center;
}

footer {
  background-color: #343a40;
  color: white;
  text-align: center;
  padding: 1px;
  position: fixed;
  width: 100%;
  bottom: 0;
}
</style>
