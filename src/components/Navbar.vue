<template>
  <div class="navbar">
    <h2></h2>
    <div id="nav">
      <route-link to="../views/Home.vue">Home</route-link>|
      <route-link to="../views/About.vue">About</route-link>
    </div>
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
#nav route-link {
  margin-right: 10px;
  font-size: 20px;
}
</style>