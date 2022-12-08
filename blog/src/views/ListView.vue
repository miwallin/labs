<template>
    <h2>{{ header }}</h2>
    <div>
        <BlogList 
            v-for="post in posts" 
            :post="post" 
            key='post.id'
        />
    </div>
</template>

<script>
import BlogList from '../components/BlogList.vue';

export default {
    components: { BlogList },
    props: {
        search: {
            type: String,
            required: false
        }
    },
    data() {
        return {
          posts: [],
          header: "List of posts"
        }
    },
    created() {
        this.getPosts()
        this.$watch(() => this.$route.params,
        (toParams, previousParams) => {
            if (this.search !== undefined) {
                this.header = "List of " + this.search + " posts"
            }
            else {
                this.header = "List of posts"
            }
            this.getPosts();
        })
    },
    methods: {
        getPosts () {
            this.posts = [];
            fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => {
                if (this.search && this.search.length > 0) {
                    //this.posts.data.title.includes(term);
                    let filtered = data.filter( post => {
                        return post.title.includes(this.search)
                    });
                    this.posts = filtered;
                }
                else {
                    this.posts = data
                }
            })
        }
    }
}
</script>