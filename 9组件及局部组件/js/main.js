//Vue.component('alert')
var component_alert={     // 将组件封装
        template:'<button @click="onClick">弹弹弹</button>',
        methods:{
            onClick:function(){
                alert('yoo.');
            }
        } 
} 

new Vue({
    el:'#app',
    components: {
        alert:component_alert //引用组件
        /*alert:{
            template:'<button @click="onClick">弹弹弹</button>',
            methods:{
                onClick:function(){
                    alert('yoo.');
                }
            } 
        }*/
    }
})
new Vue({
    el:'#bpp',
})