<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>ネイティブへの処理</h2>
    <input type="button"
      value="メッセージを送信する"
      v-on:click="passDataToNaitive"
      class="btn"
    />
    <input type="button"
      value="カメラロールを表示する"
      v-on:click="showAlbum"
      class="btn"
    />
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  methods: {
    passDataToNaitive: function () {
      let userAgent = window.navigator.userAgent
      window.webkit.messageHandlers
        .callbackHandler.postMessage(userAgent)
    },
    showAlbum: function () {
      // postMessageの引数をなしにするとネイティブ側でshowAlbumアクションが受け取れない.
      window.webkit.messageHandlers
        .showAlbum.postMessage('hoge') 
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

.btn {
  width: 200px;
  height: 100px;
  margin: 15px;
  font-size: 16px;
}
</style>
