<template>
  <div class="swiper">
    <el-carousel height="168px">
      <el-carousel-item v-for="(item,index) in swiperInfo" :key="index">
        <img :src="item.image" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: 'swiper',
  props: {
    swiperInfo: {
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
