<template>
  <div class="landing">
    <form action="" method="get" name="">
      <div><input type="text" name="users" placeholder="" ref="users"></div>
      <div><input type="password" name="psw" placeholder="" ref="psw"></div>
      <div><input type="submit" value="登陆" @click="click"></div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'landing',
  data () {
    return {
      userName: '',
      psw: ''
    }
  },
  methods: {
    click () {
      // console.log(111);
      let e = window.event
      e.preventDefault()
      let obj = {}
      this.userName = this.$refs.users.value
      this.psw = this.$refs.psw.value
      obj.userName = this.userName
      obj.psw = this.psw
      this.$store.dispatch('addUsers', obj)
      if (this.is) {
        this.$router.push('/me')
      }
    }
  },
  computed: {
    is () {
      return this.$store.state.usersList.find(item => {
        return item.userName === this.userName
      })
    }
  }
}
</script>
<style scoped>
.landing {
  height: 200px;
  width: 100%;
  position: absolute;
  z-index: 9;
  top: 44px;
  background-color: #fff;
}
form > div:nth-child(1),
form > div:nth-child(2) {
  margin-left: 50%;
  margin-top: 18px;
  transform: translatex(-50%);
  height: 38px;
  width: 66%;
}
</style>
