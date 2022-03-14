<template>
<div class = "body">
<h1 id = "games"> Games </h1>
  <ProductList :products = "MysteryGames" />
</div>
</template>

<script>
import ProductList from "../components/ProductList.vue"
export default {
  name: 'MysteryGames',
  components: {
    ProductList
  },
  computed: {
    MysteryGames() {
      let Games = this.$root.$data.products.filter(product => product.genre === "Mystery");
      return Games;
    }
  },
}
</script>

<style scoped>

</style>
