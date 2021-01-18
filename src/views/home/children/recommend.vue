<template>
  <div class="recommend">
    <div v-for="(item,index) in recommendlist" :key="index" class="recommendItem">
      <img :src="item.image" alt="">
      <li>{{item.name}}</li>
    </div>
  </div>
</template>

<script>
export default {
  name: 'recommend',
  props: {
    recommendlist: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>
<style scoped>
.recommend {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  text-align: center;
  padding: 8px 2px 0;
  /* box-shadow: 0 2px 2px rgba(100, 100, 100, 0.2); */
  border-bottom: 8px solid #e4e7ed;
  background-color: #f2f6fc;
}
.recommendItem {
  width: 20%;
  height: 88px;
}
img {
  width: 88%;
  height: 70%;
  border-radius: 8px;
}
li {
  font-size: 14px;
  margin-top: 4px;
}
</style>
