<template>
  <div class="evaluation">
    <div class="title">
      <p class="p1">评价</p>
      <p class="p2">100+</p>
      <p class="p3">好评度90%</p>
    </div>
    <div class="outer">
      <div v-for="(item,index) in evaluation" :key="index" class="inner">
        <div>{{item}}()</div>
      </div>
    </div>
    <textarea name="" id="text" rows="10" placeholder="评价区..."></textarea>
    <div class="more">点击加载更多评价</div>
  </div>
</template>

<script>
export default {
  name: 'evaluation',
  props: {
    evaluation: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>
<style scoped>
.evaluation {
  margin-top: 10px;
  background-color: #ebeef5;
  border-radius: 15px 15px 0 0;
}
.title {
  position: relative;
  height: 28px;
  margin-bottom: 10px;
}
.p1,
.p2,
.p3 {
  position: absolute;
  top: 5px;
}
.p1 {
  left: 30px;
}
.p2 {
  left: 66px;
  font-size: 14px;
  line-height: 22px;
}
.p3 {
  right: 20px;
  opacity: 0.6;
}
.p3::after {
  content: ">";
  margin-left: 5px;
}
.outer {
  margin: 0 30px;
  /* display: flex;
  flex-wrap: wrap;
  justify-content: space-around; */
}
.inner {
  display: inline-block;
  margin: 5px 3% 5px 0;
  width: 30%;
  text-align: center;
  letter-spacing: 2px;
  height: 30px;
  line-height: 30px;
  background-color: rgba(214, 26, 205, 0.178);
  border-radius: 30px;
  font-size: 15px;
}
#text {
  width: 100%;
  border: none;
}
.more {
  text-align: center;
}
</style>
