<template>
  <div class="hero">
    <div>
      <h1>{{ headline }}</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <button>Call to action</button>
    </div>
    <div>
      <img alt="Soup bowls" src="../assets\cala-w6ftFbPCs9I-unsplash.jpg">
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    headline: String
  }
}
</script>

<style scoped>
.hero {
  display: flex;
}
img {
  max-height: 80vh;
}
</style>
