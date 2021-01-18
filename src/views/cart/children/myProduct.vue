<template>
  <div class="my-product">
    <div v-for="(item,index) in list" :key="index">
      <pro-item :obj="item" />
    </div>
  </div>
</template>

<script>
import proItem from './proItem'
export default {
  name: 'myProduct',
  components: {
    proItem
  },
  props: {
    list: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>
<style scoped>
</style>
