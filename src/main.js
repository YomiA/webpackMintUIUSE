import Vue from 'vue'

import VueRouter from "vue-router";

// 2. 手动安装 VueRouter
Vue.use(VueRouter);

// 导入 Bootstrap 样式
import 'bootstrap/dist/css/bootstrap.css'

// 导入css样式
import './css/app.css'

// 导入 Mint-UI 组件
// 已经是把所有的组件都导入进来了
import MintUI from 'mint-ui'

// 这里可以省略 node_modules 这一层目录
// import 'mint-ui/lib/style.css'

// 安装 Mint-UI 到 vue 中
// 把所有的组件注册为全局组件，随时可以用，哪里都可以用
// Vue.use(MintUI);

// 按需导入 Mint-UI 组件
import { Button } from 'mint-ui'

// 使用 Vue.component 注册组件，使用的时候，直接用组件名 mybtn 标签模式导入即可<mybtn>8888</mybtn>
// Vue.component('mybtn',Button);

Vue.component(Button.name,Button);


// 导入 app 组件，这里要注意路径的问题
import app from './App.vue'

// 导入自定义 路由 模块
import routerObj from './router'

var vm = new Vue({
    el:'#app',
    render:function (createElment) {
        return createElment(app)
    },
    // 4. 将路由对象 挂载 到 vm 上
    router: routerObj
})