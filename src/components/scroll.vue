<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  name: 'scroll',
  props: {
    probeType: 0,
    pullUpLoad: false
  },
  data () {
    return {
      scroll: null
    }
  },
  mounted () {
    //创建实例,进行滚动
    this.scroll = new Bscroll(this.$refs.wrapper, {
      //是否开启监听滚动方式
      probeType: this.probeType,
      //是否开启上拉加载更多
      pullUpLoad: this.pullUpLoad,
      click: true,
      disableMouse: false,//启用鼠标拖动
      disableTouch: false//启用手指触摸
    })
    //实时监听滚动位置
    if (this.probeType === 2 || this.probeType === 3) {
      this.scroll.on('scroll', (position) => {
        // this.$refs.wrapper.scroll.refresh()
        this.$emit('scroll', position)
      })
    }
    //监听滚动是否到底,实行上拉加载更多
    if (this.pullUpLoad) {
      this.scroll.on('pullingUp', () => {
        this.$emit('pullingUp')
      })
    }
  }
}
</script>
<style scoped>
</style>
