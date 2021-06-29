<template>
  <div id="app">
    <div id="nav" class="navbar">
      <img src="./assets/moyanologo.png" width="187" height="90" class="logo">
      <router-link to="/">Inicio</router-link> /
      <router-link to="/SIINET">SIINET</router-link> /
      <router-link to="/nosotros">Nosotros</router-link> /
      <router-link to="/ayuda">Ayuda</router-link> /
      <router-link to="/contacto">Contacto</router-link> /
      <router-link to="/ERP">ERP</router-link> /
      <router-link to="/cotizar">COTIZAR</router-link>
    </div>
    <router-view/>
  </div>
</template>


<style>
.logo {
  position: absolute;
  left: 319px;
}
#nav {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: right;
  color: #754448;
}
#nav a{
  font-weight: bold;
  color: #ffffff;
}
.navbar{
    width: 880px;
    height: 90px;
    transform: skew(160deg);
    background: #0A8CBF;
  
}

/*#app {
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
}*/
</style>
