<template>
  <div class="dashboard-container">
    <h2>Admin Dashboard</h2>

    <!-- Sidebar Navigation -->
    <div class="sidebar">
      <ul>
        <li @click="navigateTo('Flights')">Flights</li>
        <li @click="navigateTo('Airports')">Airports</li>
        <li @click="navigateTo('Aircrafts')">Aircrafts</li>
        <li @click="navigateTo('Users')">Users</li>
        <li @click="navigateTo('Overview')">Overview</li>
      </ul>
    </div>

    <!-- Main Content Area -->
    <div class="main-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    navigateTo(page) {
      // Use Vue Router to navigate to specified page
      this.$router.push({ name: page });
    },
  },
};
</script>

<style scoped>
.dashboard-container {
  display: flex;
  flex-direction: row;
  padding: 20px;
}

.sidebar {
  flex: 1;
  background-color: #f0f0f0;
  padding: 10px;
  border-right: 1px solid #ccc;
}

.sidebar ul {
  list-style-type: none;
  padding: 0;
}

.sidebar ul li {
  cursor: pointer;
  padding: 10px;
  margin-bottom: 5px;
  background-color: #ddd;
  border-radius: 4px;
}

.sidebar ul li:hover {
  background-color: #ccc;
}

.main-content {
  flex: 4;
  padding: 20px;
}
</style>
