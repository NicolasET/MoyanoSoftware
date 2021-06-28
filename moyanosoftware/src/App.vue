<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Inicio</router-link> /
      <router-link to="/SIINET">SIINET</router-link> /
      <router-link to="/nosotros">Nosotros</router-link> /
      <router-link to="/ayuda">Ayuda</router-link> /
      <router-link to="/contacto">Contacto</router-link> /
      <router-link to="/cotizar">COTIZAR</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: right;
  color: #754448;
}

#nav {
  padding: 40px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #9867d1;
}
</style>
