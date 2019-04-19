<template>
  <div   id="translateFrom">
    <center>
      <form  id="transForm"  v-on:submit="formSubmit">
        <input class="form-control" type="text" v-model="textToTranslate"  placeholder="输入需要翻译的内容">
            <select class="form-control" v-model="language">
                <option value="en">English</option>
                <option value="ru">Russian</option>
                <option value="ko">Korean</option>
                <option value="ja">Janpenese</option>
            </select>
        <input class="btn btn-primary"  type="submit" value="翻译">
      </form>
    </center>
  </div>
</template>

<script>


export default {
  name: 'translateFrom',
  data:function(){
      return{
          textToTranslate:"",
          language:""
      }
  },
  methods:{
      formSubmit:function(e){
         //alert(this.textToTranslate);
         this.$emit("fromSubmit",this.textToTranslate,this.language);
         e.preventDefault();
      }
  },
  created:function(){
      this.language="en";
  }
  
}
</script>

<style>


</style>
