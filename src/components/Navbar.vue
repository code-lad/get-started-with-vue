<template>
  <div class="navbar">
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
    return {
      title: "Menu",
    };
  },
};
</script>

<style>
.navbar {
  text-align: center;
  background-color: #242f3a;
  padding: 20px;
}
nav ul {
  padding: 0;
}
nav li {
  list-style: none;
  display: inline-block;
  margin-right: 10px;
}
nav li a {
  text-decoration: none;
  text-transform: uppercase;
  color: #41b883;
  font-weight: 600;
}
</style>