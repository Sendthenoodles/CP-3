<template>
<div class = "body">
<h1 id = "games"> Games </h1>
  <ProductList :products = "GameSouls" />
</div>
</template>

<script>
import ProductList from "../components/ProductList.vue"
export default {
  name: 'GameSouls',
  components: {
    ProductList
  },
  computed: {
    GameSouls() {
      let Games = this.$root.$data.products.filter(product => product.genre === "Horror");
      return Games;
    }
  },
}
</script>
