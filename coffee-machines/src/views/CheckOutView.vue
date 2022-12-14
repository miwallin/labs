<template>
  <div>
    <h1>This is the check out page.</h1>
    <div>
      Inventory Space
    </div>
    <div>
      <button>Back to Products</button>
      <button>To Payment Options</button>
    </div>
  </div>
</template>

<script setup>
import { useShoppingCart } from '@/stores/ShoppingCart'
const cart = useShoppingCart()
console.log(cart.getCart)

</script>