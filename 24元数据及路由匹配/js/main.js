var routes=[
    {
        path:'/',
        component:{
            template:`
            <h1>首页</h1>
            `,
        }
    },
    {
        path:'/login',
        meta:{
            login_required:true
        },

        component:{
            template:`
            <h1>登录</h1>
            `
        }
    },
    {
        path:'/post',
        component:{
            template:`
            <div>
            <h1>帖子管理</h1>
            <router-link to="rain" append>下雨天<rounter-link>
            <router-view><router-view>
            </div>`
        },
        childern:[
            {
                path:'rain',
                component:{
                   template:`<h2>下雨天</h2>`
                }
            }
        ]
    },
];


var router =new VueRouter({
    routes:routes,
});

router.beforeEach(function(to,from,next){   //可以理解为后段的中间键   在访问之间作判断
   var logged_in =true;
    
     console.log('to.matched:',to.matched);   //匹配了的路由  完全匹配
   if(!logged_in && to.matched.some(function(item){
    return   item.meta.login_required;                 ///item.path=='/post'
   }))
    next('/login');
    else
    next();
});
     //router.afterEach(function(to,from){})   访问之后的判断
new Vue({
    el:'#app',
    router:router,
});