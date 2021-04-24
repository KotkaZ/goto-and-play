<template>
  <div class="home">
    <BirthdayCard />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import BirthdayCard from "@/components/BirthdayCard.vue"; // @ is an alias to /src

@Options({
  data() {
    return {};
  },
  components: {
    BirthdayCard,
  },
})
export default class Home extends Vue {}
</script>

<style scoped></style>
