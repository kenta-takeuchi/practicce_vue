<template>
  <div>
    <h2>登録</h2>
    <label for="email">Email: </label>
    <input id="email" type="email" v-model="email">
    <br><br>

    <label for="password">パスワード: </label>
    <input id="password" type="password" v-model="password">

    <button @click="register">送信</button>
  </div>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    register() {
      this.$store.dispatch('register', {
        email: this.email,
        password: this.password
      })
      this.email = ''
      this.password = ''
    }
  }
}
</script>

<style scoped>

</style>