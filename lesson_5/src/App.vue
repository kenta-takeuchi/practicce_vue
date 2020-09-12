<template>
    <div class="main">
        <button @click="show = !show">切替</button>
        <transition name="fade">
            <p v-if="show">hello</p>
        </transition>
    </div>
</template>


<script>
    export default {
        data() {
            return {
                show: true
            }
        }
    }
</script>

<style scoped>
    .fade-enter {
        opacity: 0;
    }

    .fade-enter-active {
        transition: opacity 5s;
    }

    .fade-enter-to {
        opacity: 1;
    }

    .fade-leave {
        opacity: 1;
    }

    .fade-leave-active {
        transition: opacity 5s;
    }

    .fade-leave-to {
        opacity: 0;
    }

    .main {
        width: 70%;
        margin: auto;
        padding-top: 5rem;
        text-align: center;
    }


</style>