<template>
<div class = "body">
<h1 id = "games"> Games </h1>
  <ProductList :products = "HorrorGames" />
</div>
</template>

<script>
import ProductList from "../components/ProductList.vue"
export default {
  name: 'HorrorGames',
  components: {
    ProductList
  },
  computed: {
    HorrorGames() {
      let Games = this.$root.$data.products.filter(product => product.genre === "Horror");
      return Games;
    }
  },
}
</script>
