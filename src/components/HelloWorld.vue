<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <input type="button"
      value="Webからネイティブにメッセージを送信"
      v-on:click="passDataToNaitive"
      id="passDataToNaitive"
    />
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  methods: {
    passDataToNaitive: function () {
      window.webkit.messageHandlers
        .callbackHandler.postMessage('WebViewから呼び出し')
    }
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-weight: normal;
}

#passDataToNative {
  width: 200px;
  height: 100px;
  margin: 15px;
  font-size: 16px;
}
</style>
