<template>
  <div class="particulars">
    <div v-for="(item,index) in detailsInfo" :key="index">
      <img :src="item.image" alt="" @load="imgLoad"><span>{{item.name}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'particulars',
  props: {
    detailsInfo: {
      type: Array,
      default () {
        return []
      }
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
.particulars {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 5px 2px;
}
.particulars > div {
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
