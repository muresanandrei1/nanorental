<template>
  <div class="app">
    <Layout>
      <router-view />
    </Layout>
  </div>
</template>

<script>
import { apiCall } from "./service/api";
import Layout from "./layouts";
export default {
  name: "App",
  components: { Layout },
  mounted() {
    apiCall("get", "/api/email/settings/development");
  }
};
</script>

<style lang="scss">
// First, set the value for variable
$mdc-typography-font-family: "Roboto Mono", monospace;

// Then, import required files
@import "@material/typography/mixins";
@import "./scss/base.scss";

html {
  width: 100%;
  height: 100%;
}

body {
  @include mdc-typography(body2);
  overflow-x: hidden;
  width: 100%;
  min-height: 100%;
  margin: 0;
}
</style>
