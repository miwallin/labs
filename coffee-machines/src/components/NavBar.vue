<template>
    <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/products">Products</RouterLink>
        <RouterLink to="/checkout">
          <div id="cart-link">
            <span id="cart-status">{{ cartCount }}</span>
            <img src="@/assets/shopping-cart.png" />
            <span>Check Out</span>
          </div>
        </RouterLink>
    </nav>
</template>

<script setup>
import { useShoppingCart } from '@/stores/ShoppingCart'
import { storeToRefs } from 'pinia'
const cart = useShoppingCart()
const { cartCount } = storeToRefs(cart)
</script>

<style scoped>
nav {
  display: flex;
  justify-content: flex-end;
}
nav a {
  font-size: large;
  margin-left: 20vw;
}
img {
  width: 25px;
  height: 25px;
}
#cart-link {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: burlywood;
  padding: 5px;
}
#cart-status {
  background-color: saddlebrown;
  color: white;
  font-size: smaller;
  font-weight: bold;
  border-radius: 9px;
  padding: 0 1px;
}
@media (max-width: 800px) {
  nav a {
    margin-left: 3rem;
  }
}
</style>