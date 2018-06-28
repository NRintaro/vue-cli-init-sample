<template>
  <div class="greet">
    <h1>{{ msg }}</h1>
    <h2>ネイティブからjavascriptを実行し,<br>値を変更する</h2>
    <p>名前：<input type="text" name="name" size="40" id="name"></p>
    <p>パスワード：<input type="text" name="password" size="40" id="password"></p>
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
