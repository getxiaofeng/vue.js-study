/*Vue.component('alert',{
    template: '<button @click="onClick()">弹弹弹</button>',
    props: ['msg'],
    methods: {
        onClick: function(){
            alert(this.msg);
        }
    }    
})*/
Vue.component('user',{
    template: '<a :href="\'/user/\'+username">{{username}}</a>',
    props: ['username'],
    methods: {

        }
})

new Vue({
    el:'#app',
})