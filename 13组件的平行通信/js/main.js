var Event =new Vue();


Vue.component('huahua',{
    template:`
    <div>
    我说：<input @keyup="on_change"  v-model="said"/>
    </div>`,
    methods:{
        on_change:function(){
            Event.$emit('huahua-said-something', this.said);
         }
    },
    data:function(){
        return{
            said:'',
        }
    }
})
Vue.component('shuanshuan',{
    template:`<div>花花说:{{huahua_said}}</div>`,
    data:function(){
        return{
            huahua_said:'',
        };
    },
    mounted: function(){
        var me=this
        Event.$on('huahua-said-something',function(data){
            me.huahua_said=data;
        });
    }
})


new Vue({
    el:'#app',
})