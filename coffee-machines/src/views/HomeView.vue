<script setup>
</script>

<template>
  <main>
    <div>
      <h2>Check out our handmade coffee machines</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <button>to products</button>
    </div>
    <div class="image-holder">
      <img src="../assets/jb-home.jpg" />
    </div>
  </main>
</template>

<style scoped>
main {
  display: flex;
  justify-content: space-between;
}
.image-holder {
  max-width: 50vw;
  max-height: 90vh;
}
.image-holder img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media (min-width: 1024px) {
.image-holder {
  max-width: 40vw;
}
}
@media (min-width: 1280px) {
.image-holder {
  max-width: 30vw;
}
}
</style>