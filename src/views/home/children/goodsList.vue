<template>
  <div class="goodsList">
    <goods-list-item v-for="(item,index) in goods" :key="index" :goodsItem="item" />
  </div>
</template>

<script>
import goodsListItem from './goodsListItem'
export default {
  name: 'goodsList',
  components: {
    goodsListItem
  },
  props: {
    goods: {
      type: Array,
      default () {
        return []
      }
    }
  },
  // methods: {
  //   loadMore () {
  //     //   this.$bus.$emit('imgLoad')
  //     this.$emit('refresh')
  //   }
  // }
}
</script>
<style scoped>
.goodsList {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  text-align: center;
  padding: 5px 2px;
}
</style>
