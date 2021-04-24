<template>
  <div class="home">
    <BirthdayCard v-if="card" />
    <Fireworks v-else />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import BirthdayCard from "@/components/BirthdayCard.vue"; // @ is an alias to /src
import Fireworks from "@/components/Fireworks.vue"; // @ is an alias to /src

@Options({
  data() {
    return {
      card: false,
    };
  },
  components: {
    BirthdayCard,
    Fireworks,
  },
})
export default class Home extends Vue {}
</script>
