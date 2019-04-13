Vue.component('balance',{
    template:
    '<div> <show @show_balance="show_balance=true"></show>   <div v-if="show">您的余额：$998</div></div>',
    methods:{
        show_balance: function(data) {
            this.show = true;
            console.log('data:',data);
        }
    },
    data:function(){
        return{
            show: false,
        }
    }
});
Vue.component('show',{
    template:'<button @click="onclick()">显示余额</button>',
    methods:{
        onclick(){
            this.$emit('show',{a:1,b:2});
        }
    }
});


new Vue({
    el:'#app',
})