<template>
  <v-app>
    <Navigation/>
    <v-content>
      <v-container fluid class="pa-0">
        <slot/>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Navigation from "../components/Navigation";
export default {
  name: "Layout",
  components: { Navigation }
};
</script>
<style lang="scss" scoepd>
</style>
