<template>
  <div class="navbar">
    <nav>
      <ul>
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link :to="{name: 'About'}">About</router-link>
        </li>
        <li>
          <router-link :to="{name:'Contact'}">Contact</router-link>
        </li>
        <li>
          <router-link :to="{name:'ViewProfile'}">ViewProfile</router-link>
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
  background-color: lightgray;
  text-align: center;
}
nav {
  padding: 20px;
}
nav ul li {
  display: inline-block;
  margin-right: 10px;
}
nav ul li a {
  font-size: 25px;
  text-decoration: none;
  color: #35495e;
}
nav ul li:hover {
  border-bottom: 2px solid #41b883;
}
</style>