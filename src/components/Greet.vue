<template>
  <div class="greet">
    {{ msg }}
  </div>
</template>

<script>
export default {
  name: 'Greet',
  data () {
    return {
      msg: 'Greet Componet'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
