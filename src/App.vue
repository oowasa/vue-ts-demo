<template>
  <div id="app">
    <transition name="router-fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<style lang="less">
@import "style/common.less";
#app {
  min-height: 100vh;
}
.router-fade-enter-active,
.router-fade-leave-active {
  transition: opacity 0.1s;
}
.router-fade-enter,
.router-fade-leave-active {
  opacity: 0;
}
</style>
