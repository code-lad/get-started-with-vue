<template>
  <div id="app">
    <Navbar />
    <div class="app__logo">
      <img alt="Vue logo" src="./assets/logo.png" />
    </div>
    <div class="app__body">
      <Blogs />
    </div>
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
.app__body {
  padding: 10px;
}
.app__logo {
  position: absolute;
  top: 20px;
  left: 20px;
}
.app__logo img {
  width: 50px;
}
</style>
