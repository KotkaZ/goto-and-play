<template>
  <div id="nav">
    <router-link to="/">Card</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view />
</template>
<script lang="ts">
import "primevue/resources/themes/saga-blue/theme.css"; //theme
import "primevue/resources/primevue.min.css"; //core css
import "primeicons/primeicons.css"; //icons
import "primeflex/primeflex.css";
export default {
  name: "app",
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #eb386a;
}

#nav {
  padding: 30px;
  position: absolute;
}

#nav a {
  font-weight: bold;
  color: #eb386a;
}

#nav a.router-link-exact-active {
  color: #f5f5f5;
}

body {
  background-color: black;
  margin: 0;
  padding: 0;
  overflow: hidden;
}
</style>
