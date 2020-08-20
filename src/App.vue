<template>
  <div id="app">
    <div class="app__logo">
      <img alt="Vue logo" src="./assets/logo.png" />
    </div>
    <Navbar />
    <Blogs />
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import Blogs from "./components/Blogs";

export default {
  name: "App",
  components: {
    Navbar,
    Blogs,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 10px;
}
.app__logo {
  position: absolute;
  left: 10px;
  top: 18px;
}
.app__logo img {
  width: 50px;
}
</style>
