<template>
<div id="app">
  <div class="header">
    <a href="https://github.com/Sendthenoodles/CP-3/tree/main/cp3"> <img src="/images/github.png" height=50px width=50px></a>
    <img src="/images/hand.png">

    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/Horror">Horror Games </router-link> |
      <router-link to="/Mystery">Mystery Games</router-link> |
      <router-link to="/Souls">Soul Series</router-link> |
      <router-link to="/Multiplayer">Multiplayer</router-link> |
      <router-link to="/WatchList">
        {{ ItemsInWatchList }}
        <img src="/images/cart.png" height=50px width=50px>
      </router-link>
    </div>
  </div>
  <div class="content">
    <router-view />
  </div>
</div>
</template>

<script>
export default {
  computed: {
    ItemsInWatchList() {
      return this.$root.$data.WatchList.length;
    }
  }
}
</script>

<style>
body {
  margin: 0px;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.header {
  display: flex;
  justify-content: space-between;
  background: #746d81;
  padding: 10px 100px;
  color: white;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #fff;
}

#nav a.router-link-exact-active {
  color: #4d4350;
}

.content {
  padding: 10px 100px;
}
</style>
