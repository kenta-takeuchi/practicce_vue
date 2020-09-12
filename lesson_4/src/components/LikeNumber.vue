<template>
    <div>
        <p>いいね({{ totalNumber / 2 }})</p>
        <button @click="increment">+1</button>
    </div>
</template>

<script>
export  default {
    props: ['totalNumber'],
    methods : {
      increment() {
          this.number += 1
      }
    }
}
</script>