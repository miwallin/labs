<template>
  <div>
    <h1>This is the check out page.</h1>
    <div v-if="cartCount">
      <table>
        <tr>
          <th>Item</th>
          <th>Price</th>
          <th>In cart</th>
          <th>Total Price</th>
        </tr>
        <tr v-for="item in cart">
          <td>{{ getProd(item[0]).name }}</td>
          <td>{{ getProd(item[0]).price }}</td>
          <td>
            <button @click="shopCart.removeProduct(getProd(item[0]))" class="amount-button">-</button>
            {{ item[1] }}
            <button @click="shopCart.addOneProduct(getProd(item[0]))" class="amount-button">+</button>
          </td>
          <td>{{ itemTotal(item[0],item[1]) }}</td>
        </tr>
        <tr>
          <th colspan="2">Total: </th>
          <td>{{ cartCount }}</td>
          <td></td>
        </tr>
      </table>
    </div>
    <div>
      <RouterLink to="/products">
        <button>Back to Products</button>
      </RouterLink>
      <button>To Payment Options</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useShoppingCart } from '@/stores/ShoppingCart'
const shopCart = useShoppingCart()
const { cart, cartCount, getProducts } = storeToRefs(shopCart)

const itemTotal = (id, num) => {
  return getProd(id).price * num
}

const getProd = id => {
  let prod = getProducts.value.filter(c => c.id === id);
  return prod[0]
}

</script>

<style scoped>

.amount-button {
  font-size: small;
  padding: 5px 10px;
}
</style>