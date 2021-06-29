<template>
  <div id="app">
    <div id="logo">
      <img src="./assets/moyanologo.png" width="187" height="90" class="logo">
    </div>

    <div id="nav3">
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
#logo {
  position: absolute;
  left: 319px;
}
#nav3 {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: right;
  color: #754448;
  width: 880px;
  height: 90px;
  margin-right: 0px;
  margin-left: 1030px;
  background: #0A8CBF;
}
#nav3 a{
  color: #ffffff;
}
#nav3 a.router-link-exact-active{
  color: #000000;
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
