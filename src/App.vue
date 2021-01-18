<template>
  <div id="app">
    <keep-alive exclude="detail">
      <router-view />
    </keep-alive>
    <app-bottom-bar />
  </div>
</template>

<script>
import appBottomBar from './components/appBottomBar'
export default {
  name: 'App',
  components: {
    appBottomBar,
  }
}
</script>

<style>
@import "./assets/base.css";
@import "./assets/normalize.css";
</style>
