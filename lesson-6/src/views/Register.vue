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
        name: "Login",
        data() {
            return {
                email: '',
                password: '',
            }
        },
        methods: {
            register() {

            }
        }
    }
</script>

<style scoped>

</style>