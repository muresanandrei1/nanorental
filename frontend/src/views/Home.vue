<template>
  <div class="home">
    <section class="hero">
      <div class="hero-image">
        <h1>Buy our car</h1>
      </div>
    </section>
    <HomeCars/>
    <v-container class="pa-0 overlay"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeCars from "@/components/HomeCars.vue";

export default {
  name: "home",
  components: {
    HomeCars
  }
};
</script>
<style lang="scss" scoped>
.overlay {
  background-image: url("../assets/texture.png");
  background-size: cover;
  background-position: center;
  position: absolute;
  height: 100%;
  pointer-events: none;
  top: 0;
  left: 50%;
  width: 100%;
  right: 50%;
  z-index: 1;
  transform: translateX(-50%);
}
.hero {
  height: 500px;
  &-image {
    background-image: url("../assets/homepage.jpg");
    background-size: cover;
    background-position: center;
    height: inherit;
  }
}
</style>
