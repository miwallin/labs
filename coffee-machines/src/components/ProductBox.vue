<template>
    <div class="wrapper">
        <div class="image-box">
            <img :src='product.imgUrl' />
        </div>
        <div>
            <h2>{{product.name}}</h2>
            <h1>{{product.price}}</h1>
        </div>
        <div>
            <RouterLink
                :to="{
                    name: 'details',
                    params: { id:product.id } 
                }">
                <button>Details</button>
            </RouterLink>
            <button @click="cart.addOneProduct(product.id)"><img src="@/assets/shopping-cart.png" /> Buy</button>
        </div> 
    </div>
</template>

<script setup>
    import { useShoppingCart } from '@/stores/ShoppingCart'
    const props = defineProps(['product'])
    const cart = useShoppingCart()
</script>

<style scoped>
div {
    margin: 1rem;
}
button {
    font-size: large;
}
button img {
    height: 18px;
}
.wrapper {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: 1fr auto;
    background-color: blanchedalmond;
}
.image-box {
    grid-row: 1/-1;
    height: 300px;
    width: 300px;
}

@media (max-width: 580px) {
    .wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
}
</style>