<template>
  <div class="goodsListControl">
    <div v-for="(item,index) in goodsitem" :key="index" class="item" @click="click(index)">
      <span :class="{active:currentIndex===index}">{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'goodsListControl',
  props: {
    goodsitem: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      currentIndex: 0
    }
  },
  methods: {
    click (index) {
      this.currentIndex = index
      this.$emit('change', index)
    }
  }
}
</script>
<style scoped>
.goodsListControl {
  display: flex;
  text-align: center;
  height: 44px;
  line-height: 44px;
  box-shadow: 0 1px 1px rgba(100, 100, 100, 0.1);
}
.item {
  flex: 1;
}
span {
  letter-spacing: 3px;
}
.active {
  color: red;
  border-bottom: 2px solid red;
  padding-bottom: 4px;
}
</style>
