<template>
    <div>
        <RouterLink 
            :to="{ 
                name: 'Read',
                params: { id:post.id } 
            }"
        >
            <h3>{{ post.title }}</h3>
            <p>{{ cutOff }}</p>
        </RouterLink>
    </div>
</template>

<script>
import { computed } from '@vue/reactivity';
import { RouterLink } from 'vue-router';

    export default{
    props: ['post'],
    components: { RouterLink },
    setup(props) {
        const cutOff = computed(() => {
            return props.post.body.substring(0, 120) + '...';
        });

        return { cutOff }
    }
}
</script>

<style scoped>
div {
    background-color: rgb(212, 222, 236);
    border-radius: 5px;
    max-width: 1000px;
}

a {
    text-decoration: none;
    color: black
}

a:visited {
    color: darkslategray
}

p, h3 {
    padding: 0.5rem;
}

</style>