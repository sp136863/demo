<template>
  <div class="detail">
    <nav-bar :centerTitle="['商品','评价','详情','推荐']" @to="toDestination" ref="navbar" />
    <scroll id="scroll" ref="scroll" :probeType="3" :pullUpLoad="true" @scroll="scroll">
      <swiper :swiperInfo="swiperInfo" />
      <describe :describe="dataInfo1" />
      <preferential :preferential="dataInfo2" />
      <evaluation :evaluation="['做工精湛','毫无异味','尺寸适宜','毫无色差']" ref="eva" />
      <div class="det" ref="det">详情</div>
      <particulars :detailsInfo="dataInfo3" @loadMore="loadMore1" />
      <div class="rec" ref="rec">推荐</div>
      <recommend :recommnedInfo="dataInfo4" @loadMore="loadMore2" />
    </scroll>
    <bottom-bar :bottomList="['收藏','加入购物车','购买']" @addClick="addClick" />
  </div>
</template>

<script>
import navBar from './children/navBar'
import swiper from './children/swiper'
import describe from './children/describe'
import preferential from './children/preferential'
import evaluation from './children/evaluation'
import particulars from './children/particulars'
import recommend from './children/recommend'
import bottomBar from './children/bottomBar'
import { detailInfo, content } from '@/axios/detail'
import scroll from '@/components/scroll'
export default {
  name: 'detail',
  components: {
    navBar,
    swiper,
    describe,
    preferential,
    evaluation,
    particulars,
    recommend,
    bottomBar,
    scroll
  },
  data () {
    return {
      id: null,
      price: null,
      swiperInfo: [],
      dataInfo1: [],
      dataInfo2: [],
      dataInfo3: [],
      dataInfo4: [],
      case0OffsetTop: 0,
      case1OffsetTop: null,
      case2OffsetTop: null,
      case3OffsetTop: null,
      saveY: null
    }
  },
  computed: {

  },
  created () {
    this.id = this.$route.params.id
    this.getDetailInfo(this.id)
  },
  mounted () {

  },
  methods: {
    getDetailInfo (id) {
      detailInfo(id).then(res => {
        // console.log(res.data.info['collect'].title);
        this.swiperInfo = res.data.info['swiper'].list
        this.price = res.data.info['price1']
        const info = new content(res.data.info['collect'].title, res.data.info['collect'].detail)
        this.dataInfo1.push(info.title, info.detail)
        // console.log(this.dataInfo1);
        this.dataInfo2 = res.data.info['price']
        this.dataInfo3 = res.data.detailsData.list
        // console.log(res.data.detailsData.list);
        this.dataInfo4 = res.data.recommended.list
      })
    },
    loadMore1 () {
      this.$refs.scroll.scroll.refresh()
      this.case1OffsetTop = this.$refs.eva.$el.offsetTop
      this.case2OffsetTop = this.$refs.det.offsetTop
    },
    loadMore2 () {
      this.$refs.scroll.scroll.refresh()
      this.case3OffsetTop = this.$refs.rec.offsetTop
    },
    toDestination (index) {
      switch (index) {
        case 0: {
          this.$refs.scroll.scroll.scrollTo(0, 0, 200)
          break
        }
        case 1: {
          this.$refs.scroll.scroll.scrollTo(0, -this.case1OffsetTop, 200)
          break
        }
        case 2: {
          // console.log(-this.case2OffsetTop);
          this.$refs.scroll.scroll.scrollTo(0, -this.case2OffsetTop, 200)
          break
        }
        case 3: {
          // console.log(-this.case3OffsetTop);
          this.$refs.scroll.scroll.scrollTo(0, -this.case3OffsetTop, 200)
          // console.log(this.$refs.navbar.currentIndex);
          break
        }
      }
    },
    scroll (position) {
      this.saveY = -position.y
      if (this.saveY < this.case1OffsetTop) {
        this.$refs.navbar.currentIndex = 0
      }
      else if (this.case1OffsetTop <= this.saveY && this.saveY < this.case2OffsetTop) {
        this.$refs.navbar.currentIndex = 1
      }
      else if (this.case2OffsetTop <= this.saveY && this.saveY < this.case3OffsetTop) {
        this.$refs.navbar.currentIndex = 2
      }
      else {
        this.$refs.navbar.currentIndex = 3
      }
    },
    addClick () {
      const obj = {}
      obj.img = this.swiperInfo[0]
      obj.price = this.price
      obj.info = this.dataInfo2[2]
      obj.id = this.id
      // console.log(obj);
      // this.$store.commit('addCart', obj)
      this.$store.dispatch('addCart', obj)
    }
  }
}

</script>
<style scoped>
.detail {
  position: relative;
  z-index: 1;
  background-color: #fff;
}
.det,
.rec {
  width: 100%;
  height: 44px;
  background-color: rgba(222, 15, 230, 0.4);
  line-height: 44px;
  text-align: center;
  font-size: 20px;
  color: #eeeeee;
}
#scroll {
  position: fixed;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
  overflow: hidden;
}
</style>
