<template>
  <div class="appBottomBar">
    <tab-bar>
      <tab-bar-item path="/home">
        <div slot="image" class="el-icon-s-home"></div>
        <div slot="text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category">
        <div slot="image" class="el-icon-menu"></div>
        <div slot="text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cart">
        <div slot="image" class="el-icon-shopping-cart-2"></div>
        <div slot="text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/me">
        <div slot="image" class="el-icon-s-custom"></div>
        <div slot="text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import tabBar from './tabBar'
import tabBarItem from './tabBarItem'
export default {
  name: 'appBottomBar',
  components: {
    tabBar,
    tabBarItem
  }
}
</script>
<style scoped>
.appBottomBar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #fff;
  /* box-shadow: 0 -1px 2px rgba(100, 100, 100, 0.4); */
}
.el-icon-s-home,
.el-icon-menu,
.el-icon-shopping-cart-2,
.el-icon-s-custom {
  font-size: 26px;
}
</style>
