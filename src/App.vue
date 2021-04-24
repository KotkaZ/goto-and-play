<template>
  <div id="nav">
    <router-link to="/">Card</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <div class="container p-grid p-jc-center p-ai-center vertical-container">
    <Fireworks id="fireworks" />
    <router-view class="p-col-4" />
  </div>
</template>
<script lang="ts">
import "primevue/resources/themes/saga-blue/theme.css"; //theme
import "primevue/resources/primevue.min.css"; //core css
import "primeicons/primeicons.css"; //icons
import "primeflex/primeflex.css";
import Fireworks from "@/components/Fireworks.vue"; // @ is an alias to /src

export default {
  name: "app",
  components: {
    Fireworks,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #f5f5f5;
}

#nav {
  padding: 30px;
  position: absolute;
}

#nav a {
  font-weight: bold;
  color: #f5f5f5;
}

#nav a.router-link-exact-active {
  color: #eb386a;
}

body {
  background-color: black;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

#fireworks {
  position: absolute;
  z-index: -10;
}

.container {
  height: 100vh;
  z-index: 10;
}
</style>
