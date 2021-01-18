<template>
  <div class="total">
    <div class="left"><span :class="{active:isSelectAll}" @click="click"><i class="el-icon-check"></i></span>
    </div>
    <div class="center">总计:{{totalPrice}}元</div>
    <div class="right">去结账</div>
  </div>
</template>

<script>
export default {
  name: 'total',
  computed: {
    totalPrice () {
      return this.$store.state.cartList.filter(item => {
        return item.checked
      }).reduce((previousValue, item) => {
        return previousValue + item.price * item.count
      }, 0).toFixed(2)
    },
    isSelectAll () {
      return !(this.$store.state.cartList.find(item => {
        return !item.checked
      }))
    }
  },
  methods: {
    click () {
      if (this.isSelectAll) {
        this.$store.state.cartList.forEach(item => {
          item.checked = false
        });
      } else {
        this.$store.state.cartList.forEach(item => {
          item.checked = true
        })
      }
    }
  }
}
</script>
<style scoped>
.total {
  position: fixed;
  bottom: 49px;
  left: 0;
  right: 0;
  display: flex;
  height: 44px;
  line-height: 44px;
  text-align: center;
  background-color: #aaaccc;
}
.total > div {
  flex: 1;
}
.left {
  position: relative;
}
.left > span {
  /* background-color: red; */
  border: 1px solid #cccccc;
  border-radius: 50%;
  width: 22px;
  height: 22px;
  position: absolute;
  top: 50%;
  left: 5px;
  transform: translatey(-50%);
}
.el-icon-check {
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.active {
  background-color: hotpink;
}
</style>
