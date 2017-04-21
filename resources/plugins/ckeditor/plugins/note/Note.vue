<template>
  <div>
    Hello {{int}}
  </div>
</template>

<script>
  export default {
    data () {
      return {
        int: 0
      }
    },
    mounted() {
      setInterval(() => {
        this.int = this.int+1
      }, 500)
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>

</style>