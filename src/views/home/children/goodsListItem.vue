<template>
  <div class="goodsListItem">
    <img :src="goodsItem.image" alt="" @load="loadMore" @click="imgClick">
    <span>{{goodsItem.name}}</span>
  </div>
</template>

<script>
export default {
  name: 'goodsListItem',
  props: {
    goodsItem: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  methods: {
    loadMore () {
      this.$bus.$emit('refresh')
    },
    imgClick () {
      this.$router.push('/detail/' + this.goodsItem.id)
    }
  }
}
</script>
<style scoped>
.goodsListItem {
  width: 48%;
  height: 258px;
}
img {
  width: 100%;
  height: 88%;
  border-radius: 10px;
}
.goodsListItem span {
  display: block;
  margin-top: 8px;
}
</style>
