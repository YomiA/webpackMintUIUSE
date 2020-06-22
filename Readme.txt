1. 对于MintUI, 之前我们是用的是全部导入，所以会使得 bundle.js 体积很大，所以我们应该最好用按需导入比较好，就是需要什么就导入什么
   用按需导入的时候，首先要先安装 babel-plugin-component 这个插件,用 cnpm 安装，用 npm 安装会出错
   用 cnpm install babel-plugin-component -D 安装这个插件，安装完成之后还要去 .babelrc 里面配置下
   就是在plugins:[]里面添加
   ["component", [
                        {
                          "libraryName": "mint-ui",
                          "style": true
                        }
                      ]]

2. 添加完成之后，如果要引入的话，那就在 main.js 界面引入所需要的组件
   比如你要按需导入 Button 和 Cell 那么就要在 main.js 中写入下面这些
   import Vue from 'vue'
   import { Button, Cell } from 'mint-ui'
   import App from './App.vue'

   Vue.component(Button.name, Button)
   Vue.component(Cell.name, Cell)
   /* 或写为
    * Vue.use(Button)
    * Vue.use(Cell)
    */

    其中 Vue.component(Button.name, Button) 相当于之前的
    var login = {
        template:'<h1>上车的人请买票，买了票的请下车</h1>'
    }
    注册组件：
    Vue.component('login_cart',login)[ login_cart 自定义组件名称]

3.这里面有几个问题要注意：()

  3-1:就是 .babelrc 这个配置文件里面的 plugins 会报错plugins[0][1] must be an object, false, or undefined
  原因就是 plugins 里面不能再使用数组作为参数,所以要把 component 后面的中括号 去掉一个。
  详情见https://blog.csdn.net/qq_38402659/article/details/100163936

  3-2:就是 babel 版本改成7.0.0以后，安装插件的时候 都要再 babel 的前面加个 @ 并且7.0版本和之前的6.0版本是不匹配的，
  所以如果是7.0和6.0版本混合一起用，运行的时候就会报错，所以要么把全部版本改成7.0以上，要么就是全部降到6.0版本，这样才会
  匹配。详情见https://blog.csdn.net/weixin_42235173/article/details/90897014