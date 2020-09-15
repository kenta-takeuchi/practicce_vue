<template>
  <div>
    <h2>ログイン</h2>
    <label for="email">Email: </label>
    <input id="email" type="email" v-model="email">
    <br><br>

    <label for="password">パスワード: </label>
    <input id="password" type="password" v-model="password">

    <button @click="login">送信</button>
  </div>
</template>

<script>
import axios from "../axios-auth";

export default {
  name: "Login",
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    login() {
      this.$store.dispatch('login', {
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