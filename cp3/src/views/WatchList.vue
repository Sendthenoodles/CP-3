<template>
<div class="wrapper">
  <div v-if="noItems()">
    <h1>Please add games to your Watchlist! </h1>
  </div>
  <div v-else>
    <h1>Your Watchlist </h1>
    <div class="products">
      <div class="product" v-for="product in WatchList" :key="product.name">
        <div class="info">
          <h1>{{product.name}}</h1>
        </div>
        <div class="image">
          <img :src="'/games/' + product.image">
        </div>
        <div class="options">
          <button class="auto" @click="watchVideo(product)">Watch Trailer</button>

          <div>
            <button class="auto" @click="removefromWatchList()">No Longer Interested</button>
          </div>
        </div>
      </div>
      <button class="auto" @click="startOver()"> Start All Over! </button>
    </div>
    <div id="test">

    </div>
  </div>
</div>
</template>

<script>
// import ProductList from "../components/ProductList.vue"
export default {
  name: 'WatchList',
  computed: {
    WatchList() {
      return this.$root.$data.WatchList
    }
  },
  methods: {
    noItems() {
      if (this.$root.$data.WatchList.length == 0) {
        return true;
      } else {
        return false
      }
    },
    watchVideo(product) {
      let button = '';
      let info = product.link
      console.log(info);
      button += "<iframe src = " + info + " allowfullscreen>" + "</iframe>" + "<p> Double Click the video to watch in fullscreen! </p>";
      console.log(button);
      return document.getElementById("test").innerHTML = button;

    },
    removefromWatchList(product) {
      this.$root.$data.numItemsInWatchList -= 1;
      this.$root.$data.WatchList.splice(this.$root.$data.WatchList.indexOf(product), 1);
    },
    startOver() {
      this.$root.$data.WatchList = [];
      this.$root.$data.numItemsInWatchList = 0;
    },
  }
}
/*

Solution # 1 -- WORKS!
let info = product.link
  console.log(info);
return window.location.href = info;

 Solution 1.5 -- sort of
// <span><a href="https://www.youtube.com/watch?v=eytOzwyfiCA&ab_channel=frictionalgames"
 target="_blank">

Solution # 2  -- failed
 let button = '';
 let info = product.link
   console.log(info);
 button += "<a href =" + info + "<a>"
 console.log(button);
 return button;
Solution # 3 --- couldn't progress too diffucult
 let button = '';
 let info = product.link
   console.log(info);
 button += "<a href =" + info + "<a>"
 console.log(button);
 return button;

 Solution # 4 --- back to the basics - > I like this method, not the best but super cool in how it actually works
 let button = '';
 let info = product.link
 console.log(info);
 button += "<iframe src = " + info + " allowfullscreen>" + "</iframe>" + "<p> Double Click the video to watch in fullscreen! </p>";
 console.log(button);
 return document.getElementById("test").innerHTML = button;

*/
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
  padding: 5%;
  font-size: 20px;
}

#test {
  position: relative;
  left: 100px;
}
</style>
