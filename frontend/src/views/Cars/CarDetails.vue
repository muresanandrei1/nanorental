<template>
  <div v-if="car">
    <h1>{{car.name}}</h1>
  </div>
</template>
<script>
import { getCarById } from "../../service/cars";

export default {
  name: "CarDetails",
  data: () => ({
    car: undefined
  }),
  created() {
    getCarById(this.$route.params.id).then(rsp => (this.car = rsp.data));
  }
};
</script>
<style lang="scss" scoped>
</style>
