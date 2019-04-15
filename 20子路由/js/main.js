var routes=[
    {
        path:'/',
        component:{
            template:`
            <div>
                <h1>首页</h1>
            </div>
            `,
        },
    },
    {
        path:'/about',
        component:{
            template:`
            <div>
                <h1>关于我们</h1>
            </div>
            `,
        },
    },
    {
        path:'/user/:name',   //   :name   参数
        component:{
            template:`
            <div>
                <div>我叫：{{$route.params.name}}</div>
                <router-link  to="more"  append>更多信息</router-link> 
                <router-view></router-view>
                </div>
            `,
        },  
         //  子路由引用链接方法  1 :to="'/user/'+$route.params.name.name+'more'"  2. to="more" append
         //子路由添加
        children:[
            {
                path:'more',
                component:{
                    template:`
                    <div>
                        用户{{$route.params.name}}的详细信息
                    </div>
                    `
                }
            }
        ]
    },
];
var router= new VueRouter({
    routes:routes,
});

new Vue({
    el:'#app',
    router:router,
});
