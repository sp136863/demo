<template>
  <div class="cart">
    <my-product :list="product" />
    <total />
  </div>
</template>

<script>
import myProduct from './children/myProduct'
import total from './children/total'
export default {
  name: 'cart',
  components: {
    myProduct,
    total
  },
  data () {
    return {
      product: []
    }
  },
  activated () {
    this.product = this.$store.state.cartList
  }
}
</script>
<style scoped>
</style>
