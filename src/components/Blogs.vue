<template>
  <div class="blogs">
    <h2>{{title}}</h2>
    <div class="blog__posts" v-for="post in posts" :key="post.id">
      <h4>{{post.title | title | uppercase}}</h4>
      <p>{{post.body | body}}</p>
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
  //   On App Create
  created() {
    //Getting Data from API
    console.log("App created");
    //API
    axios.get("https://jsonplaceholder.typicode.com/posts").then((Response) => {
      console.log(Response);
      this.posts = Response.data;
    });
  },
};
</script>

<style>
.blogs {
  padding: 20px;
}
</style>