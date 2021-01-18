<template>
  <div class="tabBarItem">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tabBarItem',
}
</script>
<style scoped>
.tabBarItem {
  display: flex;
  height: 44px;
  line-height: 44px;
  text-align: center;
  box-shadow: 0 2px 2px rgba(100, 100, 100, 0.4);
}
.left,
.right {
  width: 66px;
}
.center {
  flex: 1;
}
</style>
