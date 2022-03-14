<template>
<div class="wrapper">
  <div class="products">
    <div class="product" v-for="product in products" :key="product.name">
      <div class="info">
        <h1>{{product.name}}</h1>
      </div>
      <div class="image">
        <img :src="'/games/' + product.image">
      </div>
      <div class="price">
        <h2>{{product.price}}</h2>
        <button class="auto" v-on:click = "pushToWatchList(product)">Add to Watch List</button>
      </div>
    </div>
  </div>
</div>
</template>


<script>
export default {
name: 'ProductList',
props: {
  products: Array
},

methods: {
  pushToWatchList(product) // singular product
  {

    if (this.$root.$data.WatchList.includes(product))
      {
        this.$root.$data.numItemsInWatchList += 1;

      } else {

        this.$root.$data.WatchList.push(product);
        this.$root.$data.numItemsInWatchList += 1;
      }
    },
  }
}
</script>

<style scoped>

.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;

}

.products {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

}

.product {
  margin: 50px;
  width: 250px;
}

.product img {
  margin-top: 30px;
  margin-bottom: 30px;
  width: 300px;
  height: 300px;
}

.info h1 {
  font-size: 25px;

}

.info h2 {
  margin-top: 20px;
  color: white;
  font-size: 20px;
}

button {
  color: white;
  background-color: #343434;
  padding: 20px;
}


</style>
