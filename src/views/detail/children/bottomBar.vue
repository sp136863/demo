<template>
  <div class="bottomBar">
    <div>{{bottomList[0]}}</div>
    <div @click="addClick">{{bottomList[1]}}</div>
    <div>{{bottomList[2]}}</div>
  </div>
</template>

<script>
export default {
  name: 'bottomBar',
  props: {
    bottomList: {
      type: Array,
      default: []
    }
  },
  methods: {
    addClick () {
      this.$emit('addClick')
    }
  }
}
</script>
<style scoped>
.bottomBar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  z-index: 9;
  background-color: #fff;
  height: 49px;
  width: 100%;
  text-align: center;
  line-height: 49px;
  box-shadow: 0 -1px 1px rgba(100, 100, 100, 0.2);
}
.bottomBar > div {
  flex: 1;
  font-size: 18px;
}
</style>
