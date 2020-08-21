<template>
  <div class="blogs">
    <div class="header">
      <h2>{{title}}</h2>
      <input type="text" v-model="searchTerm" placeholder="Search here" />
    </div>
    <div v-for="post in filteredPosts" :key="post.id" class="blog__posts">
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
      searchTerm: "",
    };
  },
  methods: {},
  computed: {
    filteredPosts() {
      return this.posts.filter((post) => {
        return post.title.match(this.searchTerm);
      });
    },
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
.header {
  display: flex;
  align-items: center;
}
.header input {
  height: 20px;
  margin-left: 10px;
  border: 2px solid #41b883;
  border-radius: 20px;
  padding: 5px 20px;
}
</style>