<template>
  <div class="blogs">
    <h2>{{ title }}</h2>
    <button @click="changeTitle">change title</button>
    <div v-for="post in posts" :key="post.id">
      <h3>{{ post.title }}</h3>
      <p>{{ post.body }}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Blogs",
  data() {
    return {
      title: "Blogs",
      posts: [],
    };
  },
  methods: {
    changeTitle() {
      this.title = "Vue Blogs";
    },
  },
  beforeCreate() {
    // alert("beforeCreate Blogs hook");
  },
  created() {
    // alert("created Blogs hook");
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        console.log(response);
        this.posts = response.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  beforeUpdate() {
    // alert("beforeUpdate Blog hook");
  },
};
</script>

<style></style>
