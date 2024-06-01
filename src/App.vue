<template>
  <div class="container">
    <NavigationMenu></NavigationMenu>
    <IndexPage></IndexPage>
  </div>
</template>

<script>
import NavigationMenu from "./components/NavigationMenu.vue";
import IndexPage from "./components/IndexPage.vue";

export default {
  name: "App",
  components: {
    IndexPage,
    NavigationMenu,
  },
};
</script>

<style></style>
