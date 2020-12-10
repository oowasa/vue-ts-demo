<template>
  <div class="home">
    home...
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({
  components: {}
})
export default class Home extends Vue {}
</script>

<style scoped lang="scss">
.home {
  width: 740px;
  height: 100vh;
  background: red;
}
</style>
