<template>
  <div class="login-box">
    <h1 class="green">{{ msg }}</h1>
    <form @submit.prevent="$emit('submitEvent', name, password)">
      <div>
          <label for="name">Namn:</label>
          <input type="text" id="name" placeholder="Användarnamn" required v-model="name">
      </div>
      <br/>
      <div>
          <label for="pass">Lösenord:</label>
          <input type="password" id="pass" placeholder="Lösenord" required v-model="password">
      </div>
      <br/>
      <input type="submit" value="Logga in">
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      password: '',
    }
  },
  emits: ['submitEvent'],
  props: ['msg']
}
</script>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.5rem;
  top: -10px;
}

.login-box {
  background-color: lightgrey;
  padding: 10px;
  padding-top: 0px;
  border-radius: 15px;
  text-align: center;
}

div {
  text-align: left;
}

div label {
  padding-left: 5%;
}

input[type=text], input[type=password] {
  width: 90%;
  margin: 5px;
}

input[type=submit] {
  background-color: white;
  margin: 0px 10px 20px 10px;
  padding: 5px 20px;
  border-radius: 5px;
}
</style>