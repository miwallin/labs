<template>
  <div class="product">
    <div v-if="products.length">
      <ProductBox
        v-for="p in products"
        :key="p.id"
        :product="p"
      />
    </div>
    <p class="no-shows" v-else>No products to show</p>
  </div>
</template>

<script setup>
  import { ref } from 'vue'
  import ProductBox from '../components/ProductBox.vue';
  const products = ref([])
  
  const getProducts = () => {
    fetch('http://localhost:3000/products')
    .then(response => response.json())
    .then(data => products.value = data)
  }
  getProducts()
</script>

<style scoped>
.product {
  width: fit-content;
  margin: 0 auto;
}

@media (min-width: 1200px) {
  .product div {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
}
</style>