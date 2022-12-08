<template>
  <header>
    <nav>
      <h1>My Blog</h1>
      <RouterLink to="/" key="$route.path">Home</RouterLink>
      <RouterLink to="/write">New Post</RouterLink>
      <div>
        <input type="text" id="searchField" v-model="term"/>
        <button @click="search">Find</button>
      </div>
    </nav>
  </header>

  <RouterView/>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
import router from './router';

export default {
  data() {
    return {
      term: ''
    }
  },
  methods: {
    search () {
      router.push({ path: '/find', query: { q: this.term }, key:"$route.path" })
    }
  }
}

</script>

<style scoped>
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: darkslateblue;
  color: antiquewhite;
  padding: 0 1rem;
}

h1{
  display: inline-block;
}

a {
  color:antiquewhite;
  text-decoration: none;
}

a:active {
  background-color: blueviolet;
}

</style>