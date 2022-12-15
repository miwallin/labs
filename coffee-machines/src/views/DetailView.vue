<template>
    <div class="wrapper">
        <div>
            <h1>{{product.name}}</h1>
            <p>{{product.description}}</p>
            <h2>{{product.price}}</h2>
            <form @submit.prevent="cart.addProducts(product, toAdd)">
                <select v-model="toAdd">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <button>
                    <img src="@/assets/shopping-cart.png" />
                     Add to Cart
                </button>
            </form>
        </div>
        <div class="image-holder">
        <img :src=product.imgUrl />
        </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue'
    import { useShoppingCart } from '@/stores/ShoppingCart'

    const cart = useShoppingCart()
    const props = defineProps(['id'])
    const product = ref([])
    const toAdd = ref(1)

    const getProduct = () => {
        fetch('http://localhost:3000/products/' + props.id)
        .then(response => response.json())
        .then(data => product.value = data)
    }
    getProduct()
</script>

<style scoped>
.wrapper {
    display:flex;
    justify-content: space-around;
}
.image-holder {
  max-width: 50vw;
  max-height: 90vh;
}
select {
    font-size: large;
    height: 2.7rem;
    background-color: burlywood;
    border-radius: 0.75rem;
}
button {
    font-size: large;
}
button img {
    height: 18px;
}
</style>