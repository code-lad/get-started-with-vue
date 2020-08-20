<template>
  <div id="app">
    <Navbar />
    <div id="app__logo">
      <img alt="Vue logo" src="./assets/logo.png" />
    </div>
    <Friends :friends="friends" @delete="deleteFriend" />
    <OnlineFriends :friends="friends" />
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import Friends from "./components/Friends";
import OnlineFriends from "./components/OnlineFriends";

export default {
  name: "App",
  components: {
    Navbar,
    Friends,
    OnlineFriends,
  },
  data() {
    return {
      friends: [
        { name: "Wonderboy", online: true },
        { name: "Ayanda", online: false },
        { name: "Langelihle", online: true },
        { name: "Mdu", online: true },
        { name: "Lindo", online: false },
      ],
    };
  },
  methods: {
    deleteFriend(payload) {
      console.log(payload);
      this.friends = this.friends.filter((friend) => {
        return friend.name !== payload.name;
      });
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
#app__logo {
  text-align: center;
}
</style>
