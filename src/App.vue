<template>
    <div>
        <h1>这是APP组件</h1>

        <mt-button type="primary" size="small" @click="show">点击我啊</mt-button>
        <br />
        <mt-button type="danger" size="normal">我比你大</mt-button>
        <br />
        <mt-button type="primary" size="large">我比上面俩个都大</mt-button>
        <br />
        <mt-button type="primary" size="normal" disabled>我是不能点击的</mt-button>
        <br />
        <mt-button type="primary" size="normal" plain>我是幽灵按钮</mt-button>
        <br />
        <mt-button type="danger" size="normal" icon="back">返回上一页</mt-button>
        <br />
        <mt-button type="danger" size="normal" icon="more">点击更多</mt-button>

<!--        <mybtn>我还是太天真了</mybtn>-->

        <router-link to="/account">Account</router-link>
        <router-link to="/goodslist">Goodslist</router-link>
        <router-view></router-view>
    </div>
</template>

<script>

    // 按需导入 Toast 组件
    import { Toast } from 'mint-ui';

    export default {
        data() {
            return{
                // 设置成全局变量，只要在这个实例里面，都可以拿到
                toastInstance:null
            };
        },

        // 组件一创建，就要调用获取列表的方法
        created(){
            this.getList()
        },

        methods:{

            getList(){ // 获取列表数据，获取成功之后，图标消失
                // 在获取数据之前，立即弹出 Toast 提示用户，正在加载数据
                this.show();
                setTimeout(() => {  // setTimeout有作用域的关系，所以不能用function，改为箭头函数
                    //假设3秒后就获取到数据，就要把 Toast 移除
                    this.toastInstance.close()
                },3000)
            },

            show(){
                // Toast("叫你点你还真点啊，你是不是傻？")
                this.toastInstance = Toast({
                    message:'叫你点你还真点啊，你是不是傻？可惜我只能嘲笑你一秒',
                    position:'bottom',
                    duration:-1,
                    iconClass:'glyphicon glyphicon-star-empty', // 导入自己的图标(去 Bootstrap 里面拿)
                    className:"mytoast" // 自定义Toast样式，需要自己提供一个类名
                })
            }
        }
    }
</script>

<style scoped>

</style>