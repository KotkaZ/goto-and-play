<template>
  <div id="nav">
    <router-link to="/">Card</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <div class="container p-grid p-jc-center p-ai-center vertical-container">
    <Fireworks id="fireworks" />
    <router-view class="p-col-4 fader" />
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

.fader {
  animation: fadeIn 10s;
  -webkit-animation: fadeIn 10s;
  -moz-animation: fadeIn 10s;
  -o-animation: fadeIn 10s;
  -ms-animation: fadeIn 10s;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@-moz-keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@-webkit-keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@-o-keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@-ms-keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
