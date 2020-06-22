<template>
    <div>
        <h1>这是用户名组件</h1>
        <!--        放account的子组件的容器-->
        <router-link to="/account/login">登录</router-link>
        <router-link to="/account/register">注册</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: ""
    }
</script>

<style lang="scss" scoped>
    body {

    div {
        font-style: italic;
    }

    }

</style>