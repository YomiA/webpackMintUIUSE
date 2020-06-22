1. Mint UI 和 Bootstrap 的区别：
Mint UI 是基于 vue.js 封装出来的组件库
Bootstrap 不是组件库，是一种类似于代码片段的东西

2. Mint UI的安装：
# Vue 1.x
npm install mint-ui@1 -S
# Vue 2.0
npm install mint-ui -S

3. 导入Mint UI组件：
   3.1 引入全部组件
   import Vue from 'vue';
   import Mint from 'mint-ui';
   Vue.use(Mint);// 将 MintUI 注册到 vue 上
   3.2 按需引入部分组件
   import { Cell, Checklist } from 'mint-ui';
   Vue.component(Cell.name, Cell);
   Vue.component(Checklist.name, Checklist);

4. 因为在 main.js 中导入了全部组件[import Vue from 'vue';], 又因为把所有组件注册为全局组件[Vue.use(Mint);]
   所以在其他组件中使用 MintUI 里面的 css component 的组件部分，可以不用导入组件，就可以直接使用了。
   因为 css component 里面的组件是直接用 标签形式显示的，如<mt-button></mt-button>
   但是，如果是要使用 MintUI 里面的 js component 的部分组件，那就要重新 按需导入自己需要的 组件了。
   这个 js component 里面的就不是用标签形式来显示的，而是一些事件或者是一些方法，所以要在当前页面重新按需导入
   比如导入Toast事件：import { Toast } from 'mint-ui';

5. 由于我安装了bootstrap，但是图标还是不显示，所以我下载了低版本的bootstrap3.3.7版本，在bootstrap里面才会
   出现fonts文件夹，图标才会出现

6. 要求：进入一个页面，这个页面正在请求后台数据，这时候在页面应该显示一个 loading 效果，正在加载中。。。
   当数据获取回来后，loading 图片消失，我们可以用 Toast 的 duration 等于 -1 来模拟情况