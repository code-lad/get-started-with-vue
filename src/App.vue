<template>
  <div id="app">
    <div class="app__logo">
      <img alt="Vue logo" src="./assets/logo.png" />
    </div>
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>
<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.app__logo {
  position: absolute;
  left: 20px;
  top: 20px;
}
.app__logo img {
  width: 70px;
}
#nav {
  background-color: lightgray;
  text-align: center;
  font-size: 25px;
  padding: 40px;
}
#nav a {
  margin-right: 10px;
  padding: 10px;
  text-decoration: none;
}
</style>
