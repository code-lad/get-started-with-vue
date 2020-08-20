<template>
  <div id="myFriends">
    <h2>My Friends</h2>
    <div v-for="(friend, index) in friends" :key="index">
      <span @click="unfriend(friend.name)">{{friend.name}}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "Friends",
  props: ["friends"],
  data() {
    return {};
  },
  methods: {
    unfriend(name) {
      this.$emit("delete", { name });
    },
  },
};
</script>
 
<style>
</style>