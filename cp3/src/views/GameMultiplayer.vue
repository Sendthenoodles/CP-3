<template>
<div class = "body">
<h1 id = "games"> Games </h1>
  <ProductList :products = "MultiplayerGames" />
</div>
</template>

<script>
import ProductList from "../components/ProductList.vue"
export default {
  name: 'MultiplayerGames',
  components: {
    ProductList
  },
  computed: {
    MultiplayerGames() {
      let Games = this.$root.$data.products.filter(product => product.genre === "Multiplayer");
      return Games;
    }
  },
}
</script>
