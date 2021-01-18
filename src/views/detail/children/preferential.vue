<template>
  <div class="preferential">
    <span class="title">优惠</span>
    <div class="outer">
      <div v-for="(item,index) in preferential" :key="index" class="inner">
        <span class="first">{{item.title}}</span>
        <span class="last">{{item.detail}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'preferential',
  props: {
    preferential: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>
<style scoped>
.preferential {
  position: relative;
  height: 150px;
  margin-top: 10px;
  background-color: #ebeef5;
  border-radius: 15px;
}
.outer {
  position: absolute;
  top: 10px;
  left: 70px;
  right: 0;
  bottom: 0;
}
.inner {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  height: 25%;
}
.inner span {
  padding-right: 25px;
}
.title {
  position: absolute;
  top: 10px;
  left: 5px;
  font-size: 18px;
  color: #e6a23c;
}
.first {
  color: #e6a23c;
}
.first,
.last {
  font-size: 14px;
}
</style>
