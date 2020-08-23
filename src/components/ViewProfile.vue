<template>
  <div class="viewProfile">
    <h2>User Profile for {{userId}}</h2>
  </div>
</template>
<script>
export default {
  name: "ViewProfile",
  data() {
    return {
      userId: this.$route.params.user_id,
    };
  },
};
</script>
<style>
.viewProfile {
  padding: 20px;
}
</style>