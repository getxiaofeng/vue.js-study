var app= new Vue({
    el:"#app",
    data:{

    },
    methods:{
        onClick: function(){
            console.log('clicked');
        },
        onEnter:function(){
            console.log('mouse enter');
        },
        onOut: function(){
            console.log('mouse leave');
        },
        onSubmit: function(){
            console.log('submitted');
        },
        onEnter:function(){
            console.log('entered');
        }
    }
})