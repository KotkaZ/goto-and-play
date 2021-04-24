<template>
  <Card>
    <template #header>
      <img alt="user header" src="../assets/balloons.jpg" />
    </template>
    <template #title> HAPPY BIRTHDAY! </template>
    <template #content>
      <img src="../assets/playLogo.svg" />
    </template>
    <template #footer> From, Karl </template>
  </Card>
</template>

<script lang="ts">
import Card from "primevue/card";
export default {
  name: "birthdaycard",
  components: {
    Card,
  },
};
</script>

<style scoped>
* {
  color: #f5f5f5;
}
.p-card {
  background-color: #eb386a;
  border-radius: 25px;
}
img {
  border-radius: 25px 25px 0px 0px;
}
</style>
