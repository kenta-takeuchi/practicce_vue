<template>
    <div>
        <h1>Home</h1>
      <button @click="toUsers">Usersにいく</button>
    </div>
</template>

<script>
    export default {
        name: "Home",
        methods: {
          toUsers() {
            this.$router.push('users')
          }
        }
    }
</script>

<style scoped>

</style>