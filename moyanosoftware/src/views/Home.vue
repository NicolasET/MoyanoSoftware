<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/moyanologo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <h1>titulo en página principal </h1>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
