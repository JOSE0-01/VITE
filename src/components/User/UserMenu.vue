<template>
  <nav class="menu">
    <ul>
      <li><a href="#">About Us</a></li>
      <li><a href="#">Contact Us</a></li>
    </ul>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
.menu {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.menu ul {
  list-style-type: none;
  padding: 0;
  display: flex;
  gap: 20px;
}

.menu li {
  display: inline;
}

.menu a {
  text-decoration: none;
  color: #007bff;
  font-weight: bold;
}

.menu a:hover {
  color: #0056b3;
}
</style>
