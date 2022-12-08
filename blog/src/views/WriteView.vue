<template>
    <h2>Write a new post</h2>
    <form @submit.prevent="postToBlog()">
        <div>
            <label for="title">Title</label>
            <input type="text" id="title" placeholder="Title" required v-model="title"/>
        </div>
        <div>
            <label for="postText">Text</label>
            <textarea id="postText" placeholder="Write your post here..." required v-model="postText" rows="5"></textarea>
        </div>
        <button>Submit post</button>
    </form>
</template>

<script>

export default {
  data() {
    return {
      title: '',
      postText: '',
    }
  },
  methods: {
    postToBlog () {
        fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify({
            userId: "1",
            title: this.title,
            body: this.postText
        })
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }
  }
}
</script>

<style scoped>
form {
  text-align: center;
  max-width: 960px;
}
div {
  text-align: left;
}
div label {
  padding-left: 5%;
  display: block;
}
input[type=text], textarea {
  width: 90%;
  margin: 5px;
}
button {
  background-color: white;
  margin: 0px 10px 20px 10px;
  padding: 5px 20px;
  border-radius: 5px;
}
</style>