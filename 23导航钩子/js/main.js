var routes=[
    {
        path:'/',
        component:{
            template:`
            <h1>首页</h1>
            `
        }
    },
    {
        path:'/login',
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
            <h1>帖子管理</h1>
            `
        }
    },
];


var router =new VueRouter({
    routes:routes,
});
router.beforeEach(function(to,from,next){   //可以理解为后段的中间键   在访问之间作判断
   var logged_in =false;
   if(!logged_in && to.path=='/post')
    next('/login');
    else
    next();
})
     //router.afterEach(function(to,from){})   访问之后的判断
new Vue({
    el:'#app',
    router:router,
});