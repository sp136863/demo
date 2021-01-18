<template>
  <div class="tabBarItem" @click="click">
    <div :style="style">
      <slot name="image"></slot>
    </div>
    <div :style="style">
      <slot name="text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tabBarItem',
  props: {
    path: String
  },
  computed: {
    active () {
      return this.$route.path.indexOf(this.path)
    },
    style () {
      return this.active ? {} : { color: 'red' }
    }
  },
  methods: {
    click () {
      this.$router.replace(this.path)
      // console.log(this.active);
    }
  }
}
</script>
<style scoped>
.tabBarItem {
  flex: 1;
}
</style>
