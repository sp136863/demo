<template>
  <div class="recommend">
    <div v-for="(item,index) in recommnedInfo" :key="index">
      <img :src="item.image" alt="" @load="imgLoad"><span>{{item.name}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'recommend',
  props: {
    recommnedInfo: {
      type: Array,
      default: []
    }
  },
  methods: {
    imgLoad () {
      this.$emit('loadMore')
    }
  }
}
</script>
<style scoped>
.recommend {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 5px 2px;
}
.recommend > div {
  width: 48%;
  height: 300px;
  position: relative;
}
span {
  display: block;
  height: 12%;
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
  line-height: 36px;
}
img {
  height: 88%;
  width: 100%;
  border-radius: 10px;
}
</style>
