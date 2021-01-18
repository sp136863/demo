<template>
  <div class="backTop">
    <div class="el-icon-top"></div>
  </div>
</template>

<script>
export default {
  name: 'backTop',
}
</script>
<style scoped>
.backTop {
  position: fixed;
  bottom: 66px;
  right: 8px;
  z-index: 9;
  background-color: #909399;
  opacity: 0.8;
  border-radius: 50%;
  width: 55px;
  height: 55px;
  /* line-height: 55px;
  text-align: center; */
}
.el-icon-top {
  font-size: 50px;
  font-weight: 700;
  color: #fff;
  padding: 4px 0 0 1px;
}
</style>
