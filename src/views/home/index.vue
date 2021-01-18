<template>
  <div class="home">
    <tab-bar @landClick="landClick" />
    <scroll @pullingUp="pullingUp" @scroll="scroll" ref="scroll" :probeType="3" :pullUpLoad="true" class="scroll">
      <swiper :swiperlist="swiperlist" />
      <recommend :recommendlist="recommendlist" />
      <special />
      <goods-list-control :goodsitem="['流行','新款','热卖']" @change="change" ref="tabControl" />
      <goods-list :goods="goods[this.currentType].list" />
    </scroll>
    <back-top v-show="isShow" @click.native="backTopClick" />
    <landing v-show="isShow2" />
  </div>
</template>

<script>
import tabBar from './children/tabBar'
import swiper from './children/swiper'
import recommend from './children/recommend'
import special from './children/special'
import goodsListControl from './children/goodsListControl'
import goodsList from './children/goodsList'
import backTop from './children/backTop'
import landing from './children/landing'

import scroll from '@/components/scroll'

import { swiperList, recommendList, goodsListInfo } from '@/axios/home'
export default {
  name: 'home',
  components: {
    tabBar,
    swiper,
    recommend,
    special,
    goodsListControl,
    goodsList,
    backTop,
    landing,
    scroll
  },
  data () {
    return {
      swiperlist: [],
      recommendlist: [],
      goods: {
        'pop': { page: 0, list: [] },
        'new': { page: 0, list: [] },
        'hot': { page: 0, list: [] }
      },
      currentType: 'pop',
      tabOffsetTop: 0,
      position: 750,
      isShow: false,
      savePosition: 0,
      isShow2: false
    }
  },
  activated () {
    this.$refs.scroll.scroll.scrollTo(0, this.savePosition, 0)
    this.$refs.scroll.scroll.refresh()
  },
  deactivated () {
    this.savePosition = this.$refs.scroll.scroll.y
    // console.log(this.savePosition);
  },
  created () {
    this.getSwiper()
    this.getRecommend()
    this.delay(0)
    this.delay(1000)
    this.delay(2000)
    // this.getGoodsList('pop')
    // this.getGoodsList('new')
    // this.getGoodsList('hot')
  },
  mounted () {
    this.$bus.$on('refresh', () => {
      // console.log(111);
      this.$refs.scroll.scroll.refresh()
      this.tabOffsetTop = this.$refs.tabControl.$el.offsetTop
    })
  },
  methods: {
    delay (timeout) {
      switch (timeout) {
        case 0: {
          setTimeout(() => {
            this.getGoodsList('pop')
          }, timeout);
          break
        }
        case 1000: {
          setTimeout(() => {
            this.getGoodsList('new')
          }, timeout);
          break
        }
        case 2000: {
          setTimeout(() => {
            this.getGoodsList('hot')
          }, timeout);
          break
        }
      }
    },
    getSwiper () {
      swiperList().then(res => {
        // console.log(res);
        this.swiperlist = res.data.list
      })
    },
    getRecommend () {
      recommendList().then(res => {
        // console.log(res.data.list);
        this.recommendlist = res.data.list
      })
    },
    getGoodsList (type) {
      const page = this.goods[type].page + 1
      if (page < 5) {
        goodsListInfo(type, page).then(res => {
          this.goods[type].list.push(...res.data.goods[type].list)
          this.goods[type].page += 1
          this.$refs.scroll.scroll.finishPullUp()
        })
      }
    },
    change (index) {
      switch (index) {
        case 0: {
          this.currentType = 'pop'
          break
        }
        case 1: {
          this.currentType = 'new'
          break
        }
        case 2: {
          this.currentType = 'hot'
          break
        }
      }
    },
    pullingUp () {
      this.getGoodsList(this.currentType)
    },
    // refresh () {
    //   // console.log(1111);
    //   this.$refs.scroll.scroll.refresh()
    //   this.tabOffsetTop = this.$refs.tabControl.$el.offsetTop
    // },
    scroll (position) {
      // console.log(position);
      this.isShow = this.position < (-position.y)
      // this.$refs.scroll.scroll.refresh()
    },
    backTopClick () {
      this.$refs.scroll.scroll.scrollTo(0, -this.tabOffsetTop, 100)
    },
    landClick () {
      this.isShow2 = true
    }
  }
}
</script>
<style scoped>
.scroll {
  position: absolute;
  top: 44px;
  left: 0;
  right: 0;
  bottom: 49px;
  overflow: hidden;
}
</style>
