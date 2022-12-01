<template>
  <header>
    <NavBar :loggedIn="loggedIn" :userName="user.name" @log-out="logOut" />
  </header>

  <main v-if="loggedIn">
    <img src="./assets/bonnie-kittle-MUcxe_wDurE-unsplash.jpg"/>
  </main>
  <main v-else>
    <div class="empty"></div>
    <LogIn @submit-event="logIn" msg="Välkommen!" />
    <div class="empty"></div>
  </main>
</template>

<script>
import LogIn from './components/LogIn.vue';
import NavBar from './components/NavBar.vue';

export default {
  components: {
    LogIn, NavBar
  },
  data() {
    return {
      loggedIn: false,
      user: {
        name: '',
        password: ''
      }
    }
  },
  methods: {
    logIn(name, password) {
      this.user.name = name;
      this.user.password = password;
      this.loggedIn = true;
    },
    logOut() {
      this.user.name = '';
      this.user.password = '';
      this.loggedIn = false;
    }
  }
}
</script>

<style scoped>
header {
  line-height: 1.2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: lightgrey;
  border-radius: 5px;
}

main {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  min-height: fit-content;
  text-align: center;
  margin-top: 1rem;
}

img {
  max-width: 90vw;
}
</style>