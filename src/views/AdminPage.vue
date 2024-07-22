<template>
  <div class="admin-page-container">
    <router-view></router-view>

    <footer class="footer">
      <p>&copy; 2024 Your Company. All rights reserved.</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: "AdminPage",
};
</script>

<style scoped>
.admin-page-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.footer {
  background-color: #343a40;
  color: white;
  text-align: center;
  padding: 1px 0;
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
}
</style>
