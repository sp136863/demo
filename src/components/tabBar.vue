<template>
  <div class="tabBar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'tabBar',
}
</script>
<style scoped>
.tabBar {
  display: flex;
  height: 49px;
  text-align: center;
}
</style>
