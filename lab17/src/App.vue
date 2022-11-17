<template>
  <Header></Header>
  <HelloWorld headline="Eyecatching Headline"/>
  <Footer></Footer>
</template>

<script>
import Footer from './components/Footer.vue'
import Header from './components/Header.vue'
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    Footer,
    Header,
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
