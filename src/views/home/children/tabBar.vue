<template>
  <div class="tabBar">
    <tab-bar-item>
      <div slot="left" class="el-icon-more"></div>
      <div slot="center" class="center"><i class="el-icon-search"></i><input type="text" maxlength="11"
          placeholder="暂时无效,请勿输入"></div>
      <div slot="right" class="right" @click="click">登陆</div>
    </tab-bar-item>
  </div>
</template>

<script>
import tabBarItem from './tabBarItem'
export default {
  name: 'tabBar',
  components: {
    tabBarItem
  },
  methods: {
    click () {
      this.$emit('landClick')
    }
  }
}
</script>
<style scoped>
.tabBar {
  position: relative;
  z-index: 9;
  background-color: #f56c6c;
}
.center {
  position: relative;
  height: 30px;
  margin-top: 7px;
  border-radius: 15px;
  background-color: #fff;
}
.el-icon-search {
  position: absolute;
  top: 8px;
  left: 35px;
}
input {
  position: absolute;
  top: 8px;
  right: 6px;
  width: 72%;
  border: none;
  outline: none;
  font-size: 14px;
}
.el-icon-more {
  font-size: 26px;
  margin-top: 10px;
  color: #ffffff;
}
.right {
  color: #fff;
  font-size: 15px;
}
</style>
