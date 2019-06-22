<template>
  <div class="home-cars">
    <v-container>
      <v-layout>
        <v-flex xs12 md3 lg3 v-for="car in this.cars" :key="car.id" class="car-item">
          <router-link :to="{ path: `/cars/${car.id}` }">
            <h1>{{car.name}}</h1>
            <img :src="'http://localhost:1337' + car.photo.url" width="300">
          </router-link>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import { getAllCars } from "../service/cars";

export default {
  name: "HomeCars",
  data: () => ({
    cars: []
  }),
  props: {
    title: String,
    vmaLinks: Array,
    mdcLinks: Array
  },
  mounted() {
    getAllCars().then(rsp => {
      const cars = rsp.data;
      this.cars = cars.splice(0, 4);
    });
  }
};
</script>

<style lang="scss">
// First, set the value for variable
$mdc-layout-grid-max-width: 800px;
@import "../scss/variables/_colors.scss";
// Then, import required files
@import "@material/layout-grid/mdc-layout-grid";
@import "@material/rtl/mixins";
@import "@material/theme/color-palette";
@import "@material/theme/mixins";
.home-cars {
  background-color: $red;
}
.car-item {
  z-index: 100;
  padding: 0 16px;
}
</style>
