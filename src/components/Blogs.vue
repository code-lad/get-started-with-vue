<template>
  <div class="blogs">
    <h2>{{title}}</h2>
    <div v-for="post in posts" :key="post.id" class="blog__posts">
      <h3>{{post.title}}</h3>
      <p>{{post.body | snippet}}</p>
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
  created() {
    console.log("App Created");
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
};
</script>
<style>
</style>