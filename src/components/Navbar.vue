<template>
  <div class="navbar">
    <h2>MENU</h2>
    <nav>
      <ul>
        <li>
          <a href>Home</a>
        </li>
        <li>
          <a href>About us</a>
        </li>
        <li>
          <a href>Contact</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {};
  },
};
</script>

<style>
.navbar {
  text-align: center;
}
.navbar h2 {
  margin: 0;
}
nav {
  text-align: center;
}
nav ul {
  padding: 0;
}
nav li {
  display: inline-block;
  margin-right: 10px;
}
</style>