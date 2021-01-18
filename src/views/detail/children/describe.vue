<template>
  <div class="describe">
    <div class="first">{{describe[0]}}</div>
    <span class="el-icon-star-off">收藏</span>
    <div class="last">{{describe[1]}}</div>
  </div>
</template>

<script>
export default {
  name: 'describe',
  props: {
    describe: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>
<style scoped>
.describe {
  position: relative;
  height: 100px;
  width: 100%;
  padding-top: 15px;
  border-radius: 0 0 15px 15px;
  background-color: #ebeef5;
}
.first {
  margin: 0 50px 0 0;
  font-size: 16px;
  font-weight: 700;
}
.el-icon-star-off {
  display: block;
  height: 75px;
  width: 48px;
  line-height: 75px;
  text-align: center;
  border-left: 2px solid #f2f6fc;
  position: absolute;
  right: 10px;
  top: 0;
}
.last {
  position: absolute;
  bottom: 5px;
  left: 8px;
  right: 8px;
  font-size: 14px;
  color: #606266;
}
</style>
