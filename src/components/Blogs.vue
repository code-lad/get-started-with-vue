<template>
  <div class="blogs">
    <h2>{{title}}</h2>
    <button @click="changeTitle">change title</button>
  </div>
</template>

<script>
export default {
  name: "Blogs",
  data() {
    return {
      title: "Blogs",
    };
  },
  methods: {
    changeTitle() {
      this.title = "Vue Blogs";
    },
  },
  beforeCreate() {
    alert("beforeCreate Blogs hook");
  },
  created() {
    alert("created Blogs hook");
  },
  beforeUpdate() {
    alert("beforeUpdate Blog hook");
  },
};
</script>

<style>
</style>