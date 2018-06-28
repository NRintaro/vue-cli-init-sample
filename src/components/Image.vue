<template>
  <div>
    <h1>{{ msg }}</h1>
    <img id="img" src="" />
  </div>
</template>

<script>
export default {
  name: 'Image',
  data () {
    return {
      msg: 'iOSから受け取った画像を表示する'
    }
  }
}
</script>

<style scoped>
h1 {
  font-weight: normal;
}
</style>
