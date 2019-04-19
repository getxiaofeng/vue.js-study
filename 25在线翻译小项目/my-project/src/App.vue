<template>
  <div id="app">
    <h1>在线翻译</h1>
    <h5  class="text-muted" >简单 / 易用 / 便捷</h5>
    <translateFrom v-on:fromSubmit="translateText"></translateFrom>
    <translateOutput v-text="translatedText"></translateOutput>
  </div>
</template>

<script>

import TranslateFrom from './components/TranslateFrom'
import TranslateOutput from './components/TranslateOutput'
export default {
  name: 'App',
  props:["translatedText"],
  data:function(){
    return{
      transText:""
    }
  },
  components: {
    TranslateFrom,TranslateOutput
  },
  methods:{
    translateText:function(text,language){
     // alert(text);
     this.$http.get('https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20170721T082515Z.54cf3dc583f679db.f4a96182281281d8b5dfe24b4e88298e2133f219&lang='+language+'&text='+text)
      .then((response)=>{
        //console.log(response.body.text[0])
        this.translatedText=response.body.text[0];
      })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
