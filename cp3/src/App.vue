<template>
<div id="app">
  <div class="header">
      <img src="/images/hand.png">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/Horror">Horror Games </router-link>  |
        <router-link to="/Mystery">Mystery Games</router-link> |
          <router-link to="/Souls">Soul Series</router-link> |
            <router-link to="/Multi">Multiplayer</router-link> |
    </div>
  </div>
  <div class="content">
    <router-view />
  </div>
</div>
</template>


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
