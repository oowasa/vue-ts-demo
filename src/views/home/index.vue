<template>
  <div class="home" @click="handleClick">
    home...
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({
  components: {}
})
export default class Home extends Vue {
  public created() {
    console.log(process.env.NODE_ENV);
    console.log(process.env.VUE_APP_ENV);
  }
  public handleClick() {
    this.$router.push("/about");
  }
}
</script>

<style scoped lang="less">
.home {
  width: 100%;
  height: 100vh;
}
</style>
