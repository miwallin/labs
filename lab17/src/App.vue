<template>
  <PageHeader></PageHeader>
  <MainSection headline="Eyecatching Headline"/>
  <PageFooter></PageFooter>
</template>

<script>
import PageFooter from './components/PageFooter.vue'
import PageHeader from './components/PageHeader.vue'
import MainSection from './components/MainSection.vue'

export default {
  name: 'App',
  components: {
    PageFooter,
    PageHeader,
    MainSection
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
