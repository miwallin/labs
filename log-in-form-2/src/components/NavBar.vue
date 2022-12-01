<template>
    <img src="../assets/logo.jpg"/>
    <span v-if="loggedIn" class="login-status">{{ userName }} <button @click="$emit('logOut')">Logga Ut</button></span>
    <span v-else class="login-status">Vänligen logga in</span>
</template>

<script>
export default {
    props: ['loggedIn', 'userName'],
    emits: ['logOut']
}
</script>

<style scoped>
img {
    max-height: 10vh;
}
</style>