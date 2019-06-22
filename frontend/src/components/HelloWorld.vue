<template>
  <div class="hello">
    <mdc-layout-grid>
      <mdc-layout-cell desktop="6" tablet="4" phone="4" v-for="car in this.cars" :key="car.id">
        <router-link :to="{ path: `/cars/${car.id}` }">
          <h1>{{car.name}}</h1>
          <img :src="'http://localhost:1337' + car.photo.url" width="300">
        </router-link>
      </mdc-layout-cell>
    </mdc-layout-grid>
  </div>
</template>

<script>
import { getAllCars } from "../service/cars";

export default {
  name: "HelloWorld",
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

// Then, import required files
@import "@material/layout-grid/mdc-layout-grid";
@import "@material/rtl/mixins";
@import "@material/theme/color-palette";
@import "@material/theme/mixins";
</style>
