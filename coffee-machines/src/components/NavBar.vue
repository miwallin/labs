<template>
    <nav>
        <RouterLink class="page-link" to="/">Home</RouterLink>
        <RouterLink class="page-link" to="/products">Products</RouterLink>
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
  align-items: center;
  background-color: lightgrey;
  margin-bottom: 5px;
}
nav a {
  font-size: large;
  margin-left: 20vw;
}
img {
  width: 25px;
  height: 25px;
}
.page-link, #cart-link {
  padding: 5px 0.75rem;
}
#cart-link {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: burlywood;
}
#cart-status {
  background-color: rgb(80, 40, 10);
  color: white;
  font-size: smaller;
  font-weight: bold;
  border-radius: 9px;
  padding: 1px 3px;
}
@media (max-width: 960px) {
  nav a {
    margin-left: 3rem;
  }
}
</style>