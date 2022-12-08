<template>
    <h2>{{ currentPost.title }}</h2>
    <p>{{ currentPost.body }}</p>
</template>

<script>
export default {
    props: {
        id: {
            type: String,
            required: true
        }
    },
    data() {
        return {
          currentPost: {}
        }
    },
    created() {
        fetch('https://jsonplaceholder.typicode.com/posts/' + this.id)
        .then(response => response.json())
        .then(data => this.currentPost = data)
   }
}
</script>