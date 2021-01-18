<template>
  <div class="proItem">
    <div class="left"><span :class="{active:obj.checked}" @click="click"><i class="el-icon-check"></i></span></div>
    <img :src="obj.img.image" alt="">
    <div class="inner">
      <span>{{obj.info.detail}}</span>
      <span>价格:{{obj.price}}元</span>
      <span>{{obj.info.title}}</span>
      <span>x{{obj.count}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'proItem',
  props: {
    obj: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  data () {
    return {
      ischecked: true
    }
  },
  methods: {
    click () {
      this.obj.checked = !this.obj.checked
    }
  }
}
</script>
<style scoped>
.proItem {
  display: flex;
  background-color: #dddfff;
  border-bottom: 8px solid #ffffff;
}
.left {
  width: 25px;
  position: relative;
  /* background-color: #fff; */
}
.active {
  background-color: pink;
}
.left > span {
  /* background-color: red; */
  border: 1px solid #cccccc;
  border-radius: 50%;
  width: 22px;
  height: 22px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.el-icon-check {
  margin-left: 3px;
  margin-top: 2px;
}
img {
  width: 40%;
}
.inner {
  flex: 1;
  margin-left: 5px;
  position: relative;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
/* .inner > span:nth-child(1), */
.inner > span:nth-child(2),
.inner > span:nth-child(3),
.inner > span:nth-child(4) {
  position: absolute;
}
.inner > span:nth-child(2) {
  bottom: 2px;
  left: 5px;
}
.inner > span:nth-child(3) {
  bottom: 2px;
  left: 95px;
}
.inner > span:nth-child(4) {
  bottom: 2px;
  right: 8px;
}
.inner > span:nth-child(1) {
  margin-left: 5px;
  margin-top: 2px;
}
</style>
