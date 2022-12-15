<template>
  <div class="wrapper">
    <div v-if="cartCount">
      <h2>Your shopping cart</h2>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Price</th>
            <th>In cart</th>
            <th>Total Price</th>
          </tr>
        </thead>
        <tbody>
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
            <td class="total">{{ cartCount }}</td>
            <td class="total">{{ totalPrice }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="no-shows" v-else>You have no products in your shopping cart.</div>
    <div>
      <RouterLink to="/products">
        <button>Back to Products</button>
      </RouterLink>
      <button v-if="cartCount">To Payment Options</button>
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useShoppingCart } from '@/stores/ShoppingCart'
const shopCart = useShoppingCart()
const { cart, cartCount, getProducts, totalPrice } = storeToRefs(shopCart)

const itemTotal = (id, num) => {
  return getProd(id).price * num
}

const getProd = id => {
  let prod = getProducts.value.filter(c => c.id === id)
  return prod[0]
}
</script>

<style scoped>
table{
  display: inline-block;
  text-align: center;
  font-size: 1.2rem;
  margin: 25px 0;
  border-collapse: collapse;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
}
thead {
  background-color: burlywood;
}
th,td {
  padding: 10px 15px;
}
button {
    font-size: large;
}
.amount-button {
  font-size: small;
  font-weight: bold;
  padding: 5px 8px;
}
.total {
  font-weight: bold;
}
.wrapper {
  text-align: center;
}
</style>