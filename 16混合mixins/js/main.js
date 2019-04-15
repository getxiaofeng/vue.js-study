var base={
    methods:{
        show: function(){
            this.visible=true;
        }, 
        hidden: function(){
            this.visible=false;
        },
        toggle:function(){
            this.visible=!this.visible;
        },
    },
    data:function(){
        return{
            visible:false,
        }
    }
};//将之前在不同组件中重复用到的方法数据，另外定义为一个变量，组件需要用到这些中的时，使用mixins【name】方法使用

Vue.component('tootip',{
    template:`
    <div>
    <span @mouseenter="show" @mouseleave="hidden">bai</span>
        <div v-if="visible">
            白白白白
        </div>
    </div>`,
    mixins:[base],
    data:function(){
        return{
            visible:true,    //在组件中明确指定的会覆盖mixins中的
        }
    }
    /*methods:{
        show: function(){
            this.visible=true;
        },
        hidden: function(){
            this.visible=false;
        }
    },
    data: function(){
        return{
            visible:false,
        }
    }*/
});
Vue.component('popup',{
    template:`
    <div>
    <button @click="toggle">popup</button>
    <div v-if="visible"></div>
    <span @click="hidden">close</span>    
    <h4>title</h4>
    loredmasc lam ckdkslamcxk dsaddg afgd
     dsaf dsaf fvfvbg
    </div>`,
    mixins:[base]
    /*methods:{
        toggle:function(){
            this.visible=!this.visible;
        },
        hidden:function(){
            this.visible=false;
        }
    },
    data:function(){
        return{
            visible:false,
        }
    }*/
});


new Vue({
    el:'#app',
    data:{

    }
})