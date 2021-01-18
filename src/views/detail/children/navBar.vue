<template>
  <div class="navBar">
    <tab-bar-item>
      <div slot="left" class="el-icon-back" @click="backClick"></div>
      <div slot="center" class="center">
        <div v-for="(item,index) in centerTitle" :key="index" class="item" @click="click(index)">
          <span :class="{active:currentIndex===index}">{{item}}</span>
        </div>
      </div>
      <div slot="right" class="el-icon-more"></div>
    </tab-bar-item>
  </div>
</template>

<script>
import tabBarItem from '@/views/home/children/tabBarItem'
export default {
  name: 'navBar',
  components: {
    tabBarItem
  },
  props: {
    centerTitle: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      currentIndex: 0
    }
  },
  methods: {
    backClick () {
      this.$router.back()
    },
    click (index) {
      this.currentIndex = index
      this.$emit('to', index)
      // console.log(index);
    }
  }
}
</script>
<style scoped>
.navBar {
  /* position: relative; */
  /* z-index: 9; */
  /* display: flex; */
  background-color: #ffffff;
}
.center {
  /* display: inline-block; */
  display: flex;
  background-color: #fff;
}
.center > div {
  flex: 1;
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
.el-icon-back {
  font-size: 32px;
  margin-top: 7px;
  /* color: #ffffff; */
}
.el-icon-more {
  /* color: #fff; */
  font-size: 26px;
  margin-top: 9px;
}
.active {
  color: red;
}
</style>
