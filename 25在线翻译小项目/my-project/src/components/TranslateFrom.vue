<template>
  <div  id="translateFrom">
    <div >
      <form id="transForm"  v-on:submit="formSubmit">
        <input class="form-control" type="text" v-model="textToTranslate"  placeholder="输入需要翻译的内容">
            <select class="form-control" v-model="language">
                <option value="en">English</option>
                <option value="ru">Russian</option>
                <option value="ko">Korean</option>
                <option value="ja">Janpenese</option>
            </select>
        <input  type="submit" value="翻译">
      </form>
    </div>
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
#transForm {
    border:1px solid #ccc;
    border-radius:10px;
}
<style>

</style>
