// 导入 account 组件
import account from './main/account.vue'
// 导入 goodslist 组件
import goodsList from './main/goodslist.vue'
// 导入 account 的俩个子组件
import login from './subcom/login.vue'
import register from './subcom/register.vue'

import VueRouter from "vue-router";

// 3. 创建一个路由对象
var routerObj = new VueRouter({
    routes:[
        {
            path:'/account',
            component:account,
            children:[
                { path:'login',component:login },
                { path:'register',component:register }
            ]
        },
        { path:'/goodslist',component:goodsList}
    ]
});
// 把路由对象暴露出去
export default routerObj;