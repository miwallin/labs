<template>
    <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/products">Products</RouterLink>
        <RouterLink to="/checkout">
          <div id="cart-link">
            <span id="cart-status">{{ cart.cartCount }}</span>
            <img src="@/assets/shopping-cart.png" />
            <span>Check Out</span>
          </div>
        </RouterLink>
    </nav>
</template>

<script setup>
import { useShoppingCart } from '@/stores/ShoppingCart'
const cart = useShoppingCart()
</script>

<style scoped>
nav {
  display: flex;
  justify-content: space-between;
}
nav a {
  font-size: large;
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
  padding: 0 5px;
}
#cart-status {
  background-color: saddlebrown;
  color: white;
  font-size: smaller;
  font-weight: bold;
  border-radius: 10px;
  padding: 2px;
}
</style>